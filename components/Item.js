// import {View, Text } from 'react-native';
import {View, Text, Colors} from 'react-native-ui-lib';

export default function Home() {
    return (
        <View>
          <Text style={{color: Colors.error}}>Error Message</Text>
          <Text success>Success Message</Text>
        </View>
        
    )
};