import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

const NutritionItem = ({ nutrition, index, nutritions, handleModal, meal }) => {
  const route = useRoute();

  const getMeal = () => {
    switch (index) {
      case 0:
        return 'Bữa sáng'
      case 1:
        return 'Bữa trưa'
      case 2:
        return 'Bữa tối'
    }
  }

  const getName = () => {
    let name = "";
    nutritions.forEach(element => {
      name += element.name + ", "
    });
    return name
  }

  const getKCal = () => {
    let kCal = 0;
    nutritions.forEach(element => {
      kCal += element.kcal
    })
    return kCal
  }

  return (
    <Pressable onPress={() => handleModal(meal)} className="bg-[#A1BDD914] mx-4 mt-5 px-4 py-2 rounded-[5px] mb-4">
      {nutritions ? <View>
        <View className="flex flex-row justify-between w-full border-b-[1px] border-b-[#A1BDD914] pb-2 mb-1">
          <View className="flex flex-row gap-4">
            {nutritions[0] ? <Image className="w-16 h-16 rounded-[5px]" source={{ uri: nutritions[0]?.image }} /> : <Image className="w-16 h-16 rounded-[5px]" source={{ uri: 'https://developers.google.com/static/maps/documentation/maps-static/images/error-image-generic.png?hl=vi' }} />}
            {/* <Image className="w-16 h-16 rounded-[5px]" source={{ uri: nutritions[0]?.image }} /> */}
            <View>
              <Text className="font-bold text-[18px] mb-2 text-white">{meal}</Text>
              {nutritions.length === 0 ? <Text className="text-[#B6C2CF]">Chưa có chế độ dinh dưỡng </Text> : <Text className="text-[#B6C2CF]">{getName()} </Text>}
            </View>
          </View>
          <Pressable onPress={() => handleModal(meal)} className="flex flex-row items-center justify-center">
            {route.name === 'Lịch trình' ? <MaterialCommunityIcons name="information-outline" size={24} color="white" /> : <Entypo className="" name="plus" size={24} color="white" />}
          </Pressable>
        </View>
        <View className="">
          <Text className="text-center text-white">{getKCal()} kcal</Text>
        </View>
      </View> : <View><View className="flex flex-row justify-between w-full border-b-[1px] border-b-[#A1BDD914] pb-2 mb-1">
        <View className="flex flex-row gap-4">
          <Image className="w-16 h-16 rounded-[5px]" source={{ uri: 'https://developers.google.com/static/maps/documentation/maps-static/images/error-image-generic.png?hl=vi' }} />
          {/* <Image className="w-16 h-16 rounded-[5px]" source={{ uri: nutritions[0]?.image }} /> */}
          <View>
            <Text className="font-bold text-[18px] mb-2 text-white">{meal}</Text>
            <Text className="text-[#B6C2CF]">Chưa có chế độ dinh dưỡng </Text>
          </View>
        </View>
        <Pressable onPress={() => handleModal(meal)} className="flex flex-row items-center justify-center">
          {route.name === 'Lịch trình' ? <MaterialCommunityIcons name="information-outline" size={24} color="white" /> : <Entypo className="" name="plus" size={24} color="white" />}
        </Pressable>

      </View>
        <View className="">
          <Text className="text-center text-white">0 kcal</Text>
        </View>
      </View>}

    </Pressable>
  )
}

export default NutritionItem