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
import Ionicons from 'react-native-vector-icons/Ionicons';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} >
      <Stack.Screen name="Tab" component={BottomTab} />
      <Stack.Screen name="NewTweet" component={NewTweet} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Tweet" component={TweetScreen} />
    </Stack.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
    }}
    initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => (
          <Ionicons name="home" size={24} color={focused ? 'black' : 'grey'} />
        )
      }} /> 
      <Tab.Screen name="Search" component={SearchScreen} options={{
        tabBarIcon: ({ focused }) => (
          <Ionicons name="search" size={24} color={focused ? 'black' : 'grey'} />
        )
      }} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} options={{
        tabBarIcon: ({ focused }) => (
          <Ionicons name="notifications" size={24} color={focused ? 'black' : 'grey'} />
        )
      }} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home' >
        <Drawer.Screen name="Home" component={HomeStackNavigator} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

