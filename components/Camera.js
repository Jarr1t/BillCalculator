import {View, Text, Button, SafeAreaView, Image, StatusBar} from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { camStyles } from '../styles/styleSheets'

import * as MediaLibrary from 'expo-media-library';

export default function Camer({toggleCamera}) {
    let cameraRef = useRef();
    const [hasCameraPermissions, setHasCameraPermissions] = useState(undefined);
    const [hasMediaLibraryPermissions, setHasMediaLibraryPermissions] = useState(undefined);
    const [photo, setPhoto] = useState();


    useEffect(() => {
        (async () => {
            const cameraPermissions = await Camera.requestCameraPermissionsAsync();
            const mediaLibraryPermissions = await MediaLibrary.requestPermissionsAsync();
            setHasCameraPermissions(cameraPermissions.status === "granted")
            setHasMediaLibraryPermissions(mediaLibraryPermissions.status === "granted")
        })();
    }, [])

    if(hasCameraPermissions === undefined){
        return <Text>Requesting Permissions...</Text>
    } else if(!hasCameraPermissions){
        return <Text>Please allow for camera use in settings</Text>
    }

    let takePic = async () => {
        let options = {
            quality: 1,
            base64: true,
            exif: false
        }

        let newPhoto = await cameraRef.current.takePictureAsync(options);
        setPhoto(newPhoto);
    }

      function cleanUp(){
        setPhoto(undefined) 
        toggleCamera()
      }

    if (photo) {
        let savePhoto = () => {
          MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
            toggleCamera()
          });
        };
    
        return (
          <SafeAreaView style={camStyles.container}>
            <Image style={camStyles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
            {hasMediaLibraryPermissions ? <Button title="Save" onPress={savePhoto} /> : undefined}
            <Button title="Discard" onPress={cleanUp} />
          </SafeAreaView>
        );
      }

    return (
    <Camera style={camStyles.container} ref={cameraRef}>
        <View style={camStyles.buttonContainer}>
            <Button title="Take Pic" onPress={takePic} />
            <Button title="Close" onPress={cleanUp} />
        </View>
        <StatusBar style="auto" />
    </Camera>
    )
};