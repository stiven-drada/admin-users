import { axiosInstance } from "../api/axiosInstance";

export const deleteUser = async (id) => {
  await axiosInstance.delete(`users/${id}/`);
};
