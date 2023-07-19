import {StyleSheet, View, Text, Button, SafeAreaView, Image, StatusBar} from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import Home from './Home'
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

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
        buttonContainer: {
          backgroundColor: '#fff',
          alignSelf: 'flex-end'
        },
        preview: {
          alignSelf: 'stretch',
          flex: 1
        }
      });

      function cleanUp(){
        setPhoto(undefined) 
        toggleCamera()
      }

    if (photo) {
        let savePhoto = () => {
          MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
            setPhoto(undefined);
            cameraStat.curStatus = false
          });
          toggleCamera()
        };
    
        return (
          <SafeAreaView style={styles.container}>
            <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
            {hasMediaLibraryPermissions ? <Button title="Save" onPress={savePhoto} /> : undefined}
            <Button title="Discard" onPress={cleanUp} />
          </SafeAreaView>
        );
      }

    return (
    <Camera style={styles.container} ref={cameraRef}>
        <View style={styles.buttonContainer}>
            <Button title="Take Pic" onPress={takePic} />
        </View>
        <StatusBar style="auto" />
    </Camera>
    )
};