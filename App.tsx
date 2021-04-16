import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SCREENS from './src/utils/Routes';

type RootStackParamList = {
  [P in keyof typeof SCREENS]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {(Object.keys(SCREENS) as (keyof typeof SCREENS)[]).map((name) => (
            <Stack.Screen
              key={name}
              name={name}
              getComponent={() => SCREENS[name].component}
              options={{title: SCREENS[name].title}}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
