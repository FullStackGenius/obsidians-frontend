import { notFound } from 'next/navigation';
import { get } from '../../../../lib/api/server';
import AboutSection from './AboutSection';




export default async function EditTestimonialPage() {

    const getHomeAboutSectionData = await getHomeAboutSection();
    // console.log(getHomeAboutSectionData);

    if (!getHomeAboutSection) {
        notFound();
    }
  
    return (
        <AboutSection getHomeAboutSectionData={getHomeAboutSectionData.data} />
    );
}

async function getHomeAboutSection() {
    const res = await get<any>(
        '/api/home-content/get-home-banner-content',   // ✅ ID added here
        { useAuth: true }
    );
    return res;
}