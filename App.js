import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NewTweet from './screens/NewTweet';
import ProfileScreen from './screens/ProfileScreen';
import TweetScreen from './screens/TweetScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="New Tweet" component={NewTweet} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Tweet" component={TweetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

