"use server";
import { postForm } from "../../../../lib/api/server";
import { z } from "zod";

const updateBannerSchema = z.object({
  id: z.string().min(1, "Invalid testimonial ID"),
  headingTitle: z.string().min(1, "Welcome Text is required").trim(),
  headingHighlightedText: z.string().min(1, "Brand Name is required").trim(),
  buttonLink: z.string().min(1, "Main Heading is required").trim(),
  buttonText: z.string().min(1, "Highlighted Text Heading is required").trim(),
  description: z.string().min(1, "description is required").trim(),
  reviewsRating: z.string().min(1, "Primary Button Text is required").trim(),
  reviewsLable: z.string().min(1, "Primary Button Link is required").trim(),
  reviewsPlatform: z.string().min(1, "Title1 is required").trim(),
  contentImage: z
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
  sideImage: z
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
  buttonIcon: z
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
  platformIcon: z
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
  reviewImages: z
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
});
type EditInput = z.infer<typeof updateBannerSchema>;
export type ActionState = {
  success?: boolean;
  message?: string;
  errors?: Record<string, string>; // ← better UX than string[]
  fieldValues?: any;
  //fieldValues?: Partial<TestimonialInput & { [key: string]: any }>; // for repopulating form
};

export default async function aboutSectionSubmission(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  try {
    // console.log("formData", formData);
    const data = {
      id: formData.get("id") as string,
      headingTitle: formData.get("headingTitle") as string,
      headingHighlightedText: formData.get("headingHighlightedText") as string,
      description: formData.get("description") as string,
      buttonText: formData.get("buttonText") as string,
      buttonLink: formData.get("buttonLink") as string,
      reviewsRating: formData.get("reviewsRating") as string,
      reviewsLable: formData.get("reviewsLable") as string,
      reviewsPlatform: formData.get("reviewsPlatform") as string,
      contentImage: formData.get("contentImage") as File,
      sideImage: formData.get("sideImage") as File,
      buttonIcon: formData.get("buttonIcon") as File,
      platformIcon: formData.get("platformIcon") as File,
    };

    /* 2️⃣ Validate */
    await updateBannerSchema.parseAsync(data);

    // // 3. Send to API (only valid data reaches here)
    const response: any = await postForm(
      "/api/home-content/about-update",
      formData,
    );
    // console.log(response, "response");

    if (!response?.success) {
      throw new Error(response?.message || "API returned failure");
    }

    return {
      success: true,
      fieldValues: response.data,
      message: "about update created successfully!",
    };
  } catch (error) {
    console.error("Create testimonial error:", error);

    if (error instanceof z.ZodError) {
      // Transform zod errors → field-based error object
      //const fieldErrors = error.flatten().fieldErrors;
      const flattened = z.flattenError(error); // ← this is the direct replacement for .flatten()

      const fieldErrors = flattened.fieldErrors;
      console.log(fieldErrors);
      return {
        success: false,
        errors: Object.fromEntries(
          Object.entries(fieldErrors).map(([key, value]) => [
            key,
            value?.[0] || "",
          ]),
        ),
        fieldValues: {
          headingTitle: formData.get("headingTitle")?.toString(),
          headingHighlightedText: formData
            .get("headingHighlightedText")
            ?.toString(),
          description: formData.get("description")?.toString(),
          highlightedText: formData.get("highlightedText")?.toString(),
          buttonText: formData.get("buttonText")?.toString(),
          buttonLink: formData.get("buttonLink")?.toString(),
          reviewsRating: formData.get("reviewsRating")?.toString(),
          reviewsLable: formData.get("reviewsLable")?.toString(),
          reviewsPlatform: formData.get("reviewsPlatform")?.toString(),
          contentImage: formData.get("contentImage")?.toString(),
          sideImage: formData.get("sideImage")?.toString(),
          buttonIcon: formData.get("buttonIcon")?.toString(),
          platformIcon: formData.get("platformIcon")?.toString(),
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
