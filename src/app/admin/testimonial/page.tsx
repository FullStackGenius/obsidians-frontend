"use client"
import { useActionState, useEffect, useRef, useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import MainAppContentHeader from '../components/MainAppContentHeader';
import testimonialAction from './testimonial.action';
import clientFetch from '../../../lib/api/clientFetch';
import Link from 'next/link';

type Testimonials = {
  _id: string;
  clientName: string,
  description: string,
  desination: string,
  placeHolderImage: string,
  videourl: string,
  status: boolean,
  createdAt: string,
  updatedAt: string

}
// type ActionState = {
//   success?: boolean;
//   message?: string;
//   errors?: string[];
//   testimonials?: Testimonials;
// };



const page = () => {
  // const initialState: ActionState = {
  //   success: undefined,
  //   message: undefined,
  //   errors: undefined,
  //   testimonials: undefined,
  // };
  const [state, formAction, isPending] = useActionState(testimonialAction, {
    errors: {},
  });
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form on success
  if (state.success && formRef.current) {
    formRef.current.reset();
  }

  const [getTestimonial, setTestimonial] = useState<Testimonials[]>([]);

  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const response = await clientFetch<any>("/api/testimonial/all-testimonials");
        // console.log(response)
        setTestimonial(response.data.testimonials);
      } catch (err) {
        console.error("Failed to load profile:", err);
      }
    };
    getTestimonials();
  }, [isPending]);

  const handleDelete = async (testimonialId: string) => {
    if (!confirm("Are you sure you want to delete this logo?")) return;
    const testimonialLogos = [...getTestimonial];
    setTestimonial(getTestimonial.filter((testimonial: any) => testimonial._id !== testimonialId));
    try {
      await clientFetch(`/api/testimonial/delete/${testimonialId}`, {
        method: "DELETE",
      });
    } catch (err: any) {
      setTestimonial(testimonialLogos);
      alert(err?.message || "Could not delete logo");
    }
  };

  return (
    <>
      <AdminLayout>
        <MainAppContentHeader
          title=""
          breadcrumbs={[
            { label: 'Home', href: '/admin' },
            { label: 'Testimonials', href: '/testimonial' },
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


                  <form ref={formRef} action={formAction} className="card">
                    <div className="card-body">

                      {/* General error */}
                      {state.errors?._general && (
                        <div className="alert alert-danger">{state.errors._general}</div>
                      )}

                      <div className="mb-3">
                        <label htmlFor="clinetName" className="form-label">Client Name *</label>
                        <input
                          type="text"
                          className={`form-control ${state.errors?.clinetName ? "is-invalid" : ""}`}
                          id="clinetName"
                          name="clinetName"
                          defaultValue={state.fieldValues?.clinetName}
                          required
                        />
                        {state.errors?.clinetName && (
                          <div className="invalid-feedback">{state.errors.clinetName}</div>
                        )}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="desination" className="form-label">Designation *</label>
                        <input
                          type="text"
                          className={`form-control ${state.errors?.desination ? "is-invalid" : ""}`}
                          id="desination"
                          name="desination"
                          defaultValue={state.fieldValues?.desination}
                          required
                        />
                        {state.errors?.desination && (
                          <div className="invalid-feedback">{state.errors.desination}</div>
                        )}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description *</label>
                        <textarea
                          className={`form-control ${state.errors?.description ? "is-invalid" : ""}`}
                          id="description"
                          name="description"
                          rows={4}
                          defaultValue={state.fieldValues?.description}
                          required
                        />
                        {state.errors?.description && (
                          <div className="invalid-feedback">{state.errors.description}</div>
                        )}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="placeholderImage" className="form-label">
                          Placeholder Image * (max 5MB)
                        </label>
                        <input
                          type="file"
                          className={`form-control ${state.errors?.placeholderImage ? "is-invalid" : ""}`}
                          id="placeholderImage"
                          name="placeholderImage"
                          accept="image/jpeg,image/png,image/webp"
                          required
                        />
                        {state.errors?.placeholderImage && (
                          <div className="invalid-feedback">{state.errors.placeholderImage}</div>
                        )}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="videoFile" className="form-label">
                          Video File * (max 100MB)
                        </label>
                        <input
                          type="file"
                          className={`form-control ${state.errors?.videoFile ? "is-invalid" : ""}`}
                          id="videoFile"
                          name="videoFile"
                          accept="video/mp4,video/webm"
                          required
                        />
                        {state.errors?.videoFile && (
                          <div className="invalid-feedback">{state.errors.videoFile}</div>
                        )}
                      </div>
                    </div>

                    <div className="card-footer">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isPending}
                      >
                        {isPending ? "Saving..." : "Create Testimonial"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-12">
                <div className="card mb-12">
                  <div className="card-header">
                    <h3 className="card-title">All Testimonials</h3>
                  </div>
                  <div className="card-body">
                    <table className="table table-bordered" role="table">
                      <thead>
                        <tr>
                          <th style={{ "width": "10px" }} scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Desination</th>
                          <th scope="col">Reviews</th>
                          <th scope="col">Placeholder Image</th>
                          <th scope="col">Video</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>

                        {getTestimonial.map((testimonial, index) => {
                          return (
                            <tr className="align-middle" key={testimonial._id}>
                              <td>{index + 1}</td>
                              <td>{testimonial.clientName}</td>
                              <td>{testimonial.desination}</td>
                              <td>{testimonial.description}</td>


                              <td>
                                <img
                                  src={testimonial.placeHolderImage}
                                  alt="Company Logo"
                                  style={{ width: "100px", height: "100px" }}
                                />
                              </td>
                              <td>
                                {testimonial.videourl && (
                                  <video
                                    src={testimonial.videourl}
                                    width={200}
                                    height={200}
                                    controls
                                    preload="metadata"
                                  >
                                    Your browser does not support the video tag.
                                  </video>
                                )}
                              </td>


                              <td>
                                <button className='btn btn-danger ms-3' onClick={() => handleDelete(testimonial._id)}>Delete</button>
                                {/* <Link href="/admin" className='btn btn-primary'>Edit</Link> */}
                                <Link
                                  href={`/admin/testimonial/${testimonial._id}/edit`}
                                  className="btn btn-primary"
                                >
                                  Edit
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className="card-footer clearfix">
                    <ul className="pagination pagination-sm m-0 float-end">
                      <li className="page-item"><a className="page-link" href="#">«</a></li>
                      <li className="page-item"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item"><a className="page-link" href="#">»</a></li>
                    </ul>
                  </div>
                </div>



              </div>



            </div>

          </div>
        </div>
      </AdminLayout>
    </>
  )
}

export default page