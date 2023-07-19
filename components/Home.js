import {
  View, Text, Card, Colors,
} from 'react-native-ui-lib';

export default function Home() {
  return (
    <View>
      {/* <Card flex center onPress={() => console.log('pressed')}>
            <Card.Image source={{uri: 'https://github.com/wix/react-native-ui-lib/blob/master/demo/src/assets/images/card-example.jpg'}}/>
            </Card> */}
      <Text $textSuccess text30>Text goes here</Text>
    </View>

  );
}
