import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { API_BASE_URL } from '../config/api';
import { CourseShareUnavailable, courseShareStyles } from '../lib/courseShare';
import { fetchSharedInstructor, renderInstructorShare, SharedInstructor } from '../lib/instructorShare';

// Local/client navigation fallback. Shared production links are server rendered.
export default function InstructorSharePage() {
  const { id = '' } = useParams();
  const { language } = useLanguage();
  const [result, setResult] = useState<{ id: string; instructor: SharedInstructor | null; unavailable: boolean } | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    let current = true;
    const timeout = setTimeout(() => controller.abort(), 10000);
    setResult(null);
    void fetchSharedInstructor(id, API_BASE_URL, controller.signal).then(
      instructor => { if (current) setResult({ id, instructor, unavailable: false }); },
      error => { if (current) setResult({ id, instructor: null, unavailable: error instanceof CourseShareUnavailable && error.status === 404 }); },
    ).finally(() => clearTimeout(timeout));
    return () => { current = false; clearTimeout(timeout); controller.abort(); };
  }, [id]);
  return <>
    <style>{courseShareStyles}</style>
    {!result || result.id !== id
      ? <main className="course-share" role="status">{language === 'zh' ? '正在加载教练…' : 'Loading instructor…'}</main>
      : <div dangerouslySetInnerHTML={{ __html: renderInstructorShare(result.instructor, language === 'zh', result.unavailable) }} />}
  </>;
}
