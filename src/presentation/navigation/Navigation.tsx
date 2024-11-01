import { createStackNavigator } from '@react-navigation/stack';
import HomaScreen from '../screens/home/HomaScreen';
import DetailsScreen from '../screens/details/DetailsScreen';



export type RootStackParams = {
    Home: undefined,
    Details: { movieId: number }
}

const Stack = createStackNavigator<RootStackParams>();

function Navigation() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }} >
      <Stack.Screen name="Home" component={HomaScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default Navigation;