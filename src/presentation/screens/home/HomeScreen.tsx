import { Text, View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PosterCarousel from '../../components/movies/PosterCarousel';
import HorizontalCarousel from '../../components/movies/HorizontalCarousel';
import HomeScreenLoader from '../../components/loaders/HomeScreenLoader';

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets()

  const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage } = useMovies();

  if (isLoading) {
    return ( <HomeScreenLoader /> )
  }


  return (
    <ScrollView>
      <View style={{ marginTop: top + 20,paddingBottom: 30 }} >
        <PosterCarousel movies={ nowPlaying } />
        <HorizontalCarousel title='Populares' movies={ popular } loadNextPage={ popularNextPage } />
        <HorizontalCarousel title='Top Rated' movies={ topRated } />
        <HorizontalCarousel title='Upcoming' movies={ upcoming } />
      </View>
    </ScrollView>
  )
}