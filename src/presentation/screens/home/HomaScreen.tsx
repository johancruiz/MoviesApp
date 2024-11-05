import React from 'react'
import { Text, View } from 'react-native'
import useMovies from '../../hooks/useMovies'

const HomaScreen = () => {

  const {} = useMovies()

  return (
    <View>
        <Text>Home Screen</Text>
    </View>
  )
}

export default HomaScreen
