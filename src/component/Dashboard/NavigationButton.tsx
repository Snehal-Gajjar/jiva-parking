import React, {FC} from 'react';
import {View, Text, ImageSourcePropType, StyleSheet} from 'react-native';
import {Button, ButtonProps, Image} from 'react-native-elements';

type Props = {
  image: ImageSourcePropType;
  title: string;
} & ButtonProps;

export const NavigationButton: FC<Props> = ({image, title, onPress}) => {
  return (
    <View style={ButtonStyle.container}>
      <Button
        onPress={onPress}
        raised
        type="outline"
        buttonStyle={ButtonStyle.buttonStyle}
        containerStyle={ButtonStyle.containerStyle}
        icon={
          <Image
            source={image}
            style={{
              height: 60,
              width: 60,
            }}
          />
        }></Button>
      <Text style={ButtonStyle.title}>{title}</Text>
    </View>
  );
};

const ButtonStyle = StyleSheet.create({
  container: {
    width: 100,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    padding: 15,
    borderRadius: 20,
  },
  containerStyle: {
    borderRadius: 20,
  },
  title: {
    fontFamily: 'Segoe UI Bold',
    color: '#0E5A93',
    fontSize: 15,
    marginTop: 7,
  },
});
