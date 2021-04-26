import React from 'react';
import {
  View,
  ImageSourcePropType,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {Image} from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const imageCollection: {img: ImageSourcePropType}[] = [
  {
    img: require('../../assets/images/bottom.png'),
  },
  {
    img: require('../../assets/images/bottom.png'),
  },
  {
    img: require('../../assets/images/bottom.png'),
  },
];

export const BottomCarousel = () => {
  const _renderItem = ({
    item,
  }: {
    item: {img: ImageSourcePropType};
    index: number;
  }) => {
    return (
      <View style={BottomCarouselStyle.slideContainer}>
        <Image source={item.img} style={BottomCarouselStyle.slideImage} />
      </View>
    );
  };
  return (
    <View style={BottomCarouselStyle.container}>
      <Carousel
        layout={'default'}
        data={imageCollection}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        renderItem={_renderItem}
        autoplay
      />
    </View>
  );
};

const BottomCarouselStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
  },
  slideContainer: {
    height: 100,
    marginLeft: 25,
    marginRight: 25,
  },
  slideImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
