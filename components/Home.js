import { StyleSheet, View, Text, Card, Colors, SafeAreaView, Image } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native-ui-lib'
import Camera from './Camera'
const myImage = require("../assets/homeDrawing.png");
import { homeStyles } from '../styles/styleSheets'

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
    <SafeAreaView style={homeStyles.container}>
        <View>
            <Image source={myImage}
                style={homeStyles.responsiveImage} />
            
            <Text style={homeStyles.welcomeText}>Hey! Welcome</Text>
            <Text style={homeStyles.secondaryWelcomeText}>Get started by taking a picture of your reciept</Text>
            <Button
                title="Use Camera"
                onPress={() => toggleCamera()}
                style={homeStyles.button}
                label="Snap Reciept"
                labelStyle={homeStyles.buttonLabel}
                enableShadown="true"
            />
            {cameraUsed ? <Button title="Results" onPress={() => navigation.navigate("Results")}/> : undefined }
        </View>
    </SafeAreaView>
    )
};
