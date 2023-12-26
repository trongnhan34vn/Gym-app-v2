import React from 'react'
import { View } from 'react-native'

const SelectItem = () => {
  return (
    <View className="flex flex-row items-center justify-between">
      <View className="flex flex-row items-center">
        <View className="p-3 bg-[#A1BDD914] mr-2 rounded-[3px]">
          <MaterialCommunityIcons name="checkbox-multiple-marked-outline" size={26} color="white" />
        </View>
        <View>
          <Text className="text-[#fff] text-[18px]" >Tất cả các loại</Text>
        </View>
      </View>
      <RadioButton
        value="first"
        status={checked === 'first' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('first')}
      />
    </View>
  )
}

export default SelectItem