import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NewsArticle } from '../types';
import { getBookmarkedArticles } from '../data/mockData';
import ArticleCard from '../components/ArticleCard';

interface BookmarksScreenProps {
  navigation: any;
}

const BookmarksScreen: React.FC<BookmarksScreenProps> = ({ navigation }) => {
  const [bookmarkedArticles, setBookmarkedArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBookmarks();
  }, []);

  const loadBookmarks = () => {
    // Simulate loading
    setTimeout(() => {
      const bookmarks = getBookmarkedArticles();
      setBookmarkedArticles(bookmarks);
      setLoading(false);
    }, 500);
  };

  const handleArticlePress = (article: NewsArticle) => {
    navigation.navigate('ArticleDetail', { article });
  };

  const handleBookmark = (article: NewsArticle) => {
    // Remove from bookmarks
    const updatedBookmarks = bookmarkedArticles.filter(item => item.id !== article.id);
    setBookmarkedArticles(updatedBookmarks);
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Bookmarks</Text>
      <Text style={styles.headerSubtitle}>
        {bookmarkedArticles.length > 0 
          ? `${bookmarkedArticles.length} saved article${bookmarkedArticles.length !== 1 ? 's' : ''}`
          : 'No saved articles yet'
        }
      </Text>
    </View>
  );

  const renderEmpty = () => (
    <View style={styles.emptyState}>
      <Icon name="bookmark-border" size={64} color="#9ca3af" />
      <Text style={styles.emptyTitle}>No bookmarks yet</Text>
      <Text style={styles.emptySubtitle}>
        Save articles by tapping the bookmark icon to read them later
      </Text>
      <TouchableOpacity 
        style={styles.browseButton}
        onPress={() => navigation.navigate('News')}
      >
        <Text style={styles.browseButtonText}>Browse News</Text>
        <Icon name="arrow-forward" size={16} color="#ef4444" />
      </TouchableOpacity>
    </View>
  );

  const renderBookmarkStats = () => {
    if (bookmarkedArticles.length === 0) return null;

    const categories = bookmarkedArticles.reduce((acc, article) => {
      acc[article.category] = (acc[article.category] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });

    const topCategory = Object.entries(categories)
      .sort(([,a], [,b]) => b - a)[0];

    return (
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Icon name="bookmark" size={24} color="#ef4444" />
          <Text style={styles.statNumber}>{bookmarkedArticles.length}</Text>
          <Text style={styles.statLabel}>Saved</Text>
        </View>
        
        <View style={styles.statCard}>
          <Icon name="category" size={24} color="#3b82f6" />
          <Text style={styles.statNumber}>{Object.keys(categories).length}</Text>
          <Text style={styles.statLabel}>Categories</Text>
        </View>
        
        {topCategory && (
          <View style={styles.statCard}>
            <Icon name="trending-up" size={24} color="#10b981" />
            <Text style={styles.statText}>{topCategory[0]}</Text>
            <Text style={styles.statLabel}>Top Interest</Text>
          </View>
        )}
      </View>
    );
  };

  const renderClearAll = () => {
    if (bookmarkedArticles.length === 0) return null;

    return (
      <View style={styles.clearContainer}>
        <TouchableOpacity 
          style={styles.clearButton}
          onPress={() => {
            // In a real app, you'd show a confirmation dialog
            setBookmarkedArticles([]);
          }}
        >
          <Icon name="clear-all" size={16} color="#ef4444" />
          <Text style={styles.clearButtonText}>Clear All</Text>
        </TouchableOpacity>
      </View>
    );
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        {renderHeader()}
        <View style={styles.loadingContainer}>
          <Icon name="bookmark" size={48} color="#9ca3af" />
          <Text style={styles.loadingText}>Loading bookmarks...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={bookmarkedArticles}
        renderItem={({ item }) => (
          <ArticleCard
            article={item}
            onPress={handleArticlePress}
            onBookmark={handleBookmark}
          />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <>
            {renderHeader()}
            {renderBookmarkStats()}
            {renderClearAll()}
          </>
        )}
        ListEmptyComponent={renderEmpty}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  contentContainer: {
    paddingBottom: 20,
  },
  header: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 12,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 64,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
  },
  browseButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#fef2f2',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#fecaca',
  },
  browseButtonText: {
    fontSize: 14,
    color: '#ef4444',
    fontWeight: '600',
    marginRight: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginVertical: 8,
    paddingVertical: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statCard: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginTop: 4,
  },
  statText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1f2937',
    marginTop: 4,
    textAlign: 'center',
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 2,
  },
  clearContainer: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  clearButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fef2f2',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fecaca',
  },
  clearButtonText: {
    fontSize: 14,
    color: '#ef4444',
    marginLeft: 4,
    fontWeight: '600',
  },
});

export default BookmarksScreen;