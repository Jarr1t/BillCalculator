import {View, Text, Button} from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

export default function Home() {
    let cameraRef = useRef();
    const [hasCameraPermissions, setHasCameraPermissions] = useState(undefined);
    const [hasMediaLibraryPermissions, setHasMediaLibraryPermissions] = useState(undefined);

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
            exif: false
        }

        let newPhoto = await cameraRef.current.takePictureAsync(options)
    }

    function toggleOnCamera(){
        return (
            <Camera stylesref={cameraRef}>
             <View>
                 <Button
                 title="camera button"
                 onPress={takePic}
                 />
             </View>
         </Camera>
            // <Camera>
            //     <View>
            //         <Button
            //         onPress={takePic}
            //         />
            //     </View>
            // </Camera>
        )
    }

    return (
        // <Camera stylesref={cameraRef}>
        //     <View>
        //         <Button
        //         title="camera button"
        //         onPress={takePic}
        //         />
        //     </View>
        // </Camera>
        <View>
            <Text>PeepeePoopooPeepee</Text>
            <Button 
                title="Use Camera"
                onPress={toggleOnCamera}
            />
        </View>
    )
};