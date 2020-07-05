import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useRoute, useTheme } from '@react-navigation/native';
import moment from 'moment/min/moment-with-locales';

import { LoadingWrapper } from '../../components';
import { useMovie, useLanguageController } from '../../hooks';
import {
  Title, Rating, Overview, Trailer, InfoRow,
} from './components';

const Details = () => {
  const route = useRoute();
  const theme = useTheme();
  const { labels } = useLanguageController();

  const [movie, isLoading] = useMovie(route.params.id);

  return (
    <View
      style={styles.container}
    >
      <LoadingWrapper
        isLoading={isLoading}
      >
        {() => (
          <>
            {movie.trailer && <Trailer {...movie} />}
            <ScrollView
              bounces={false}
              contentContainerStyle={[
                styles.detailsContainer,
                { backgroundColor: theme.colors.background },
              ]}
            >
              <Title {...movie} />
              <Rating {...movie} />
              <Overview {...movie} />
              <InfoRow
                title={labels.genres}
                value={movie.genres.join(', ')}
              />
              <InfoRow
                title={labels.releaseDate}
                value={moment(movie.releaseDate).format('LL')}
              />
            </ScrollView>
          </>
        )}
      </LoadingWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  detailsContainer: {
    paddingHorizontal: 15,
    paddingTop: 10,
    flex: 1,
  },
});

export default Details;
