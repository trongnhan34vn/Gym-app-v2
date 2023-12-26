import { FIND_ALL } from "../api/services/exerciseService";
import { getAll } from "../redux/reducer/exerciseSlice";

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