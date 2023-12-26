import instance from ".."

export const SIGN_IN = async (data) => {
  let response = await instance.post('/auth/sign-in', data);
  return response.data;
}