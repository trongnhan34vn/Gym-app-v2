import React from 'react'
import { View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const LoadingOverlayComp = ({active}) => {
  return (
    <View>
      <Spinner visible={active} textContent='Loading...' textStyle={{color: '#fff'}} />
    </View>
  )
}

export default LoadingOverlayComp