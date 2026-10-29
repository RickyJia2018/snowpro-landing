import React, { useState } from 'react';
import { Users, Mountain, Calendar, Sparkles, Video, ArrowRight, UserPlus, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SkiBuddyDemo: React.FC = () => {
  const { t } = useLanguage();
  const [joinedPosts, setJoinedPosts] = useState<{ [key: number]: boolean }>({});

  const posts = t.skibuddy.posts;

  const handleToggleJoin = (index: number) => {
    setJoinedPosts(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const getLevelBadgeStyles = (level: string) => {
    const l = level.toLowerCase();
    if (l.includes('专家') || l.includes('expert') || l.includes('上級')) {
      return 'bg-rose-500/10 text-rose-300 border-rose-500/20';
    }
    if (l.includes('中') || l.includes('intermediate') || l.includes('intermédiaire')) {
      return 'bg-amber-500/10 text-amber-300 border-amber-500/20';
    }
    return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20';
  };

  return (
    <div className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden" id="skibuddy">
      {/* Decorative Glow Blobs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute -bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Recruitment Mock Feed */}
          <div className="order-2 lg:order-1 relative">
            <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl shadow-purple-500/5">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800/80 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse"></div>
                  <span className="text-xs font-mono font-medium text-slate-300 uppercase tracking-wider">
                    SkiBuddy Active Feed
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full">
                  <Sparkles size={12} />
                  <span>雪搭子结伴中</span>
                </div>
              </div>

              {/* Recruitment Cards */}
              <div className="space-y-4">
                {posts.map((post: any, idx: number) => {
                  const isJoined = joinedPosts[idx];
                  return (
                    <div 
                      key={idx}
                      className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800/80 hover:border-purple-500/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.12)]"
                    >
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="flex items-center gap-1 text-[11px] bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded-md font-medium">
                          <Mountain size={12} className="text-purple-400" />
                          {post.resort}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded-md font-light">
                          <Calendar size={12} className="text-slate-400" />
                          {post.date}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${getLevelBadgeStyles(post.level)}`}>
                          {post.level}
                        </span>
                        <span className="text-[10px] bg-blue-500/10 text-blue-300 border border-blue-500/20 px-2 py-0.5 rounded font-medium">
                          {post.style}
                        </span>
                      </div>

                      {/* Post Title */}
                      <h4 className="text-base font-bold text-white mb-2 leading-snug">
                        {post.title}
                      </h4>

                      {/* Goal / Target */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4 bg-slate-900/60 px-3 py-1.5 rounded-xl border border-slate-800/50">
                        <Video size={13} className="text-cyan-400 flex-shrink-0" />
                        <span>目标：{post.target}</span>
                      </div>

                      {/* Footer: Author, Member status & Action */}
                      <div className="flex items-center justify-between pt-3 border-t border-slate-800/60">
                        <div className="flex items-center gap-2 text-xs">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-white text-[11px] font-bold">
                            {post.author.charAt(0)}
                          </div>
                          <span className="text-slate-300 font-medium">{post.author}</span>
                          <span className="text-slate-500">·</span>
                          <span className="text-purple-300 font-mono text-[11px]">{post.members}</span>
                        </div>

                        <button 
                          onClick={() => handleToggleJoin(idx)}
                          className={`text-xs px-3.5 py-1.5 rounded-xl font-medium flex items-center gap-1.5 transition-all ${
                            isJoined 
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                              : 'bg-purple-600 hover:bg-purple-500 text-white shadow-sm hover:shadow-purple-500/20'
                          }`}
                        >
                          {isJoined ? (
                            <>
                              <Check size={13} />
                              <span>已申请</span>
                            </>
                          ) : (
                            <>
                              <UserPlus size={13} />
                              <span>加入队伍</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Right Column: Title & Descriptions */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-semibold text-sm mb-6">
              <Users size={16} />
              <span>{t.skibuddy.tag}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              {t.skibuddy.titlePre} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                {t.skibuddy.titleHighlight}
              </span>
            </h2>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed font-light">
              {t.skibuddy.desc}
            </p>

            <div className="space-y-6 mb-10">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <Mountain size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{t.skibuddy.feature1Title}</h3>
                  <p className="text-slate-400 font-light">{t.skibuddy.feature1Desc}</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                    <Video size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{t.skibuddy.feature2Title}</h3>
                  <p className="text-slate-400 font-light">{t.skibuddy.feature2Desc}</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => {
                const el = document.getElementById('download');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-purple-500/10 inline-flex items-center gap-2"
            >
              <span>{t.skibuddy.cta}</span>
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SkiBuddyDemo;
