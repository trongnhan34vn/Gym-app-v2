import React, { useEffect } from 'react'
import { Image, Text } from 'react-native'
import { View } from 'react-native'
import MuscleItem from './MuscleItem'

const MuscleGroupItem = ({ muscle }) => {
  return (
    <View className="bg-[#A1BDD914] p-3 rounded-[3px] mb-3 flex items-center">
      <View className="flex flex-row items-center justify-between mb-3">
        <Text className="text-[#fff] font-bold text-[16px]">{muscle.name}</Text>
        {/* <Text className="text-[#579DFF]">{route.name === 'CustomerExerciseDetail' ? 'Chỉnh sửa' : 'Bắt đầu'}</Text> */}
      </View>
      <View className="flex flex-row gap-3 mx-1">
        <MuscleItem muscle={muscle} />
      </View>

      {/* <View className="flex flex-row gap-2">
        {exerciseFilter.map((exe, index) => {
          return <Image key={exe._id} className="rounded-[3px] w-10 h-10" source={{uri: exe.image}} />
        })}
      </View> */}
    </View>
  )
}

export default MuscleGroupItem