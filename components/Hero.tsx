
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-[#111] text-white py-16 md:py-28 px-4 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-500/20 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="max-w-2xl mb-12 md:mb-0 text-center md:text-left">
          <div className="inline-block border border-red-500 text-red-500 px-4 py-1 rounded-full text-sm font-bold mb-6">
            평생 소장 가능한 실전 노하우
          </div>
          <h2 className="text-4xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
            전문가의 경험을<br />
            <span className="text-red-500">전자책</span>으로<br />
            구매하세요.
          </h2>
          <p className="text-xl md:text-2xl opacity-70 mb-10 leading-relaxed font-medium">
            32,000명의 검증된 전문가들이 직접 작성한<br className="hidden md:block" />
            비법서로 당신의 인생을 퀀텀점프 하세요.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <button className="bg-red-500 text-white px-10 py-5 rounded-2xl text-xl font-black shadow-2xl hover:bg-red-600 transition-all hover:-translate-y-1">
              지금 베스트셀러 보기
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-5 rounded-2xl text-xl font-black hover:bg-white/20 transition-all">
              작가 가이드북 신청
            </button>
          </div>
        </div>
        <div className="hidden lg:block relative">
          <div className="absolute inset-0 bg-red-500 blur-[100px] opacity-20 rounded-full animate-pulse"></div>
          <img 
            src="https://picsum.photos/seed/ebook-hero/600/800" 
            alt="Ebook Hero" 
            className="rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transform -rotate-6 max-w-sm border-8 border-white/10"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
