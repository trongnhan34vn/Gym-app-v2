import React from 'react'
import { Text, View } from 'react-native'


const Line = ({icon, field, value}) => {
  return (
    <View className="flex flex-row items-center justify-between px-2 py-3 border-b-[1px] border-b-[#ccc]">
      <View className="flex flex-row items-center">
        {icon}
        <Text className="ml-2 text-white text-[18px]">{field}</Text>
      </View>
      <View>
        <Text className=" text-[#B6C2CF] text-[18px]">{value}</Text>
      </View>
    </View>
  )
}

export default Line