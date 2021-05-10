import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import {ListItem, Text, ThemeProvider} from 'react-native-elements';
import SCREENS from './src/utils/Routes';
import {theme} from './src/utils/theme';
import {
  Dimensions,
  ScaledSize,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

type RootDrawerParamList = {
  Examples: undefined;
};

export type RootStackParamList = {
  Starter: undefined;
} & {
  [P in keyof typeof SCREENS]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

const App = () => {
  const [dimensions, setDimensions] = React.useState(Dimensions.get('window'));

  useEffect(() => {
    const onDimensionsChange = ({window}: {window: ScaledSize}) => {
      setDimensions(window);
    };
    SplashScreen.hide()
    Dimensions.addEventListener('change', onDimensionsChange);

    return () => Dimensions.removeEventListener('change', onDimensionsChange);
  }, []);

  
  const isLargeScreen = dimensions.width >= 1024;
  console.log(dimensions.width)

  return (
    <>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  );
};

export default App;
