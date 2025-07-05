import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NewsArticle, Ad, FeedItem } from '../types';
import { mockFeed } from '../data/mockData';
import ArticleCard from '../components/ArticleCard';
import AdCard from '../components/AdCard';

interface NewsFeedScreenProps {
  navigation: any;
}

const NewsFeedScreen: React.FC<NewsFeedScreenProps> = ({ navigation }) => {
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFeed();
  }, []);

  const loadFeed = async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFeedItems(mockFeed);
    } catch (error) {
      console.error('Error loading feed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadFeed();
    setRefreshing(false);
  };

  const handleArticlePress = (article: NewsArticle) => {
    navigation.navigate('ArticleDetail', { article });
  };

  const handleAdPress = (ad: Ad) => {
    Alert.alert(
      'Open Advertisement',
      `Do you want to open ${ad.title}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Open', 
          onPress: () => {
            // In a real app, you'd open the ad URL
            console.log('Opening ad:', ad.url);
          }
        },
      ]
    );
  };

  const handleBookmark = (article: NewsArticle) => {
    // Update local state
    const updatedFeed = feedItems.map(item => {
      if (item.type === 'article' && (item.data as NewsArticle).id === article.id) {
        return {
          ...item,
          data: {
            ...item.data,
            isBookmarked: !(item.data as NewsArticle).isBookmarked,
          },
        };
      }
      return item;
    });
    setFeedItems(updatedFeed);
  };

  const renderFeedItem = ({ item }: { item: FeedItem }) => {
    if (item.type === 'article') {
      return (
        <ArticleCard
          article={item.data as NewsArticle}
          onPress={handleArticlePress}
          onBookmark={handleBookmark}
        />
      );
    } else if (item.type === 'ad') {
      return (
        <AdCard
          ad={item.data as Ad}
          onPress={handleAdPress}
        />
      );
    }
    return null;
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTitle}>News Feed</Text>
          <Text style={styles.headerSubtitle}>Stay updated with latest news</Text>
        </View>
        <TouchableOpacity 
          style={styles.notificationButton}
          onPress={() => console.log('Notifications')}
        >
          <Icon name="notifications" size={24} color="#1f2937" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderEmpty = () => (
    <View style={styles.emptyState}>
      <Icon name="article" size={64} color="#9ca3af" />
      <Text style={styles.emptyTitle}>No news available</Text>
      <Text style={styles.emptySubtitle}>
        Pull down to refresh and get the latest news
      </Text>
    </View>
  );

  const renderFooter = () => (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        You've reached the end of the feed
      </Text>
      <TouchableOpacity 
        style={styles.refreshButton}
        onPress={handleRefresh}
      >
        <Icon name="refresh" size={16} color="#ef4444" />
        <Text style={styles.refreshButtonText}>Refresh</Text>
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        {renderHeader()}
        <View style={styles.loadingContainer}>
          <Icon name="article" size={48} color="#9ca3af" />
          <Text style={styles.loadingText}>Loading news feed...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={feedItems}
        renderItem={renderFeedItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmpty}
        ListFooterComponent={renderFooter}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={['#ef4444']}
            tintColor="#ef4444"
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
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    marginBottom: 8,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  notificationButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
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
    color: '#6b7280',
    marginBottom: 12,
  },
  refreshButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fef2f2',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fecaca',
  },
  refreshButtonText: {
    fontSize: 14,
    color: '#ef4444',
    marginLeft: 4,
    fontWeight: '600',
  },
});

export default NewsFeedScreen;