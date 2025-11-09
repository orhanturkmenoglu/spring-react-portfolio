import axios from "axios";

export const BASE_URL = "http://localhost:8080/api/v1.0";

export const API_ENDPOINTS = {
  ABOUT: "/abouts",
  CONTACT: "/contacts",
  PROJECT: "/projects",
  SKILL: "/skills",
  WORK: "/works",
  DOWNLOADCV:"/export/pdf",
  LOGIN:"/auth/login",
  REGISTER:"/auth/register"
};

export const fetchAboutInfoList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}${API_ENDPOINTS.ABOUT}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching about data:", error);
    throw error;
  }
};

export const fetchSkillInfoList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}${API_ENDPOINTS.SKILL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching skill data:", error);
    throw error;
  }
};


export const fetchWorkInfoList = async()=>{
   try {
    const response = await axios.get(`${BASE_URL}${API_ENDPOINTS.WORK}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching work data:", error);
    throw error;
  }
}