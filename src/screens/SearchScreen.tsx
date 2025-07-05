import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { NewsArticle } from '../types';
import { searchArticles } from '../data/mockData';
import ArticleCard from '../components/ArticleCard';

interface SearchScreenProps {
  navigation: any;
}

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<NewsArticle[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [recentSearches] = useState(['Technology', 'Climate', 'Business', 'Health']);

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim().length === 0) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    // Simulate search delay
    setTimeout(() => {
      const searchResults = searchArticles(searchQuery);
      setResults(searchResults);
      setIsSearching(false);
    }, 500);
  };

  const handleArticlePress = (article: NewsArticle) => {
    navigation.navigate('ArticleDetail', { article });
  };

  const handleBookmark = (article: NewsArticle) => {
    // Update local state
    const updatedResults = results.map(item => {
      if (item.id === article.id) {
        return {
          ...item,
          isBookmarked: !item.isBookmarked,
        };
      }
      return item;
    });
    setResults(updatedResults);
  };

  const handleRecentSearchPress = (searchTerm: string) => {
    setQuery(searchTerm);
    handleSearch(searchTerm);
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsSearching(false);
  };

  const renderSearchResults = () => {
    if (isSearching) {
      return (
        <View style={styles.centerContainer}>
          <MaterialIcons name="search" size={48} color="#9ca3af" />
          <Text style={styles.searchingText}>Searching...</Text>
        </View>
      );
    }

    if (query && results.length === 0) {
      return (
        <View style={styles.centerContainer}>
          <Icon name="search-off" size={48} color="#9ca3af" />
          <Text style={styles.noResultsTitle}>No results found</Text>
          <Text style={styles.noResultsSubtitle}>
            Try different keywords or check your spelling
          </Text>
        </View>
      );
    }

    if (results.length > 0) {
      return (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsHeader}>
            {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
          </Text>
          <FlatList
            data={results}
            renderItem={({ item }) => (
              <ArticleCard
                article={item}
                onPress={handleArticlePress}
                onBookmark={handleBookmark}
              />
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.resultsList}
          />
        </View>
      );
    }

    return null;
  };

  const renderRecentSearches = () => {
    if (query || results.length > 0 || isSearching) return null;

    return (
      <View style={styles.recentContainer}>
        <Text style={styles.recentTitle}>Recent Searches</Text>
        <View style={styles.recentTags}>
          {recentSearches.map((term, index) => (
            <TouchableOpacity
              key={index}
              style={styles.recentTag}
              onPress={() => handleRecentSearchPress(term)}
            >
              <Icon name="history" size={16} color="#6b7280" />
              <Text style={styles.recentTagText}>{term}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  const renderSuggestions = () => {
    if (query || results.length > 0 || isSearching) return null;

    const suggestions = [
      { icon: 'trending-up', text: 'Breaking News', color: '#ef4444' },
      { icon: 'science', text: 'Technology', color: '#3b82f6' },
      { icon: 'sports', text: 'Sports', color: '#f59e0b' },
      { icon: 'local-hospital', text: 'Health', color: '#ef4444' },
    ];

    return (
      <View style={styles.suggestionsContainer}>
        <Text style={styles.suggestionsTitle}>Popular Topics</Text>
        <View style={styles.suggestionsGrid}>
          {suggestions.map((suggestion, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.suggestionCard, { backgroundColor: suggestion.color }]}
              onPress={() => handleRecentSearchPress(suggestion.text)}
            >
              <Icon name={suggestion.icon} size={24} color="#ffffff" />
              <Text style={styles.suggestionText}>{suggestion.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Header */}
      <View style={styles.searchHeader}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#6b7280" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search news..."
            value={query}
            onChangeText={(text) => {
              setQuery(text);
              handleSearch(text);
            }}
            autoCorrect={false}
            returnKeyType="search"
            onSubmitEditing={() => handleSearch(query)}
          />
          {query.length > 0 && (
            <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
              <Icon name="clear" size={20} color="#6b7280" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {renderSearchResults()}
        {renderRecentSearches()}
        {renderSuggestions()}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  searchHeader: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1f2937',
  },
  clearButton: {
    padding: 4,
  },
  content: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  searchingText: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 12,
  },
  noResultsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginTop: 16,
    marginBottom: 8,
  },
  noResultsSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 20,
  },
  resultsContainer: {
    flex: 1,
  },
  resultsHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  resultsList: {
    paddingBottom: 20,
  },
  recentContainer: {
    padding: 16,
  },
  recentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
  },
  recentTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  recentTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  recentTagText: {
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 4,
  },
  suggestionsContainer: {
    padding: 16,
  },
  suggestionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  suggestionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  suggestionCard: {
    width: '48%',
    aspectRatio: 1.5,
    borderRadius: 12,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  suggestionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    marginTop: 8,
  },
});

export default SearchScreen;