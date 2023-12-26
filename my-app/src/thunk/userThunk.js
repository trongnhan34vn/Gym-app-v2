import { SIGN_IN } from "../api/services/authService";
import { getLoginResposne } from "../redux/reducer/userSlice";

export const login = (data) => {
  return async function loginThunk(dispatch) {
    try {
      let response = await SIGN_IN(data);
      dispatch(getLoginResposne(response));
    } catch (error) {
      console.log(error);
      dispatch(getLoginResposne(error.response.data))
    }
  }
}