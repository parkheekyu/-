
import React from 'react';
import { EbookItem } from '../types';

interface EbookCardProps {
  item: EbookItem;
}

const EbookCard: React.FC<EbookCardProps> = ({ item }) => {
  return (
    <div className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-50">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-200">
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="object-cover w-full h-full group-hover:scale-105 transition duration-700"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {item.isBestseller && (
            <span className="bg-red-500 text-white text-xs font-black px-3 py-1 rounded-lg shadow-lg">
              BEST
            </span>
          )}
          {item.isNew && (
            <span className="bg-blue-500 text-white text-xs font-black px-3 py-1 rounded-lg shadow-lg">
              NEW
            </span>
          )}
        </div>
        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded">
          PDF {item.pageCount}p
        </div>
      </div>
      <div className="p-5">
        <div className="text-sm font-bold text-red-500 mb-2">{item.category}</div>
        <h3 className="font-bold text-gray-900 text-lg mb-3 line-clamp-2 leading-snug min-h-[56px]">
          {item.title}
        </h3>
        <div className="text-sm text-gray-500 mb-3 flex items-center">
          <span className="font-bold text-gray-700 mr-2">{item.authorName}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full mx-1"></span>
          <span className="text-yellow-500 font-bold ml-1">★ {item.rating}</span>
          <span className="text-gray-400 ml-1">({item.reviewCount})</span>
        </div>
        <div className="flex items-center justify-between border-t border-gray-50 pt-4">
          <div className="text-xl font-black text-gray-900">
            {item.price.toLocaleString()}원
          </div>
          <button className="text-gray-300 hover:text-red-500 transition-colors">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EbookCard;
