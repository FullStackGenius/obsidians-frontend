import { notFound } from 'next/navigation';
import { get } from '../../../../lib/api/server';
import BanerForm from './BannerForm'



export default async function EditTestimonialPage() {

    const getHomeBannerContentData = await getHomeBannerContent();

    if (!getHomeBannerContentData) {
        notFound();
    }
  
    return (
        <BanerForm getHomeBannerContentData={getHomeBannerContentData.data} />
    );
}

async function getHomeBannerContent() {
    const res = await get<any>(
        '/api/home-content/get-home-banner-content',   // ✅ ID added here
        { useAuth: true }
    );
    return res;
}