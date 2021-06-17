import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {SCREENS} from '../../utils/Routes';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import {RootDrawerParamList} from '../../utils/NavigationTypes';
import {CustomDrawerItem} from './CustomDrawerItem';

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
export {DrawerNavigator};
