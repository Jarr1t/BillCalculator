import {View, Text, Card, Colors, Button} from 'react-native';
import { useState } from 'react';
import Camera from './Camera'
import { homeStyles } from '../styles/styleSheets'


export default function Home() {
    const [camera, setCamera] = useState(false);

    function toggleCamera(){
        setCamera(!camera)
    }

    if(camera){
        return <Camera toggleCamera={toggleCamera}/>
    }

    return (
    <View style={homeStyles.container}>
        <View>
                  {/* <Card flex center onPress={() => console.log('pressed')}>
            <Card.Image source={{uri: 'https://github.com/wix/react-native-ui-lib/blob/master/demo/src/assets/images/card-example.jpg'}}/>
            </Card> */}
      {/* <Text $textSuccess text30>Text goes here</Text> */}
            <Text>PeepeePoopooPeepee</Text>
            <Button 
            title="Use Camera"
            onPress={() => toggleCamera()}
            />
        </View>
    </View>
    )
};
