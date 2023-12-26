import React, { useState } from 'react'
import { Button, Image, Pressable, Text, View } from 'react-native'
import ProgressBar from '../ProgressBar/ProgressBar'
import { MaterialIcons } from '@expo/vector-icons';
import NutritionItem from './NutritionItem';
import { formatDate } from '../../utils/utils';
import DatePicker from '../DatePicker/DatePicker';
import { useRoute } from '@react-navigation/native';

const Nutrition = ({ nutritions, date, setDate, selectAssign, assign, setIsAssignNut, setToggleModal, setCreateAssign }) => {
  const route = useRoute();
  const getMeasure = (type) => {
    if (!selectAssign) return {
      total: 0,
      percent: 0,
    }
    switch (type) {
      case 'carbs':
        const totalCarbs = nutritions.reduce((acc, nut) => acc + nut.carbs, 0);
        return {
          total: totalCarbs,
          percent: (totalCarbs / 247).toFixed(2) * 100
        }
      case 'protein':
        const totalProtein = nutritions.reduce((acc, nut) => acc + nut.protein, 0);
        return {
          total: totalProtein,
          percent: (totalProtein / 247).toFixed(2) * 100
        }
      default:
        const totalFat = nutritions.reduce((acc, nut) => acc + nut.fat, 0);
        return {
          total: totalFat,
          percent: (totalFat / 247).toFixed(2) * 100
        }
    }
  }

  const handleModal = () => {
    setIsAssignNut(true);
    setToggleModal(true);
  }

  const [open, setOpen] = useState(false);
  return (
    <View>
      {nutritions && <View className="bg-[#A1BDD914] flex flex-row justify-between items-center mx-4 mt-5 px-4 py-2 rounded-[5px] mb-4">
        <View>
          <Text className="mb-2 text-center text-white">Carbs</Text>
          <ProgressBar percent={`${getMeasure('carbs').percent} %`} color={'bg-blue-600'} />
          <Text className="mb-2 text-center text-white">{getMeasure('carbs').total}/247g</Text>
        </View>
        <View>
          <Text className="mb-2 text-center text-white">Protein</Text>
          <ProgressBar percent={`${getMeasure('protein').percent} %`} color={'bg-red-600'} />
          <Text className="mb-2 text-center text-white">{getMeasure('protein').total}/247g</Text>
        </View>
        <View>
          <Text className="mb-2 text-center text-white">Fat</Text>
          <ProgressBar percent={`${getMeasure('fat').percent} %`} color={'bg-green-600'} />
          <Text className="mb-2 text-center text-white">{getMeasure('fat').total}/247g</Text>
        </View>
      </View>}

      <DatePicker setCreateAssign={setCreateAssign} assign={assign} selectAssign={selectAssign} open={open} setOpen={setOpen} setDate={setDate} date={date} />
      <Pressable onPress={() => setOpen(true)} className="flex flex-row items-center justify-between mx-4 mb-5">
        <MaterialIcons name="keyboard-arrow-left" size={24} color="#B6C2CF" />
        <Text className="text-[#B6C2CF] text-center">{formatDate(date).toLocaleUpperCase()}</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#B6C2CF" />
      </Pressable>

      {selectAssign ? <View>
        {nutritions && nutritions.map((nut, index) => {
          return <NutritionItem key={nut._id} nutrition={nut} index={index} />
        })}
      </View> : <View className="mx-4">
        <Text className="text-[#ccc] text-center text-[30px] opacity-60 mb-5 mt-4">Chưa có bữa ăn nào</Text>
      </View>}
      {route.name === 'Lịch trình' ? <View></View> :  <View className="mx-4">
        <Button onPress={handleModal} title='Lựa chọn bữa ăn' />
      </View>}
     
      {/* <NutritionItem />
      <NutritionItem />
      <NutritionItem /> */}
    </View>
  )
}

export default Nutrition