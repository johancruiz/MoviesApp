import { NavigationContainer } from '@react-navigation/native'
import '../gesture-handler-native';
import Navigation from './presentation/navigation/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
    
  )
}

export default App
