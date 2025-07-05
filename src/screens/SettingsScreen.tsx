import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SettingsScreen: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [locationServices, setLocationServices] = useState(true);
  const [autoBackup, setAutoBackup] = useState(false);

  const settingsCategories = [
    {
      title: 'General',
      items: [
        {
          id: 1,
          title: 'Notifications',
          icon: 'notifications',
          type: 'toggle',
          value: notifications,
          onToggle: setNotifications,
        },
        {
          id: 2,
          title: 'Dark Mode',
          icon: 'dark-mode',
          type: 'toggle',
          value: darkMode,
          onToggle: setDarkMode,
        },
        {
          id: 3,
          title: 'Language',
          icon: 'language',
          type: 'navigation',
          value: 'English',
          onPress: () => console.log('Language settings'),
        },
      ],
    },
    {
      title: 'Privacy & Security',
      items: [
        {
          id: 4,
          title: 'Location Services',
          icon: 'location-on',
          type: 'toggle',
          value: locationServices,
          onToggle: setLocationServices,
        },
        {
          id: 5,
          title: 'Two-Factor Authentication',
          icon: 'security',
          type: 'navigation',
          onPress: () => console.log('2FA settings'),
        },
        {
          id: 6,
          title: 'Privacy Policy',
          icon: 'privacy-tip',
          type: 'navigation',
          onPress: () => console.log('Privacy policy'),
        },
      ],
    },
    {
      title: 'Data & Storage',
      items: [
        {
          id: 7,
          title: 'Auto Backup',
          icon: 'backup',
          type: 'toggle',
          value: autoBackup,
          onToggle: setAutoBackup,
        },
        {
          id: 8,
          title: 'Clear Cache',
          icon: 'clear-all',
          type: 'action',
          onPress: () => console.log('Clear cache'),
        },
        {
          id: 9,
          title: 'Storage Usage',
          icon: 'storage',
          type: 'navigation',
          value: '2.1 GB',
          onPress: () => console.log('Storage usage'),
        },
      ],
    },
    {
      title: 'Support',
      items: [
        {
          id: 10,
          title: 'Help Center',
          icon: 'help',
          type: 'navigation',
          onPress: () => console.log('Help center'),
        },
        {
          id: 11,
          title: 'Contact Support',
          icon: 'support',
          type: 'navigation',
          onPress: () => console.log('Contact support'),
        },
        {
          id: 12,
          title: 'Rate App',
          icon: 'star',
          type: 'navigation',
          onPress: () => console.log('Rate app'),
        },
      ],
    },
  ];

  const renderSettingItem = (item: any) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.settingItem}
        onPress={item.onPress}
        activeOpacity={item.type === 'toggle' ? 1 : 0.7}
      >
        <View style={styles.settingItemLeft}>
          <View style={styles.settingIcon}>
            <Icon name={item.icon} size={20} color="#6366f1" />
          </View>
          <Text style={styles.settingItemText}>{item.title}</Text>
        </View>
        
        <View style={styles.settingItemRight}>
          {item.type === 'toggle' && (
            <Switch
              value={item.value}
              onValueChange={item.onToggle}
              trackColor={{ false: '#e5e7eb', true: '#a5b4fc' }}
              thumbColor={item.value ? '#6366f1' : '#9ca3af'}
            />
          )}
          {item.type === 'navigation' && (
            <View style={styles.navigationRight}>
              {item.value && (
                <Text style={styles.settingValue}>{item.value}</Text>
              )}
              <Icon name="chevron-right" size={20} color="#9ca3af" />
            </View>
          )}
          {item.type === 'action' && (
            <Icon name="chevron-right" size={20} color="#9ca3af" />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Settings</Text>
          <Text style={styles.headerSubtitle}>Customize your app experience</Text>
        </View>

        {/* Settings Categories */}
        {settingsCategories.map((category, index) => (
          <View key={index} style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{category.title}</Text>
            <View style={styles.categoryCard}>
              {category.items.map((item, itemIndex) => (
                <View key={item.id}>
                  {renderSettingItem(item)}
                  {itemIndex < category.items.length - 1 && (
                    <View style={styles.separator} />
                  )}
                </View>
              ))}
            </View>
          </View>
        ))}

        {/* App Info */}
        <View style={styles.appInfoContainer}>
          <Text style={styles.appInfoTitle}>App Information</Text>
          <View style={styles.appInfoCard}>
            <View style={styles.appInfoItem}>
              <Text style={styles.appInfoLabel}>Version</Text>
              <Text style={styles.appInfoValue}>1.0.0</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.appInfoItem}>
              <Text style={styles.appInfoLabel}>Build</Text>
              <Text style={styles.appInfoValue}>2024.1.1</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.appInfoItem}>
              <Text style={styles.appInfoLabel}>Last Updated</Text>
              <Text style={styles.appInfoValue}>Today</Text>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Made with ❤️ by First One Team
          </Text>
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
  header: {
    padding: 20,
    paddingTop: 40,
    paddingBottom: 30,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
  categoryContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 10,
  },
  categoryCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  settingItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  settingItemText: {
    fontSize: 16,
    color: '#1f2937',
    flex: 1,
  },
  settingItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navigationRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingValue: {
    fontSize: 14,
    color: '#6b7280',
    marginRight: 8,
  },
  separator: {
    height: 1,
    backgroundColor: '#f3f4f6',
    marginLeft: 55,
  },
  appInfoContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  appInfoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 10,
  },
  appInfoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  appInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  appInfoLabel: {
    fontSize: 16,
    color: '#1f2937',
  },
  appInfoValue: {
    fontSize: 16,
    color: '#6b7280',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#9ca3af',
  },
});

export default SettingsScreen;