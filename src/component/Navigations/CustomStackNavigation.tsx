import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {CARSCREENS, NEARBYPARKING, SCREENS} from '../../utils/Routes';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import {
  CarRootParamList,
  NearByRootParamList,
  RootDrawerParamList,
} from '../../utils/NavigationTypes';
import {CustomDrawerItem} from './CustomDrawerItem';

const CarStack = createStackNavigator<CarRootParamList>();

const CarNavigator = () => {
  return (
    <CarStack.Navigator
      headerMode="none"
      screenOptions={({route, navigation}) => ({
        headerShown: false,
        ...TransitionPresets.DefaultTransition,
      })}>
      {(Object.keys(CARSCREENS) as (keyof typeof CARSCREENS)[]).map((name) => (
        <CarStack.Screen
          key={name}
          name={name}
          getComponent={() => CARSCREENS[name].component}
          options={{title: CARSCREENS[name].title}}
        />
      ))}
    </CarStack.Navigator>
  );
};

const NearByStack = createStackNavigator<NearByRootParamList>();

const NearByParkingNavigator = () => {
  return (
    <NearByStack.Navigator
      headerMode="none"
      screenOptions={({route, navigation}) => ({
        headerShown: false,
        ...TransitionPresets.DefaultTransition,
      })}>
      {(Object.keys(NEARBYPARKING) as (keyof typeof NEARBYPARKING)[]).map(
        (name) => (
          <NearByStack.Screen
            key={name}
            name={name}
            getComponent={() => NEARBYPARKING[name].component}
            options={{title: NEARBYPARKING[name].title}}
          />
        ),
      )}
    </NearByStack.Navigator>
  );
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#0E5A93',
      }}
      drawerContent={(
        props: DrawerContentComponentProps<DrawerContentOptions>,
      ) => <CustomDrawerItem {...{props}} />}>
      {(Object.keys(SCREENS) as (keyof typeof SCREENS)[]).map((name) => (
        <Drawer.Screen
          key={name}
          name={name}
          getComponent={() => SCREENS[name].component}
          options={{title: SCREENS[name].title}}
        />
      ))}
    </Drawer.Navigator>
  );
};
export {DrawerNavigator, NearByParkingNavigator, CarNavigator};
