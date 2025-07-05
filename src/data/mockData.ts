import { NewsArticle, Ad, Category, FeedItem } from '../types';

// Sample news articles
export const mockArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Breaking: Major Tech Company Announces Revolutionary AI Breakthrough',
    summary: 'Scientists develop new AI model that can predict weather patterns with 95% accuracy, potentially revolutionizing climate science and disaster preparedness.',
    imageUrl: 'https://picsum.photos/400/240?random=1',
    source: 'Tech News Daily',
    publishedAt: '2024-01-15T10:30:00Z',
    category: 'Technology',
    url: 'https://example.com/tech-ai-breakthrough',
    author: 'Sarah Johnson',
    readTime: 5,
    isBookmarked: false,
  },
  {
    id: '2',
    title: 'Global Climate Summit Reaches Historic Agreement',
    summary: 'World leaders unite on comprehensive climate action plan, setting ambitious targets for carbon reduction and renewable energy adoption.',
    imageUrl: 'https://picsum.photos/400/240?random=2',
    source: 'World News Network',
    publishedAt: '2024-01-15T08:15:00Z',
    category: 'Environment',
    url: 'https://example.com/climate-summit',
    author: 'Michael Chen',
    readTime: 7,
    isBookmarked: true,
  },
  {
    id: '3',
    title: 'Stock Market Hits New Record High Amid Economic Optimism',
    summary: 'Major indices surge as investors show confidence in economic recovery, with tech stocks leading the rally.',
    imageUrl: 'https://picsum.photos/400/240?random=3',
    source: 'Financial Times',
    publishedAt: '2024-01-15T07:45:00Z',
    category: 'Business',
    url: 'https://example.com/stock-market-record',
    author: 'Jennifer Davis',
    readTime: 4,
    isBookmarked: false,
  },
  {
    id: '4',
    title: 'New Archaeological Discovery Rewrites Ancient History',
    summary: 'Archaeologists uncover 5,000-year-old artifacts that challenge our understanding of early civilization development.',
    imageUrl: 'https://picsum.photos/400/240?random=4',
    source: 'Science Today',
    publishedAt: '2024-01-15T06:20:00Z',
    category: 'Science',
    url: 'https://example.com/archaeology-discovery',
    author: 'Dr. Robert Wilson',
    readTime: 6,
    isBookmarked: false,
  },
  {
    id: '5',
    title: 'Championship Game Ends in Thrilling Overtime Victory',
    summary: 'Local team secures victory in nail-biting finish, marking their first championship in over a decade.',
    imageUrl: 'https://picsum.photos/400/240?random=5',
    source: 'Sports Central',
    publishedAt: '2024-01-14T22:30:00Z',
    category: 'Sports',
    url: 'https://example.com/championship-game',
    author: 'Mike Rodriguez',
    readTime: 3,
    isBookmarked: true,
  },
  {
    id: '6',
    title: 'Revolutionary Medical Treatment Shows Promise in Clinical Trials',
    summary: 'New gene therapy approach demonstrates remarkable success rates in treating rare genetic disorders.',
    imageUrl: 'https://picsum.photos/400/240?random=6',
    source: 'Medical Journal',
    publishedAt: '2024-01-14T16:45:00Z',
    category: 'Health',
    url: 'https://example.com/gene-therapy',
    author: 'Dr. Lisa Anderson',
    readTime: 8,
    isBookmarked: false,
  },
  {
    id: '7',
    title: 'Space Mission Successfully Launches to Mars',
    summary: 'International space agency announces successful launch of ambitious Mars exploration mission with cutting-edge technology.',
    imageUrl: 'https://picsum.photos/400/240?random=7',
    source: 'Space News',
    publishedAt: '2024-01-14T14:20:00Z',
    category: 'Science',
    url: 'https://example.com/mars-mission',
    author: 'James Parker',
    readTime: 5,
    isBookmarked: false,
  },
  {
    id: '8',
    title: 'Celebrity Chef Opens New Restaurant Chain',
    summary: 'Famous chef expands culinary empire with innovative farm-to-table concept restaurants across major cities.',
    imageUrl: 'https://picsum.photos/400/240?random=8',
    source: 'Food & Style',
    publishedAt: '2024-01-14T12:10:00Z',
    category: 'Entertainment',
    url: 'https://example.com/chef-restaurant',
    author: 'Emily Thompson',
    readTime: 4,
    isBookmarked: false,
  },
];

// Sample ads
export const mockAds: Ad[] = [
  {
    id: 'ad1',
    title: 'Premium Smartphone - Now 30% Off',
    description: 'Get the latest smartphone with advanced camera technology and all-day battery life.',
    imageUrl: 'https://picsum.photos/400/240?random=101',
    advertiser: 'TechCorp',
    url: 'https://example.com/smartphone-deal',
    type: 'card',
    isPromoted: true,
  },
  {
    id: 'ad2',
    title: 'Travel Insurance - Protect Your Journey',
    description: 'Comprehensive travel insurance coverage for your next adventure. Get a quote in minutes.',
    imageUrl: 'https://picsum.photos/400/240?random=102',
    advertiser: 'SafeTravel Insurance',
    url: 'https://example.com/travel-insurance',
    type: 'banner',
    isPromoted: false,
  },
  {
    id: 'ad3',
    title: 'Online Learning Platform - Free Trial',
    description: 'Master new skills with our expert-led courses. Start your free trial today.',
    imageUrl: 'https://picsum.photos/400/240?random=103',
    advertiser: 'LearnHub',
    url: 'https://example.com/online-courses',
    type: 'card',
    isPromoted: true,
  },
  {
    id: 'ad4',
    title: 'Sustainable Fashion Brand',
    description: 'Discover eco-friendly clothing made from recycled materials. Shop the collection now.',
    imageUrl: 'https://picsum.photos/400/240?random=104',
    advertiser: 'GreenStyle',
    url: 'https://example.com/sustainable-fashion',
    type: 'card',
    isPromoted: false,
  },
];

// Categories
export const mockCategories: Category[] = [
  {
    id: 'tech',
    name: 'Technology',
    icon: 'computer',
    color: '#3b82f6',
    description: 'Latest tech news and innovations',
  },
  {
    id: 'business',
    name: 'Business',
    icon: 'business',
    color: '#10b981',
    description: 'Business and financial news',
  },
  {
    id: 'science',
    name: 'Science',
    icon: 'science',
    color: '#8b5cf6',
    description: 'Scientific discoveries and research',
  },
  {
    id: 'health',
    name: 'Health',
    icon: 'local-hospital',
    color: '#ef4444',
    description: 'Health and medical news',
  },
  {
    id: 'sports',
    name: 'Sports',
    icon: 'sports',
    color: '#f59e0b',
    description: 'Sports news and updates',
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    icon: 'movie',
    color: '#ec4899',
    description: 'Entertainment and celebrity news',
  },
  {
    id: 'environment',
    name: 'Environment',
    icon: 'eco',
    color: '#06b6d4',
    description: 'Environmental and climate news',
  },
  {
    id: 'politics',
    name: 'Politics',
    icon: 'how-to-vote',
    color: '#6366f1',
    description: 'Political news and analysis',
  },
];

// Function to create a mixed feed with articles and ads
export const createMixedFeed = (articles: NewsArticle[], ads: Ad[]): FeedItem[] => {
  const feed: FeedItem[] = [];
  let position = 0;

  articles.forEach((article, index) => {
    // Add article
    feed.push({
      id: `item-${position}`,
      type: 'article',
      data: article,
      position: position++,
    });

    // Add ad after every 3 articles
    if ((index + 1) % 3 === 0 && ads.length > 0) {
      const adIndex = Math.floor(index / 3) % ads.length;
      feed.push({
        id: `item-${position}`,
        type: 'ad',
        data: ads[adIndex],
        position: position++,
      });
    }
  });

  return feed;
};

// Generate mixed feed
export const mockFeed = createMixedFeed(mockArticles, mockAds);

// Helper functions
export const getArticlesByCategory = (category: string): NewsArticle[] => {
  return mockArticles.filter(article => 
    article.category.toLowerCase() === category.toLowerCase()
  );
};

export const getBookmarkedArticles = (): NewsArticle[] => {
  return mockArticles.filter(article => article.isBookmarked);
};

export const searchArticles = (query: string): NewsArticle[] => {
  const lowercaseQuery = query.toLowerCase();
  return mockArticles.filter(article =>
    article.title.toLowerCase().includes(lowercaseQuery) ||
    article.summary.toLowerCase().includes(lowercaseQuery) ||
    article.source.toLowerCase().includes(lowercaseQuery) ||
    article.category.toLowerCase().includes(lowercaseQuery)
  );
};