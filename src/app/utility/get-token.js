"use client";
import { useState, useEffect } from "react";
import axios from "axios";

import {
  getToken,
  handleLogout,
  getRefreshToken,
  saveAccessToken,
} from "./auth";

export async function fetchAccessToken() {
  const accessToken = await getToken();

  if (!accessToken) {
    console.error("No access token found");
    return null;
  }

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND}users/get/token/`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      }
    );

    return response.data.access;
  } catch (error) {
    await handleLogout();

    if (error.response?.status === 401) {
      const refreshToken = await getRefreshToken();

      if (!refreshToken) {
        await handleLogout();
      }
      try {
        const refreshResponse = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND}users/get/token/`,
          { refresh: refreshToken },
          { withCredentials: true }
        );
        saveAccessToken(refreshResponse.data.access);
        return refreshResponse.data.access;
      } catch (refreshError) {
        console.error("Refresh token failed:", refreshError);
        return null;
      }
    }
    console.error("Failed to fetch access token:", error);
    return null;
  }
}

export function useAuthToken() {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    async function loadToken() {
      const token = await fetchAccessToken();
      setAccessToken(token);
    }
    loadToken();
  }, []);

  return accessToken;
}
