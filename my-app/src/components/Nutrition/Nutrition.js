import React, { useEffect, useState } from 'react'
import { Button, Image, Pressable, Text, View } from 'react-native'
import ProgressBar from '../ProgressBar/ProgressBar'
import { MaterialIcons } from '@expo/vector-icons';
import NutritionItem from './NutritionItem';
import { formatDate } from '../../utils/utils';
import DatePicker from '../DatePicker/DatePicker';
import { useRoute } from '@react-navigation/native';
import ModalComp from '../Modal/ModalComp';

const Nutrition = ({ showNut, setShowNut, nutritions, date, setDate, selectAssign, assign, setIsAssignNut, setToggleModal, setCreateAssign, toggleModal }) => {
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



  const handleModal = (meal) => {
    if (route.name !== 'Lịch trình') {
      switch (meal) {
        case 'Bữa sáng':
          setIsAssignNut({ type: 'nutritions' });
          break;
        case 'Bữa trưa':
          setIsAssignNut({ type: 'lunch' });
          break;
        default:
          setIsAssignNut({ type: 'dinner' });
          break;
      }
    } else {
      console.log('selectAss------>', selectAssign);

      switch (meal) {
        case 'Bữa sáng':
          setShowNut({ type: 'nutritions', data: selectAssign ? selectAssign.data.nutritions : null });
          break;
        case 'Bữa trưa':
          setShowNut({ type: 'lunch', data: selectAssign ? selectAssign.data.lunch : null });
          break;
        default:
          setShowNut({ type: 'dinner', data: selectAssign ? selectAssign.data.dinner : null });
          break;
      }
    }
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
        <NutritionItem handleModal={handleModal} nutritions={nutritions} meal={'Bữa sáng'} />
        <NutritionItem handleModal={handleModal} nutritions={assign?.lunch} meal={'Bữa trưa'} />
        <NutritionItem handleModal={handleModal} nutritions={assign?.dinner} meal={'Bữa tối'} />
      </View> : <View>
        <NutritionItem handleModal={handleModal} nutritions={selectAssign?.nutritions} meal={'Bữa sáng'} />
        <NutritionItem handleModal={handleModal} nutritions={selectAssign?.lunch} meal={'Bữa trưa'} />
        <NutritionItem handleModal={handleModal} nutritions={selectAssign?.dinner} meal={'Bữa tối'} />
      </View>}
      {/* {route.name === 'Lịch trình' ? <View></View> :  <View className="mx-4">
        <Button onPress={handleModal} title='Lựa chọn bữa ăn' />
      </View>} */}
      {route.name === 'Lịch trình' && <ModalComp setOpenModal={setToggleModal} isOpenModal={toggleModal} showNut={showNut} />}
      {/* <NutritionItem />
      <NutritionItem />
      <NutritionItem /> */}
    </View>
  )
}

export default Nutrition