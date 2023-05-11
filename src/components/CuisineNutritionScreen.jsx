import WebView from 'react-native-webview';
const sambhar = require('../resources/sambhar/nutrition.html');
const vada = require('../resources/vada/nutrition.html');
const lassi = require('../resources/lassi/nutrition.html');
function CuisineNutritionScreen(navigation) {
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

export default CuisineNutritionScreen;
