import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NewsArticle } from '../types';

const { width } = Dimensions.get('window');

interface ArticleCardProps {
  article: NewsArticle;
  onPress: (article: NewsArticle) => void;
  onBookmark?: (article: NewsArticle) => void;
  showImage?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onPress,
  onBookmark,
  showImage = true,
}) => {
  const formatTimeAgo = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInMinutes < 24 * 60) {
      return `${Math.floor(diffInMinutes / 60)}h ago`;
    } else {
      return `${Math.floor(diffInMinutes / (24 * 60))}d ago`;
    }
  };

  const getCategoryColor = (category: string): string => {
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
    return colors[category] || '#6b7280';
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(article)}
      activeOpacity={0.7}
    >
      {showImage && (
        <Image
          source={{ uri: article.imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      
      <View style={styles.content}>
        {/* Category and Time */}
        <View style={styles.metaRow}>
          <View style={[styles.categoryBadge, { backgroundColor: getCategoryColor(article.category) }]}>
            <Text style={styles.categoryText}>{article.category}</Text>
          </View>
          <Text style={styles.timeText}>{formatTimeAgo(article.publishedAt)}</Text>
        </View>

        {/* Title */}
        <Text style={styles.title} numberOfLines={2}>
          {article.title}
        </Text>

        {/* Summary */}
        <Text style={styles.summary} numberOfLines={3}>
          {article.summary}
        </Text>

        {/* Bottom Row */}
        <View style={styles.bottomRow}>
          <View style={styles.sourceInfo}>
            <MaterialIcons name="article" size={16} color="#6b7280" />
            <Text style={styles.sourceText}>{article.source}</Text>
            {article.readTime && (
              <>
                <Text style={styles.dotSeparator}>•</Text>
                <Text style={styles.readTimeText}>{article.readTime} min read</Text>
              </>
            )}
          </View>
          
          {onBookmark && (
            <TouchableOpacity
              style={styles.bookmarkButton}
              onPress={() => onBookmark(article)}
            >
              <MaterialIcons
                name={article.isBookmarked ? 'bookmark' : 'bookmark-border'}
                size={20}
                color={article.isBookmarked ? '#ef4444' : '#6b7280'}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 16,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  timeText: {
    color: '#6b7280',
    fontSize: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
    lineHeight: 24,
  },
  summary: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 12,
    lineHeight: 20,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sourceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  sourceText: {
    fontSize: 12,
    color: '#6b7280',
    marginLeft: 4,
  },
  dotSeparator: {
    fontSize: 12,
    color: '#6b7280',
    marginHorizontal: 6,
  },
  readTimeText: {
    fontSize: 12,
    color: '#6b7280',
  },
  bookmarkButton: {
    padding: 4,
  },
});

export default ArticleCard;