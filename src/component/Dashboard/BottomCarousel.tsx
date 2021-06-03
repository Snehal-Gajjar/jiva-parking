import React from 'react';
import {View, ImageSourcePropType, Dimensions, StyleSheet} from 'react-native';
import {Image} from 'react-native-elements';
// import Carousel from 'react-native-snap-carousel';
import ImageSlider from 'react-native-image-slider';
// import {SwiperFlatList} from 'react-native-swiper-flatlist';
import Swiper from 'react-native-swiper';

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
  const _renderItem = (item: {img: ImageSourcePropType}) => {
    return (
      <View style={BottomCarouselStyle.slideContainer}>
        <Image source={item.img} style={BottomCarouselStyle.slideImage} />
      </View>
    );
  };
  return (
    <View style={BottomCarouselStyle.container}>
      <Swiper height={90} loop autoplay autoplayTimeout={2} showsPagination={false}>
        {imageCollection.map((img) => _renderItem(img))}
      </Swiper>
    </View>
  );
};

const BottomCarouselStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 4,
    flex: 1,
  },
  slideContainer: {
    height: 100,
  },
  slideImage: {
    width: '100%',
    height: '100%',
  },
});
