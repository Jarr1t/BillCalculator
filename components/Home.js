import {View, Text, Button} from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

export default function Home() {
    let cameraRef = useRef();
    const [hasCameraPermissions, setHasCameraPermissions] = useState(undefined);
    

    return (
        <View>
            <Text>PeepeePoopooPeepee</Text>
            <Button 
                title="This is a button"
            />
        </View>
    )
};