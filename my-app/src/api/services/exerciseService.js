import instance from ".."

export const FIND_ALL = async () => {
  let response = await instance.get('/exercises')
  return response.data;
}

export const FIND_BY_ID = async (id) => {
  let response = await instance.get('/exercises/exercise/' + id)
  return response.data;
}

export const FIND_BY_MUSCLE_ID = async (id) => {
  let response = await instance.get('/exercises/muscle?muscleId=' + id);
  return response.data;
}