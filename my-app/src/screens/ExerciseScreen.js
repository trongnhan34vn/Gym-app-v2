import React, { useEffect } from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'
import { findAll, findById } from '../thunk/muscleThunk';
import { muscleSelector } from '../redux/selector';
import MuscleGroupItem from '../components/Muscle/MuscleGroupItem';
import { FlatGrid } from 'react-native-super-grid';
import { useNavigation } from '@react-navigation/native';
import { findByMuscleId } from '../thunk/exerciseThunk';

const ExerciseScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAll())
  }, [])

  const muscles = useSelector(muscleSelector).muscles;

  const onSelect = (muscleId) => {
    dispatch(findById(muscleId))
    navigation.navigate('Muscle')
  }

  return (
    <View className="bg-[#1D2125] h-screen">
      <View className="flex flex-row items-center gap-4 p-4">
        <FontAwesome5 name="fast-forward" size={20} color="white" />
        <Text className="text-[#fff] text-[20px]">Luyện tập theo các nhóm cơ:</Text>
      </View>
      <View className="px-4 mb-5">
        <View className="rounded-[3px]">
          {/* <View className="mb-5">
            <Text className="text-[#fff] font-bold text-[16px]">Ngực - Bắp tay dưới</Text>
          </View> */}
          <View>
            <FlatGrid
            style={{marginBottom: 100}}
              itemDimension={130}
              data={muscles}
              renderItem={(muscle) => <Pressable onPress={() => onSelect(muscle.item._id)}><MuscleGroupItem key={muscle.index} muscle={muscle.item} /></Pressable>}
            />
          </View>

          {/* <View className="flex flex-row">
              {muscles.map((muscle, index) => {
                return <MuscleGroupItem key={muscle._id} muscle={muscle} />
              })}
            </View> */}



          {/* <MuscleGroupItem />
            <MuscleGroupItem />
            <MuscleGroupItem />
            <MuscleGroupItem />
            <MuscleGroupItem /> */}
        </View>

      </View>
    </View>
  )
}

export default ExerciseScreen