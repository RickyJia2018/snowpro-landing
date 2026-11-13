import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { API_BASE_URL } from '../config/api';
import { CourseShareUnavailable } from '../lib/courseShare';
import { fetchSharedInstructor, renderInstructorShare, instructorShareStyles, SharedInstructor } from '../lib/instructorShare';

// Local/client navigation fallback. Shared production links are server rendered.
export default function InstructorSharePage() {
  const { id = '' } = useParams();
  const { language } = useLanguage();
  const [searchParams] = useSearchParams();
  const zh = searchParams.get('lang') === 'zh' || (searchParams.get('lang') !== 'en' && language === 'zh');
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
    <style>{instructorShareStyles}</style>
    {!result || result.id !== id
      ? <main className="course-share instructor-share" role="status"><header className="topbar"><a className="brand" href="/"><img className="brand-icon" src="/logo_icon.png" alt="" width="28" height="28" /><span>SnowPro</span></a></header><article><div className="content"><h1>{zh ? '正在加载教练资料…' : 'Loading your instructor…'}</h1><p className="muted">{zh ? '稍等片刻，马上就好。' : 'Getting the profile ready for you.'}</p></div></article></main>
      : <div dangerouslySetInnerHTML={{ __html: renderInstructorShare(result.instructor, zh, result.unavailable, id) }} />}
  </>;
}
