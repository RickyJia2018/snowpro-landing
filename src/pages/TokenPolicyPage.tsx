import React, { useEffect, useState } from 'react';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { API_BASE_URL } from '../config/api';

export default function TokenPolicyPage() {
  const { language } = useLanguage();
  const [content, setContent] = useState('');
  const [version, setVersion] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        const params = new URLSearchParams({ policy_type: 'TOKEN_POLICY', language_code: language === 'zh' ? 'zh' : 'en' });
        const response = await fetch(`${API_BASE_URL}/policies/latest?${params}`);
        if (!response.ok) throw new Error('policy request failed');
        const policy = await response.json();
        setContent(policy.content || '');
        setVersion(policy.version || '');
      } catch (_) {
        setError(language === 'zh' ? '协议暂时无法加载，请稍后重试。' : 'The policy could not be loaded. Please try again later.');
      }
    };
    load();
  }, [language]);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-5 py-10">
      <article className="mx-auto max-w-3xl rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-10">
        <a href="/recharge" className="mb-8 inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300">
          <ArrowLeft className="h-4 w-4" />
          {language === 'zh' ? '返回充值' : 'Back to recharge'}
        </a>
        <h1 className="text-2xl font-bold">{language === 'zh' ? 'SnowCoin 代币充值与使用服务协议' : 'SnowCoin Token Purchase & Usage Policy'}</h1>
        {version && <p className="mt-2 text-sm text-slate-500">{language === 'zh' ? '版本' : 'Version'}: {version}</p>}
        {!content && !error && <Loader2 className="mt-10 h-7 w-7 animate-spin text-blue-400" />}
        {error && <p className="mt-8 text-red-300">{error}</p>}
        {content && <div className="mt-8 whitespace-pre-wrap text-sm leading-7 text-slate-300">{content}</div>}
      </article>
    </main>
  );
}
