import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NewsArticle } from '../types';
import { getArticlesByCategory } from '../data/mockData';
import ArticleCard from '../components/ArticleCard';

interface CategoryFeedScreenProps {
  route: any;
  navigation: any;
}

const CategoryFeedScreen: React.FC<CategoryFeedScreenProps> = ({ route, navigation }) => {
  const { category, categoryId } = route.params;
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCategoryArticles();
  }, [categoryId]);

  const loadCategoryArticles = async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const categoryArticles = getArticlesByCategory(category);
      setArticles(categoryArticles);
    } catch (error) {
      console.error('Error loading category articles:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadCategoryArticles();
    setRefreshing(false);
  };

  const handleArticlePress = (article: NewsArticle) => {
    navigation.navigate('ArticleDetail', { article });
  };

  const handleBookmark = (article: NewsArticle) => {
    // Update local state
    const updatedArticles = articles.map(item => {
      if (item.id === article.id) {
        return {
          ...item,
          isBookmarked: !item.isBookmarked,
        };
      }
      return item;
    });
    setArticles(updatedArticles);
  };

  const getCategoryColor = (categoryName: string): string => {
    const colors: { [key: string]: string } = {
      Technology: '#3b82f6',
      Business: '#10b981',
      Science: '#8b5cf6',
      Health: '#ef4444',
      Sports: '#f59e0b',
      Entertainment: '#ec4899',
      Environment: '#06b6d4',
      Politics: '#6366f1',
    };
    return colors[categoryName] || '#6b7280';
  };

  const getCategoryIcon = (categoryName: string): string => {
    const icons: { [key: string]: string } = {
      Technology: 'computer',
      Business: 'business',
      Science: 'science',
      Health: 'local-hospital',
      Sports: 'sports',
      Entertainment: 'movie',
      Environment: 'eco',
      Politics: 'how-to-vote',
    };
    return icons[categoryName] || 'article';
  };

  const renderHeader = () => (
    <View style={[styles.header, { backgroundColor: getCategoryColor(category) }]}>
      <View style={styles.headerContent}>
        <View style={styles.categoryIconContainer}>
          <Icon name={getCategoryIcon(category)} size={32} color="#ffffff" />
        </View>
        <Text style={styles.headerTitle}>{category}</Text>
        <Text style={styles.headerSubtitle}>
          {articles.length} article{articles.length !== 1 ? 's' : ''} available
        </Text>
      </View>
    </View>
  );

  const renderEmpty = () => (
    <View style={styles.emptyState}>
      <Icon name="article" size={64} color="#9ca3af" />
      <Text style={styles.emptyTitle}>No articles found</Text>
      <Text style={styles.emptySubtitle}>
        There are no articles available in this category at the moment
      </Text>
    </View>
  );

  const renderFooter = () => (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        End of {category.toLowerCase()} news
      </Text>
    </View>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        {renderHeader()}
        <View style={styles.loadingContainer}>
          <Icon name={getCategoryIcon(category)} size={48} color="#9ca3af" />
          <Text style={styles.loadingText}>Loading {category.toLowerCase()} news...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ArticleCard
            article={item}
            onPress={handleArticlePress}
            onBookmark={handleBookmark}
          />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmpty}
        ListFooterComponent={articles.length > 0 ? renderFooter : null}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={[getCategoryColor(category)]}
            tintColor={getCategoryColor(category)}
          />
        }
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
    paddingHorizontal: 16,
    paddingVertical: 24,
    marginBottom: 8,
  },
  headerContent: {
    alignItems: 'center',
  },
  categoryIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
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
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: 16,
  },
  footerText: {
    fontSize: 14,
    color: '#9ca3af',
  },
});

export default CategoryFeedScreen;