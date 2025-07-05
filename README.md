# News Reader Mobile App

A modern, beautiful React Native news feed application similar to Google News, featuring integrated advertisements and personalized content discovery.

## 🚀 Features

### 📰 **News Feed**
- **Mixed Content Feed**: Articles and ads seamlessly integrated (like Google News)
- **Smart Ad Placement**: Ads appear after every 3 articles for optimal user experience
- **Pull-to-Refresh**: Stay updated with the latest news
- **Infinite Scroll**: Smooth browsing experience
- **Real-time Updates**: Loading states and refresh indicators

### 🎯 **Advertisement Integration**
- **Multiple Ad Types**: Card ads, banner ads, and promoted content
- **Native Design**: Ads blend naturally with the news feed
- **Clear Labeling**: All ads are clearly marked with "Ad" and "Promoted" badges
- **Click Tracking**: Ad interaction handling and analytics ready
- **Advertiser Attribution**: Clear advertiser information display

### 📱 **Core Features**
- **Category Navigation**: Browse news by Technology, Business, Science, Health, Sports, Entertainment, Environment, and Politics
- **Advanced Search**: Full-text search with recent searches and popular topics
- **Bookmarks**: Save articles for later reading with statistics
- **Article Details**: Full article view with sharing and browser opening
- **Responsive Design**: Optimized for different screen sizes

### 🎨 **User Experience**
- **Modern UI**: Clean, intuitive interface with Material Design icons
- **Category Colors**: Each news category has its distinct color scheme
- **Loading States**: Smooth loading animations and skeleton screens
- **Empty States**: Helpful empty state messages with action buttons
- **Error Handling**: Graceful error handling with retry options

## 📱 Screens

### News Feed Screen
- Mixed feed of news articles and advertisements
- Pull-to-refresh functionality
- Smart ad insertion algorithm
- Article and ad interaction handling
- Loading and empty states

### Article Detail Screen
- Full article content with mock expanded text
- Bookmark, share, and browser opening functionality
- Author and publication information
- Related articles navigation
- Responsive image display

### Categories Screen
- Grid layout of news categories
- Color-coded category cards
- Category descriptions and icons
- Direct navigation to category feeds

### Category Feed Screen
- Category-specific news articles
- Category-themed header design
- Filtering and sorting options
- Refresh functionality

### Search Screen
- Real-time search functionality
- Recent searches and popular topics
- Search results with highlighting
- No results and loading states

### Bookmarks Screen
- Saved articles management
- Bookmark statistics and insights
- Clear all functionality
- Empty state with call-to-action

## 🛠 Tech Stack

- **React Native 0.73.0** - Cross-platform mobile development
- **TypeScript** - Type-safe development
- **React Navigation 6** - Tab and stack navigation
- **React Native Vector Icons** - Material Design icons
- **React Native Linear Gradient** - Beautiful gradients
- **React Native Safe Area Context** - Safe area handling
- **React Native Reanimated** - Smooth animations
- **React Native Gesture Handler** - Touch interactions

## 📊 Ad Integration Architecture

### Ad Types Supported
```typescript
interface Ad {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  advertiser: string;
  url: string;
  type: 'banner' | 'card' | 'video';
  isPromoted?: boolean;
}
```

### Feed Algorithm
- Articles and ads are mixed in a 3:1 ratio (3 articles, then 1 ad)
- Ad types are rotated for variety
- Promoted ads get priority placement
- Native ad styling matches article cards

### Ad Tracking Ready
```typescript
const handleAdPress = (ad: Ad) => {
  // Analytics tracking can be added here
  // trackAdClick(ad.id, ad.advertiser);
  
  Alert.alert(
    'Open Advertisement',
    `Do you want to open ${ad.title}?`,
    [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Open', onPress: () => openAdUrl(ad.url) },
    ]
  );
};
```

## 🗂 Project Structure

```
src/
├── components/
│   ├── ArticleCard.tsx         # News article display component
│   └── AdCard.tsx             # Advertisement display component
├── screens/
│   ├── NewsFeedScreen.tsx     # Main mixed content feed
│   ├── ArticleDetailScreen.tsx # Full article view
│   ├── CategoriesScreen.tsx   # News categories grid
│   ├── CategoryFeedScreen.tsx # Category-specific feed
│   ├── SearchScreen.tsx       # Search functionality
│   └── BookmarksScreen.tsx    # Saved articles
├── data/
│   └── mockData.ts           # Sample news and ad data
├── types/
│   └── index.ts              # TypeScript type definitions
└── App.tsx                   # Main app with navigation
```

## 🎯 Ad Integration Like Google News

This app implements advertisement integration similar to Google News:

### ✅ **What's Implemented**
- **Native Ad Design**: Ads look and feel like regular content
- **Strategic Placement**: Ads appear naturally in the content flow
- **Clear Labeling**: All ads are properly labeled and disclosed
- **Multiple Ad Formats**: Card ads, banner ads, and promoted content
- **Advertiser Attribution**: Clear advertiser information
- **User Control**: Users can interact with ads voluntarily

### 🔄 **Feed Algorithm**
1. Load news articles from data source
2. Insert ads at strategic positions (every 3 articles)
3. Rotate different ad types for variety
4. Maintain smooth scrolling experience
5. Handle both content types uniformly

### 📈 **Ad Performance Features**
- **View Tracking Ready**: Infrastructure for impression tracking
- **Click Tracking**: Ad interaction handling
- **A/B Testing Ready**: Different ad formats can be tested
- **Analytics Integration**: Ready for ad performance analytics

## 🚀 Getting Started

### Prerequisites
- Node.js (>= 16)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation

1. **Clone and install**
   ```bash
   git clone <repository-url>
   cd news-reader-mobile-app
   npm install
   ```

2. **iOS Setup** (macOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

3. **Run the app**
   ```bash
   # Android
   npm run android
   
   # iOS
   npm run ios
   
   # Development server
   npm start
   ```

## 🎨 Customization

### Ad Integration
- Modify `src/data/mockData.ts` to connect to your ad server
- Update `createMixedFeed()` function to adjust ad frequency
- Customize ad designs in `src/components/AdCard.tsx`

### News Sources
- Replace mock data with real news API integration
- Update article structure in `src/types/index.ts`
- Implement real-time news fetching

### Styling
- Consistent color palette with category-specific themes
- Material Design principles
- Responsive design for tablets and phones
- Dark mode ready (can be easily implemented)

## 🔧 Configuration

### Ad Settings
```typescript
// Adjust ad frequency
const AD_INSERTION_INTERVAL = 3; // Show ad after every 3 articles

// Ad types configuration
const adTypes = ['card', 'banner', 'video'];

// Promoted content settings
const promotedAdChance = 0.3; // 30% chance for promoted ads
```

### Category Configuration
```typescript
// Add new categories in src/data/mockData.ts
const newCategory = {
  id: 'custom',
  name: 'Custom Category',
  icon: 'category-icon',
  color: '#custom-color',
  description: 'Custom category description',
};
```

## 📱 Platform Support

- **iOS**: Supports iPhone and iPad
- **Android**: Supports phones and tablets
- **Cross-platform**: Shared codebase for both platforms
- **Responsive**: Adapts to different screen sizes

## 🔒 Privacy & Compliance

- **Ad Disclosure**: All ads are clearly labeled
- **User Consent**: Ready for GDPR/CCPA compliance
- **Data Privacy**: No personal data collected in mock implementation
- **Transparent Advertising**: Clear advertiser attribution

## 📈 Future Enhancements

- **Push Notifications**: Breaking news alerts
- **Offline Reading**: Download articles for offline access
- **User Preferences**: Personalized content recommendations
- **Social Sharing**: Enhanced sharing capabilities
- **Comment System**: User engagement features
- **Video Ads**: Rich media advertisement support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Implement your changes
4. Test thoroughly on both platforms
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions about the news feed or ad integration, please contact the development team.

---

**Built with ❤️ using React Native - Your Daily News, Beautifully Delivered**
