import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Line from '../components/Info/Line';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAsyncStorage } from '../hooks/useAsyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserInfoScreen = () => {
  const navigation = useNavigation();
  const [currentUser, setCurrentUser] = useAsyncStorage('current-user', null);

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('current-user')
    } catch(e) {
      // remove error
      console.log(error);
    }
  
    console.log('Done.')
  }

  const handleSignOut = () => {
    removeValue()
    navigation.navigate('Login');
  }

  return (
    <View className="bg-[#1D2125] h-screen">
      <Text className="text-center text-[24px] text-[#fff] mb-5 font-bold py-4">Hồ sơ</Text>
      <View className="bg-[#A1BDD914] mb-10">
        <Line icon={<FontAwesome5 name="user-circle" size={26} color="white" />} field={'Tài khoản'} value={currentUser?.email} />
        <Line icon={<Entypo name="tumblr" size={26} color="white" />} field={'Tên'} value={currentUser?.name} />
        <Line icon={<FontAwesome name="birthday-cake" size={26} color="white" />} field={'Tuổi'} value={currentUser?.age} />
        <Line icon={<FontAwesome name="transgender" size={26} color="white" />} field={'Giới tính'} value={currentUser?.gender ? 'Nam' : 'Nữ'} />
        {currentUser?.roles[0].roleName === 'USER' && <View>
          <Line icon={<MaterialCommunityIcons name="human-male-height" size={26} color="white" />} field={'Chiều cao'} value={`${currentUser?.height} cm`} />
          <Line icon={<MaterialCommunityIcons name="weight" size={26} color="white" />} field={'Cân nặng'} value={`${currentUser?.weight} kg`} />
        </View>
        }
      </View>
      <View className="mx-4">
        {/* <View className="self-center px-8 py-4 bg-red-500 rounded-[5px]">
          <Text className="text-white font-bold text-[18px]">
            Đăng xuất
          </Text>
        </View> */}
        <Button color={'red'} onPress={handleSignOut} title='Đăng xuất' />
      </View>
    </View>
  )
}

export default UserInfoScreen