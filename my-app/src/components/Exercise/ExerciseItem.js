import React, { useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import Rating from '../Rating/Rating'
import { RadioButton } from 'react-native-paper';
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { findById } from '../../thunk/exerciseThunk';

const ExerciseItem = ({ exe, isAssignExercise, checkedExes, setCheckedExes }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const checkExe = () => {
    if (checkedExes.includes(exe._id)) {
      return 'checked';
    }
    return 'unchecked';
  }

  const removeFromArray = (arr, value) => {
    const index = arr.indexOf(value);
    if (index !== -1) {
      arr.splice(index, 1);
    }
    return arr.slice(); // Return a copy of the modified array
  };

  const onCheck = () => {

    if (checkedExes.includes(exe._id)) {
      const newArr = removeFromArray(checkedExes, exe._id);
      setCheckedExes(newArr)
    } else {
      setCheckedExes(() => [...checkedExes, exe._id]);
    }
  }

  const onSelect = () => {
    dispatch(findById(exe._id));
    navigation.navigate('ExerciseDetailScreen')
  }
  return (
    <Pressable onPress={onSelect} className="relative flex flex-row items-center justify-between w-full mb-5">
      <View className="flex flex-row">
        <Image className="w-16 h-16 rounded-[10px] mr-2" source={{ uri: exe?.image }} />
        <View className="flex justify-center">
          <Rating rate={exe?.difficult} />
          <Text className="text-[#fff] font-bold text-[14px] mb-1">{exe?.name}</Text>
          <Text className="text-[#9FADBC] text-[13px]">{exe?.sets} bộ x {exe?.time} lần, {exe?.breakTime} giây nghỉ</Text>
        </View>
      </View>
      {isAssignExercise ? <View className="absolute right-0">
        <RadioButton
          value={exe?._id}
          status={checkExe()}
          onPress={() => onCheck()}
        />
      </View> : <View className="absolute right-0 flex items-center w-12">
        <Text className="mb-1 text-[#fff] text-[13px] w-full text-center">{exe?.muscle?.name}</Text>
        <Image className="w-10 h-10 rounded-[5px]" source={{ uri: exe?.muscle?.image }} />
      </View>}

    </Pressable>
  )
}

export default ExerciseItem