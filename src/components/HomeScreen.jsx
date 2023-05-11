import {
  Button,
  ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

export const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../images/ayur.webp')}
      style={{width: '100%', height: '100%'}}>
      <View style={styles.controlsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Camera')}>
          <Text style={styles.buttonText}>Scan your dish</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  message: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
    fontFamily: 'Avenir',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
