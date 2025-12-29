
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EbookCard from './components/ClassCard';
import AIRecommendation from './components/AIRecommendation';
import { CATEGORIES, MOCK_EBOOKS } from './constants';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredEbooks = useMemo(() => {
    if (selectedCategory === 'all') return MOCK_EBOOKS;
    const categoryName = CATEGORIES.find(c => c.id === selectedCategory)?.name;
    return MOCK_EBOOKS.filter(c => c.category === categoryName);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#fcfcfc] pb-20 text-gray-900">
      <Header />
      
      <main>
        <Hero />

        <div className="max-w-7xl mx-auto px-4 mt-12">
          {/* Category Filter */}
          <div className="flex items-center space-x-6 overflow-x-auto pb-10 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex-shrink-0 flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all border-2 ${
                  selectedCategory === cat.id 
                    ? 'bg-red-500 border-red-500 text-white shadow-xl shadow-red-500/20 scale-105' 
                    : 'bg-white border-gray-100 text-gray-600 hover:border-red-200 hover:text-red-500'
                }`}
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-base font-bold whitespace-nowrap">{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Section: Product List */}
          <section className="mt-12">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 tracking-tight">
                  {selectedCategory === 'all' ? '전체 베스트셀러' : `${CATEGORIES.find(c => c.id === selectedCategory)?.name} 추천 도서`}
                </h2>
                <p className="text-lg text-gray-500 font-medium">검증된 노하우만 모았습니다.</p>
              </div>
              <button className="text-base font-bold text-gray-400 hover:text-red-500 transition-colors flex items-center">
                전체보기 <span className="ml-2 text-xl">→</span>
              </button>
            </div>

            {filteredEbooks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
                {filteredEbooks.map((item) => (
                  <EbookCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="bg-white py-32 text-center rounded-3xl border-2 border-dashed border-gray-200">
                <div className="text-5xl mb-6 opacity-30">📚</div>
                <p className="text-xl text-gray-400 font-bold">해당 카테고리의 전자책이 준비 중입니다.</p>
              </div>
            )}
          </section>

          {/* AI Advisor Section */}
          <AIRecommendation />

          {/* New Authors Section */}
          <section className="mt-24 mb-12">
            <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-[3rem] p-10 md:p-20 text-white overflow-hidden relative shadow-2xl shadow-red-500/20">
              <div className="max-w-2xl relative z-10">
                <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                  잠자고 있는 당신의 지식을<br />현금화하세요
                </h3>
                <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed font-medium">
                  어떤 지식이라도 좋습니다. 남들보다 조금 더 잘하는 것,<br />
                  경험했던 모든 것들이 누군가에게는 절실한 노하우가 됩니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-red-500 px-10 py-5 rounded-2xl text-xl font-black shadow-xl hover:scale-105 transition-transform">
                    작가 등록 시작하기
                  </button>
                  <button className="bg-white/10 border border-white/20 text-white px-10 py-5 rounded-2xl text-xl font-black hover:bg-white/20 transition-all">
                    수익 계산기
                  </button>
                </div>
              </div>
              <div className="absolute right-[-10%] bottom-[-10%] w-2/3 opacity-20 pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#FFF" d="M47.1,-63.1C59.9,-54.2,68.4,-39.1,72.7,-23.4C77,-7.6,77,8.7,71.5,23.1C66,37.5,55,50,41.4,59.3C27.8,68.6,11.5,74.7,-4.3,80.7C-20.1,86.6,-35.5,92.4,-49,87.7C-62.5,83,-74.1,67.8,-80.4,51.3C-86.7,34.8,-87.7,17.1,-84.9,0.3C-82.1,-16.5,-75.6,-32.3,-65.8,-45.3C-56.1,-58.3,-43.2,-68.4,-29.6,-74.1C-16.1,-79.8,-1.8,-81.1,13.2,-78.1C28.2,-75.1,43.2,-67.7,47.1,-63.1Z" transform="translate(100 100)" />
                </svg>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-100 bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h1 className="text-3xl font-black text-red-500 mb-6 tracking-tighter uppercase">META CONTENTS</h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-md font-medium">
              대한민국 No.1 전자책 노하우 마켓.<br />
              우리는 모든 개인의 지식이 가치를 가질 수 있도록 돕습니다.
            </p>
          </div>
          <div>
            <h4 className="font-black text-gray-900 text-lg mb-6">고객센터</h4>
            <ul className="text-base text-gray-500 space-y-4 font-bold">
              <li><a href="#" className="hover:text-red-500 transition-colors">자주 묻는 질문</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">1:1 문의</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">환불 규정</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-gray-900 text-lg mb-6">작가 서비스</h4>
            <ul className="text-base text-gray-500 space-y-4 font-bold">
              <li><a href="#" className="hover:text-red-500 transition-colors">작가 신청하기</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">판매 관리</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">전자책 제작 템플릿</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-20 pt-10 border-t border-gray-50 text-sm text-gray-400 font-bold flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">© 2024 META CONTENTS Corp. All rights reserved.</div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-600">이용약관</a>
            <a href="#" className="hover:text-gray-600 text-gray-900">개인정보처리방침</a>
            <a href="#" className="hover:text-gray-600">사업자 정보확인</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
