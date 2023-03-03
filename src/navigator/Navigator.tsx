import React, {useContext} from 'react'
import {View} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeContext } from '../context/themeContext/ThemeContext';


import { AlertScreen } from '../screens/AlertScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { PullToRefreshScreen } from '../screens/PullToRefreshScreen';
import { SectionListScreen } from '../screens/SectionListScreen';
import { SlidesScreens } from '../screens/SlidesScreens';
import { SwitchScreen } from '../screens/SwitchScreen';
import { TextInputScreen } from '../screens/TextInputScreen';


const Stack = createStackNavigator();

export const Navigator = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <View style={{backgroundColor:theme.colors.background, flex:1}} >
      <NavigationContainer
        theme={theme}
      >
        <Stack.Navigator
            screenOptions={{
              headerShown: false,
              cardStyle:{
                //backgroundColor:'white'
              } 
            }}
            >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
          <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
          <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
          <Stack.Screen name="AlertScreen" component={AlertScreen} />
          <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
          <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
          <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
          <Stack.Screen name="ModalScreen" component={ModalScreen} />
          <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
          <Stack.Screen name="SlidesScreens" component={SlidesScreens} />
          <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}