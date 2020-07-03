---
to: app.json
---
{
  "expo": {
    "name": "ais-react-native-challenge",
    "slug": "ais-react-native-challenge",
    "version": "<%= h.version %>",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": <%- JSON.stringify(h.extra) %>
  }
}