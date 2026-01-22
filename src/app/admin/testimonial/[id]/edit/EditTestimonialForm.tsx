"use client";

import React, { useActionState, useRef } from "react";
import AdminLayout from "../../../components/AdminLayout";
import MainAppContentHeader from "../../../components/MainAppContentHeader";
import editTestimonialFormSubmission from "./editTestimonialFormSubmission.action";

type TestimonialItem = {
    _id: string;
    clientName: string;
    description: string;
    desination: string;
    placeHolderImage: string;
    videourl: string;
};

type TestimonialData = {
    testimonial: TestimonialItem;
};

const EditTestimonialForm: React.FC<TestimonialData> = ({ testimonial }) => {
    const {
        _id,
        clientName,
        description,
        desination,
        placeHolderImage,
        videourl,
    } = testimonial;

    const [state, formAction, isPending] = useActionState(
        editTestimonialFormSubmission,
        { errors: {} }
    );

    console.log(state, 'return state')

    const formRef = useRef<HTMLFormElement>(null);

    return (
        <AdminLayout>
            <MainAppContentHeader
                title="Edit Testimonial"
                breadcrumbs={[
                    { label: "Home", href: "/admin" },
                    { label: "Testimonials", href: "/testimonial" },
                ]}
            />

            <div className="app-content">
                <div className="container-fluid">
                    <div className="card card-primary card-outline">
                        <form ref={formRef} action={formAction} className="card">

                            {/* 🔑 REQUIRED FOR EDIT */}
                            <input type="hidden" name="id" value={_id} />

                            <div className="card-body">
                                {state.errors?._general && (
                                    <div className="alert alert-danger mb-3">
                                        {state.errors._general}
                                    </div>
                                )}

                                <div className="mb-3">
                                    <label className="form-label">Client Name *</label>
                                    <input
                                        type="text"
                                        name="clientName"
                                        defaultValue={state.data?.clientName ?? clientName}
                                        className={`form-control ${state.errors?.clientName ? "is-invalid" : ""}`}
                                        required
                                    />
                                    {state.errors?.clientName && (
                                        <div className="invalid-feedback d-block">
                                            {state.errors.clientName}
                                        </div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Designation *</label>
                                    <input
                                        type="text"
                                        name="desination"
                                        defaultValue={state.data?.desination ?? desination}
                                        className={`form-control ${state.errors?.desination ? "is-invalid" : ""}`}
                                        required
                                    />
                                    {state.errors?.desination && (
                                        <div className="invalid-feedback d-block">
                                            {state.errors.desination}
                                        </div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Description *</label>
                                    <textarea
                                        name="description"
                                        defaultValue={state.data?.description ?? description}
                                        rows={4}
                                        className={`form-control ${state.errors?.description ? "is-invalid" : ""}`}
                                        required
                                    />
                                    {state.errors?.description && (
                                        <div className="invalid-feedback d-block">
                                            {state.errors.description}
                                        </div>
                                    )}
                                </div>

                                {/* Image */}
                                <div className="mb-3">
                                    <label className="form-label">Placeholder Image (optional)</label>
                                    {placeHolderImage && (
                                        <div className="mb-2">
                                            <img src={placeHolderImage} alt="Current" width={120} />
                                        </div>
                                    )}
                                    <input
                                        type="file"
                                        name="placeholderImage"
                                        className={`form-control ${state.errors?.placeholderImage ? "is-invalid" : ""}`}
                                        accept="image/jpeg,image/png,image/webp"
                                    />
                                    {state.errors?.placeholderImage && (
                                        <div className="invalid-feedback d-block">
                                            {state.errors.placeholderImage}
                                        </div>
                                    )}
                                </div>

                                {/* Video – same pattern */}
                                <div className="mb-3">
                                    <label className="form-label">Video File (optional)</label>
                                    {videourl && (
                                        <div className="mb-2">
                                            <video width="200" controls src={videourl} />
                                        </div>
                                    )}
                                    <input
                                        type="file"
                                        name="videoFile"
                                        className={`form-control ${state.errors?.videoFile ? "is-invalid" : ""}`}
                                        accept="video/mp4,video/webm"
                                    />
                                    {state.errors?.videoFile && (
                                        <div className="invalid-feedback d-block">
                                            {state.errors.videoFile}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="card-footer">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={isPending}
                                >
                                    {isPending ? "Updating..." : "Update Testimonial"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default EditTestimonialForm;
