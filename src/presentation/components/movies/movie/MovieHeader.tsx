import { StyleSheet, useWindowDimensions, View, Image, Text, Pressable, Platform } from 'react-native';
import { FullMovie } from "../../../../core/entities/movie.entity";
import { useNavigation } from "@react-navigation/native";

interface Props {
    poster: string;
    originalTitle: string;
    title: string;
}

const MovieHeader = ({poster, originalTitle, title}: Props) => {

    const { height: screenheight } = useWindowDimensions();
    const navigation = useNavigation();


  return (
    <>
        <View style={{ ...styles.imageContainer, height: screenheight * 0.7 }} >
            <View style={styles.imageBorder} >
                <Image
                    style={ styles.posterImage }
                    source={{ uri: poster }}
                />
            </View>
        </View>

        <View style={ styles.marginContainer } >
            <Text style={ styles.title } >{ title }</Text>
            <Text style={ styles.subTitle } >{ originalTitle }</Text>
        </View>
        <View style={ styles.backButton } >
             <Pressable
                onPress={ () => navigation.goBack() }   
            >
                <Text
                    style={ styles.backButtonText }
                >Back</Text>
            </Pressable>
        </View>
            
        
    </>
    
  )
}


const styles = StyleSheet.create({
    imageContainer: {
      width: '100%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.24,
      shadowRadius: 7,
  
      elevation: 9,
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
    },
  
    imageBorder: {
      flex: 1,
      overflow: 'hidden',
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
    },
    posterImage: {
      flex: 1,
    },
  
    marginContainer: {
      marginHorizontal: 20,
      marginTop: 20,
    },
    subTitle: {
      fontSize: 16,
      opacity: 0.8,
      marginBottom: 5
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5
    },
    backButton: {
      position: 'absolute',
      zIndex: 999,
      elevation: 9,
      top:  Platform.OS === 'ios' ? 50 : 35,
      left: 10,
    },
    backButtonText: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.55)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
    },

  });

export default MovieHeader
