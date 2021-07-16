import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import Modal from 'react-native-modal';
import {Picker} from '@react-native-picker/picker';
import {WalletService} from '../../api/services';
import {toastShow} from '../../utils/Toast';
import {useState} from 'react';
import {
  DocumentDirectoryPath,
  DownloadFileOptions,
  downloadFile,
} from 'react-native-fs';

type Props = {
  visible: boolean;
  handleClose: () => void;
};

export const WalletStatementPopup: FC<Props> = ({visible, handleClose}) => {
  const [type, setType] = useState<string>('week');

  const downloadPDF = async (url: string, fileName: string): Promise<any> => {
    const path = `${DocumentDirectoryPath}/${fileName}.pdf`;
    const headers = {
      Accept: 'application/pdf',
      'Content-Type': 'application/pdf',
      Authorization: `Bearer [token]`,
    };

    const options: DownloadFileOptions = {
      fromUrl: '', //url
      toFile: path,
      headers: headers,
    };

    const response = await downloadFile(options);
    return response.promise.then(async (res) => {
      //Transform response
      // if (res && res.statusCode === 200 && res.bytesWritten > 0 && res.statusCode) {
      //   doSomething(res);
      // } else {
      //   logError(res);
      // }
    });
  };
  const handleDownload = () => {
    WalletService.walletStatement(type)
      .then((result) => {
        const data = result.data;
        downloadPDF('', '');
        toastShow('success', 'Download Successfully');
      })
      .catch((err) => toastShow('error', err.message));
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
            Wallet statement request
          </Text>
          <Icon
            name="close"
            onPress={handleClose.bind(this)}
            size={20}
            color="#0E5A93"></Icon>
        </View>
        <View
          style={{
            width: '100%',
            height: 45,
            backgroundColor: '#fff',
            borderRadius: 10,
          }}>
          <Picker
            style={{
              fontSize: 13,
            }}
            onValueChange={(val: string) => setType(val)}
            mode="dropdown">
            <Picker.Item label={'Last Week'} value={'week'} />
            <Picker.Item label={'Last Month'} value={'month'} />
            <Picker.Item label={'Last Six Month'} value={'halfyear'} />
            <Picker.Item label={'Last Year'} value={'year'} />
          </Picker>
        </View>
        <Button
          title="Download Invoice"
          buttonStyle={styles.search}
          onPress={handleDownload}
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
  titleStyle: {
    fontFamily: 'Segoe UI Semibold',
    fontSize: 15,
    color: '#000',
    marginTop: 10,
  },
  search: {
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 2,
    height: 45,
    fontSize: 15,
  },
});
