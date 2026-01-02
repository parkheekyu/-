
import React, { useState } from 'react';
import { EbookItem } from '../types';

interface ProductDetailProps {
  product: EbookItem;
  onBack: () => void;
  onBuy: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onBuy }) => {
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [reviewContent, setReviewContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 가상의 리뷰 데이터
  const [reviews, setReviews] = useState([
    { id: 1, user: '노마드킴', rating: 5, date: '2024.03.15', content: '진짜 실전에서 바로 쓸 수 있는 꿀팁들만 모아놨네요. 돈이 전혀 아깝지 않습니다!' },
    { id: 2, user: '디지털러버', rating: 4, date: '2024.03.10', content: '내용이 아주 알찹니다. 특히 자동화 시스템 구축 부분이 인상 깊었어요.' },
    { id: 3, user: '성장하는개발자', rating: 5, date: '2024.03.02', content: '비전공자인데도 이해하기 쉽게 설명되어 있어서 좋았습니다. 강추합니다.' },
  ]);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewContent.trim()) return;

    setIsSubmitting(true);
    
    // 실제 API 호출 대신 지연 시간을 두어 제출 효과 연출
    setTimeout(() => {
      const newReview = {
        id: Date.now(),
        user: '방문자',
        rating: rating,
        date: new Date().toLocaleDateString().replace(/\. /g, '.').replace(/\.$/, ''),
        content: reviewContent,
      };
      setReviews([newReview, ...reviews]);
      setReviewContent('');
      setRating(5);
      setIsReviewFormOpen(false);
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 h-16 flex items-center px-4">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <button onClick={onBack} className="flex items-center text-sm font-bold text-gray-500 hover:text-brand-primary transition-colors">
            <span className="mr-2">←</span> 스토어로 돌아가기
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white font-black italic text-xs shadow-sm shadow-brand-primary/20">D</div>
            <span className="text-sm font-black tracking-tighter text-brand-dark">디하클<span className="text-brand-primary">전자책</span></span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-12">
        {/* Left: Content Area */}
        <div className="flex-1">
          <div className="mb-10">
            <div className="text-brand-primary font-black text-xs uppercase tracking-widest mb-3">{product.category}</div>
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 leading-tight tracking-tight">
              {product.title}
            </h2>
            <div className="flex items-center space-x-4 text-sm font-bold text-gray-400">
              <div className="flex items-center">
                <span className="text-yellow-400 mr-1 text-base">★</span>
                <span className="text-brand-dark">{product.rating}</span>
                <span className="ml-1 opacity-60">({product.reviewCount}개의 후기)</span>
              </div>
              <div className="w-px h-3 bg-gray-200"></div>
              <div>작가: <span className="text-brand-dark underline decoration-brand-primary/30 underline-offset-4">{product.authorName}</span></div>
            </div>
          </div>

          <div className="space-y-16">
            {/* Book Introduction */}
            <section>
              <h3 className="text-xl font-black text-brand-dark mb-8 flex items-center">
                <span className="w-1.5 h-6 bg-brand-primary rounded-full mr-3"></span>
                책 소개
              </h3>
              <div className="prose prose-slate max-w-none">
                <p className="text-brand-gray leading-loose font-medium text-base md:text-lg">
                  이 책은 단순히 이론을 나열하는 것이 아니라, {product.authorName} 작가가 실제 현장에서 수백 번의 시행착오 끝에 얻은 '진짜 기술'을 담았습니다. 
                  {product.pageCount}페이지의 방대한 분량에는 누구나 따라 할 수 있는 단계별 프로세스가 포함되어 있습니다.
                  <br /><br />
                  이미 수많은 수강생들이 이 방법론을 통해 자신만의 수익 모델을 구축했으며, 당신도 이 로드맵을 따라간다면 디지털 노마드로의 비상을 성공적으로 시작할 수 있습니다.
                </p>
              </div>
            </section>

            {/* Curriculum */}
            <section>
              <h3 className="text-xl font-black text-brand-dark mb-8 flex items-center">
                <span className="w-1.5 h-6 bg-brand-primary rounded-full mr-3"></span>
                커리큘럼
              </h3>
              <div className="grid gap-3">
                {['프롤로그: 왜 지금 이 기술이 필요한가', '제1장: 마인드셋과 도구 준비하기', '제2장: 0원에서 100만원을 만드는 핵심 알고리즘', '제3장: 지속 가능한 수익을 위한 자동화 시스템', '에필로그: 당신의 항해를 응원하며'].map((chapter, i) => (
                  <div key={i} className="flex items-center p-5 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-brand-primary/30 hover:bg-white hover:shadow-md transition-all">
                    <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-white border border-gray-200 rounded-lg text-xs font-black text-brand-primary mr-4 shadow-sm group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all">{i + 1}</span>
                    <span className="text-sm md:text-base font-bold text-brand-dark">{chapter}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews Section */}
            <section className="pt-8 border-t border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-black text-brand-dark flex items-center">
                  <span className="w-1.5 h-6 bg-brand-primary rounded-full mr-3"></span>
                  수강생 리뷰
                </h3>
                <button 
                  onClick={() => setIsReviewFormOpen(!isReviewFormOpen)}
                  className="text-sm font-bold text-brand-primary cursor-pointer hover:underline underline-offset-4"
                >
                  {isReviewFormOpen ? '작성 취소' : '리뷰 작성하기'}
                </button>
              </div>

              {/* Review Submission Form */}
              {isReviewFormOpen && (
                <div className="mb-10 p-8 bg-gray-50 rounded-[2rem] border border-brand-primary/20 shadow-sm animate-in fade-in slide-in-from-top-4 duration-300">
                  <form onSubmit={handleSubmitReview}>
                    <div className="mb-6">
                      <label className="block text-xs font-black text-brand-dark uppercase tracking-widest mb-3">별점 선택</label>
                      <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            className="text-2xl transition-transform hover:scale-125 focus:outline-none"
                          >
                            <span className={star <= rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="mb-6">
                      <label className="block text-xs font-black text-brand-dark uppercase tracking-widest mb-3">상세 리뷰</label>
                      <textarea
                        value={reviewContent}
                        onChange={(e) => setReviewContent(e.target.value)}
                        placeholder="이 전자책이 당신의 성장에 어떻게 도움이 되었나요? 솔직한 후기를 남겨주세요."
                        className="w-full bg-white border-2 border-transparent focus:border-brand-primary/20 rounded-2xl px-6 py-4 min-h-[120px] outline-none transition-all font-medium text-brand-dark text-sm"
                        required
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`bg-brand-primary text-white px-10 py-3.5 rounded-xl font-black text-sm shadow-lg shadow-brand-primary/20 hover:bg-brand-secondary transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? '제출 중...' : '리뷰 등록하기'}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Summary Rating */}
              <div className="bg-brand-accent/30 rounded-3xl p-8 mb-10 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12">
                <div className="text-center">
                  <div className="text-4xl font-black text-brand-dark mb-1">{product.rating}</div>
                  <div className="flex text-yellow-400 text-lg mb-1 justify-center">
                    {'★★★★★'.split('').map((s, i) => (
                      <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-200'}>{s}</span>
                    ))}
                  </div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Average Rating</div>
                </div>
                <div className="h-px w-20 md:h-12 md:w-px bg-brand-primary/10"></div>
                <div className="flex-1 max-w-xs w-full space-y-2">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <div key={star} className="flex items-center space-x-3">
                      <span className="text-[10px] font-black text-gray-400 w-4">{star}점</span>
                      <div className="flex-1 h-1.5 bg-white rounded-full overflow-hidden">
                        <div className="h-full bg-brand-primary rounded-full" style={{ width: star === 5 ? '85%' : star === 4 ? '10%' : '2%' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Review List */}
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="p-6 rounded-3xl border border-gray-100 hover:border-brand-primary/20 hover:shadow-sm transition-all bg-white">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-400">
                          {review.user[0]}
                        </div>
                        <div>
                          <div className="text-sm font-black text-brand-dark">{review.user}</div>
                          <div className="flex text-yellow-400 text-[10px]">
                            {'★★★★★'.split('').map((s, i) => (
                              <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-200'}>{s}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-gray-300">{review.date}</span>
                    </div>
                    <p className="text-sm text-brand-gray font-medium leading-relaxed pl-1">
                      {review.content}
                    </p>
                  </div>
                ))}
                
                <button className="w-full py-4 rounded-2xl border border-gray-100 text-xs font-bold text-gray-400 hover:bg-gray-50 transition-all">
                  리뷰 더보기
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* Right: Floating Buy Box */}
        <div className="lg:w-96">
          <div className="sticky top-24 border border-gray-100 rounded-[2.5rem] p-8 bg-white shadow-2xl shadow-brand-primary/10 border-t-4 border-t-brand-primary">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-lg shadow-black/5 ring-1 ring-black/5">
              <img src={product.imageUrl} className="w-full h-full object-cover" alt={product.title} />
            </div>
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-1">
                <span className="bg-brand-primary/10 text-brand-primary text-[10px] font-black px-1.5 py-0.5 rounded">EARLY BIRD</span>
                <div className="text-xs font-bold text-gray-400">정상가 대비 20% 할인</div>
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-black text-brand-dark tracking-tighter">{product.price.toLocaleString()}원</span>
                <span className="text-sm text-gray-300 line-through font-bold decoration-2">{(product.price * 1.2).toLocaleString()}원</span>
              </div>
            </div>
            
            <div className="space-y-4 mb-8 bg-gray-50 rounded-2xl p-5">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-gray-400">총 분량</span>
                <span className="text-brand-dark">{product.pageCount} 페이지</span>
              </div>
              <div className="flex justify-between text-xs font-bold">
                <span className="text-gray-400">콘텐츠 포맷</span>
                <span className="text-brand-dark">PDF 전자책</span>
              </div>
              <div className="flex justify-between text-xs font-bold">
                <span className="text-gray-400">구매 혜택</span>
                <span className="text-brand-primary">평생 소장 & 업데이트</span>
              </div>
            </div>

            <button 
              onClick={onBuy}
              className="w-full bg-brand-primary text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-brand-primary/30 hover:bg-brand-secondary hover:-translate-y-1 transition-all"
            >
              지금 바로 구매하기
            </button>
            
            <div className="mt-6 flex items-center justify-center space-x-4 opacity-40">
              <div className="flex items-center space-x-1 grayscale">
                <span className="text-[10px] font-black text-brand-dark">NAVER PAY</span>
              </div>
              <div className="w-px h-2 bg-gray-300"></div>
              <div className="flex items-center space-x-1 grayscale">
                <span className="text-[10px] font-black text-brand-dark">KAKAO PAY</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
