<h1 align="center">
  <img src="https://res.cloudinary.com/iredhd/image/upload/v1593918691/ais-digital/iconfinder_movie-alt2_285634_zwcl8y.png" width=150 />
</h1>

<p align="center">
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#installation">Installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#configuration">Configuration</a>
</p>

The application consists of a system with two screens, home and details. Where the user can look the recent movies, search for a title, and after select a movie the user can see more details about.

To test the project already configured and running [click here.](https://exp.host/@iredhd/ais-react-native-challenge)

## Technologies
- [React](https://github.com/facebook/react)
- [React Native](https://github.com/facebook/react-native)
- [React Navigation](https://github.com/react-navigation/react-navigation)
- [Prop-Types](https://github.com/facebook/prop-types)
- [Hygen](https://github.com/jondot/hygen)
- [ESLint](https://github.com/eslint/eslint)
- [Git-cz](https://github.com/streamich/git-cz)
- [Unform](https://github.com/Rocketseat/unform)
- [Axios](https://github.com/axios/axios)
- [Redux](https://github.com/reduxjs/redux)
- [Redux Persist](https://github.com/rt2zz/redux-persist)
- [Redux Persist Transform Encrypt](https://github.com/maxdeviant/redux-persist-transform-encrypt)

## Installation
```
git clone https://github.com/iredhd/ais-react-native-challenge.git
cd ais-react-native-challenge
cp .env.example .env
yarn
yarn start
```

## Configuration
Please, before executing `yarn start`, fill in the environment variables inside the `.env` file.

| VARIABLE  |  DESCRIPTION  |
| ------------------- | ------------------- |
| API_KEY |  [TMDB](https://www.themoviedb.org/?language=pt-BR) API Key |
| REDUX_SECRET_KEY |  REDUX secret key for encrypt |