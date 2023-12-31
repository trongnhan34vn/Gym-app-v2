import React, { useEffect, useState } from 'react'
import { Button, Image, ScrollView, View } from 'react-native'
import { Text } from 'react-native'
import Nutrition from '../components/Nutrition/Nutrition';
import ModalComp from '../components/Modal/ModalComp';
import ExerciseItem from '../components/Exercise/ExerciseItem';
import SkeletonComp from '../components/Skeleton/SkeletonComp';
import { useSelector } from 'react-redux'
import { assignSelector } from '../redux/selector';
import { useDispatch } from 'react-redux'
import { create } from '../thunk/assignThunk';

const CustomerExerciseDetailScreen = () => {
  const dispatch = useDispatch();
  const [isAssignExercise, setIsAssignExercise] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);

  const handleShowCreate = () => {
    setToggleModal(true);
    setIsAssignExercise(true);
  }
  const [assign, setAssign] = useState(null)
  const selectAssign = useSelector(assignSelector).selectAssign;
  const [date, setDate] = useState(assign ? assign.date : Date.now());
  const [users, setUsers] = useState(null);
  const [createAssign, setCreateAssign] = useState(false);

  useEffect(() => {
    if (!createAssign) return;
    let data = {
      _id: null,
      user: users.user._id,
      pt: users.pt,
      date: date,
      exercises: [],
      nutritions: [],
    }
    dispatch(create(data))

    setTimeout(() => {
      setCreateAssign(false)
    }, 200)

  }, [createAssign])


  useEffect(() => {
    if (!selectAssign) {
      return
    };
    setAssign(selectAssign.data);
  }, [selectAssign])

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!assign) return
    if (count > 1) return
    setUsers({ user: assign.user, pt: assign.pt })
    setDate(assign.date)
    setCount((pre) => pre + 1)
  }, [assign])

  const nutritions = assign ? assign.nutritions : null;
  const exercises = assign ? assign.exercises : null;

  const [isAssignNut, setIsAssignNut] = useState(null);
  // console.log(assign);

  return (
    <ScrollView className="bg-[#1D2125] h-screen">
      {!assign ? <View className="flex items-center mx-4 mt-10">
        <SkeletonComp type={'circle'} />
        <View className="mb-10"></View>
        <SkeletonComp type={'row'} />
        <View className="mb-2"></View>
        <SkeletonComp type={'row'} />
        <View className="mb-2"></View>
        <SkeletonComp type={'row'} />
        <View className="mb-5"></View>
        <SkeletonComp type={'retangular'} />
        <View className="mb-5"></View>
        <SkeletonComp type={'retangular'} />
      </View> : <View>
        <View className="flex items-center flex-grow">
          <Image className="w-24 h-24" source={require('../../assets/user.png')} />
        </View>
        <View>
          <Text className="text-center text-[18px] font-bold text-white mb-2">{assign?.user.name}</Text>
        </View>
        <View className="flex flex-row justify-center mx-4">
          <View>
            <Text className="text-[#9FADBC] mb-1 text-center">{assign?.user.email}</Text>
            <Text className="text-[#9FADBC] mb-1 text-center">{assign?.user.height}cm</Text>
            <Text className="text-[#9FADBC] mb-1 text-center">{assign?.user.weight}kg</Text>
          </View>
        </View>

        <View className="mb-7">
          {nutritions && <Nutrition setCreateAssign={setCreateAssign} setToggleModal={setToggleModal} setIsAssignNut={setIsAssignNut} assign={assign} selectAssign={selectAssign} nutritions={nutritions} date={date} setDate={setDate} />}
        </View>
        {/* <View className="flex flex-row items-center justify-between mx-4">
          <MaterialIcons name="keyboard-arrow-left" size={24} color="#B6C2CF" />
          <Text className="text-[#B6C2CF] text-center">TODAY, 5 OCT</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#B6C2CF" />
        </View> */}
        {/* <View className="mx-4 mt-2 mb-5">
        <Button title='Thêm chế độ dinh dưỡng' />
      </View> */}
        <View className="bg-[#A1BDD914] mx-4 h-[1px] mb-8"></View>

        <View className="mx-4">
          <View>
            <Text className="mb-5 text-[20px] font-bold text-center text-white" >Bài tập</Text>
          </View>
          {selectAssign ? <View className="mb-2">
            {exercises && exercises.map(exe => {
              return <ExerciseItem key={exe._id} exe={exe} />
            })}

            {/* <ExerciseItem />
            <ExerciseItem />
            <ExerciseItem />
            <ExerciseItem />
            <ExerciseItem /> */}
          </View> : <View><Text className="text-[#ccc] text-center text-[30px] opacity-60 mb-5">CHƯA CÓ BÀI TẬP NÀO</Text></View>}


        </View>
        <View className="mx-4 mb-24">
          <Button onPress={handleShowCreate} title='Lựa chọn bài tập' />
        </View>
      </View>}

      <ModalComp setIsAssignNut={setIsAssignNut} setIsAssignExercise={setIsAssignExercise} isAssignNut={isAssignNut} assign={selectAssign} assignExes={exercises} isOpenModal={toggleModal} setOpenModal={setToggleModal} isAssignExercise={isAssignExercise} />
    </ScrollView>
  )
}

export default CustomerExerciseDetailScreen