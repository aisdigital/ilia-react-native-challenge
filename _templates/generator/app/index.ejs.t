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