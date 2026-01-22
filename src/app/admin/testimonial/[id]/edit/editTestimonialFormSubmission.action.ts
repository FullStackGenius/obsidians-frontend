"use server";

import { z } from "zod";
import { postForm } from "../../../../../lib/api/server";

const editTestimonialSchema = z.object({
  id: z.string().min(1, "Invalid testimonial ID"),

  clientName: z.string().min(2, "Client name must be at least 2 characters"),
  desination: z.string().min(2, "Designation is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),

  placeholderImage: z
    .any()
    .refine(
      (file) => !file || file.size === 0 || file.size <= 5 * 1024 * 1024,
      "Image must be under 5MB",
    )
    .refine(
      (file) =>
        !file ||
        file.size === 0 ||
        ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      "Only JPG, PNG & WebP images are allowed",
    ),

  videoFile: z
    .any()
    .refine(
      (file) => !file || file.size === 0 || file.size <= 10 * 1024 * 1024,
      "Video must be under 10MB",
    )
    .refine(
      (file) => !file || file.size === 0 || file.type.startsWith("video/"),
      "Only video files are allowed",
    ),
});

/* ───────────────── Types ───────────────── */

type EditInput = z.infer<typeof editTestimonialSchema>;

export type Testimonial = {
  _id: string;
  clientName: string;
  description: string;
  desination: string;
  placeHolderImage: string;
  videourl: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type UpdateTestimonialResponse = {
  success: boolean;
  message: string;
  data: Testimonial;
};

export type ActionState = {
  success?: boolean;
  message?: string;
  data?: Testimonial;
  errors?: Record<string, string>;
  fieldValues?: Partial<EditInput>;
};

/* ───────────────── Action ───────────────── */

export default async function editTestimonialFormSubmission(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  try {
    /* 1️⃣ Convert FormData */
    const data: EditInput = {
      id: formData.get("id") as string,
      clientName: formData.get("clientName") as string,
      desination: formData.get("desination") as string,
      description: formData.get("description") as string,
      placeholderImage: formData.get("placeholderImage") as File,
      videoFile: formData.get("videoFile") as File,
    };

    /* 2️⃣ Validate */
    await editTestimonialSchema.parseAsync(data);

    /* 3️⃣ API Call (UPDATE) */
    const response: UpdateTestimonialResponse = await postForm(
      `/api/testimonial/update/${data.id}`,
      formData,
    );

    if (!response?.success) {
      throw new Error(response?.message || "Update failed");
    }

    return {
      success: true,
      data: response.data,
      message: "Testimonial updated successfully!",
    };
  } catch (error) {
    console.error("Edit testimonial error:", error);

    /* Zod Errors */
    if (error instanceof z.ZodError) {
      const fieldErrors = error.flatten().fieldErrors;

      return {
        success: false,
        errors: Object.fromEntries(
          Object.entries(fieldErrors).map(([key, value]) => [
            key,
            value?.[0] || "",
          ]),
        ),
        fieldValues: {
          id: formData.get("id")?.toString(),
          clientName: formData.get("clientName")?.toString(),
          desination: formData.get("desination")?.toString(),
          description: formData.get("description")?.toString(),
        },
      };
    }

    return {
      success: false,
      errors: {
        _general:
          error instanceof Error ? error.message : "Something went wrong",
      },
    };
  }
}
