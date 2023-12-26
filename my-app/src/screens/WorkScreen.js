import React, { useEffect, useState } from 'react'
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import ExerciseItem from '../components/Exercise/ExerciseItem';
import SelectModal from '../components/Modal/SelectModal';
import { useDispatch, useSelector } from 'react-redux'
import { findAll } from '../thunk/exerciseThunk';
import { exerciseSelector } from '../redux/selector';

const WorkScreen = () => {
  const dispatch = useDispatch();
  const [selectType, setSelectType] = useState(null);
  const [selectModal, setSelectModal] = useState(false);

  const handleSelect = (type) => {
    setSelectModal(true);
    setSelectType(type);
  }

  useEffect(() => {
    dispatch(findAll())
  }, [])

  const exercises = useSelector(exerciseSelector).exercises;

  return (
    <View className="bg-[#1D2125] h-screen">
      <SelectModal selectModal={selectModal} setSelectModal={setSelectModal} type={selectType} setSelectType={setSelectType} />
      <View className="px-3 mt-2">
        <View className="flex flex-row items-center px-4 py-2 rounded-[500px] bg-[#A1BDD914] mb-3">
          <Ionicons name="search" size={24} color="#B6C2CF" />
          <TextInput placeholderTextColor={'#B6C2CF'} className="text-[#B6C2CF] ml-2 text-[14px]" placeholder='Tìm kiếm bài tập' />
        </View>
        <View className="flex flex-row mb-8 gap-x-2">
          <Pressable onPress={() => handleSelect('work-type')} className="flex flex-row items-center self-start bg-[#A1BDD914] px-8 rounded-[500px] py-2">
            <FontAwesome5 name="running" size={18} color="#B6C2CF" />
            <Text className="text-[#B6C2CF] ml-2 text-[16px]">Loại</Text>
          </Pressable>

          <Pressable onPress={() => handleSelect('muscle-type')} className="flex flex-row items-center self-start bg-[#A1BDD914] px-8 rounded-[500px] py-2">
            <FontAwesome5 name="dumbbell" size={18} color="#B6C2CF" />
            <Text className="text-[#B6C2CF] ml-2 text-[16px]">Cơ bắp</Text>
          </Pressable>
        </View>
        <ScrollView className="h-[570px]">
          {exercises.map(exe => {
            return  <ExerciseItem key={exe._id} exe={exe} />
          })}
          {/* <ExerciseItem />
          <ExerciseItem />
          <ExerciseItem />
          <ExerciseItem />
          <ExerciseItem />
          <ExerciseItem />
          <ExerciseItem />
          <ExerciseItem />
          <ExerciseItem />
          <ExerciseItem /> */}
        </ScrollView>
      </View>
    </View>
  )
}

export default WorkScreen