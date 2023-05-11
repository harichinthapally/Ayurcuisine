import WebView from 'react-native-webview';
const sambhar = require('../resources/sambhar/prep.html');
const vada = require('../resources/vada/prep.html');
const lassi = require('../resources/lassi/prep.html');
function CuisinePrepScreen(navigation) {
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

export default CuisinePrepScreen;
