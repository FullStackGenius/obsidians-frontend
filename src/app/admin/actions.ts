"use server";

import { cookies } from "next/headers";
import { post } from "../../lib/api/server";

interface LoginResponse {
  data: {
    token: string;
    user: {
      id: number;
      email: string;
    };
  };
}

export async function loginAction(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await post<LoginResponse>(
      "/api/auth/login",
      { email, password },
      { useAuth: false }
    );

    
    const cookieStore = await cookies();

    
    cookieStore.set("auth_token", res.data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax", // 🔥 FIX
      path: "/",
    });

    // ✅ RETURN USER FOR CLIENT
    return {
      success: true,
      user: res.data.user,
    };
  } catch (err: any) {
    return {
      success: false,
      message: err.message || "Login failed",
    };
  }
}
