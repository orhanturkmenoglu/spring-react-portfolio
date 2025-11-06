import axios from "axios";

export const BASE_URL = "http://localhost:8080/api/v1.0";




export const fetchAboutInfoList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/abouts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching about data:", error);
    throw error; 
  }
};