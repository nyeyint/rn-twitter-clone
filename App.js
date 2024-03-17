import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import NewTweet from './screens/NewTweet';
import ProfileScreen from './screens/ProfileScreen';
import TweetScreen from './screens/TweetScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingsScreen from './screens/SettingsScreen';
import SearchScreen from './screens/SearchScreen';
import NotificationsScreen from './screens/NotificationsScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} >
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="NewTweet" component={NewTweet} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Tweet" component={TweetScreen} />
    </Stack.Navigator>
  );
};


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home' >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

