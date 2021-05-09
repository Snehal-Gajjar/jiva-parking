import React, {FC, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, CheckBox, Divider, Icon} from 'react-native-elements';
import Modal from 'react-native-modal';
type Props = {
  visible: boolean;
  handleClose: () => void;
};

export const FliterPopUp: FC<Props> = ({visible, handleClose}) => {
  const [checked, setChecked] = useState(false);
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
            onPress={handleClose}
            size={20}
            color="#0E5A93"></Icon>
        </View>
        <View>
          <Text style={styles.titleStyle}>Amenities</Text>
          <View style={styles.amcontainer}>
            <View style={styles.amitem}>
              <CheckBox
                containerStyle={{
                  backgroundColor: 'transparent',
                  marginLeft: 5,
                  borderColor: 'transparent',
                  padding: 0,
                  marginTop: 5,
                }}
                title="Parking Barrier"
                checked={checked}
                onPress={() => setChecked(!checked)}
              />
            </View>
            <View style={styles.amitem}>
              <CheckBox
                containerStyle={{
                  backgroundColor: 'transparent',
                  marginLeft: 5,
                  borderColor: 'transparent',
                  padding: 0,
                  marginTop: 5,
                }}
                title="EV Charger Point"
                checked={checked}
                onPress={() => setChecked(!checked)}
              />
            </View>
            <View style={styles.amitem}>
              <CheckBox
                containerStyle={{
                  backgroundColor: 'transparent',
                  marginLeft: 5,
                  borderColor: 'transparent',
                  padding: 0,
                  marginTop: 5,
                }}
                title="Disable Support"
                checked={checked}
                onPress={() => setChecked(!checked)}
              />
            </View>
            <View style={styles.amitem}>
              <CheckBox
                containerStyle={{
                  backgroundColor: 'transparent',
                  marginLeft: 5,
                  borderColor: 'transparent',
                  padding: 0,
                  marginTop: 5,
                }}
                title="CCTV Surviallance"
                checked={checked}
                onPress={() => setChecked(!checked)}
              />
            </View>
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
              checked={checked}
              onPress={() => setChecked(!checked)}
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
              checked={checked}
              onPress={() => setChecked(!checked)}
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
              checked={checked}
              onPress={() => setChecked(!checked)}
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
              checked={checked}
              onPress={() => setChecked(!checked)}
            />
          </View>
        </View>
        <Button
          title="Search"
          onPress={handleClose}
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
    fontFamily: 'Segoe UI Bold',
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
