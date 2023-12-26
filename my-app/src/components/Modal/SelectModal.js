import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Modal from "react-native-modal";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const workType = [
  {
    name: 'Tất cả các loại',
    icon: <MaterialCommunityIcons name="checkbox-multiple-marked-outline" size={26} color="white" />,
    checked: true,
  },
  {
    name: 'Sức mạnh',
    icon: <FontAwesome5 name="dumbbell" size={26} color="white" />,
    checked: false,
  },
  {
    name: 'Cardio',
    icon: <FontAwesome5 name="running" size={26} color="white" />,
    checked: false
  },
  {
    name: 'Duỗi Cơ',
    icon: <Entypo name="man" size={26} color="white" />,
    checked: false
  }
]

const muscleType = [
  {
    name: 'Tất cả cơ bắp',
    icon: <MaterialCommunityIcons name="checkbox-multiple-marked-outline" size={26} color="white" />,
    checked: true,
  },
  {
    name: 'Ngực',
    icon: <MaterialCommunityIcons name="checkbox-multiple-marked-outline" size={26} color="white" />,
    checked: true,
  },
  {
    name: 'Bắp tay dưới',
    icon: <MaterialCommunityIcons name="checkbox-multiple-marked-outline" size={26} color="white" />,
    checked: true,
  },
  {
    name: 'Vai',
    icon: <MaterialCommunityIcons name="checkbox-multiple-marked-outline" size={26} color="white" />,
    checked: true,
  },
  {
    name: 'Bắp chân',
    icon: <MaterialCommunityIcons name="checkbox-multiple-marked-outline" size={26} color="white" />,
    checked: true,
  }
]

const SelectModal = ({ type, selectModal, setSelectModal, setSelectType }) => {
  const [checked, setChecked] = React.useState('first');
  const element = type === 'work-type' ? workType : muscleType;
  const closeModal = () => {
    setSelectModal(false);
    setSelectType(null);
  }
  return (
    <Modal
      animationType="slide"
      swipeDirection="down"
      onSwipeComplete={closeModal}
      transparent={true}
      isVisible={selectModal}
      style={{margin: 0}}
      className="translate-y-12"
    >
      <View className="h-screen bg-[#1D2125] rounded-[8px] w-full translate-y-5 opacity-100 py-4 px-4">
        {element.map((item, index) => {
          return (
            <View key={index} className="flex flex-row items-center justify-between py-3 border-b-[1px] border-b-[#9FADBC]">
              <View className="flex flex-row items-center">
                <View className="p-3 bg-[#A1BDD914] mr-2 w-14 flex flex-row justify-center rounded-[3px]">
                  {item.icon}
                </View>
                <View>
                  <Text className="text-[#fff] text-[18px]" >{item.name}</Text>
                </View>
              </View>
              <RadioButton
                value="first"
                status={item.checked}
                onPress={() => setChecked('first')}
              />
            </View>

          )
        })}

      </View>
    </Modal>
  )
}

export default SelectModal