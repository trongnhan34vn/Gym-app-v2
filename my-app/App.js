import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { Button, Pressable, StatusBar, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './src/stack/HomeStack';
import PTStack from './src/stack/PTStack';
import CustomerExerciseDetailScreen from './src/screens/CustomerExerciseDetailScreen';
import { Provider } from 'react-redux'
import store from './src/redux/store';
import { ToastProvider } from 'react-native-toast-notifications'
import { MaterialIcons } from '@expo/vector-icons';
import { enGB, registerTranslation } from 'react-native-paper-dates'
import ExerciseDetailScreen from './src/screens/ExerciseDetailScreen';
import ListExercisesMuscle from './src/screens/ListExercisesMuscle';
registerTranslation('en-GB', enGB)

// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store} >
      <ToastProvider dangerIcon={<MaterialIcons name="error" size={24} color="white" />} duration={2000} placement='top'>
        <NavigationContainer>
          <StatusBar barStyle={"light-content"} />
          <Stack.Navigator>
            <Stack.Screen
              name='Login'
              component={LoginScreen}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name='CustomerExerciseDetail'
              component={CustomerExerciseDetailScreen}
              options={{
                headerShown: true,
                title: "Customer",
                headerStyle: {
                  backgroundColor: "#1D2125",
                },
                headerTitleStyle: {
                  color: "#FFFFFF",
                },
                headerTitleAlign: 'center',
                headerTintColor: "#FFFFFF",
              }}
            />
            <Stack.Screen
              name='Home'
              component={HomeStack}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='PT'
              component={PTStack}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name='ExerciseDetailScreen'
              component={ExerciseDetailScreen}
              options={{
                headerShown: true,
                title: "Exercise",
                headerStyle: {
                  backgroundColor: "#1D2125",
                },
                headerTitleStyle: {
                  color: "#FFFFFF",
                },
                headerTitleAlign: 'center',
                headerTintColor: "#FFFFFF",
              }}
            />

            <Stack.Screen
              name='Muscle'
              component={ListExercisesMuscle}
              options={{
                headerShown: true,
                title: "Muscle",
                headerStyle: {
                  backgroundColor: "#1D2125",
                },
                headerTitleStyle: {
                  color: "#FFFFFF",
                },
                headerTitleAlign: 'center',
                headerTintColor: "#FFFFFF",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ToastProvider>

    </Provider>
  );
}

