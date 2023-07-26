import { StyleSheet, View, Text, Card, Colors, Button} from 'react-native';
import { useState } from 'react';
import Camera from './Camera'

export default function Home({ navigation }) {
  const [camera, setCamera] = useState(false);
  const [cameraUsed, setUsed] = useState(false);

    function toggleCamera(){
        setCamera(!camera)
        setUsed(true)
    }

    if(camera){
        return <Camera toggleCamera={toggleCamera}/>
    }

    return (
    <View style={styles.container}>
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
            {cameraUsed ? <Button title="Results" onPress={() => navigation.navigate("Results")}/> : undefined }
        </View>
    </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

