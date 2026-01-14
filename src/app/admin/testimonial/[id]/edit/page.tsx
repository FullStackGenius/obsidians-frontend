import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ id: string }>;    // ← ← ← Very important change!
}

export default async function EditTestimonialPage({ params }: Props) {
  // You MUST await params in dynamic routes now
  const { id } = await params;

  console.log("ID from params:", id);           // Now it will show "8", "123", etc.
  console.log("Type of id:", typeof id);        // "string"

  const testimonial = await getTestimonialById(id);

  if (!testimonial) {
    notFound();
  }
  console.log(testimonial);  
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">
        Edit Testimonial #{id}
      </h1>

      {/* <TestimonialForm initialData={testimonial} mode="edit" testimonialId={id} /> */}
    </div>
  );
}

// Example fetch function (apne according change karna)
async function getTestimonialById(id: string) {
  // Real mein yahan API call ya database query hogi
  // const res = await fetch(`http://your-api/testimonials/${id}`);
  // return res.json();

  // Dummy data for example
  return {
    id,
    clinetName: "John Doe",
    desination: "CEO",
    description: "Great service!",
    placeholderImage: "/images/john.jpg",
    videoUrl: "/videos/test.mp4"
  };
}