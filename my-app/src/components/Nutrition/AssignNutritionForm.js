import React, { useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { findAll } from '../../thunk/nutritionThunk';
import { nutritionSelector } from '../../redux/selector';
import NutritionItem from './NutritionItem';
import NutItem from '../Modal/NutItem';

const AssignNutritionForm = ({ checkedNuts, setCheckedNuts }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findAll())
  }, [])

  const nutritions = useSelector(nutritionSelector).nutritions;

  return (
    <ScrollView>
      <View className="mb-16">
        {nutritions.map((nut, index) => {
          return <NutItem key={nut._id} nutrition={nut} index={index} checkedNuts={checkedNuts} setCheckedNuts={setCheckedNuts} />
        })}
      </View>

    </ScrollView>
  )
}

export default AssignNutritionForm