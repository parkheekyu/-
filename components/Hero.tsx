
import React from 'react';

interface HeroProps {
  onStore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStore }) => {
  return (
    <div className="bg-[#F1F8FF] py-16 md:py-32 px-4 border-b border-brand-accent overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left z-10">
          <div className="inline-block bg-white text-brand-primary px-4 py-1.5 rounded-full text-xs font-bold mb-8 shadow-sm border border-brand-accent">
            Digital Nomad High-Class Lounge
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-brand-dark mb-8 leading-[1.15] tracking-tighter">
            상위 1% 노마드의<br />
            실전 <span className="text-brand-primary">비법서</span>를<br />
            만나보세요
          </h2>
          <p className="text-lg md:text-2xl text-brand-gray mb-12 leading-relaxed font-medium max-w-xl">
            평범한 일상을 특별한 수익으로 바꾸는 가장 확실한 방법.<br className="hidden md:block" />
            검증된 하이클래스 지식을 지금 바로 경험하세요.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
            <button 
              onClick={onStore}
              className="bg-brand-primary text-white px-10 py-4 rounded-2xl text-lg font-black shadow-2xl shadow-brand-primary/20 hover:bg-brand-secondary hover:-translate-y-1 transition-all"
            >
              전자책 보러가기
            </button>
            <button className="bg-white text-brand-dark border border-gray-200 px-10 py-4 rounded-2xl text-lg font-black hover:bg-gray-50 transition-all">
              작가 가이드 받기
            </button>
          </div>
        </div>
        
        <div className="hidden lg:flex justify-end relative">
          <div className="relative group">
            {/* 장식 요소들을 모두 제거하고 이미지만 강조한 초기 버전 레이아웃 */}
            <div className="bg-white p-4 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-brand-accent transform rotate-2 group-hover:rotate-0 transition-transform duration-700">
              <div className="w-[400px] h-[540px] rounded-[2.8rem] overflow-hidden shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1000" 
                  alt="Minimalist Nomad Lifestyle" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </div>
            {/* 레이어감을 위한 배경 요소 */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-brand-primary/5 rounded-[4rem] -z-10 transform -rotate-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
