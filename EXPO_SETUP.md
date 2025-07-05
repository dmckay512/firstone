# 📱 Expo Setup Guide - News Reader App

Your news feed app has been converted to work with **Expo**! Now you can test it instantly on your phone using the **Expo Go** app.

## 🚀 Quick Setup (3 Steps)

### Step 1: Install Expo Go on Your Phone
- **Android**: Download [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent) from Google Play Store
- **iPhone**: Download [Expo Go](https://apps.apple.com/app/expo-go/id982107779) from App Store

### Step 2: Install Dependencies on Computer
Open terminal/command prompt and run:
```bash
# Install dependencies
npm install

# Install Expo CLI globally (if you don't have it)
npm install -g @expo/cli
```

### Step 3: Start the App
```bash
# Start Expo development server
npm start
```

This will open Expo Dev Tools in your browser with a **QR code**.

### Step 4: Open on Your Phone
- **Android**: Open Expo Go app → Scan QR code
- **iPhone**: Open Camera app → Point at QR code → Tap notification

**That's it!** The app will load on your phone instantly! 🎉

---

## 📱 What You'll See

Your phone will show the **News Reader** app with:

### 🏠 **Main News Feed**
- Mixed articles and ads (like Google News)
- Pull down to refresh
- Tap articles to read full content
- Tap ads to see advertiser info

### 📰 **Features**
- **Categories**: Technology, Business, Science, Health, Sports, Entertainment
- **Search**: Find specific news articles
- **Bookmarks**: Save articles for later
- **Ad Integration**: Seamless ads every 3 articles

### 🎯 **Ad Experience**
- **Card Ads**: Full-featured ads with images
- **Banner Ads**: Compact horizontal ads  
- **Promoted Content**: Highlighted sponsored posts
- Clear "Ad" and "Promoted" labels

---

## 🔧 Development Commands

```bash
# Start development server
npm start

# Open on Android device
npm run android

# Open on iOS device  
npm run ios

# Open in web browser
npm run web

# Build for production
expo build:android
expo build:ios
```

---

## 📱 Testing the App

### **News Feed Features to Test:**
✅ Scroll through mixed articles and ads  
✅ Pull down to refresh the feed  
✅ Tap articles to read full content  
✅ Bookmark articles (heart icon)  
✅ Tap ads to see interaction dialog  
✅ Browse different news categories  
✅ Search for specific articles  
✅ View saved bookmarks  

### **Ad Integration to Test:**
✅ Notice ads appear every 3 articles  
✅ See different ad types (card/banner)  
✅ Check "Ad" and "Promoted" labels  
✅ Tap ads to see advertiser info  
✅ Verify ads look natural in feed  

---

## 🎨 App Structure

```
📱 News Reader App
├── 🏠 News Feed (Mixed articles + ads)
├── 📁 Categories (8 news categories)
├── 🔍 Search (Find articles)
└── 📑 Bookmarks (Saved articles)
```

---

## 🛠 Troubleshooting

### **Can't scan QR code?**
- Make sure phone and computer are on same WiFi
- Try typing the URL shown in terminal manually
- Restart Expo server: `Ctrl+C` then `npm start`

### **App won't load?**
- Check internet connection
- Clear Expo Go cache: Settings → Clear cache
- Update Expo Go app to latest version

### **Images not loading?**
- This is normal - using placeholder images
- In real app, you'd use actual news images

---

## 🚀 Next Steps

### **For Production:**
1. **Connect Real News API** (replace mock data)
2. **Add Real Ad Server** (replace mock ads)
3. **Implement Analytics** (track ad performance)
4. **Add Push Notifications** (breaking news)
5. **Build & Deploy** to app stores

### **Customization:**
- **Ad Frequency**: Change from every 3 articles
- **Categories**: Add more news categories
- **Styling**: Customize colors and themes
- **Content**: Connect to real news sources

---

## 📞 Support

If you have any issues:
1. Check that Expo Go is updated
2. Ensure phone and computer are on same network
3. Try restarting the Expo server
4. Clear Expo Go cache and try again

**Enjoy your news feed app with integrated ads!** 🎉📰

---

**Built with React Native + Expo - Your Daily News, Beautifully Delivered**