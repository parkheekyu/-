
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-[#F1F8FF] py-12 md:py-16 px-4 border-b border-brand-accent">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-block bg-white text-brand-primary px-4 py-1.5 rounded-full text-xs font-bold mb-6 shadow-sm border border-brand-accent">
            Digital Nomad High-Class Lounge
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-6 leading-tight tracking-tighter">
            상위 1% 노마드의<br />
            실전 <span className="text-brand-primary">비법서</span>를 만나보세요
          </h2>
          <p className="text-base md:text-lg text-brand-gray mb-10 leading-relaxed font-medium">
            페이스북, 인스타그램, 유튜브 수익화 전략부터 제휴마케팅까지<br className="hidden md:block" />
            이미 검증된 하이클래스 전문가들의 지식 콘텐츠를 판매합니다.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 justify-center lg:justify-start">
            <button className="bg-brand-primary text-white px-8 py-3.5 rounded-xl text-base font-bold shadow-lg shadow-brand-primary/20 hover:bg-brand-secondary transition-all">
              지금 베스트셀러 보기
            </button>
            <button className="bg-white text-brand-dark border border-gray-200 px-8 py-3.5 rounded-xl text-base font-bold hover:bg-gray-50 transition-all">
              작가 가이드북 받기
            </button>
          </div>
        </div>
        <div className="hidden lg:flex justify-end">
          <div className="relative">
            {/* Abstract clean design element inspired by the ticket image */}
            <div className="bg-white p-6 rounded-[2.5rem] shadow-2xl border border-brand-accent relative z-10 transform rotate-2">
              <div className="w-64 h-80 bg-brand-primary/5 rounded-2xl overflow-hidden mb-4 border border-brand-accent/30">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400&h=540" 
                  alt="Nomad Life" 
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-brand-primary/20 rounded-full w-3/4"></div>
                <div className="h-2 bg-gray-100 rounded-full w-1/2"></div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest">High Class</span>
                  <span className="text-xs font-bold text-gray-400">Verified Knowledge</span>
                </div>
              </div>
            </div>
            {/* Background floating card effect */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-brand-primary/10 rounded-[2.5rem] border border-brand-primary/20 -z-10 transform -rotate-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
