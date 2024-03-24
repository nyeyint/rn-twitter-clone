import { Text, View, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';


const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
  {
    id: '4',
    title: 'Fourth Item',
  },
  {
    id: '5',
    title: 'Fifth Item',
  },
  {
    id: '6',
    title: 'Sixth Item',
  },
  {
    id: '7',
    title: 'Seventh Item',
  },
  {
    id: '8',
    title: 'Eight Item',
  },
  {
    id: '9',
    title: 'Ninth Item',
  },
  {
    id: '10',
    title: 'Tenth Item',
  },
];


export default function HomeScreen({ navigation}) {

  function goToNewTweet() {
    navigation.navigate('NewTweet');
  }

  function goToProfile() {
    navigation.navigate('Profile');
  }

  function goToTweet() {
    navigation.navigate('Tweet');
  }

  function Tweet({ item }) {
    return (
      <View style={styles.tweetContainer}>
        <TouchableOpacity onPress={goToProfile}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={goToTweet} style={styles.flexRow}>
            <Text numberOfLines={1} style={styles.tweetName}>{item.title}</Text>
            <Text numberOfLines={1} style={styles.tweetHandle}>@jackmcconnell</Text>
            <Text>&middot;</Text>
            <Text numberOfLines={1} style={styles.tweetHandle}>1h</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToTweet} style={styles.tweetContentContainer}>
            <Text style={styles.tweetContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eiusasperiores, vero sapiente aperiam facere amet error itaque sintipsam repellat.</Text>
          </TouchableOpacity>
          <View style={styles.tweetEngagement}>
          <TouchableOpacity style={styles.flexRow}>
            <EvilIcons
              name="comment"
              size={22}
              color="gray"
              style={{ marginRight: 2 }}
            />
            <Text style={styles.textGray}>456</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
            <EvilIcons
              name="retweet"
              size={22}
              color="gray"
              style={{ marginRight: 2 }}
            />
            <Text style={styles.textGray}>32</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
            <EvilIcons
              name="heart"
              size={22}
              color="gray"
              style={{ marginRight: 2 }}
            />
            <Text style={styles.textGray}>4,456</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
            <EvilIcons
              name={Platform.OS === 'ios' ? 'share-apple' : 'share-google'}
              size={22}
              color="gray"
              style={{ marginRight: 2 }}
            />
          </TouchableOpacity>
        </View>
        </View>
      </View>
    );
  }
  
  return (
    <View style={styles.container} >
      <FlatList
          data={DATA}
          renderItem={({item}) => <Tweet item={item} />}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={styles.tweetSeparator} />}
          />
      <View>
      <TouchableOpacity style={styles.floatingButton}
      onPress={goToNewTweet}>
        <AntDesign name="plus" size={26} color="white" />
      </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flexRow: {
    flexDirection: 'row',
  },
  tweetContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  tweetSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  avatar: {
    width: 42,
    height: 42,
    marginRight: 8,
    borderRadius: 21,
  },
  tweetName: {
    fontWeight: 'bold',
    color: '#222222',
  },
  tweetHandle: {
    marginHorizontal: 8,
    color: 'gray',
  },
  tweetContentContainer: {
    marginTop: 4,
  },
  tweetContent: {
    lineHeight: 20,
  },
  textGray: {
    color: 'gray',
  },
  tweetEngagement: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1d9bf1',
    position: 'absolute',
    bottom: 20,
    right: 12,
  },
  ml4: {
    marginLeft: 16,
  },
});