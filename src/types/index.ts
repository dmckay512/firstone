// News Article types
export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  source: string;
  publishedAt: string;
  category: string;
  url: string;
  author?: string;
  readTime?: number;
  isBookmarked?: boolean;
}

// Ad types
export interface Ad {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  advertiser: string;
  url: string;
  type: 'banner' | 'card' | 'video';
  isPromoted?: boolean;
}

// Feed Item types (can be article or ad)
export interface FeedItem {
  id: string;
  type: 'article' | 'ad';
  data: NewsArticle | Ad;
  position: number;
}

// Category types
export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

// Search result types
export interface SearchResult {
  query: string;
  articles: NewsArticle[];
  totalResults: number;
  page: number;
}

// Navigation types
export type RootStackParamList = {
  NewsFeedMain: undefined;
  ArticleDetail: { article: NewsArticle };
  CategoryFeed: { category: string; categoryId: string };
  SearchMain: undefined;
  BookmarksMain: undefined;
  CategoriesMain: undefined;
};