
import React, { useState } from 'react';
import { getAIRecommendations } from '../services/geminiService';
import { RecommendedIdea } from '../types';

const AIRecommendation: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<RecommendedIdea[]>([]);

  const handleRecommend = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const ideas = await getAIRecommendations(input);
    setRecommendations(ideas);
    setLoading(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] shadow-2xl overflow-hidden my-20 px-6 md:px-12 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-block bg-red-500 text-white px-6 py-2 rounded-full text-sm font-black mb-6 tracking-widest">
          AI CONTENT ADVISOR
        </div>
        <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
          내가 가진 지식으로<br />어떤 전자책을 만들 수 있을까요?
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-10">
          관심 있는 분야나 잘하는 일을 입력하면 AI가 돈이 되는 전자책 주제를 설계해드립니다.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16 max-w-3xl mx-auto">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleRecommend()}
            placeholder="예: 카페 창업, 엑셀 자동화, 유럽 여행 꿀팁 등" 
            className="flex-1 bg-white/10 border-2 border-white/10 rounded-2xl px-8 py-5 text-xl outline-none focus:border-red-500 transition-all backdrop-blur-sm text-white placeholder:text-gray-500"
          />
          <button 
            onClick={handleRecommend}
            disabled={loading}
            className="bg-red-500 text-white px-10 py-5 rounded-2xl text-xl font-black hover:bg-red-600 disabled:bg-gray-700 transition-all flex items-center justify-center min-w-[180px] shadow-lg shadow-red-500/30"
          >
            {loading ? (
              <svg className="animate-spin h-7 w-7 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : "아이디어 받기"}
          </button>
        </div>

        {recommendations.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left animate-in fade-in slide-in-from-bottom-8 duration-700">
            {recommendations.map((idea, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all flex flex-col group">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-red-500/20">
                  {idx + 1}
                </div>
                <h4 className="text-2xl font-black mb-4 group-hover:text-red-400 transition-colors leading-tight">{idea.title}</h4>
                <p className="text-base text-gray-400 mb-8 line-clamp-4 leading-relaxed font-medium">{idea.description}</p>
                
                <div className="mt-auto space-y-6">
                  <div className="bg-black/30 p-5 rounded-2xl border border-white/5">
                    <div className="text-xs text-red-400 font-black uppercase mb-2 tracking-widest">Market Insights</div>
                    <div className="text-sm text-gray-300 leading-relaxed">{idea.reason}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500 font-bold mb-1">권장 판매가</div>
                      <div className="text-2xl font-black text-white">{idea.price}</div>
                    </div>
                    <button className="bg-red-500/10 text-red-400 border border-red-500/20 px-5 py-2 rounded-xl text-sm font-black hover:bg-red-500 hover:text-white transition-all">
                      작성 시작하기
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AIRecommendation;
