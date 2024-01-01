import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { exerciseSelector } from '../redux/selector'
import SkeletonComp from '../components/Skeleton/SkeletonComp'

const ExerciseDetailScreen = () => {
  const exercise = useSelector(exerciseSelector).select;

  return (
    <ScrollView className="bg-[#1D2125] h-screen">
      {!exercise ? <View className="flex items-center justify-center mt-10">
        <SkeletonComp type={'retangular'} />
        <View className="mb-2"></View>
        <SkeletonComp type={'line'} />
        <View className="mb-2"></View>
        <SkeletonComp type={'line'} />
        <View className="mb-2"></View>
        <SkeletonComp type={'line'} />
      </View> :
        <View>
          <View className="w-full">
            <Image className="w-full h-[380px]" source={{ uri: exercise.image }} />
          </View>
          <View className="mx-4 mt-5">
            <View className="flex">
              <Text className="font-bold text-white text-[16px]">Bài tập: <Text>{exercise.name}</Text></Text>
            </View>
            <View className="flex mt-2">
              <Text className="text-white text-[16px]">Độ khó: {exercise.difficult}/5</Text>
            </View>
            <View className="flex mt-2 mb-2">
              <Text className="text-white text-[16px]">Các bước thực hiện: </Text>
              <View>
                <Text className="text-white text-[16px]"> 
                  {exercise.steps}
                </Text>
              </View>
            </View>
            
          </View>
        </View>
      }



    </ScrollView>
  )
}

export default ExerciseDetailScreen