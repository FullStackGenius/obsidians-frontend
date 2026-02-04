"use client"
import React, { useActionState, useState } from 'react'
import AdminLayout from '../../components/AdminLayout'
import MainAppContentHeader from '../../components/MainAppContentHeader'
import aboutSectionSubmission from './aboutSection.action'


const AboutSection: React.FC<any> = (props) => {
  const { getHomeAboutSectionData } = props;
  // console.log(getHomeAboutSectionData,'getHomeAboutSectionData');
  console.log(getHomeAboutSectionData.aboutSection.reviews.reviewImages, 'reviewImage');
  const [state, formAction, isPending] = useActionState(
    aboutSectionSubmission,
    { errors: {} }
  );
  console.log(state, 'state')
  const [reviewImages, setReviewImage] = useState(getHomeAboutSectionData.aboutSection.reviews.reviewImages)
  const [inputs, setInputs] = useState([0]);
  const [previews, setPreviews] = useState({});

  // Handle file change
  const handleFileChange = (index, e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreviews((prev) => ({
      ...prev,
      [index]: URL.createObjectURL(file),
    }));
  };

  // Add input
  const addInput = () => {
    setInputs((prev) => [...prev, Date.now()]);
  };

  // Remove input
  const removeInput = (index) => {
    setInputs((prev) => prev.filter((i) => i !== index));
    setPreviews((prev) => {
      const copy = { ...prev };
      delete copy[index];
      return copy;
    });
  };


  const handleDeleteReviewImage = async (image, index) => {
  if (!window.confirm("Are you sure you want to delete this image?")) return;

  // try {
  //   await fetch("/api/delete-review-image", {
  //     method: "POST", // or DELETE
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ image }),
  //   });

  //   // UI se remove
  //   setReviewImages((prev) =>
  //     prev.filter((_, i) => i !== index)
  //   );
  // } catch (error) {
  //   console.error(error);
  //   alert("Image delete failed");
  // }
};

  // console.log(getHomeAboutSectionData, "test");
  return (
    <AdminLayout>

      <MainAppContentHeader
        title="About Section"
        breadcrumbs={[
          { label: 'Home', href: '/admin' },
          { label: 'About Section', href: '/admin/about-section' },

        ]}
      />
      <div className="app-content">
        <div className="container-fluid">
          <div className="card card-primary card-outline">
            <form action={formAction} className="card">

              {/* 🔑 REQUIRED FOR EDIT */}
              <input type="hidden" name="id" defaultValue={getHomeAboutSectionData._id} />

              <div className="card-body">
                {state.errors?._general && (
                  <div className="alert alert-danger mb-3">
                    {state.errors._general}
                  </div>
                )}

                {state.success && (
                  <div className="alert alert-success">{state.message}</div>
                )}

                <div className="mb-3">
                  <label className="form-label">Heading title</label>
                  <input
                    type="text"
                    name="headingTitle"
                    className="form-control"
                    defaultValue={state?.fieldValues?.heading?.title ?? getHomeAboutSectionData.aboutSection.heading.title}
                  // defaultValue={state.data?.clientName ?? clientName}
                  // className={`form-control ${state.errors?.clientName ? "is-invalid" : ""}`}
                  // required
                  />
                  {state.errors?.headingTitle && (
                    <div className="invalid-feedback d-block">
                      {state.errors.headingTitle}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Heading Highlighted Text</label>
                  <input
                    type="text"
                    name="headingHighlightedText"
                    // className="form-control"
                    defaultValue={state?.fieldValues?.heading?.highlightedText ?? getHomeAboutSectionData.aboutSection.heading.highlightedText}
                    // defaultValue={state.data?.desination ?? desination}
                    className={`form-control ${state.errors?.headingHighlightedText ? "is-invalid" : ""}`}
                  // required
                  />
                  {state.errors?.headingHighlightedText && (
                    <div className="invalid-feedback d-block">
                      {state.errors.headingHighlightedText}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Content Image</label>
                  {getHomeAboutSectionData.aboutSection.contentImage && (
                    <div className="mb-2">
                      <img src={getHomeAboutSectionData.ImageBasePath + getHomeAboutSectionData.aboutSection.contentImage} alt="Current" width={120} />
                    </div>
                  )}
                  <input
                    type="file"
                    name="contentImage"
                    // className="form-control"
                    className={`form-control ${state.errors?.contentImage ? "is-invalid" : ""}`}
                    accept="image/jpeg,image/png,image/webp"
                  />
                  {state.errors?.contentImage && (
                    <div className="invalid-feedback d-block">
                      {state.errors.contentImage}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Description *</label>
                  <textarea
                    name="description"
                    // className="form-control"
                    defaultValue={state?.fieldValues?.description ?? getHomeAboutSectionData.aboutSection.description}
                    // defaultValue={state.data?.description ?? description}
                    rows={4}
                    className={`form-control ${state.errors?.description ? "is-invalid" : ""}`}
                  // required
                  />
                  {state.errors?.description && (
                    <div className="invalid-feedback d-block">
                      {state.errors.description}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Side Image</label>
                  {getHomeAboutSectionData.aboutSection.sideImage && (
                    <div className="mb-2">
                      <img src={getHomeAboutSectionData.ImageBasePath + getHomeAboutSectionData.aboutSection.sideImage} alt="Current" width={120} />
                    </div>
                  )}
                  <input
                    type="file"
                    name="sideImage"
                    // className="form-control"
                    className={`form-control ${state.errors?.sideImage ? "is-invalid" : ""}`}
                    accept="image/jpeg,image/png,image/webp"
                  />
                  {state.errors?.sideImage && (
                    <div className="invalid-feedback d-block">
                      {state.errors.sideImage}
                    </div>
                  )}
                </div>


                <div className="mb-3">
                  <label className="form-label">Button text</label>
                  <input
                    type="text"
                    name="buttonText"
                    // className="form-control"
                    defaultValue={state?.fieldValues?.button.text ?? getHomeAboutSectionData.aboutSection.button.text}
                    // defaultValue={state.data?.clientName ?? clientName}
                    className={`form-control ${state.errors?.buttonText ? "is-invalid" : ""}`}
                  // required
                  />
                  {state.errors?.buttonText && (
                    <div className="invalid-feedback d-block">
                      {state.errors.buttonText}
                    </div>
                  )}
                </div>


                <div className="mb-3">
                  <label className="form-label">Button link</label>
                  <input
                    type="text"
                    name="buttonLink"
                    // className="form-control"
                    defaultValue={state?.fieldValues?.button.link ?? getHomeAboutSectionData.aboutSection.button.link}
                    // defaultValue={state.data?.clientName ?? clientName}
                    className={`form-control ${state.errors?.buttonLink ? "is-invalid" : ""}`}
                  // required
                  />
                  {state.errors?.buttonLink && (
                    <div className="invalid-feedback d-block">
                      {state.errors.buttonLink}
                    </div>
                  )}
                </div>


                {/* Image */}
                <div className="mb-3">
                  <label className="form-label">Button Icon</label>
                  {getHomeAboutSectionData.aboutSection.button.icon && (
                    <div className="mb-2">
                      <img src={getHomeAboutSectionData.ImageBasePath + getHomeAboutSectionData.aboutSection.button.icon} alt="Current" width={120} />
                    </div>
                  )}
                  <input
                    type="file"
                    name="buttonIcon"
                    className="form-control"
                    // className={`form-control ${state.errors?.placeholderImage ? "is-invalid" : ""}`}
                    accept="image/jpeg,image/png,image/webp"
                  />
                  {/* {state.errors?.placeholderImage && (
                                        <div className="invalid-feedback d-block">
                                            {state.errors.placeholderImage}
                                        </div>
                                    )} */}
                </div>



                <div className="mb-3">
                  <label className="form-label">Reviews Rating</label>
                  <input
                    type="text"
                    name="reviewsRating"
                    // className="form-control"
                    defaultValue={state?.fieldValues?.reviews.rating ?? getHomeAboutSectionData.aboutSection.reviews.rating}
                    // defaultValue={state.data?.clientName ?? clientName}
                    className={`form-control ${state.errors?.reviewsRating ? "is-invalid" : ""}`}
                  // required
                  />
                  {state.errors?.reviewsRating && (
                    <div className="invalid-feedback d-block">
                      {state.errors.reviewsRating}
                    </div>
                  )}
                </div>


                <div className="mb-3">
                  <label className="form-label">Reviews label</label>
                  <input
                    type="text"
                    name="reviewsLable"
                    // className="form-control"
                    defaultValue={state?.fieldValues?.reviews.label ?? getHomeAboutSectionData.aboutSection.reviews.label}
                    // defaultValue={state.data?.clientName ?? clientName}
                    className={`form-control ${state.errors?.reviewsLable ? "is-invalid" : ""}`}
                  // required
                  />
                  {state.errors?.reviewsLable && (
                    <div className="invalid-feedback d-block">
                      {state.errors.reviewsLable}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Reviews platform</label>
                  <input
                    type="text"
                    name="reviewsPlatform"
                    // className="form-control"
                    defaultValue={state?.fieldValues?.reviews.platform ?? getHomeAboutSectionData.aboutSection.reviews.platform}
                    // defaultValue={state.data?.clientName ?? clientName}
                    className={`form-control ${state.errors?.reviewsPlatform ? "is-invalid" : ""}`}
                  // required
                  />
                  {state.errors?.reviewsPlatform && (
                    <div className="invalid-feedback d-block">
                      {state.errors.reviewsPlatform}
                    </div>
                  )}
                </div>

                {/* Image */}
                <div className="mb-3">
                  <label className="form-label">Platform Icon</label>
                  {getHomeAboutSectionData.aboutSection.reviews.platformIcon && (
                    <div className="mb-2">
                      <img src={getHomeAboutSectionData.ImageBasePath + getHomeAboutSectionData.aboutSection.reviews.platformIcon} alt="Current" width={120} />
                    </div>
                  )}
                  <input
                    type="file"
                    name="platformIcon"
                    // className="form-control"
                    className={`form-control ${state.errors?.platformIcon ? "is-invalid" : ""}`}
                    accept="image/jpeg,image/png,image/webp"
                  />
                  {state.errors?.platformIcon && (
                    <div className="invalid-feedback d-block">
                      {state.errors.platformIcon}
                    </div>
                  )}
                </div>


                <div className="mb-3">
                  <label className="form-label">Review Images</label>
                  {inputs.map((id, index) => (
                    <div key={id} className="mb-3 border p-2 rounded">
                      {/* Preview */}
                      {previews[id] && (
                        <img src={previews[id]} width={120} className="mb-2" />
                      )}

                      <input
                        type="file"
                        name="reviewImages"
                        accept="image/jpeg,image/png,image/webp"
                        className="form-control mb-2"
                        onChange={(e) => handleFileChange(id, e)}
                      />

                      {inputs.length > 1 && (
                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => removeInput(id)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}

                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={addInput}
                  >
                    + Add More
                  </button>
                </div>
 {/* {reviewImages.map((image, index) => (
                    <img
                      key={index}
                      src={`${getHomeAboutSectionData.ImageBasePath}/${image}`}
                      width={120}
                      className="m-2"
                      alt="review"
                    />
                  ))} */}
                  {reviewImages.map((image, index) => (
  <div key={index} className="position-relative d-inline-block m-2">
    
    <img
      src={`${getHomeAboutSectionData.ImageBasePath}/${image}`}
      width="120"
      className="img-thumbnail"
      alt="review"
    />

    {/* Delete Icon */}
    <button
      type="button"
      className="btn btn-danger btn-sm position-absolute top-0 end-0 translate-middle rounded-circle"
      onClick={() => handleDeleteReviewImage(image, index)}
      title="Delete image"
    >
      &times;
    </button>

  </div>
))}

                  <br/>
                {/* {state?.error && (
        <div className="text-danger mb-2">{state.error}</div>
      )} */}


              </div>

              <div className="card-footer">
                <button
                  type="submit"
                  className="btn btn-primary"
                // disabled={isPending}
                >
                  Save   {/* {isPending ? "Updating..." : "Update Testimonial"} */}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AboutSection