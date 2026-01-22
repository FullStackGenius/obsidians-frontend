import { notFound } from 'next/navigation';
import { get } from '../../../../../lib/api/server';
import EditTestimonialForm from './EditTestimonialForm';


interface Props {
  params: Promise<{ id: string }>;    // ← ← ← Very important change!
}

export default async function EditTestimonialPage({ params }: Props) {
  const { id } = await params;

  console.log("ID from params:", id);           // Now it will show "8", "123", etc.
  console.log("Type of id:", typeof id);        // "string"
  const testimonial = await getTestimonialById(id);

  if (!testimonial) {
    notFound();
  }
  console.log(testimonial);  
  return (
  <EditTestimonialForm testimonial={testimonial.data.testimonial} />
  );
}

async function getTestimonialById(id: string) {
  const res = await get<any>(
    `/api/testimonial/edit/${id}`,   // ✅ ID added here
    { useAuth: true }
  );
  return res;
}