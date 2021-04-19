import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ThemeProvider} from 'react-native-elements';
import SCREENS from './src/utils/Routes';
import {theme} from './src/utils/theme';

export type RootStackParamList = {
  Starter: undefined;
} & {
  [P in keyof typeof SCREENS]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            {/* <Stack.Screen
              key={'Starter'}
              name="Starter"
              component={Starter}
              options={{headerShown: false}}
            /> */}
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
      </ThemeProvider>
    </>
  );
};

export default App;
