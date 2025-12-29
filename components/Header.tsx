
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-10">
          <h1 className="text-3xl font-black text-red-500 cursor-pointer tracking-tighter uppercase">META CONTENTS</h1>
          <div className="hidden lg:flex items-center space-x-8 text-base font-bold text-gray-700">
            <a href="#" className="hover:text-red-500 transition-colors">전자책 스토어</a>
            <a href="#" className="hover:text-red-500 transition-colors">베스트셀러</a>
            <a href="#" className="hover:text-red-500 transition-colors">작가 신청</a>
          </div>
        </div>
        
        <div className="flex-1 max-w-lg mx-8 hidden sm:block">
          <div className="relative">
            <input 
              type="text" 
              placeholder="배우고 싶은 노하우를 검색하세요" 
              className="w-full bg-gray-100 rounded-2xl py-3 px-6 pl-12 focus:outline-none focus:ring-2 focus:ring-red-500/20 text-base font-medium"
            />
            <svg className="w-6 h-6 absolute left-4 top-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-base font-bold">
          <button className="text-gray-700 hover:text-red-500">로그인</button>
          <button className="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition shadow-md">무료 시작</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
