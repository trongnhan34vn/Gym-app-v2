import { useEffect, useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage'

export const useAsyncStorage = (key, init) => {
  const [data, setData] = useState(init);

  const getStoredItem = async (key, init) => {
    try {
      const item = await AsyncStorage.getItem(key);
      const value = item ? JSON.parse(item) : init;
      setData(value);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getStoredItem(key, init);
  }, [key, init]);

  const setValue = async (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setData(valueToStore);
      await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [data, setValue];
}