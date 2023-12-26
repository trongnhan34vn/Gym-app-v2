import React from 'react'
import { Image, Text, View } from 'react-native'
import { RadioButton } from 'react-native-paper';

const NutItem = ({nutrition, checkedNuts, setCheckedNuts}) => {

  const removeFromArray = (arr, value) => {
    const index = arr.indexOf(value);
    if (index !== -1) {
      arr.splice(index, 1);
    }
    return arr.slice(); // Return a copy of the modified array
  };

  const onCheck = () => {
    if (checkedNuts.includes(nutrition._id)) {
      const newArr = removeFromArray(checkedNuts, nutrition._id);
      setCheckedNuts(newArr)
    } else {
      if (checkedNuts.length > 2) return;
      setCheckedNuts(() => [...checkedNuts, nutrition._id]);
    }
  }

  const checkNut = () => {
    if (checkedNuts.includes(nutrition._id)) {
      return 'checked';
    }
    return 'unchecked';
  }

  return (
    <View className="bg-[#A1BDD914] mt-5 px-4 py-2 rounded-[5px]">
      <View className="flex flex-row justify-between w-full border-b-[1px] border-b-[#A1BDD914] pb-2 mb-1">
        <View className="flex flex-row flex-1 gap-4">
          <Image className="w-16 h-16 rounded-[5px]" source={{uri: nutrition.image}} />
          <View>
            {/* <Text className="font-bold text-[18px] mb-2 text-white">{getMeal()}</Text> */}
            <Text className="font-bold text-[18px] mb-2 text-white">{nutrition.name}</Text>
            <Text className="text-[#B6C2CF]">{nutrition.kcal} kcal</Text>
            <Text className="text-[#B6C2CF]">protein: {nutrition.protein} g, carbs: {nutrition.carbs} g, fat: {nutrition.fat} g</Text>
          </View>
        </View>
        {/* <View className="flex flex-row items-center justify-center">
          <Entypo className="" name="plus" size={24} color="white" />
        </View> */}
        <View className="flex justify-center">
          <RadioButton 
            value={nutrition._id}
            status={checkNut()}
            onPress={() => onCheck()}
          />
        </View>
      </View>
      <View className="">
        <Text className="text-center text-white">{nutrition.kcal} kcal</Text>
      </View>
    </View>
  )
}

export default NutItem