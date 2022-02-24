import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabUpbit from '../screens/TabUpbit';
import DetailUpbit from '../screens/DetailUpbit';
import TabBithumb from '../screens/TabBithumb';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabUpbit"
      screenOptions={{
        tabBarLabelPosition: 'beside-icon',
        headerStatusBarHeight: 0,
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: '700',
          color: '#484848'
        },
        tabBarIconStyle: {
          display: 'none'
        },
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabUpbit"
        component={TabUpbit}
        options={({ navigation }: RootTabScreenProps<'TabUpbit'>) => ({
          title: '업비트',
        })}
      />
      <BottomTab.Screen
        name="TabBithumb"
        component={TabBithumb}
        options={{
          title: '빗썸',
        }}
      />
    </BottomTab.Navigator>
  );
}
