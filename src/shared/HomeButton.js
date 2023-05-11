/* HomeButton.js */

import React from 'react';
import {StyleSheet, TouchableOpacity, Platform, Image} from 'react-native';
import {CommonActions} from '@react-navigation/native';

const HomeButton = props => {
  const navigateHomeScreen = () => {
    props.navigation?.dispatch(
      CommonActions.navigate({
        name: 'Home',
      }),
    );
  };

  return (
    <TouchableOpacity
      style={{paddingLeft: 20}}
      onPress={() => navigateHomeScreen()}>
      <Image
        source={require('../../images/home.png')}
        style={styles.imageStyle}
      />
    </TouchableOpacity>
  );
};
export default HomeButton;

/*
 * home_button.png icon 35x35 px
 */

const styles = StyleSheet.create({
  imageStyle: {
    height: 51,
    width: 32,
    marginTop: 4,
  },
});
