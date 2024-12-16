import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import FilmsScreen from './screen/FilmsScreen';
import PlanetsScreen from './screen/PlanetsScreen';
import SpaceScreen from './screen/SpaceScreen';
import DetailPage from './screen/DetailPage';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack Navigator for Films
function FilmsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Films" 
        component={FilmsScreen} 
        options={{ title: "Films" }}
      />
      <Stack.Screen 
        name="DetailPage" 
        component={DetailPage} 
        options={({ route }) => ({ title: route.params.item.name || "Details" })}
      />
    </Stack.Navigator>
  );
}



// Main App
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
        <Tab.Screen 
          name="Films" 
          component={FilmsStack} 
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Planets" 
          component={PlanetsScreen} 
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Space" 
          component={SpaceScreen} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
