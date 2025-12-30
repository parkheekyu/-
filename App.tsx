
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EbookCard from './components/ClassCard';
import { CATEGORIES, MOCK_EBOOKS } from './constants';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredEbooks = useMemo(() => {
    if (selectedCategory === 'all') return MOCK_EBOOKS;
    const categoryName = CATEGORIES.find(c => c.id === selectedCategory)?.name;
    return MOCK_EBOOKS.filter(c => c.category === categoryName);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20 text-gray-900">
      <Header />
      
      <main>
        <Hero />

        <div className="max-w-7xl mx-auto px-4 mt-8">
          {/* Category Filter */}
          <div className="flex items-center space-x-2 md:space-x-3 overflow-x-auto pb-8 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex-shrink-0 flex items-center space-x-2 px-5 py-2.5 rounded-full transition-all border ${
                  selectedCategory === cat.id 
                    ? 'bg-brand-primary border-brand-primary text-white shadow-md' 
                    : 'bg-white border-gray-100 text-gray-500 hover:border-brand-primary hover:text-brand-primary'
                }`}
              >
                <span className="text-base">{cat.icon}</span>
                <span className="text-sm font-bold whitespace-nowrap">{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Section: Product List */}
          <section className="mt-4">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-xl md:text-2xl font-black text-brand-dark tracking-tight">
                  {selectedCategory === 'all' ? '추천 전자책' : `${CATEGORIES.find(c => c.id === selectedCategory)?.name} 인기 도서`}
                </h2>
                <p className="text-xs md:text-sm text-gray-400 font-medium mt-1">전문가들이 직접 집필한 하이클래스 지식 콘텐츠</p>
              </div>
              <button className="text-xs font-bold text-gray-400 hover:text-brand-primary transition-colors">
                전체보기 →
              </button>
            </div>

            {filteredEbooks.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-4 md:gap-x-6 gap-y-10 md:gap-y-12">
                {filteredEbooks.map((item) => (
                  <EbookCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="bg-white py-24 text-center rounded-3xl border border-gray-100 shadow-sm">
                <div className="text-4xl mb-4 opacity-20">📚</div>
                <p className="text-sm text-gray-400 font-bold">콘텐츠를 준비 중입니다.</p>
              </div>
            )}
          </section>

          {/* Author Support CTA - Simplified */}
          <section className="mt-20 mb-12">
            <div className="bg-brand-dark rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden relative shadow-xl">
              <div className="max-w-xl relative z-10 text-center md:text-left">
                <h3 className="text-2xl md:text-4xl font-black mb-4 leading-tight">
                  당신의 경험을<br />자산으로 만드세요
                </h3>
                <p className="text-sm md:text-base text-gray-400 mb-8 leading-relaxed font-medium">
                  어렵게 생각하지 마세요. 누군가에게는 당신의 평범한 일상이<br className="hidden md:block" />
                  간절히 배우고 싶은 특별한 노하우입니다. 지금 작가로 데뷔하세요.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-brand-primary text-white px-8 py-3 rounded-xl text-sm font-bold hover:scale-105 transition-transform">
                    작가 등록 시작하기
                  </button>
                  <button className="bg-white/5 border border-white/10 text-white px-8 py-3 rounded-xl text-sm font-bold hover:bg-white/10 transition-all">
                    수익 가이드 다운로드
                  </button>
                </div>
              </div>
              <div className="absolute right-[-10%] bottom-[-10%] w-1/3 opacity-20 pointer-events-none">
                <div className="w-full aspect-square bg-brand-primary blur-[100px] rounded-full"></div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="mt-20 border-t border-gray-100 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h1 className="text-xl font-black text-brand-primary mb-4 italic">DIHAKLE LOUNGE</h1>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed max-w-sm font-medium">
              디지털 노마드의 성장을 돕는 프리미엄 지식 마켓플레이스.<br />
              실전 노하우를 티켓 한 장의 가치로 공유합니다.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-brand-dark text-xs mb-4 uppercase tracking-widest">Customer</h4>
            <ul className="text-xs text-gray-400 space-y-3 font-medium">
              <li><a href="#" className="hover:text-brand-primary">자주 묻는 질문</a></li>
              <li><a href="#" className="hover:text-brand-primary">1:1 문의하기</a></li>
              <li><a href="#" className="hover:text-brand-primary">환불 규정</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-brand-dark text-xs mb-4 uppercase tracking-widest">Service</h4>
            <ul className="text-xs text-gray-400 space-y-3 font-medium">
              <li><a href="#" className="hover:text-brand-primary">이용 약관</a></li>
              <li><a href="#" className="hover:text-brand-primary">개인정보처리방침</a></li>
              <li><a href="#" className="hover:text-brand-primary">사업자 정보</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-50 text-[10px] text-gray-400 font-bold flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© 2024 DIHAKLE LOUNGE. All rights reserved.</div>
          <div className="flex space-x-4">
            <span>사업자등록번호: 000-00-00000</span>
            <span>대표: DIGITAL NOMAD</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
