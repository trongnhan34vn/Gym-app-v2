import React, { useEffect, useState } from 'react'
import { Button, Pressable, Text, View } from 'react-native';
import Modal from "react-native-modal";
import AssignExerciseForm from '../CustomerExercise/AssignExerciseForm';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux'
import { update } from '../../thunk/assignThunk';
import AssignNutritionForm from '../Nutrition/AssignNutritionForm';

const ModalComp = ({ isOpenModal, setOpenModal, isAssignExercise, assign, isAssignNut, setIsAssignNut, setIsAssignExercise }) => {
  const dispatch = useDispatch();
  const closeModal = () => {
    setOpenModal(false);
    setIsAssignExercise(false);
    setIsAssignNut(false);
  }

  const [checkedExes, setCheckedExes] = useState([])
  const [checkedNuts, setCheckedNuts] = useState([])

  useEffect(() => {
    if (!assign) {
      setCheckedExes([])
      setCheckedNuts([])
      return
    };
    let arr = [];
    assign.data.exercises.forEach(element => {
      arr.push(element._id)
    });
    setCheckedExes(arr)
    let nutArr = [];
    switch (isAssignNut?.type) {
      case 'nutritions':
        assign.data.nutritions.forEach(element => {
          nutArr.push(element._id)
        })
        break;
      case 'lunch':
        assign.data.lunch.forEach(element => {
          nutArr.push(element._id)
        })
        break;
      default:
        assign.data.dinner.forEach(element => {
          nutArr.push(element._id)
        })
        break;
    }
    setCheckedNuts(nutArr)
  }, [assign, isOpenModal])

  const handleSubmit = () => {
    if (!assign) return
    if (isAssignExercise) {
      // update assign
      let data = {
        assignId: assign.data._id,
        exercises: checkedExes
      }
      closeModal()
      dispatch(update(data));
    }
    if (isAssignNut) {
      let data;
      closeModal()
      switch (isAssignNut.type) {
        case 'nutritions':
          data = {
            assignId: assign.data._id,
            nutritions: checkedNuts
          }
          break;
        case 'lunch':
          data = {
            assignId: assign.data._id,
            lunch: checkedNuts
          }
          break;
        default:
          data = {
            assignId: assign.data._id,
            dinner: checkedNuts
          }
          break;
      }
      dispatch(update(data));
    }
  }

  return (
    <Modal
      // animationType="slide"
      // swipeDirection="down"
      // onSwipeComplete={closeModal}
      transparent={true}
      isVisible={isOpenModal}
      style={{ margin: 0, width: '100%', height: '75%' }}
    >
      <View className="bottom-5 top-10 absolute bg-[#1D2125] rounded-[8px] w-full translate-y-5 opacity-100 py-4 px-4">
        {isAssignExercise &&
          <View>
            <View className="flex flex-row items-center justify-between gap-5 mb-5">
              <View className="flex flex-row items-center justify-between flex-1">
                <Text className="font-bold text-white text-[16px]" >Lựa chọn bài tập ({checkedExes.length}/6)</Text>
                <Button onPress={handleSubmit} title='Save' className="self-center" />
              </View>

              <Pressable onPress={() => closeModal()}><AntDesign name="close" size={24} color="white" /></Pressable>
            </View>
            <AssignExerciseForm isAssignExercise={isAssignExercise} setCheckedExes={setCheckedExes} checkedExes={checkedExes} />
          </View>
        }

        {
          isAssignNut &&
          <View>
            <View className="flex flex-row items-center justify-between gap-5 mb-5">
              <View className="flex flex-row items-center justify-between flex-1">
                <Text className="font-bold text-white text-[16px]" >Lựa chọn chế độ dinh dưỡng ({checkedNuts.length}/3)</Text>
                <Button onPress={() => handleSubmit(isAssignNut.type)} title='Save' className="self-center" />
              </View>

              <Pressable onPress={() => closeModal()}><AntDesign name="close" size={24} color="white" /></Pressable>
            </View>
            <AssignNutritionForm checkedNuts={checkedNuts} setCheckedNuts={setCheckedNuts} />
          </View>
        }
      </View>
    </Modal>
  )
}

export default ModalComp