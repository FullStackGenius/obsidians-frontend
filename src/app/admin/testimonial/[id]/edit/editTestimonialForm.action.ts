"use server"

import { z } from "zod";
import { postForm } from "../../../../../lib/api/server";
// ── Define validation schema ───────────────────────────────────────
const editTestimonialSchema = z.object({
  clinetName: z.string().min(2, "Client name must be at least 2 characters"),
  desination: z.string().min(2, "Designation is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),

  placeholderImage: z
    .instanceof(File)
    .refine((file) => file.size > 0, "Please select placeholder image")
    .refine(
      (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      "Only JPG, PNG & WebP images are allowed"
    )
    .refine((file) => file.size <= 5 * 1024 * 1024, "Image must be under 5MB"),

  videoFile: z
    .instanceof(File)
    .refine((file) => file.size > 0, "Please select a video file")
    .refine(
      (file) => file.type.startsWith("video/"),
      "Only video files are allowed"
    )
    .refine((file) => file.size <= 10 * 1024 * 1024, "Video must be under 10MB"),
    // .optional() ← remove .optional() if video is required
});

type Testimonial = {
_id: string,
    clientName:string,
    description: string,
    desination: string,
    placeHolderImage: string,
    videourl: string,
    status: boolean,
    createdAt: string,
    updatedAt: string
   
}


type TestimonialApiResponse = {
  success: boolean,
  data: Testimonial,
  message:string

}

// Infer type for better type-safety
type TestimonialInput = z.infer<typeof editTestimonialSchema>;

export type ActionState = {
  success?: boolean;
  message?: string;
  errors?: Record<string, string>; // ← better UX than string[]
  fieldValues?: Partial<TestimonialInput & { [key: string]: any }>; // for repopulating form
};

export default async function editTestimonialAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    // 1. Convert FormData → plain object + Files
    const data = {
      clinetName: formData.get("clinetName") as string,
      desination: formData.get("desination") as string,
      description: formData.get("description") as string,
      placeholderImage: formData.get("placeholderImage") as File,
      videoFile: formData.get("videoFile") as File,
    };

    // 2. Validate with zod
    const parsed = await editTestimonialSchema.parseAsync(data);

    // 3. Send to API (only valid data reaches here)
    const response:TestimonialApiResponse = await postForm("/api/testimonial/create", formData);

    if (!response?.success) {
      throw new Error(response?.message || "API returned failure");
    }

    return {
      success: true,
      message: "Testimonial created successfully!",
    };
  } catch (error) {
    console.error("Create testimonial error:", error);

    if (error instanceof z.ZodError) {
      // Transform zod errors → field-based error object
      const fieldErrors = error.flatten().fieldErrors;

      return {
        success: false,
        errors: Object.fromEntries(
          Object.entries(fieldErrors).map(([key, value]) => [key, value?.[0] || ""])
        ),
        fieldValues: {
          clinetName: formData.get("clinetName")?.toString(),
          desination: formData.get("desination")?.toString(),
          description: formData.get("description")?.toString(),
        },
      };
    }

    return {
      success: false,
      errors: { _general: error instanceof Error ? error.message : "Something went wrong" },
    };
  }
}