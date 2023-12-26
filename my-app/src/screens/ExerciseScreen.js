import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import Rating from '../components/Rating/Rating';
import ExerciseItem from '../components/Exercise/ExerciseItem';
import MuscleGroupItem from '../components/Muscle/MuscleGroupItem';

const ExerciseScreen = () => {
  return (
    <ScrollView className="bg-[#1D2125] h-screen">
      <View className="flex flex-row items-center gap-4 p-4">
        <FontAwesome5 name="fast-forward" size={20} color="white" />
        <Text className="text-[#fff] text-[20px]">Luyện tập theo các nhóm cơ</Text>
      </View>
      <View className="px-4 mb-5">
        <View className="rounded-[3px]">
          {/* <View className="mb-5">
            <Text className="text-[#fff] font-bold text-[16px]">Ngực - Bắp tay dưới</Text>
          </View> */}
          <ScrollView >
            <MuscleGroupItem />
            <MuscleGroupItem />
            <MuscleGroupItem />
            <MuscleGroupItem />
            <MuscleGroupItem />
          </ScrollView>
        </View>

      </View>
    </ScrollView>
  )
}

export default ExerciseScreen