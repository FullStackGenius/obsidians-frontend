"use server";

import { postForm } from "../../../lib/api/server";

export type ActionState = {
  success?: boolean;
  message?: string;
  errors?: string[];
  updatedUser?: any; // your User type
};

// User object
export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  profileImage: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
}

// API response data wrapper
export interface ProfileUpdateData {
  user: User;
}

// Main API response
export interface ProfileUpdateResponse {
  success: boolean;
  message: string;
  data: ProfileUpdateData;
}


export default async function profileAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    const firstName = formData.get("firstName")?.toString();
    const lastName = formData.get("lastName")?.toString();

    if (!firstName || !lastName) {
      return {
        success: false,
        errors: ["First name and last name are required"],
      };
    }

    // Send FormData (including file) to your API
    const response : ProfileUpdateResponse = await postForm("/api/user/update-profile", formData);
    console.log(response)

    // Assuming your API returns updated user in this shape
    if (response?.success && response?.data?.user) {
      return {
        success: true,
        message: "Profile updated successfully!",
        updatedUser: response.data.user,
      };
    }

    return {
      success: false,
      errors: ["Failed to update profile"],
    };
  } catch (error: any) {
    console.error("Profile update error:", error);
    return {
      success: false,
      errors: [error.message || "Something went wrong"],
    };
  }
}