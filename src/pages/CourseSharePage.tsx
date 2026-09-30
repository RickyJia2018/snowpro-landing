import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { API_BASE_URL } from '../config/api';
import { CourseShareUnavailable, PublicCourse, courseShareStyles, fetchPublicCourse, renderCourseShare } from '../lib/courseShare';

// Vite/local navigation fallback. Public production links are server rendered.
export default function CourseSharePage() {
  const { id = '' } = useParams();
  const { language } = useLanguage();
  const [result, setResult] = useState<{ id: string; course: PublicCourse | null; unavailable: boolean } | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    setResult(null);
    void fetchPublicCourse(id, API_BASE_URL, controller.signal).then(
      course => { if (!controller.signal.aborted) setResult({ id, course, unavailable: false }); },
      error => { if (!controller.signal.aborted) setResult({ id, course: null, unavailable: error instanceof CourseShareUnavailable && error.status === 404 }); },
    );
    return () => controller.abort();
  }, [id]);
  return <>
    <style>{courseShareStyles}</style>
    {!result || result.id !== id
      ? <main className="course-share" role="status">{language === 'zh' ? '正在加载课程…' : 'Loading course…'}</main>
      : <div dangerouslySetInnerHTML={{ __html: renderCourseShare(result.course, language === 'zh', result.unavailable) }} />}
  </>;
}
