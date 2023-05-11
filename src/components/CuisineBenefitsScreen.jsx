import {useEffect, useState} from 'react';
import {recipeKeyValPair} from '../shared/variables';
import WebView from 'react-native-webview';
const sambhar = require('../resources/sambhar/benefits.html');
const vada = require('../resources/vada/benefits.html');
const lassi = require('../resources/lassi/benefits.html');
function CuisineBenefitsScreen(navigation) {
  var recipe = navigation.route.params.recipe;

  return (
    <WebView
      originWhitelist={['*']}
      source={
        recipe == 'sambhar'
          ? sambhar
          : (recipe == 'vada' ? vada : recipe == 'lassi')
          ? lassi
          : ''
      }
      style={{flex: 1}}
    />
  );
}

export default CuisineBenefitsScreen;
