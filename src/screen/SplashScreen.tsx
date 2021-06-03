import React, {FC} from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';
import {Image} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import Video from 'react-native-video';

export const SplashScreen: FC = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
      }}>
      <View style={style.logoContainer}>
        <View style={style.logo}>
          <Image
            source={require('../assets/images/logo-new.gif')}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </View>
        <Text style={style.logoTxt}>Parkaro</Text>
      </View>
      <Video
        source={require('../assets/images/video.mp4')}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 300,
          width: '100%',
        }}
        audioOnly={false}
        fullscreen={false}
        muted={true}
        rate={2}
        controls={false}
        resizeMode="cover"
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
  },
  logo: {
    width: 90,
    height: 90,
    ...Platform.select({
      ios: {
        shadowColor: '#0655911A',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  logoTxt: {
    fontSize: 21,
    color: '#0E5A93',
    fontFamily: 'Segoe UI Semibold',
    marginTop: 5,
  },
});
