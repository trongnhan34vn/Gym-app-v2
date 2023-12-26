import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScheduleScreen from '../screens/ScheduleScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import WorkScreen from '../screens/WorkScreen';
import UserInfoScreen from '../screens/UserInfoScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const HomeStack = () => {

  return (
    <Tab.Navigator initialRouteName='Lịch trình' screenOptions={{
      tabBarStyle: { backgroundColor: "#1D2125" },
      tabBarLabelStyle: { fontSize: 15, color: "#B6C2CF" },
    }}>
      <Tab.Screen
        name='Lịch trình'
        component={ScheduleScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (<FontAwesome name="list-ul" size={20} color="#B6C2CF" />);
          }
        }}
      />
      <Tab.Screen
        name='Luyện tập'
        component={ExerciseScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (<Ionicons name="barbell" size={20} color="#B6C2CF" />);
          }
        }}
      />
      <Tab.Screen
        name='Bài Tập'
        component={WorkScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (<FontAwesome5 name="running" size={24} color="#B6C2CF" />);
          }
        }}
      />
      <Tab.Screen
        name='Hồ sơ'
        component={UserInfoScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (<FontAwesome5 name="user-circle" size={24} color="#B6C2CF" />);
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default HomeStack