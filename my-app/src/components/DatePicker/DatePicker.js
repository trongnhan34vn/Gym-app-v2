import React from 'react'
import { Button, View } from 'react-native';
import { DatePickerModal } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useDispatch } from 'react-redux'
import { findByUserAndDate } from '../../thunk/assignThunk';

const DatePicker = ({ open, date, setOpen, setDate, selectAssign, assign }) => {
  const dispatch = useDispatch();

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpen(false);
      console.log(params.date);
      const dateObj = new Date(params.date);
      const dateTimestamp = dateObj.getTime();
      setDate(dateTimestamp);
      if (!assign) return;
      let data = {
        user: assign.user._id,
        date: dateTimestamp,
        role: 'USER',
        refind: true,
      }
      console.log(data);
      dispatch(findByUserAndDate(data))
    },
    [setOpen, setDate]
  );
  return (
    <SafeAreaProvider className="bg-[#1D2125]">
      <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
        <DatePickerModal
          locale="en-GB"
          mode="single"
          visible={open}
          uppercase={true}
          onDismiss={onDismissSingle}
          date={new Date(date)}
          onConfirm={onConfirmSingle}
        />
      </View>
    </SafeAreaProvider>
  )
}

export default DatePicker