
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-16 md:h-18 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white font-black italic">D</div>
            <h1 className="text-lg md:text-xl font-black text-brand-dark tracking-tighter">
              디하클 <span className="text-brand-primary">라운지</span>
            </h1>
          </div>
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-bold text-gray-600">
            <a href="#" className="hover:text-brand-primary transition-colors">전자책 스토어</a>
            <a href="#" className="hover:text-brand-primary transition-colors">베스트셀러</a>
            <a href="#" className="hover:text-brand-primary transition-colors">작가 커뮤니티</a>
          </nav>
        </div>
        
        <div className="flex-1 max-w-sm mx-8 hidden sm:block">
          <div className="relative">
            <input 
              type="text" 
              placeholder="무엇을 배우고 싶으신가요?" 
              className="w-full bg-gray-100 border-none rounded-full py-2 px-10 focus:ring-2 focus:ring-brand-primary/20 text-sm font-medium"
            />
            <svg className="w-4 h-4 absolute left-4 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-sm font-bold">
          <button className="text-gray-500 hover:text-brand-dark">로그인</button>
          <button className="bg-brand-primary text-white px-5 py-2 rounded-full hover:bg-brand-secondary transition shadow-sm">작가 신청</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
