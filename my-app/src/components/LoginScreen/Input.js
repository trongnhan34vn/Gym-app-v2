import React from 'react'
import { Controller } from 'react-hook-form'
import { capitalizeFirstLetter } from '../../utils/utils'
import { TextInput } from 'react-native'
import { REGEX_EMAIL, REGEX_PASSWORD } from '../../helpers/constants'

const Input = ({ fieldName, control, errors }) => {
  const isPassField = fieldName === 'password' ? true : false;

  const validate = () => {
    switch (fieldName) {
      case 'password':
        return {
          value: REGEX_PASSWORD,
          message: 'Password is invalid!'
        }
      default:
        return {
          value: REGEX_EMAIL,
          message: 'Email is invalid!'
        }
    }
  }

  const controlErrors = () => {
    switch (fieldName) {
      case 'email':
        if (errors.email) {
          return 'red'
        }
        return '#A1BDD914'
      default:
        if (errors.password) {
          return 'red'
        }
        return '#A1BDD914'
    }

  }

  return (
    <Controller
      control={control}
      rules={{
        required: true,
        pattern: validate()
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          style={{borderColor: controlErrors()}}
          secureTextEntry={isPassField}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          placeholderTextColor={'#B6C2CF'}
          placeholder={capitalizeFirstLetter(fieldName)}
          className="text-white text-[18px] border-[2px] border-[#A1BDD914] px-4 py-4 bg-[#A1BDD914] rounded-[5px]"
        />
      )}
      name={fieldName}
    />
  )
}

export default Input