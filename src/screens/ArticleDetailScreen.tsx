import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Share,
  Linking,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NewsArticle } from '../types';

interface ArticleDetailScreenProps {
  route: any;
  navigation: any;
}

const ArticleDetailScreen: React.FC<ArticleDetailScreenProps> = ({ route, navigation }) => {
  const { article }: { article: NewsArticle } = route.params;
  const [isBookmarked, setIsBookmarked] = useState(article.isBookmarked || false);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
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

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // In a real app, you'd save this to your backend or local storage
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `${article.title}\n\n${article.summary}\n\nRead more: ${article.url}`,
        url: article.url,
        title: article.title,
      });
    } catch (error) {
      console.error('Error sharing article:', error);
    }
  };

  const handleOpenInBrowser = () => {
    Alert.alert(
      'Open in Browser',
      'Do you want to open this article in your browser?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Open', 
          onPress: () => {
            Linking.openURL(article.url).catch(err => {
              console.error('Error opening URL:', err);
            });
          }
        },
      ]
    );
  };

  // Mock article content - in a real app, this would come from the API
  const mockContent = `
${article.summary}

This groundbreaking development represents a significant milestone in the field, with far-reaching implications for the industry and beyond. Experts are calling it one of the most important advances in recent years.

The research, conducted over several months, involved collaboration between leading institutions and industry partners. The findings have been peer-reviewed and published in prestigious journals, adding credibility to the claims.

Key findings include:

• Revolutionary approach to problem-solving
• 95% improvement in accuracy compared to previous methods
• Potential for widespread adoption across multiple sectors
• Significant cost savings for organizations

Industry leaders have responded positively to the announcement, with many expressing interest in implementing the new technology. "This represents a paradigm shift in how we approach these challenges," said one expert who wished to remain anonymous.

The implications extend beyond the immediate industry, potentially affecting related fields and creating new opportunities for innovation. Researchers are already exploring additional applications and use cases.

Looking ahead, the team plans to continue their work, with several follow-up studies already in planning. The next phase will focus on real-world implementation and scaling the technology for broader adoption.

This development underscores the importance of continued investment in research and development, particularly in emerging technologies that have the potential to transform entire industries.

The full research findings will be made available to the public in the coming weeks, allowing other researchers to build upon this work and explore new possibilities.
  `;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header Image */}
        <Image
          source={{ uri: article.imageUrl }}
          style={styles.headerImage}
          resizeMode="cover"
        />

        {/* Content */}
        <View style={styles.content}>
          {/* Category and Date */}
          <View style={styles.metaRow}>
            <View style={[styles.categoryBadge, { backgroundColor: getCategoryColor(article.category) }]}>
              <Text style={styles.categoryText}>{article.category}</Text>
            </View>
            <Text style={styles.dateText}>{formatDate(article.publishedAt)}</Text>
          </View>

          {/* Title */}
          <Text style={styles.title}>{article.title}</Text>

          {/* Author and Source Info */}
          <View style={styles.authorRow}>
            <View style={styles.authorInfo}>
              <Icon name="person" size={16} color="#6b7280" />
              <Text style={styles.authorText}>
                {article.author || 'Unknown Author'}
              </Text>
            </View>
            <View style={styles.sourceInfo}>
              <Icon name="article" size={16} color="#6b7280" />
              <Text style={styles.sourceText}>{article.source}</Text>
            </View>
          </View>

          {/* Read Time */}
          {article.readTime && (
            <View style={styles.readTimeRow}>
              <Icon name="schedule" size={16} color="#6b7280" />
              <Text style={styles.readTimeText}>{article.readTime} min read</Text>
            </View>
          )}

          {/* Action Buttons */}
          <View style={styles.actionRow}>
            <TouchableOpacity
              style={[styles.actionButton, isBookmarked && styles.bookmarkedButton]}
              onPress={handleBookmark}
            >
              <Icon
                name={isBookmarked ? 'bookmark' : 'bookmark-border'}
                size={20}
                color={isBookmarked ? '#ffffff' : '#6b7280'}
              />
              <Text style={[styles.actionText, isBookmarked && styles.bookmarkedText]}>
                {isBookmarked ? 'Bookmarked' : 'Bookmark'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton} onPress={handleShare}>
              <Icon name="share" size={20} color="#6b7280" />
              <Text style={styles.actionText}>Share</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton} onPress={handleOpenInBrowser}>
              <Icon name="open-in-new" size={20} color="#6b7280" />
              <Text style={styles.actionText}>Open</Text>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Article Content */}
          <Text style={styles.contentText}>{mockContent.trim()}</Text>

          {/* Related Articles Section */}
          <View style={styles.relatedSection}>
            <Text style={styles.relatedTitle}>Related Articles</Text>
            <Text style={styles.relatedSubtitle}>
              Discover more stories from {article.category}
            </Text>
            <TouchableOpacity
              style={styles.relatedButton}
              onPress={() => navigation.navigate('CategoryFeed', { 
                category: article.category,
                categoryId: article.category.toLowerCase()
              })}
            >
              <Text style={styles.relatedButtonText}>View {article.category} News</Text>
              <Icon name="arrow-forward" size={16} color="#ef4444" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
  headerImage: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: 20,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  categoryText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  dateText: {
    color: '#6b7280',
    fontSize: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    lineHeight: 32,
    marginBottom: 16,
  },
  authorRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  authorText: {
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 4,
  },
  sourceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sourceText: {
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 4,
  },
  readTimeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  readTimeText: {
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 4,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
  },
  bookmarkedButton: {
    backgroundColor: '#ef4444',
  },
  actionText: {
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 4,
    fontWeight: '600',
  },
  bookmarkedText: {
    color: '#ffffff',
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 20,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 26,
    color: '#374151',
    marginBottom: 32,
  },
  relatedSection: {
    backgroundColor: '#f9fafb',
    padding: 20,
    borderRadius: 12,
    marginTop: 20,
  },
  relatedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  relatedSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 16,
  },
  relatedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  relatedButtonText: {
    fontSize: 14,
    color: '#ef4444',
    fontWeight: '600',
    marginRight: 4,
  },
});

export default ArticleDetailScreen;