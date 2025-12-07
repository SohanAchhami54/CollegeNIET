"use server";

import { cookies } from "next/headers";

import { redirect } from "next/navigation";

export async function handleLogout() {
  // Await the cookies API call
  const cookiesObj = await cookies();
  cookiesObj.delete("refreshToken");
  cookiesObj.delete("accessToken");
  redirect("/login");
}

export async function getToken() {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;
    if (!accessToken) {
      console.error("No access token found");
    }
    return accessToken;
  } catch (error) {
    console.error("Error retrieving access token:", error);
    return null;
  }
}

export async function getRefreshToken() {
  try {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get("refreshToken")?.value;
    return refreshToken;
  } catch (error) {
    console.error("Error fetching refresh token:", error);
    return null;
  }
}

export async function saveAccessToken(accessToken) {
  const cookieStore = await cookies();

  cookieStore.set("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
}
