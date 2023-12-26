import instance from ".."

export const FIND_BY_USER_DATE = async (data) => {
  let response = await instance.get(`/assigns/user/date?user=${data.user}&date=${data.date}&role=${data.role}`);
  return response.data;
}

export const FIND_BY_ID = async (id) => {
  let response = await instance.get(`/assigns/assign/${id}`);
  return response.data;
}

export const UPDATE = async (data) => {
  console.log(data.assignId);
  let response = await instance.patch(`/assigns/assign/${data.assignId}`, data);
  return response.data;
}