import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FilmsScreen from './screen/FilmsScreen';
import PlanetsScreen from './screen/PlanetsScreen';
import SpaceScreen from './screen/SpaceScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Film" component={FilmsScreen} />
        <Tab.Screen name="Planet" component={PlanetsScreen} />
        <Tab.Screen name="Space" component={SpaceScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
