import React, {useEffect, useState} from 'react';
import {
  Button,
  NativeEventEmitter,
  NativeModules,
  requireNativeComponent,
  Text,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';

const PassioSDK = NativeModules.PassioPlatformSDKBridge;
const PassioCameraView = requireNativeComponent('PassioCameraView');

export const CameraNativeScreen = ({navigation}) => {
  const [sdkStatus, setSdkStatus] = useState('');
  const [isDetecting, setIsDetecting] = useState(false);
  const [candidate, setCandidate] = useState('');
  const [prevCandidate, setPrevCandidate] = useState('');
  useEffect(() => {
    PassioSDK.configure(
      '2o1No6sYGZpnwzOjJn8uMj3pkRwW2QR4oizx8GFW0C5L', // your license key here
      '559b0ec1-d892-11ed-8d61-d257af01c9c1', // your projectID here
      1, // set debugMode here
      true, // set autoUpdate as true
    ).then(result => {
      setSdkStatus(result);
    });

    const PassioSDKListener = new NativeEventEmitter(PassioSDK);
    PassioSDKListener.addListener('onDetectionCandidates', setCandidate);
    // PassioSDK.startDetection();

    return () => {
      PassioSDK.stopDetection();
      PassioSDK.removeListeners(true);
    };
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {sdkStatus === 'isReadyForDetection' ? (
        <>
          <PassioCameraView style={{flex: 1, width: '100%'}} />
          <View
            style={{
              position: 'absolute',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              bottom: 100,
            }}>
            <Pressable
              style={styles.button}
              onPress={() => {
                if (!isDetecting) {
                  PassioSDK.startDetection();
                  var _myInterval = setInterval(function () {
                    if (prevCandidate == candidate) {
                      //if detected value remains same for 5 seconds then redirect to cuisine details page
                      // console.warn(candidate);

                      navigation.navigate('Cuisine', {recipe: prevCandidate});
                    } else {
                      console.warn(
                        'Value was changed between past 2 second prev: ',
                        prevCandidate,
                        ' New: ',
                        candidate,
                      );
                      setPrevCandidate(candidate);
                    }
                  }, 5000);
                } else {
                  PassioSDK.stopDetection();
                  setCandidate('');
                }
                setIsDetecting(!isDetecting);
              }}>
              <Text style={styles.text}>{!isDetecting ? 'Start' : 'Stop'}</Text>
            </Pressable>

            <Text>{`Candidate: ${candidate}`}</Text>
          </View>
        </>
      ) : (
        <Text>RN Passio Platform SDK</Text>
      )}
    </View>
  );
};

export default CameraNativeScreen;
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
