import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import CustomerExercise from '../screens/CustomerExerciseScreen';
import UserInfoScreen from '../screens/UserInfoScreen';
import TraniningSchedule from '../screens/TraniningSchedule';


const Tab = createBottomTabNavigator();

const PTStack = () => {
  return (
    <Tab.Navigator initialRouteName='Khách hàng' screenOptions={{
      tabBarStyle: { backgroundColor: "#1D2125" },
      tabBarLabelStyle: { fontSize: 15, color: "#B6C2CF" },
    }}>
      <Tab.Screen
        name='Khách hàng'
        component={CustomerExercise}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (<AntDesign name="solution1" size={20} color="#B6C2CF" />);
          }
        }}
      />
      <Tab.Screen
        name='Lịch'
        component={TraniningSchedule}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (<AntDesign name="calendar" size={24} color="#B6C2CF" />);
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

export default PTStack