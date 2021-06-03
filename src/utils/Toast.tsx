import Toast, {BaseToast, BaseToastProps} from 'react-native-toast-message';
import React from 'react';
export const toastShow = (
  type: 'success' | 'error' | 'info',
  message: string,
) => {
  return Toast.show({
    type: type,
    position: 'bottom',
    text1: message,
    visibilityTime: 2000,
    autoHide: true,
  });
};

export const toastConfig = {
  success: ({text1, ...rest}: BaseToastProps) => (
    <BaseToast
      {...rest}
      style={{borderLeftColor: 'blue'}}
      contentContainerStyle={{paddingHorizontal: 10}}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
      }}
      text1={text1}
    />
  ),
  error: ({text1, ...rest}: BaseToastProps) => (
    <BaseToast
      {...rest}
      style={{borderLeftColor: 'red'}}
      contentContainerStyle={{paddingHorizontal: 10}}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
      }}
      text1={text1}
    />
  ),
};
