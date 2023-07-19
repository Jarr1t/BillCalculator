import {View, Text, Button, StyleSheet} from 'react-native';
import { useState } from 'react';
import Camera from './Camera'

export default function Home() {
    const [camera, setCamera] = useState(false);

    function toggleCamera(){
        setCamera(!camera)
    }

    if(camera){
        return <Camera toggleCamera={toggleCamera}/>
    }

    return (
    <View style={styles.container}>
        <View>
            <Text>PeepeePoopooPeepee</Text>
            <Button 
            title="Use Camera"
            onPress={() => toggleCamera()}
            />
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