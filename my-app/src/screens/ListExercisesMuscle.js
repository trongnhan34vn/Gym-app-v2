import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import ExerciseItem from '../components/Exercise/ExerciseItem'
import { useSelector, useDispatch } from 'react-redux'
import { exerciseSelector, muscleSelector } from '../redux/selector'
import { findByMuscleId } from '../thunk/exerciseThunk'
import SkeletonComp from '../components/Skeleton/SkeletonComp'

const ListExercisesMuscle = () => {
  const muscle = useSelector(muscleSelector).select;
  const dispatch = useDispatch()

  useEffect(() => {
    if (!muscle) return;
    dispatch(findByMuscleId(muscle._id));
  }, [muscle])

  const exercises = useSelector(exerciseSelector).muscleExercises;

  return (
    <View className="bg-[#1D2125] h-screen">
      {muscle ? <View>
        <View className="mx-4 mt-2 mb-5">
          <Text className="text-white font-bold text-[16px] mb-2">Cơ đang tập: {muscle.name}</Text>
          <Image className="rounded-[3px] w-20 h-20" source={{ uri: muscle.image }} />
        </View>

        <View className="mx-4 mt-2">
          <Text className="text-white font-bold text-[16px] mb-4">Bài tập:</Text>
          {exercises.map(exe => {
            return <ExerciseItem key={exe._id} exe={exe} />
          })}
        </View>
      </View> : <View>
        <View className="mx-4 mt-2 mb-5">
          <Text className="text-white font-bold text-[16px] mb-2">Cơ đang tập: </Text>
          <SkeletonComp type={'retangular'} />
        </View>

        <View className="mx-4 mt-2">
          <Text className="text-white font-bold text-[16px] mb-4">Bài tập:</Text>
          <View className="mb-2">
            <SkeletonComp type={'rectangular'} />
          </View>
          <View className="mb-2">
            <SkeletonComp type={'rectangular'} />
          </View>
        </View>
      </View>
      }

    </View>
  )
}

export default ListExercisesMuscle