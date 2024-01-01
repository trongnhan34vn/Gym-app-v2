import instance from ".."

export const FIND_ALL = async () => {
  let response = await instance.get('/muscles');
  return response.data;
}

export const FIND_BY_ID = async (id) => {
  let response = await instance.get('/muscles/muscle/' + id);
  return response.data;
}