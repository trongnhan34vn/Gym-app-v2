import React from 'react'
import { Image, Text } from 'react-native'
import { View } from 'react-native'
import MuscleItem from './MuscleItem'
import { useRoute } from '@react-navigation/native';

const MuscleGroupItem = () => {
  const route = useRoute();

  return (
    <View className="bg-[#A1BDD914] p-3 rounded-[3px] mb-3">
      <View className="flex flex-row items-center justify-between mb-3">
        <Text className="text-[#fff] font-bold text-[16px]">Ngực - Bắp tay dưới</Text>
        <Text className="text-[#579DFF]">{route.name === 'CustomerExerciseDetail' ? 'Chỉnh sửa' : 'Bắt đầu'}</Text>
      </View>
      <View className="flex flex-row gap-3 mb-5">
        <View>
          <MuscleItem />
        </View>
        <View>
          <MuscleItem />
        </View>
        <View>
          <MuscleItem />
        </View>
      </View>
      <View className="flex flex-row gap-2">
        <Image className="rounded-[3px] w-10 h-10" source={require('../../../assets/img/exercise/bai_1.jpg')} />
        <Image className="rounded-[3px] w-10 h-10" source={require('../../../assets/img/exercise/bai_2.jpg')} />
        <Image className="rounded-[3px] w-10 h-10" source={require('../../../assets/img/exercise/bai_5.jpg')} />
        <Image className="rounded-[3px] w-10 h-10" source={require('../../../assets/img/exercise/bai_1.jpg')} />
        <Image className="rounded-[3px] w-10 h-10" source={require('../../../assets/img/exercise/bai_1.jpg')} />
      </View>
    </View>
  )
}

export default MuscleGroupItem