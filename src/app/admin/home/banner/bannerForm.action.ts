"use server";
import { postForm } from "../../../../lib/api/server";
import { z } from "zod";

const updateBannerSchema = z.object({
  id: z.string().min(1, "Invalid testimonial ID"),

  welcomeText: z.string().min(1, "Welcome Text is required").trim(),
  brandName: z.string().min(1, "Brand Name is required").trim(),
  mainHeading: z.string().min(1, "Main Heading is required").trim(),
  highlightedText: z
    .string()
    .min(1, "Highlighted Text Heading is required")
    .trim(),
  description: z.string().min(1, "description is required").trim(),
  primaryButtonText: z
    .string()
    .min(1, "Primary Button Text is required")
    .trim(),
  primaryButtonLink: z
    .string()
    .min(1, "Primary Button Link is required")
    .trim(),
  title1: z.string().min(1, "Title1 is required").trim(),
  title2: z.string().min(1, "Title2 is required").trim(),
  title3: z.string().min(1, "Title3 is required").trim(),
  subtitle1: z.string().min(1, "Subtitle1 is required").trim(),
  subtitle2: z.string().min(1, "Subtitle2 is required").trim(),
  subtitle3: z.string().min(1, "Subtitle3 is required").trim(),
  scrollDownText: z.string().min(1, "ScrollDown Text is required").trim(),
  scrollDownTargetId: z
    .string()
    .min(1, "ScrollDown TargetId is required")
    .trim(),
  description1: z.string().min(10, "Description1 is required").trim(),
  description2: z.string().min(10, "Description2 is required").trim(),
  description3: z.string().min(10, "Description3 is required").trim(),

  bannerImage: z
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

export default async function bannerFormAction(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  //   console.log(formData.get("welcomeText"));
  try {
    const data = {
       id: formData.get("id") as string,
      welcomeText: formData.get("welcomeText") as string,
      brandName: formData.get("brandName") as string,
      mainHeading: formData.get("mainHeading") as string,
      highlightedText: formData.get("highlightedText") as string,
      description: formData.get("description") as string,
      primaryButtonText: formData.get("primaryButtonText") as string,
      primaryButtonLink: formData.get("primaryButtonLink") as string,
      title1: formData.get("title1") as string,
      subtitle1: formData.get("subtitle1") as string,
      description1: formData.get("description1") as string,
      title2: formData.get("title2") as string,
      subtitle2: formData.get("subtitle2") as string,
      description2: formData.get("description2") as string,
      title3: formData.get("title3") as string,
      subtitle3: formData.get("subtitle3") as string,
      description3: formData.get("description3") as string,
      scrollDownText: formData.get("scrollDownText") as string,
      scrollDownTargetId: formData.get("scrollDownTargetId") as string,
      bannerImage: formData.get("bannerImage") as File,
    };

    /* 2️⃣ Validate */
    await updateBannerSchema.parseAsync(data);

    // // 3. Send to API (only valid data reaches here)
    const response: any = await postForm(
      "/api/home-content/banner-update",
      formData,
    );
    console.log(response, "response");

    if (!response?.success) {
      throw new Error(response?.message || "API returned failure");
    }

    return {
      success: true,
      fieldValues:response.data,
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
          Object.entries(fieldErrors).map(([key, value]) => [
            key,
            value?.[0] || "",
          ]),
        ),
        fieldValues: {
          welcomeText: formData.get("welcomeText")?.toString(),
          brandName: formData.get("brandName")?.toString(),
          mainHeading: formData.get("mainHeading")?.toString(),
          highlightedText: formData.get("highlightedText")?.toString(),
          description: formData.get("description")?.toString(),
          primaryButtonText: formData.get("primaryButtonText")?.toString(),
          primaryButtonLink: formData.get("primaryButtonLink")?.toString(),
          title1: formData.get("title1")?.toString(),
          subtitle1: formData.get("subtitle1")?.toString(),
          description1: formData.get("description1")?.toString(),
          title2: formData.get("title2")?.toString(),
          subtitle2: formData.get("subtitle2")?.toString(),
          description2: formData.get("description2")?.toString(),
          title3: formData.get("title3")?.toString(),
          subtitle3: formData.get("subtitle3")?.toString(),
          description3: formData.get("description3")?.toString(),
          scrollDownText: formData.get("scrollDownText")?.toString(),
          scrollDownTargetId: formData.get("scrollDownTargetId")?.toString(),
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
