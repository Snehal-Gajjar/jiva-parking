import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Icon, Image} from 'react-native-elements';
import Modal from 'react-native-modal';
import {ServiceImageList} from '../../utils/ServiceImageList';
import {MarkerData} from '../../utils/types';
import {DetailContainer} from './DetailContainer';

type Props = {
  visible: boolean;
  handleClose: () => void;
  hanldeBookNow: (data?: MarkerData) => void;
  data?: MarkerData;
};

export const DetailPopUp: FC<Props> = ({
  visible,
  handleClose,
  hanldeBookNow,
  data,
}) => {
  return (
    <Modal
      testID={'modal'}
      isVisible={visible}
      onSwipeComplete={handleClose}
      swipeDirection={['up', 'left', 'right', 'down']}
      coverScreen={false}
      hasBackdrop={false}
      style={styles.view}>
      <View style={styles.container}>
        <DetailContainer {...{data}} />
        <Button
          title="Book Now"
          buttonStyle={styles.btnBook}
          onPress={() => hanldeBookNow(data)}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    margin: 0,
    shadowColor: '#0655911A',
    shadowOpacity: 10,
    shadowRadius: 5,
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
  container: {
    backgroundColor: '#FFF',
    padding: 10,
    opacity: 1,
    borderRadius: 15,
    margin: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  btnBook: {
    marginTop: 5,
    borderRadius: 10,
    borderWidth: 2,
    fontSize: 15,
  },
});
