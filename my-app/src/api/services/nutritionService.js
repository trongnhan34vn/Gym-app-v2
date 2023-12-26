import instance from ".."

export const FIND_ALL = async () => {
  let response = await instance.get('/nutritions')
  return response.data
}