import { FIND_ALL, FIND_BY_ID, FIND_BY_MUSCLE_ID } from "../api/services/exerciseService";
import { getAll, getByMuscleId, getSelect } from "../redux/reducer/exerciseSlice";

export const findAll = () => {
  return async function findAllThunk(dispatch) {
    try {
      let response = await FIND_ALL()
      dispatch(getAll(response.data))
    } catch (error) {
      console.log(error);
    }
  }
}

export const findById = (id) => {
  return async function findByIdThunk(dispatch) {
    try {
      let response = await FIND_BY_ID(id)

      dispatch(getSelect(response.data))
    } catch (error) {
      console.log(error);
    }
  }
}

export const findByMuscleId = (muscleId) => {
  return async function findByMuscleIdThunk(dispatch) {
    try {
      let response = await FIND_BY_MUSCLE_ID(muscleId);
      dispatch(getByMuscleId(response.data))
    } catch (error) {
      console.log(error);
    }
  }
}