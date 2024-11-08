import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import FilmsScreen from './screen/FilmsScreen';
import PlanetsScreen from './screen/PlanetsScreen';
import SpaceScreen from './screen/SpaceScreen';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Films') {
              iconName = 'film';
            } else if (route.name === 'Planets') {
              iconName = 'planet';
            } else if (route.name === 'Space') {
              iconName = 'rocket';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Films" component={FilmsScreen} />
        <Tab.Screen name="Planets" component={PlanetsScreen} />
        <Tab.Screen name="Space" component={SpaceScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
