import React from 'react'
import { Image, Text, View } from 'react-native'

const MuscleItem = ({ muscle }) => {
  return (
    <View className="flex items-center mt-3">
      {/* <Text className="text-[#fff] mb-2">Ngực</Text> */}
      <Image className="rounded-[3px] w-24 h-24 bg-center" source={{ uri: muscle.image }} />
    </View>
  )
}

export default MuscleItem