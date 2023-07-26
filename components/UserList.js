/* eslint-disable no-use-before-define */
import {
  FlatList,
  StyleSheet,
  Button,
  ScrollView,
  Alert,
} from 'react-native';
import { useState } from 'react';
import {
  ListItem, View, Text, GridView, GridListItem, Spacings, Card, Badge, TouchableOpacity,
} from 'react-native-ui-lib';
import data from '../data.json';
import colors from '../colors.json';

export default function UserList() {
//   console.log(data.group_members);
  // const [selectedId, setSelectedId] = useState();
  //   const data = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(colors);
  if (data.group_members.length % 2 !== 0) {
    data.group_members.push({});
  }
  function renderUser(user) {
    // console.log(user, !user);
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return (
      <TouchableOpacity backgroundColor={randomColor.light} style={user.id ? styles.buttonContainer : styles.emptyButtonContainer} onPress={() => Alert.alert('Simple Button pressedsss')}>
        <Badge label="10" size={24} style={{ alignSelf: 'flex-end' }} backgroundColor={randomColor.dark} />
        <Text>
          {user.name}

        </Text>
      </TouchableOpacity>
    );
  }

  return (
    // <p>hi</p>
    <ScrollView
      horizontal
    >
      <FlatList
        style={styles.container}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={data.group_members}
        renderItem={({ item }) => renderUser(item)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  badge: {
    color: 'green',
  },
  container: {
    width: '100%',
    height: '100%',
    marginLeft: 30,
  },
  buttonContainer: {
    marginRight: 10,
    marginTop: 5,
    marginBottom: 100,
    width: 170,
    height: '95%',
    borderRadius: '35pt',
  },
  emptyButtonContainer: {
    marginRight: 5,
    marginTop: 5,
    width: 178,
  },
});
