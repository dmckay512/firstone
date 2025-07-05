import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface DetailsScreenProps {
  navigation: any;
  route: any;
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({ navigation, route }) => {
  const { feature } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Feature Icon */}
        <View style={styles.iconContainer}>
          <View style={[styles.featureIcon, { backgroundColor: feature.color }]}>
            <Icon name={feature.icon} size={60} color="#ffffff" />
          </View>
        </View>

        {/* Feature Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.featureTitle}>{feature.title}</Text>
          <Text style={styles.featureDescription}>{feature.description}</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity 
            style={[styles.actionButton, styles.primaryButton]}
            onPress={() => console.log('Get Started')}
          >
            <Text style={styles.primaryButtonText}>Get Started</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.actionButton, styles.secondaryButton]}
            onPress={() => console.log('Learn More')}
          >
            <Text style={styles.secondaryButtonText}>Learn More</Text>
          </TouchableOpacity>
        </View>

        {/* Additional Info */}
        <View style={styles.additionalInfo}>
          <Text style={styles.sectionTitle}>About this feature</Text>
          <Text style={styles.additionalText}>
            This feature provides comprehensive functionality to help you manage your tasks efficiently. 
            With an intuitive interface and powerful tools, you can stay organized and productive.
          </Text>
          
          <Text style={styles.sectionTitle}>Key Benefits</Text>
          <View style={styles.benefitsList}>
            <View style={styles.benefitItem}>
              <Icon name="check-circle" size={20} color="#10b981" />
              <Text style={styles.benefitText}>Easy to use interface</Text>
            </View>
            <View style={styles.benefitItem}>
              <Icon name="check-circle" size={20} color="#10b981" />
              <Text style={styles.benefitText}>Real-time synchronization</Text>
            </View>
            <View style={styles.benefitItem}>
              <Icon name="check-circle" size={20} color="#10b981" />
              <Text style={styles.benefitText}>Advanced analytics</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  scrollView: {
    flex: 1,
  },
  iconContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  featureIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  infoContainer: {
    padding: 20,
    alignItems: 'center',
  },
  featureTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 10,
  },
  featureDescription: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 24,
  },
  actionsContainer: {
    padding: 20,
  },
  actionButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#6366f1',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#6366f1',
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6366f1',
  },
  additionalInfo: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 10,
    marginTop: 20,
  },
  additionalText: {
    fontSize: 16,
    color: '#6b7280',
    lineHeight: 24,
  },
  benefitsList: {
    marginTop: 10,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  benefitText: {
    fontSize: 16,
    color: '#1f2937',
    marginLeft: 10,
  },
});

export default DetailsScreen;