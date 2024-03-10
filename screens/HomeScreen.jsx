import { Button, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen({ navigation}) {
  return (
    <View>
      <Text>
        <Ionicons name="settings" size={32} color="green" />
        Home Screen
        </Text>
      <Button title="New Tweet" onPress={() => navigation.navigate('New Tweet')} />
    </View>
  );
}
