import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CuisineBenefitsScreen from '../src/components/CuisineBenefitsScreen';
import CuisineNutritionScreen from '../src/components/CuisineNutritionScreen';
import CuisinePrepScreen from '../src/components/CuisinePrepScreen';

import HomeButton from '../src/shared/HomeButton';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
} from 'react-native-fontawesome';

const Tab = createBottomTabNavigator();

export function CuisineNavigator(navigation) {
  console.warn(navigation.route.params);
  return (
    <Tab.Navigator initialRouteName="CuisineBenefits" goBack="firstRoute">
      <Tab.Screen
        name="Benefits"
        component={CuisineBenefitsScreen}
        options={{
          headerShown: false,
          headerLeft: <HomeButton navigation={navigation} />,
          headerStyle: {
            backgroundColor: 'green',
          },
          //  tabBarIcon: <FontAwesome icon={SolidIcons.smile} />,
        }}
        initialParams={navigation.route.params}
      />
      <Tab.Screen
        name="Nutrition"
        component={CuisineNutritionScreen}
        options={{
          headerShown: false,
          headerLeft: <HomeButton navigation={navigation} />,
          headerStyle: {
            backgroundColor: 'green',
          },
          //   tabBarIcon: <FontAwesome icon={SolidIcons.smile} />,
        }}
        initialParams={navigation.route.params}
      />
      <Tab.Screen
        name="Preparation"
        component={CuisinePrepScreen}
        options={{
          headerShown: false,
          headerLeft: <HomeButton navigation={navigation} />,
          headerStyle: {
            backgroundColor: 'green',
          },
          // tabBarIcon: <FontAwesome icon={SolidIcons.smile} />,
        }}
        initialParams={navigation.route.params}
      />
    </Tab.Navigator>
  );
}
