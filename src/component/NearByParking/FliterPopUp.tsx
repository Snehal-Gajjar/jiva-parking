import React, {FC, useState} from 'react';
import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, CheckBox, Divider, Icon} from 'react-native-elements';
import Modal from 'react-native-modal';
import {NearByParkingService} from '../../api/services';
import {Amenities} from '../../utils/types';
type Props = {
  visible: boolean;
  handleClose: () => void;
  handleFilterEvent: (
    checkedId: string,
    roof: 'open' | 'close',
    use: 'personal' | 'event',
  ) => void;
};

export const FliterPopUp: FC<Props> = ({
  visible,
  handleClose,
  handleFilterEvent,
}) => {
  const [amenities, setAmenities] = useState<Amenities[]>([]);
  const [checkedState, setCheckedState] = useState<boolean[]>([]);
  const [checkedId, setCheckedId] = useState<string[]>([]);
  const [roof, setRoof] = useState<boolean>(false);
  const [use, setUse] = useState<boolean>(false);

  const handleRadioChange = (name: 'roof' | 'use') => {
    if (name === 'roof') {
      setRoof(!roof);
    } else {
      setUse(!use);
    }
  };

  const handleChange = (position: number, id: string) => {
    const updatedCheckedState = checkedState.map((item, index) => {
      if (index === position) {
        if (!item) {
          checkedId.push(id);
        } else {
          const index = checkedId.indexOf(id);
          if (index > -1) {
            checkedId.splice(index, 1);
          }
        }
        return !item;
      } else {
        return item;
      }
    });
    setCheckedId(checkedId);
    setCheckedState(updatedCheckedState);
  };

  const handleFilterPress = () => {
    handleFilterEvent(
      JSON.stringify(checkedId),
      roof ? 'open' : 'close',
      use ? 'event' : 'personal',
    );
  };

  useEffect(() => {
    getAmenities();
  }, []);

  const getAmenities = () => {
    NearByParkingService.Amenities()
      .then((result) => {
        setAmenities(result.data);
        setCheckedState(new Array(result.data.length).fill(false));
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <Modal
      testID={'modal'}
      isVisible={visible}
      onSwipeComplete={handleClose}
      coverScreen={true}
      hasBackdrop={true}
      style={styles.view}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={[styles.titleStyle, {color: '#0E5A93', fontSize: 17}]}>
            Filters
          </Text>
          <Icon
            name="close"
            onPress={handleClose.bind(this)}
            size={20}
            color="#0E5A93"></Icon>
        </View>
        <View>
          <Text style={styles.titleStyle}>Amenities</Text>
          <View style={styles.amcontainer}>
            {amenities.map((val, index) => (
              <View style={styles.amitem}>
                <CheckBox
                  containerStyle={{
                    backgroundColor: 'transparent',
                    marginLeft: 5,
                    borderColor: 'transparent',
                    padding: 0,
                    marginTop: 5,
                  }}
                  title={val.title}
                  checked={checkedState[index]}
                  onPress={(e) => {
                    e.preventDefault();
                    handleChange(index, val.id);
                  }}
                />
              </View>
            ))}
          </View>
        </View>
        <Divider style={{backgroundColor: '#0E5A93', margin: 5}} />
        <View style={styles.bottomContainer}>
          <View style={{width: '50%'}}>
            <Text style={styles.titleStyle}>Roof</Text>
            <CheckBox
              containerStyle={{
                backgroundColor: 'transparent',
                marginLeft: 5,
                borderColor: 'transparent',
                padding: 0,
                marginTop: 5,
              }}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              title="Open"
              checked={roof}
              onPress={(e) => {
                e.preventDefault();
                handleRadioChange('roof');
              }}
            />
            <CheckBox
              containerStyle={{
                backgroundColor: 'transparent',
                marginLeft: 5,
                borderColor: 'transparent',
                padding: 0,
                marginTop: 5,
              }}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              title="Close"
              checked={!roof}
              onPress={(e) => {
                e.preventDefault();
                handleRadioChange('roof');
              }}
            />
          </View>
          <View style={{width: '50%'}}>
            <Text style={styles.titleStyle}>Use</Text>
            <CheckBox
              containerStyle={{
                backgroundColor: 'transparent',
                marginLeft: 5,
                borderColor: 'transparent',
                padding: 0,
                marginTop: 5,
              }}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              title="Event"
              checked={use}
              onPress={(e) => {
                e.preventDefault();
                handleRadioChange('use');
              }}
            />
            <CheckBox
              containerStyle={{
                backgroundColor: 'transparent',
                marginLeft: 5,
                borderColor: 'transparent',
                padding: 0,
                marginTop: 5,
              }}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              title="Personal"
              checked={!use}
              onPress={(e) => {
                e.preventDefault();
                handleRadioChange('use');
              }}
            />
          </View>
        </View>
        <Button
          title="Search"
          onPress={handleFilterPress.bind(this)}
          buttonStyle={styles.search}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 0,
    shadowColor: '#0655911A',
    shadowOpacity: 10,
    shadowRadius: 5,
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 2,
    height: 50,
    fontSize: 15,
  },
  titleStyle: {
    fontFamily: 'Segoe UI Semibold',
    fontSize: 15,
    color: '#000',
    marginTop: 10,
  },
  amcontainer: {
    display: 'flex',
    // flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  amitem: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  search: {
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 2,
    height: 50,
    fontSize: 15,
  },
});
