import { FIND_ALL, FIND_BY_ID } from "../api/services/muscleService"
import { getAll, getSelect } from "../redux/reducer/muscleSlice";

export const findAll = () => {
  return async function findAllThunk(dispatch) {
    try {
      let response = await FIND_ALL();
      dispatch(getAll(response.data));
    } catch (error) {

    }
  }
}

export const findById = (id) => {
  return async function findByIdThunk(dispatch) {
    try {
      let response = await FIND_BY_ID(id);
      dispatch(getSelect(response.data))
    } catch (error) {
      console.log(error);
    }
  }
}