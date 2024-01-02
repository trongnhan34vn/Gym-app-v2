import React, { useEffect, useState } from 'react'
import { Button, Pressable, Text, View } from 'react-native';
import Modal from "react-native-modal";
import AssignExerciseForm from '../CustomerExercise/AssignExerciseForm';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux'
import { update } from '../../thunk/assignThunk';
import AssignNutritionForm from '../Nutrition/AssignNutritionForm';
import NutritionItem from '../Nutrition/NutritionItem';
import NutItem from './NutItem';

const ModalComp = ({ isOpenModal, setOpenModal, isAssignExercise, assign, isAssignNut, setIsAssignNut, setIsAssignExercise, showNut }) => {
  const dispatch = useDispatch();
  const closeModal = () => {
    setOpenModal(false);
    if (!setIsAssignExercise && !setIsAssignNut) return;
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

  const getShowNutName = () => {
    switch (showNut.type) {
      case "nutritions":
        return "Bữa sáng"
      case "lunch":
        return "Bữa trưa"
      default:
        return "Bữa tối"
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
                <Text className="font-bold text-white text-[16px]" >Lựa chọn bài tập </Text>
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

        {
          showNut &&
          <View>
            <View className="flex flex-row items-center justify-between gap-5 mb-5">
              <View className="flex flex-row items-center justify-between flex-1">
                <Text className="font-bold text-white text-[16px]" >{getShowNutName()}</Text>
              </View>

              <Pressable onPress={() => closeModal()}><AntDesign name="close" size={24} color="white" /></Pressable>
            </View>
            {showNut.data ? showNut.data.map(item => <NutItem key={item._id} nutrition={item} />) : <View><Text className="font-bold text-center text-white opacity-40">CHƯA CÓ CHẾ ĐỘ DINH DƯỠNG</Text></View>}
          </View>
        }
      </View>
    </Modal>
  )
}

export default ModalComp