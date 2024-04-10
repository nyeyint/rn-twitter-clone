import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import NewTweet from './src/screens/NewTweet';
import ProfileScreen from './src/screens/ProfileScreen';
import TweetScreen from './src/screens/TweetScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingsScreen from './src/screens/SettingsScreen';
import SearchScreen from './src/screens/SearchScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tab" component={BottomTab} options={{
        headerShown: false
      }} />
      <Stack.Screen name="NewTweet" component={NewTweet}/>
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
        headerTitle: 'Home',
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
        headerTitle: 'Notifications',
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
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name="Home" component={HomeStackNavigator}/>
        <Drawer.Screen name="Settings" component={SettingsScreen}/>
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

