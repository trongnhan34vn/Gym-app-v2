import React from 'react'
import { Text, View } from 'react-native'

const Rating = ({ rate }) => {
  const arr = [1, 2, 3, 4, 5]

  return (
    <View className="max-w-[10rem] flex flex-row items-center gap-x-1 mb-1">
      {arr.map(item => {
        if (rate >= item) {
          return (
            <View key={item} className="w-2 h-2 bg-blue-500"></View>
          )
        }
        return (
          <View key={item} className="w-2 h-2 bg-blue-300"></View>
        )
      })}
    </View>
  )
}

export default Rating