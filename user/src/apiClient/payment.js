import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER_URL;

export const getRazorpayAPIKey = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/getkey`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
