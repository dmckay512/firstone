# First One Mobile App

A modern, beautiful React Native mobile application with a clean UI and intuitive navigation.

## Features

- **Beautiful UI Design**: Modern interface with gradient backgrounds and smooth animations
- **Cross-Platform**: Works on both iOS and Android
- **Navigation**: Tab-based navigation with stack navigation for detailed screens
- **TypeScript Support**: Full TypeScript implementation for better code quality
- **Responsive Design**: Optimized for different screen sizes
- **Modern Icons**: Using Material Icons for a consistent look

## Screens

### Home Screen
- Welcome header with gradient background
- Quick stats display
- Feature cards with navigation
- Recent activity feed

### Profile Screen
- User profile information
- Statistics display
- Account settings menu
- Achievement badges
- Logout functionality

### Settings Screen
- Organized settings categories
- Toggle switches for preferences
- Navigation to detailed settings
- App information section

### Details Screen
- Feature-specific information
- Action buttons
- Benefits list
- Detailed descriptions

## Tech Stack

- **React Native 0.73.0**
- **TypeScript**
- **React Navigation 6**
- **React Native Vector Icons**
- **React Native Linear Gradient**
- **React Native Safe Area Context**
- **React Native Reanimated**
- **React Native Gesture Handler**

## Getting Started

### Prerequisites

- Node.js (>= 16)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd firstone-mobile-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **iOS Setup** (macOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

4. **Android Setup**
   - Make sure Android Studio is installed
   - Set up Android SDK and emulator

### Running the App

#### Android
```bash
npm run android
```

#### iOS
```bash
npm run ios
```

#### Development Server
```bash
npm start
```

## Project Structure

```
src/
├── App.tsx                 # Main app component with navigation
├── screens/
│   ├── HomeScreen.tsx      # Home screen with features
│   ├── ProfileScreen.tsx   # User profile and settings
│   ├── SettingsScreen.tsx  # App settings and preferences
│   └── DetailsScreen.tsx   # Feature details screen
```

## Key Features

### Navigation
- Bottom tab navigation for main screens
- Stack navigation for detailed views
- Smooth transitions and animations

### UI Components
- Gradient backgrounds
- Shadow effects
- Rounded corners
- Material Design icons
- Responsive layouts

### State Management
- React hooks for local state
- Context for global state (when needed)

### Styling
- StyleSheet for component styling
- Consistent color scheme
- Responsive design principles

## Customization

### Colors
The app uses a consistent color palette:
- Primary: `#6366f1` (Indigo)
- Secondary: `#8b5cf6` (Purple)
- Success: `#10b981` (Green)
- Warning: `#f59e0b` (Amber)
- Error: `#ef4444` (Red)
- Gray shades for text and backgrounds

### Typography
- System fonts for optimal readability
- Consistent font sizes and weights
- Proper contrast ratios

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team.

---

Made with ❤️ by First One Team
