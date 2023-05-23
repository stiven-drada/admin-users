import { axiosInstance } from "../api/axiosInstance";

export const updateUser = (id, newDataUser) => {
  try {
    axiosInstance.put(`/users/${id}/`, newDataUser);
  } catch (error) {
    console.error(error);
  }
};
