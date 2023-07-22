/* eslint-disable no-use-before-define */
import {
  FlatList,
  StyleSheet,
} from 'react-native';
import { useState } from 'react';
import {
  ListItem, View, Text,
} from 'react-native-ui-lib';
import data from '../data.json';

export default function ItemList() {
  const [selectedId, setSelectedId] = useState();
  function renderData(order) {
    return (
      <View style={styles.itemContainer}>
        <ListItem
          style={styles.item}
          onPress={() => { setSelectedId(order.id); console.log('hi'); }}
        >
          <ListItem.Part>
            <Text text70BO>
              {order.name}
            </Text>
          </ListItem.Part>
          <ListItem.Part>
            <Text text70BO>
              $
              {order.price}
            </Text>
          </ListItem.Part>
        </ListItem>
      </View>

    );
  }

  return (
    <View>
      <FlatList
        style={styles.container}
        id="container"
        data={data.orders}
        renderItem={({ item }) => renderData(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    justifyContent: 'space-between',
    backgroundColor: '#D9D9D9',
    height: 40,
    marginLeft: 5,
    marginRight: 5,
  },
  itemContainer: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'right',
    marginTop: 10,
  },
  container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '60%',
    backgroundColor: '#F4F4F4',
  },
});
