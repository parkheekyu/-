
export interface EbookItem {
  id: string;
  title: string;
  authorName: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  pageCount: number;
  isBestseller?: boolean;
  isNew?: boolean;
}

export interface RecommendedIdea {
  title: string;
  description: string;
  price: string;
  reason: string;
}

export enum Category {
  MONEY = '재테크',
  CAREER = '커리어',
  LIFE = '자기계발',
  DESIGN = '디자인',
  PROGRAMMING = 'IT/프로그래밍',
  HOBBY = '취미/생활',
  MARKETING = '마케팅'
}
