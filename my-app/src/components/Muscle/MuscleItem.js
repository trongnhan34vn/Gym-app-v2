import React from 'react'
import { Image, Text, View } from 'react-native'

const MuscleItem = () => {
  return (
    <View className="flex items-center">
      <Text className="text-[#fff] mb-2">Ngực</Text>
      <Image className="rounded-[3px] w-20 h-20 bg-center" source={require('../../../assets/img/muscle/nguc.jpg')} />
    </View>
  )
}

export default MuscleItem