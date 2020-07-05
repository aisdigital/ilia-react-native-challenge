---
to: app.json
---
{
  "expo": {
    "name": "AIS React Native Challenge",
    "slug": "ais-react-native-challenge",
    "version": "<%= h.version %>",
    "orientation": "portrait",
    "icon": "./src/assets/icon.png",
    "description": "The application consists of a system with two screens, home and details. Where the user can look the recent movies, search for a title, and after select a movie the user can see more details about.",
    "privacy": "public",
    "splash": {
      "image": "./src/assets/splash.png",
      "resizeMode": "cover",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": false
    },
    "extra": <%- JSON.stringify(h.extra) %>
  }
}