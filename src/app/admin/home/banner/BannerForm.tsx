"use client"
import React, { useActionState, useEffect, useState } from 'react'
import AdminLayout from '../../components/AdminLayout'
import MainAppContentHeader from '../../components/MainAppContentHeader'
import bannerFormAction from './bannerForm.action'


const BanerForm: React.FC<any> = (props) => {
  // console.log(props)
  const [state, formAction, isPending] = useActionState(bannerFormAction, {
    errors: {},
  });

// console.log(state,'--state--')
  return (
    <AdminLayout>

      <MainAppContentHeader
        title="Banner Section"
        breadcrumbs={[
          { label: 'Home', href: '/admin' },
          { label: 'Profile', href: '/admin/profile' },

        ]}
      />
      <div className="app-content">
        <div className="container-fluid">
          <div className="row g-4">
            <div className="col-md-12">
              <div className="card card-primary card-outline mb-4">
                <div className="card-header">
                  <div className="card-title">Testimonials</div>
                </div>


                <form className="card" action={formAction}>
                  <div className="card-body">

                    {/* General error */}
                    {state.errors?._general && (
                        <div className="alert alert-danger">{state.errors._general}</div>
                      )}

                      {state.success && (
                        <div className="alert alert-success">{state.message}</div>
                      )}

                    <div className="mb-3">
                      <label htmlFor="welcomeText" className="form-label">Welcome Text</label>
                      <input
                        type="text"
                          className={`form-control ${state.errors?.welcomeText ? "is-invalid" : ""}`}
                        // className="form-control"
                        id="welcomeText"
                        name="welcomeText"
                        //   defaultValue={state.fieldValues?.clinetName}
                        defaultValue={props.getHomeBannerContentData.heroSection.welcomeText}
                        // required
                      />
                      {state.errors?.welcomeText && (
                          <div className="invalid-feedback">{state.errors.welcomeText}</div>
                        )}
                    </div>


                    <input
                      type="hidden"
                      name="id"
                      defaultValue={props.getHomeBannerContentData._id}
                      // required
                    />


                    <div className="mb-3">
                      <label htmlFor="brandName" className="form-label">Brand Name *</label>
                      <input
                        type="text"
                        // className="form-control"
                          className={`form-control ${state.errors?.brandName ? "is-invalid" : ""}`}
                        id="brandName"
                        name="brandName"
                        defaultValue={props.getHomeBannerContentData.heroSection.brandName}
                        //   defaultValue={state.fieldValues?.desination}
                        // required
                      />
                      {state.errors?.brandName && (
                          <div className="invalid-feedback">{state.errors.brandName}</div>
                        )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="mainHeading" className="form-label">Main Heading</label>
                      <input
                        type="text"
                          className={`form-control ${state.errors?.mainHeading ? "is-invalid" : ""}`}
                        // className="form-control"
                        id="mainHeading"
                        name="mainHeading"
                        //   defaultValue={state.fieldValues?.clinetName}
                        defaultValue={props.getHomeBannerContentData.heroSection.mainHeading}
                        // required
                      />
                      {state.errors?.mainHeading && (
                          <div className="invalid-feedback">{state.errors.mainHeading}</div>
                        )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="highlightedText" className="form-label">Highlighted Text *</label>
                      <input
                        type="text"
                        // className="form-control"
                          className={`form-control ${state.errors?.highlightedText ? "is-invalid" : ""}`}
                        id="highlightedText"
                        name="highlightedText"
                        defaultValue={props.getHomeBannerContentData.heroSection.highlightedText}
                        //   defaultValue={state.fieldValues?.desination}
                        // required
                      />
                      {state.errors?.highlightedText && (
                          <div className="invalid-feedback">{state.errors.highlightedText}</div>
                        )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">Description *</label>
                      <textarea
                        // className="form-control"
                          className={`form-control ${state.errors?.description ? "is-invalid" : ""}`}
                        id="description"
                        name="description"
                        rows={4}
                        defaultValue={props.getHomeBannerContentData.heroSection.description}
                        //   defaultValue={state.fieldValues?.description}
                        // required
                      />
                      {state.errors?.description && (
                          <div className="invalid-feedback">{state.errors.description}</div>
                        )}
                    </div>


                    <div className="mb-3">
                      <label htmlFor="primaryButtonText" className="form-label">Primary Button Text</label>
                      <input
                        type="text"
                        // className="form-control"
                          className={`form-control ${state.errors?.primaryButtonText ? "is-invalid" : ""}`}
                        id="primaryButtonText"
                        name="primaryButtonText"
                        defaultValue={props.getHomeBannerContentData.heroSection.primaryButton.text}
                        //   defaultValue={state.fieldValues?.desination}
                        // required
                      />
                      {state.errors?.primaryButtonText && (
                          <div className="invalid-feedback">{state.errors.primaryButtonText}</div>
                        )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="primaryButtonLink" className="form-label">Primary Button Link</label>
                      <input
                        type="text"
                        // className="form-control"
                          className={`form-control ${state.errors?.primaryButtonLink ? "is-invalid" : ""}`}
                        id="primaryButtonLink"
                        name="primaryButtonLink"
                        defaultValue={props.getHomeBannerContentData.heroSection.primaryButton.link}
                        //   defaultValue={state.fieldValues?.desination}
                        // required
                      />
                      {state.errors?.primaryButtonLink && (
                          <div className="invalid-feedback">{state.errors.primaryButtonLink}</div>
                        )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="scrollDownText" className="form-label">Scroll Down Text</label>
                      <input
                        type="text"
                        // className="form-control"
                          className={`form-control ${state.errors?.scrollDownText ? "is-invalid" : ""}`}
                        id="scrollDownText"
                        name="scrollDownText"
                        defaultValue={props.getHomeBannerContentData.heroSection.scrollDown.text}
                        //   defaultValue={state.fieldValues?.desination}
                        // required
                      />
                      {state.errors?.scrollDownText && (
                          <div className="invalid-feedback">{state.errors.scrollDownText}</div>
                        )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="scrollDownTargetId" className="form-label">Scroll Down Target Id</label>
                      <input
                        type="text"
                        // className="form-control"
                          className={`form-control ${state.errors?.scrollDownTargetId ? "is-invalid" : ""}`}
                        id="scrollDownTargetId"
                        name="scrollDownTargetId"
                        defaultValue={props.getHomeBannerContentData.heroSection.scrollDown.targetId}
                        //   defaultValue={state.fieldValues?.desination}
                        // required
                      />
                      {state.errors?.scrollDownTargetId && (
                          <div className="invalid-feedback">{state.errors.scrollDownTargetId}</div>
                        )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="bannerImage" className="form-label">
                        Banner Image * (max 5MB)
                      </label>
                      <input
                        type="file"
                        // className="form-control"
                          className={`form-control ${state.errors?.bannerImage ? "is-invalid" : ""}`}
                        id="bannerImage"
                        name="bannerImage"
                        accept="image/jpeg,image/png,image/webp"
                      // required
                      />
                      {state.errors?.bannerImage && (
                          <div className="invalid-feedback">{state.errors.bannerImage}</div>
                        )}
                    </div>


                    <div className="row mb-3">
                      <label htmlFor="scrollDownTargetId" className="form-label">Expert Boxe 1</label>
                      <div className="col-3">
                        <input type="text"  className={`form-control ${state.errors?.title ? "is-invalid" : ""}`} name="title1" defaultValue={props.getHomeBannerContentData.heroSection.expertBoxes[0].title} placeholder="title 1" aria-label=".col-3" />
                         {state.errors?.title && (
                          <div className="invalid-feedback">{state.errors.title}</div>
                        )}
                      </div>

                      <div className="col-4">
                        <input type="text"  className={`form-control ${state.errors?.subtitle1 ? "is-invalid" : ""}`} name="subtitle1" defaultValue={props.getHomeBannerContentData.heroSection.expertBoxes[0].subtitle} placeholder="subtitle 1" aria-label=".col-4" />
                         {state.errors?.subtitle1 && (
                          <div className="invalid-feedback">{state.errors.subtitle1}</div>
                        )}
                      </div>

                      <div className="col-5">
                        <input type="text"  className={`form-control ${state.errors?.description1 ? "is-invalid" : ""}`} name="description1" defaultValue={props.getHomeBannerContentData.heroSection.expertBoxes[0].description} placeholder="description 1" aria-label=".col-5" />
                         {state.errors?.description1 && (
                          <div className="invalid-feedback">{state.errors.description1}</div>
                        )}
                      </div>

                    </div>
                    <div className="row mb-3">
                      <label htmlFor="scrollDownTargetId" className="form-label">Expert Boxe 2</label>
                      <div className="col-3">
                        <input type="text"  className={`form-control ${state.errors?.title2 ? "is-invalid" : ""}`} name="title2" defaultValue={props.getHomeBannerContentData.heroSection.expertBoxes[1].title} placeholder="title 2" aria-label=".col-3" />
                         {state.errors?.title2 && (
                          <div className="invalid-feedback">{state.errors.title2}</div>
                        )}
                      </div>

                      <div className="col-4">
                        <input type="text"  className={`form-control ${state.errors?.subtitle2 ? "is-invalid" : ""}`} name="subtitle2" defaultValue={props.getHomeBannerContentData.heroSection.expertBoxes[1].subtitle} placeholder="subtitle 2" aria-label=".col-4" />
                         {state.errors?.subtitle2 && (
                          <div className="invalid-feedback">{state.errors.subtitle2}</div>
                        )}
                      </div>

                      <div className="col-5">
                        <input type="text"  className={`form-control ${state.errors?.description2 ? "is-invalid" : ""}`} name="description2" defaultValue={props.getHomeBannerContentData.heroSection.expertBoxes[1].description} placeholder="description 2" aria-label=".col-5" />
                         {state.errors?.description2 && (
                          <div className="invalid-feedback">{state.errors.description2}</div>
                        )}
                      </div>

                    </div>



                    <div className="row">
                      <label htmlFor="scrollDownTargetId" className="form-label">Expert Boxe 3</label>
                      <div className="col-3">
                        <input type="text"  className={`form-control ${state.errors?.title3 ? "is-invalid" : ""}`} name="title3" defaultValue={props.getHomeBannerContentData.heroSection.expertBoxes[2].title} placeholder="title 3" aria-label=".col-3" />
                         {state.errors?.title3 && (
                          <div className="invalid-feedback">{state.errors.title3}</div>
                        )}
                      </div>

                      <div className="col-4">
                        <input type="text"  className={`form-control ${state.errors?.subtitle3 ? "is-invalid" : ""}`} name="subtitle3" defaultValue={props.getHomeBannerContentData.heroSection.expertBoxes[2].subtitle} placeholder="subtitle 3" aria-label=".col-4" />
                         {state.errors?.subtitle3 && (
                          <div className="invalid-feedback">{state.errors.subtitle3}</div>
                        )}
                      </div>

                      <div className="col-5">
                        <input type="text"  className={`form-control ${state.errors?.description3 ? "is-invalid" : ""}`} name="description3" defaultValue={props.getHomeBannerContentData.heroSection.expertBoxes[2].description} placeholder="description 3" aria-label=".col-5" />
                         {state.errors?.description3 && (
                          <div className="invalid-feedback">{state.errors.description3}</div>
                        )}
                      </div>

                    </div>







                  </div>

                  <div className="card-footer">
                    <button
                      type="submit"
                      className="btn btn-primary"
                    disabled={isPending}
                    >
                      
                      {isPending ? "Saving..." : "Save"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>


        </div>
      </div>
    </AdminLayout>
  )
}

export default BanerForm