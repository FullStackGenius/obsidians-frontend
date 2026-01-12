"use server";

import { postForm } from "../../../lib/api/server";

export type ActionState = {
  success?: boolean;
  message?: string;
  errors?: string[];
  logo?: Logo; // your User type
};

// User object
export interface Logo {
  _id: string;
  companyLogoImage: string;
  status: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
}

// // API response data wrapper
export interface LogoData {
  logo: Logo;
}

// Main API response
export interface ProfileUpdateResponse {
  success: boolean;
  message: string;
  data: LogoData;
}

export default async function profileAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  console.log(formData, "tetteetet");
  try {
    // Send FormData (including file) to your API
    const response: ProfileUpdateResponse = await postForm(
      "/api/company-logo/create",
      formData
    );
    console.log(response);

    // Assuming your API returns updated user in this shape
    if (response?.success && response?.data?.logo) {
      return {
        success: true,
        message: "Logo created successfully!",
        logo: response.data.logo,
      };
    }

    return {
      success: false,
      errors: ["Failed to create logo"],
    };
  } catch (error: any) {
    console.error("logo created error:", error);
    return {
      success: false,
      errors: [error.message || "Something went wrong"],
    };
  }
}
