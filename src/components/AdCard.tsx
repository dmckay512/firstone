import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Ad } from '../types';

const { width } = Dimensions.get('window');

interface AdCardProps {
  ad: Ad;
  onPress: (ad: Ad) => void;
}

const AdCard: React.FC<AdCardProps> = ({ ad, onPress }) => {
  const renderAdBadge = () => {
    return (
      <View style={styles.adBadge}>
        <Icon name="info" size={12} color="#6b7280" />
        <Text style={styles.adBadgeText}>Ad</Text>
      </View>
    );
  };

  const renderPromotedBadge = () => {
    if (!ad.isPromoted) return null;
    
    return (
      <View style={styles.promotedBadge}>
        <Icon name="star" size={12} color="#f59e0b" />
        <Text style={styles.promotedText}>Promoted</Text>
      </View>
    );
  };

  if (ad.type === 'banner') {
    return (
      <TouchableOpacity
        style={styles.bannerContainer}
        onPress={() => onPress(ad)}
        activeOpacity={0.7}
      >
        <Image
          source={{ uri: ad.imageUrl }}
          style={styles.bannerImage}
          resizeMode="cover"
        />
        <View style={styles.bannerOverlay}>
          {renderAdBadge()}
          {renderPromotedBadge()}
        </View>
        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle} numberOfLines={1}>
            {ad.title}
          </Text>
          <Text style={styles.bannerAdvertiser}>{ad.advertiser}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  // Card type ad (default)
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => onPress(ad)}
      activeOpacity={0.7}
    >
      {/* Ad indicator row */}
      <View style={styles.adIndicatorRow}>
        {renderAdBadge()}
        {renderPromotedBadge()}
      </View>

      {/* Image */}
      <Image
        source={{ uri: ad.imageUrl }}
        style={styles.cardImage}
        resizeMode="cover"
      />

      {/* Content */}
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle} numberOfLines={2}>
          {ad.title}
        </Text>
        
        <Text style={styles.cardDescription} numberOfLines={3}>
          {ad.description}
        </Text>

        {/* Bottom row */}
        <View style={styles.cardBottomRow}>
          <View style={styles.advertiserInfo}>
            <Icon name="business" size={16} color="#6b7280" />
            <Text style={styles.advertiserText}>{ad.advertiser}</Text>
          </View>
          
          <View style={styles.ctaButton}>
            <Text style={styles.ctaText}>Learn More</Text>
            <Icon name="arrow-forward" size={16} color="#ef4444" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // Card Ad Styles
  cardContainer: {
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
    borderWidth: 1,
    borderColor: '#f3f4f6',
  },
  adIndicatorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f9fafb',
  },
  adBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 2,
    backgroundColor: '#e5e7eb',
    borderRadius: 8,
  },
  adBadgeText: {
    fontSize: 10,
    color: '#6b7280',
    marginLeft: 2,
    fontWeight: '600',
  },
  promotedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 2,
    backgroundColor: '#fef3c7',
    borderRadius: 8,
  },
  promotedText: {
    fontSize: 10,
    color: '#f59e0b',
    marginLeft: 2,
    fontWeight: '600',
  },
  cardImage: {
    width: '100%',
    height: 180,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
    lineHeight: 22,
  },
  cardDescription: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 12,
    lineHeight: 20,
  },
  cardBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  advertiserInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  advertiserText: {
    fontSize: 12,
    color: '#6b7280',
    marginLeft: 4,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#fef2f2',
    borderRadius: 20,
  },
  ctaText: {
    fontSize: 12,
    color: '#ef4444',
    fontWeight: '600',
    marginRight: 4,
  },

  // Banner Ad Styles
  bannerContainer: {
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
    borderWidth: 1,
    borderColor: '#f3f4f6',
    height: 120,
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  bannerOverlay: {
    position: 'absolute',
    top: 8,
    right: 8,
    flexDirection: 'row',
    gap: 4,
  },
  bannerContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 12,
  },
  bannerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 2,
  },
  bannerAdvertiser: {
    fontSize: 12,
    color: '#d1d5db',
  },
});

export default AdCard;