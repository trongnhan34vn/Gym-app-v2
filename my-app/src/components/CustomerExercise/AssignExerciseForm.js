import React, { useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import ExerciseItem from '../Exercise/ExerciseItem'
import { useDispatch, useSelector } from 'react-redux'
import { findAll } from '../../thunk/exerciseThunk'
import { exerciseSelector } from '../../redux/selector'

const AssignExerciseForm = ({ isAssignExercise, checkedExes, setCheckedExes }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findAll())
  }, [])

  const exercises = useSelector(exerciseSelector).exercises;
  
  return (
    <ScrollView>
      {exercises.map(exe => {
        return <ExerciseItem key={exe._id} exe={exe} isAssignExercise={isAssignExercise} checkedExes={checkedExes} setCheckedExes={setCheckedExes} />
      })}
    </ScrollView>
  )
}

export default AssignExerciseForm