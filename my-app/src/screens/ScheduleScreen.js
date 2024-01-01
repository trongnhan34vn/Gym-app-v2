import React, { useContext, useEffect, useState } from 'react'
import { StatusBar, Text, View } from 'react-native'
import Navbar from '../components/Navbar/Navbar'
import { useAsyncStorage } from '../hooks/useAsyncStorage';
import { useDispatch, useSelector } from 'react-redux'
import { assignSelector, userSelector } from '../redux/selector';
import { findByUserAndDate } from '../thunk/assignThunk'
import { getCurrentDate } from '../utils/utils';
import { HomeContext } from '../context/HomeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ScheduleScreen = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(userSelector).loginResponse.data;
  useEffect(() => {
    let data = {
      role: 'USER',
      user: currentUser._id,
      date: 1703350800000
    }
    dispatch(findByUserAndDate(data))
  }, [])

  return (
    <View className="bg-[#1D2125] h-screen">
      <Navbar />
    </View>
  )
}

export default ScheduleScreen