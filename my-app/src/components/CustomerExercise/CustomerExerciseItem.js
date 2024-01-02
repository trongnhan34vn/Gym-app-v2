import React, { useEffect } from 'react'
import { Image, Pressable } from 'react-native'
import { Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { findById } from '../../thunk/assignThunk';
import { formatTime } from '../../utils/utils';
import { assignSelector } from '../../redux/selector';

const CustomerExerciseItem = ({ assign }) => {
  const dispatch = useDispatch();
  const route = useRoute();
  const navigation = useNavigation();
  const handleSelect = () => {
    dispatch(findById(assign._id));
    navigation.navigate('CustomerExerciseDetail')
  }

  const nutritions = assign?.nutritions;
  const exercises = assign?.exercises;

  return (
    <Pressable onPress={handleSelect} className="bg-[#A1BDD914] p-3 rounded-[3px] mb-3">
      <View className="flex flex-row items-center justify-between mb-3">
        <View className="flex flex-row items-center justify-between">
          <FontAwesome name="user-circle" size={24} color="white" />
          <Text className="text-[#fff] ml-3 font-bold text-[16px]">{assign?.user.name}</Text>
        </View>
        {route.name === 'Lịch' ? <View>
          <Text className="text-[#B6C2CF]">Bắt đầu: {formatTime(assign?.startTime)}</Text>
        </View> : <></>}

      </View>
      <View className="mb-3">
        <Text className="mb-3 text-[#B6C2CF]">Chế độ ăn:</Text>
        <View className="flex flex-row gap-4">
          {nutritions?.map(nutrition => {
            return <Image key={nutrition._id} className="w-20 h-20 rounded-[5px]" source={{ uri: nutrition.image }} />
          })}
          {/* <Image className="w-20 h-20 rounded-[5px]" source={require('../../../assets/breakfast.webp')} />
          <Image className="w-20 h-20 rounded-[5px]" source={require('../../../assets/breakfast.webp')} />
          <Image className="w-20 h-20 rounded-[5px]" source={require('../../../assets/breakfast.webp')} /> */}
        </View>
      </View>
      <View>
        <Text className="mb-2 text-[#B6C2CF]">Bài tập:</Text>
        <View className="flex flex-row gap-4">
          {exercises?.slice(0,6).map(ex => {
            return <Image key={ex._id} className="rounded-[3px] w-10 h-10" source={{ uri: ex.image }} />
          })}
          {/* <Image className="rounded-[3px] w-10 h-10" source={require('../../../assets/img/exercise/bai_1.jpg')} />
          <Image className="rounded-[3px] w-10 h-10" source={require('../../../assets/img/exercise/bai_2.jpg')} />
          <Image className="rounded-[3px] w-10 h-10" source={require('../../../assets/img/exercise/bai_5.jpg')} />
          <Image className="rounded-[3px] w-10 h-10" source={require('../../../assets/img/exercise/bai_1.jpg')} />
          <Image className="rounded-[3px] w-10 h-10" source={require('../../../assets/img/exercise/bai_1.jpg')} /> */}
        </View>
      </View>
    </Pressable>
  )
}

export default CustomerExerciseItem