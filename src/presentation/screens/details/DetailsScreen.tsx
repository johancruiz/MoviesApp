import { RouteProp, useRoute } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useMovie from '../../hooks/useMovie';
import MovieHeader from '../../components/movies/movie/MovieHeader';
import MovieDetails from '../../components/movies/movie/MovieDetails';
import { ScrollView } from 'react-native-gesture-handler';


interface Props extends StackScreenProps<RootStackParams, 'Details'>{};

export const DetailsScreen = ({route}: Props) => {


  const {movieId} = route.params
  const { top, right } = useSafeAreaInsets();
  const { isLoading,movie, cast = [] } = useMovie(movieId)


  if (isLoading) {
    return <Text>Loading...</Text>
  }

  

  return (
    <ScrollView>
      <MovieHeader 
        originalTitle={movie!.originalTitle}
        poster={ movie!.poster }
        title={movie!.title}
      />

      <MovieDetails movie={ movie! } cast={ cast } /> 
    </ScrollView>
  )
}

