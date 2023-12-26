import React from 'react'
import { View } from 'react-native'

const ProgressBar = ({percent, color}) => {
  return (
    <View className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-2">
      <View className={`h-2.5 rounded-full ${color}`} style={{ width: percent }} />
    </View>
  )
}

export default ProgressBar