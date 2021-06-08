import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useEffect, useState} from 'react';
import {ListItem, Text, ThemeProvider} from 'react-native-elements';
import SCREENS, {AUTHSCREENS, DRAWER} from './src/utils/Routes';
import {theme} from './src/utils/theme';
import {Dimensions, ScaledSize, ScrollView} from 'react-native';
import {SplashScreen} from './src/screen/SplashScreen';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/utils/Toast';
import storage from './src/utils/storage';
import {RootStackParamList} from './src/utils/NavigationTypes';
import {CurrentUserContext} from './src/utils/context';
import {CurrentUser, extractCurrentUser, NULL_USER} from './src/utils/auth';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const [currentUser, setCurrentUser] = useState<CurrentUser>(NULL_USER);
  const [dimensions, setDimensions] = React.useState(Dimensions.get('window'));
  const [isLoadingSplash, setIsLoadingSplash] = useState(true);
  const init = (): void => {
    setTimeout(async () => {
      setIsLoadingSplash(false);
    }, 3000);
  };

  const handleUser = async () => {
    if (currentUser.loggedIn) {
      setCurrentUser({loggedIn: false});
    } else {
      saveUserLogin();
    }
  };

  const saveUserLogin = async () => {
    const user = await extractCurrentUser();
    setCurrentUser(user);
  };

  useEffect(() => {
    saveUserLogin();
    const onDimensionsChange = ({window}: {window: ScaledSize}) => {
      setDimensions(window);
    };
    Dimensions.addEventListener('change', onDimensionsChange);
    init();
    return () => Dimensions.removeEventListener('change', onDimensionsChange);
  }, [currentUser]);

  return (
    <CurrentUserContext.Provider value={{handleUser: handleUser}}>
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
              {!currentUser.loggedIn &&
                (Object.keys(
                  AUTHSCREENS,
                ) as (keyof typeof AUTHSCREENS)[]).map((name) => (
                  <Stack.Screen
                    key={name}
                    name={name}
                    getComponent={() => AUTHSCREENS[name].component}
                    options={{title: AUTHSCREENS[name].title}}
                  />
                ))}
              {currentUser.loggedIn &&
                (Object.keys(DRAWER) as (keyof typeof DRAWER)[]).map((name) => (
                  <Stack.Screen
                    key={name}
                    name={name}
                    getComponent={() => DRAWER[name].component}
                    options={{title: DRAWER[name].title}}
                  />
                ))}
            </Stack.Navigator>
          </NavigationContainer>
        )}
        <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
      </ThemeProvider>
    </CurrentUserContext.Provider>
  );
};

export default App;
