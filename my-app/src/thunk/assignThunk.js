import { CREATE, FIND_BY_ID, FIND_BY_USER_DATE, UPDATE } from "../api/services/assignService";
import { getPTAssigns, getSelectAssign, getUserAssign } from "../redux/reducer/assignSlice";

export const findByUserAndDate = (data) => {
  return async function findByUserAndDateThunk(dispatch) {
    try {
      let response = await FIND_BY_USER_DATE(data);
      if (data.role === 'PT') {
        dispatch(getPTAssigns(response.data))
      } else {
        dispatch(getUserAssign(response.data))
        if (data.refind) {
          dispatch(getSelectAssign(response));
        }
      }
    } catch (error) {
      if (data.role === 'PT') {
        dispatch(getPTAssigns(null));
      } else {
        dispatch(getSelectAssign(null));
      }
    }
  }
}

export const findById = (id) => {
  return async function findByIdThunk(dispatch) {
    try {
      let response = await FIND_BY_ID(id);
      dispatch(getSelectAssign(response));
    } catch (error) {
      console.log(error);
    }
  }
}

export const update = (data) => {
  return async function updateThunk(dispatch) {
    try {
      let response = await UPDATE(data);
      dispatch(getSelectAssign(response));
    } catch (error) {
      console.log(error);
    }
  }
}

export const create = (data) => {
  return async function createThunk(dispatch) {
    try {
      let response = await CREATE(data);
      console.log(response);
      if (response.message !== 'Already Assigned') {
        dispatch(getSelectAssign(response));
      }
    } catch (error) {
      
    }
  }
}