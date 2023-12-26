import React, { useEffect, useState } from 'react'
import { Button, Keyboard, Pressable } from 'react-native'
import { Image, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import Input from '../components/LoginScreen/Input';
import { useDispatch, useSelector } from 'react-redux'
import * as userThunk from '../thunk/userThunk';
import { userSelector } from '../redux/selector';
import { useToast } from "react-native-toast-notifications";
import { getLoginResposne } from '../redux/reducer/userSlice';
import { useAsyncStorage } from '../hooks/useAsyncStorage';
import LoadingOverlayComp from '../components/LoadingOverlay/LoadingOverlayComp';
import { TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [currentUser, setCurrentUser] = useAsyncStorage('current-user', null);
  const [loadingOverlay, setLoadingOverlay] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const onSubmit = (data) => {
    setLoadingOverlay(true);
    // navigation.navigate('PT')
    setTimeout(() => {
      dispatch(userThunk.login(data))
    }, 2000)
  }

  const loginResponse = useSelector(userSelector).loginResponse;

  useEffect(() => {
    if (!loginResponse) return
    setLoadingOverlay(false);
    if (loginResponse.status === 404) {
      toast.show('Tài khoản hoặc mật khẩu không đúng!', {
        type: 'danger'
      });
      return
    }
    let userLogin = loginResponse.data;

    // save async store
    setCurrentUser(userLogin);

    let roles = userLogin.roles;
    let role = roles[0].roleName
    if (role === 'PT') {
      navigation.navigate('PT');
      return;
    }
    navigation.navigate('Home')
  }, [loginResponse])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
      <View className="bg-[#1D2125] h-screen">
        <LoadingOverlayComp active={loadingOverlay} />
        <View className="flex flex-row justify-center mt-20 mb-10">
          <Image className="w-32 h-32" source={require('../../assets/logo.png')} />
        </View>
        <View className="mb-10">
          <Text className="text-white text-[28px] font-extrabold text-center">Đăng nhập</Text>
        </View>
        <View className="mx-5 mb-8">
          <Input fieldName={'email'} control={control} errors={errors} />
        </View>
        <View className="mx-5 mb-8">
          <Input fieldName={'password'} control={control} errors={errors} />
          <View className="mt-2">
            <Text className="text-[14px] text-orange-400">* Password phải có ít nhất 6 kí tự</Text>
            <Text className="text-[14px] text-orange-400">* Password phải có ít nhất 1 kí tự đặc biệt: ?, !, @,...</Text>
            <Text className="text-[14px] text-orange-400">* Password phải có ít nhất 1 kí tự hoa: A, B, C,...</Text>
          </View>
        </View>

        <View className="mx-5">
          <TouchableOpacity activeOpacity={0.8} onPress={handleSubmit(onSubmit)} className="bg-[#579DFF] rounded-[5px] shadow-lg">
            <Text className="py-3 text-center text-[18px] text-white">Tiếp tục</Text>
          </TouchableOpacity>
          {/* <Button onPress={handleSubmit(onSubmit)} title='Tiếp tục' /> */}
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen