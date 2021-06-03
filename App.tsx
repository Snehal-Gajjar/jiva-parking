import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackScreenProps,
  TransitionPresets,
} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useEffect, useState} from 'react';
import {ListItem, Text, ThemeProvider} from 'react-native-elements';
import SCREENS, {AUTHSCREENS} from './src/utils/Routes';
import {theme} from './src/utils/theme';
import {
  Dimensions,
  ScaledSize,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SplashScreen} from './src/screen/SplashScreen';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/utils/Toast';
import {SignUp} from './src/screen/SignUp';
import storage from './src/utils/storage';

type RootDrawerParamList = {
  Examples: undefined;
};

export type RootStackParamList = {
  [P in keyof typeof AUTHSCREENS]: undefined;
} &
  {
    [P in keyof typeof SCREENS]: undefined;
  };

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

const App = () => {
  const [dimensions, setDimensions] = React.useState(Dimensions.get('window'));
  const [isLoadingSplash, setIsLoadingSplash] = useState(true);
  const [isLoggedIn, setisLoggedIn] = useState<boolean>(false);
  const init = (): void => {
    setTimeout(async () => {
      setIsLoadingSplash(false);
    }, 3000);
  };

  useEffect(() => {
    storage
      .load({
        key: 'user',
        autoSync: true,
        syncInBackground: true,
      })
      .then((res) => {
        const parsedneoUser = JSON.parse(res);
        setisLoggedIn(parsedneoUser.isUserLoggedIn);
      });
    const onDimensionsChange = ({window}: {window: ScaledSize}) => {
      setDimensions(window);
    };
    Dimensions.addEventListener('change', onDimensionsChange);
    init();
    return () => Dimensions.removeEventListener('change', onDimensionsChange);
  }, []);

  const isLargeScreen = dimensions.width >= 1024;
  console.log(dimensions.width);

  return (
    <>
      <ThemeProvider theme={theme}>
        {isLoadingSplash && <SplashScreen />}
        {!isLoadingSplash && (
          <NavigationContainer>
            <Stack.Navigator
              headerMode="none"
              screenOptions={({route, navigation}) => ({
                headerShown: false,
                ...TransitionPresets.DefaultTransition,
              })}>
              {!isLoggedIn
                ? (Object.keys(
                    AUTHSCREENS,
                  ) as (keyof typeof AUTHSCREENS)[]).map((name) => (
                    <Stack.Screen
                      key={name}
                      name={name}
                      getComponent={() => AUTHSCREENS[name].component}
                      options={{title: AUTHSCREENS[name].title}}
                    />
                  ))
                : (Object.keys(
                    SCREENS,
                  ) as (keyof typeof SCREENS)[]).map((name) => (
                    <Stack.Screen
                      key={name}
                      name={name}
                      getComponent={() => SCREENS[name].component}
                      options={{title: SCREENS[name].title}}
                    />
                  ))}
              {/* {(Object.keys(SCREENS) as (keyof typeof SCREENS)[]).map(
                (name) => (
                  <Stack.Screen
                    key={name}
                    name={name}
                    getComponent={() => SCREENS[name].component}
                    options={{title: SCREENS[name].title}}
                  />
                ),
              )} */}
            </Stack.Navigator>
          </NavigationContainer>
        )}
        <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
      </ThemeProvider>
    </>
  );
};

export default App;
