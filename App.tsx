
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EbookCard from './components/ClassCard';
import Login from './components/Login';
import Signup from './components/Signup';
import ProductDetail from './components/ProductDetail';
import MyEbooks from './components/MyEbooks';
import CreatorStudio from './components/CreatorStudio';
import Checkout from './components/Checkout';
import EbookStore from './components/EbookStore';
import { CATEGORIES, MOCK_EBOOKS } from './constants';
import { EbookItem } from './types';

export type Page = 'home' | 'login' | 'signup' | 'detail' | 'my' | 'studio' | 'checkout' | 'store';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<EbookItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEbooks = useMemo(() => {
    let list = MOCK_EBOOKS;
    if (selectedCategory !== 'all') {
      const categoryName = CATEGORIES.find(c => c.id === selectedCategory)?.name;
      list = list.filter(c => c.category === categoryName);
    }
    if (searchQuery) {
      list = list.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.authorName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return list;
  }, [selectedCategory, searchQuery]);

  const navigateTo = (page: Page, product?: EbookItem) => {
    if (product) setSelectedProduct(product);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (currentPage !== 'store') {
      setCurrentPage('store');
    }
  };

  if (currentPage === 'login') return <Login onBack={() => navigateTo('home')} onGoSignup={() => navigateTo('signup')} />;
  if (currentPage === 'signup') return <Signup onBack={() => navigateTo('home')} onGoLogin={() => navigateTo('login')} />;
  if (currentPage === 'detail' && selectedProduct) 
    return <ProductDetail product={selectedProduct} onBack={() => navigateTo(currentPage === 'store' ? 'store' : 'home')} onBuy={() => navigateTo('checkout')} />;
  if (currentPage === 'my') return <MyEbooks onBack={() => navigateTo('home')} />;
  if (currentPage === 'studio') return <CreatorStudio onBack={() => navigateTo('home')} />;
  if (currentPage === 'checkout' && selectedProduct) 
    return <Checkout product={selectedProduct} onBack={() => navigateTo('detail')} onComplete={() => navigateTo('my')} />;
  if (currentPage === 'store') 
    return (
      <EbookStore 
        onBack={() => navigateTo('home')} 
        onDetail={(item) => navigateTo('detail', item)}
        initialCategory={selectedCategory}
      />
    );

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20 text-gray-900">
      <Header 
        onNavigate={navigateTo} 
        onSearch={handleSearch}
      />
      
      <main>
        <Hero onStore={() => navigateTo('store')} />
        <div className="max-w-7xl mx-auto px-4 mt-8">
          <div className="flex items-center space-x-2 md:space-x-3 overflow-x-auto pb-8 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex-shrink-0 flex items-center space-x-2 px-5 py-2.5 rounded-full transition-all border ${
                  selectedCategory === cat.id 
                    ? 'bg-brand-primary border-brand-primary text-white shadow-md shadow-brand-primary/20' 
                    : 'bg-white border-gray-100 text-gray-500 hover:border-brand-primary hover:text-brand-primary'
                }`}
              >
                <span className="text-base">{cat.icon}</span>
                <span className="text-sm font-bold whitespace-nowrap">{cat.name}</span>
              </button>
            ))}
          </div>

          <section className="mt-4">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-xl md:text-2xl font-black text-brand-dark tracking-tight">
                  {selectedCategory === 'all' ? '추천 전자책' : `${CATEGORIES.find(c => c.id === selectedCategory)?.name} 인기 도서`}
                </h2>
                <p className="text-xs md:text-sm text-gray-400 font-medium mt-1">전문가들이 직접 집필한 하이클래스 지식 콘텐츠</p>
              </div>
              <button 
                onClick={() => navigateTo('store')}
                className="text-sm font-bold text-brand-primary hover:underline underline-offset-4"
              >
                전체보기 →
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-4 md:gap-x-6 gap-y-10 md:gap-y-12">
              {filteredEbooks.slice(0, 12).map((item) => (
                <div key={item.id} onClick={() => navigateTo('detail', item)}>
                  <EbookCard item={item} />
                </div>
              ))}
            </div>
          </section>

          <section className="mt-24">
            <div className="bg-brand-dark rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden relative shadow-xl">
              <div className="max-w-xl relative z-10 text-center md:text-left">
                <h3 className="text-2xl md:text-4xl font-black mb-4 leading-tight tracking-tight">당신의 경험을<br />자산으로 만드세요</h3>
                <p className="text-sm md:text-base text-gray-400 mb-8 leading-relaxed font-medium">지금 작가로 데뷔하고 잠자는 동안에도 수익을 창출하세요.</p>
                <button onClick={() => navigateTo('studio')} className="bg-brand-primary text-white px-8 py-3.5 rounded-xl text-sm font-bold hover:scale-105 transition-transform shadow-lg shadow-brand-primary/20">작가 등록 시작하기</button>
              </div>
              <div className="absolute right-[-5%] bottom-[-5%] w-1/3 opacity-20 pointer-events-none"><div className="w-full aspect-square bg-brand-primary blur-[100px] rounded-full"></div></div>
            </div>
          </section>

          {/* Real-time Review Section */}
          <section className="mt-24 mb-12">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-xl md:text-2xl font-black text-brand-dark tracking-tight">실시간 수강평</h2>
                <p className="text-xs md:text-sm text-gray-400 font-medium mt-1">지금 이 시간에도 많은 분들이 성장을 경험하고 있습니다.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: '노마드앤드류', rating: 5, content: '막막했던 부업의 길을 열어주셨네요. 첫 달에 바로 수익이 나서 신기합니다!', product: '무자본 창업 가이드' },
                { name: '디지털워커', rating: 5, content: '이론보다 실전 위주라서 좋았습니다. 특히 자동화 로직은 소름 돋네요.', product: '주식 자동매매 프로그램' },
                { name: '성장일기', rating: 4, content: '내용이 방대해서 천천히 읽고 있는데, 하나하나 버릴 게 없어요.', product: '카피라이팅의 정석' }
              ].map((rev, i) => (
                <div key={i} className="bg-white p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center text-xs font-black text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">{rev.name[0]}</div>
                      <span className="text-sm font-black text-brand-dark">{rev.name}</span>
                    </div>
                    <div className="flex text-yellow-400 text-xs">
                      {[...Array(rev.rating)].map((_, i) => <span key={i}>★</span>)}
                    </div>
                  </div>
                  <p className="text-sm text-brand-gray font-medium leading-relaxed mb-6 italic">"{rev.content}"</p>
                  <div className="text-[11px] font-bold text-brand-primary bg-brand-accent px-3 py-1.5 rounded-xl inline-block">
                    {rev.product}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="mt-20 border-t border-gray-100 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="col-span-1 md:col-span-2">
            <h1 className="text-xl font-black text-brand-primary mb-4 italic">DIHAKLE EBOOK</h1>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed max-w-sm mx-auto md:mx-0 font-medium">디지털 노마드의 성장을 돕는 프리미엄 지식 마켓플레이스.</p>
          </div>
          <div>
            <h4 className="font-bold text-brand-dark text-xs mb-4 uppercase tracking-widest">Support</h4>
            <ul className="text-xs text-gray-400 space-y-3 font-medium">
              <li><button className="hover:text-brand-primary">FAQ</button></li>
              <li><button className="hover:text-brand-primary">Contact</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-brand-dark text-xs mb-4 uppercase tracking-widest">Legal</h4>
            <ul className="text-xs text-gray-400 space-y-3 font-medium">
              <li><button className="hover:text-brand-primary">Terms</button></li>
              <li><button className="hover:text-brand-primary">Privacy</button></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
