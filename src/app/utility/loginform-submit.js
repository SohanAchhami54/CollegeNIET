"use server";
import axios from "axios";
import { cookies } from "next/headers";

export async function handleLoginFormSubmit(formData) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND}users/token/`,
      formData
    );

    const refreshToken = response.data.refresh;
    const accessToken = response.data.access;

    // Store refresh token securely in an HttpOnly cookie
    const cookieStore = await cookies();

    cookieStore.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    cookieStore.set("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    console.log(response.data.user_type, "-------------------");
    return { success: true, userType: response.data.user_type };
  } catch (error) {
    console.log(error);
    return { success: false, error: "Login Failed" };
  }
}
