"use server";

import { postForm } from "../../../lib/api/server";



export type ProfilePayload = {
  firstName: string;
  lastName: string;
  email: string;
};

// export default async function profileAction(formData: FormData) {
export default async function profileAction(formData: FormData): Promise<void> {
  try {
  
    // OPTIONAL: You can read values if validation is needed
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");

    if (!firstName || !lastName) {
      throw new Error("First name and last name are required");
    }

    // 🔥 DIRECTLY SEND FormData (image + text)
  
    const data = await postForm("/api/user/update-profile", formData);
    

    // return data;
  } catch (error) {
    console.error("Profile update error:", error);
    throw error;
  }
}
