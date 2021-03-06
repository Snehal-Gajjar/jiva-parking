import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {View, ImageSourcePropType, Dimensions, StyleSheet} from 'react-native';
import {Image} from 'react-native-elements';
// import Carousel from 'react-native-snap-carousel';
import ImageSlider from 'react-native-image-slider';
// import {SwiperFlatList} from 'react-native-swiper-flatlist';
import Swiper from 'react-native-swiper';
import {AuthService} from '../../api/services';
import {toastShow} from '../../utils/Toast';
import {Advertisement} from '../../utils/types';

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
  const [advertisement, setadvertisement] = useState<Advertisement[]>([]);

  useEffect(() => {
    getAdvertisement();
  }, []);

  const getAdvertisement = () => {
    AuthService.getAdvertisement()
      .then((result) => setadvertisement(result.data))
      .catch((err) => toastShow('error', err.message));
  };

  const _renderItem = (item: Advertisement) => {
    return (
      <View style={BottomCarouselStyle.slideContainer}>
        <Image
          source={{uri: item.content}}
          style={BottomCarouselStyle.slideImage}
        />
      </View>
    );
  };
  return (
    <View style={BottomCarouselStyle.container}>
      {advertisement.length > 0 && (
        <Swiper
          height={90}
          loop
          showsPagination
          autoplay
          dot={
            <View
              style={{
                backgroundColor: 'rgba(255,255,255,.3)',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7,
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#fff',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7,
              }}
            />
          }>
          {advertisement.map((img) => _renderItem(img))}
        </Swiper>
      )}
    </View>
  );
};

const BottomCarouselStyle = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 15,
    marginBottom: 10,
    height: 150,
  },
  slideContainer: {
    height: '100%',
  },
  slideImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
});
