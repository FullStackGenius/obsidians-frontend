"use client"
import {  useEffect, useState } from 'react';
import Link from 'next/link';

import clientFetch from '../../../../lib/api/newClientFetch';
import AdminLayout from '../../components/AdminLayout';
import MainAppContentHeader from '../../components/MainAppContentHeader';





const page = () => {
  
 const [getProject, setGetProject] = useState<any>([]);

  useEffect(() => {
    const getTestimonials = async () => {
      try {
         const responses = await clientFetch<any>("/api/project/get-projects");
         console.log(responses);
         setGetProject(responses.data);
       
        // console.log(response)
        
      } catch (err) {
        console.error("Failed to load profile:", err);
      }
    };
    getTestimonials();
  }, []);

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
console.log(getProject)
  return (
    <>
      <AdminLayout>
        <MainAppContentHeader
          title=""
          breadcrumbs={[
            { label: 'Home', href: '/admin' },
            { label: 'Project Lists', href: '/admin/project/lists' },
          ]}
        />
        <div className="app-content">
          <div className="container-fluid">
           
            <div className="row g-4">
              <div className="col-md-12">
                <div className="card mb-12">
                  <div className="card-header">
                    <h3 className="card-title">All Project Lists</h3>
                  </div>
                  <div className="card-body">
                    <table className="table table-bordered" role="table">
                      <thead>
                        <tr>
                          <th style={{ "width": "10px" }} scope="col">#</th>
                          <th scope="col">Project Image</th>
                          <th scope="col">Project Name</th>
                          <th scope="col">Description</th>
                          <th scope="col">Placeholder Image</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>


                        {getProject.map((project, index) => {
                          return (
                            <tr className="align-middle" key={project._id}>
                              <td>{index + 1}</td>
                              <td>
                                <img
                                  src={project.projectImageBasePath+project.featuredImage}
                                  alt="Company Logo"
                                  style={{ width: "100px", height: "100px" }}
                                />
                              </td>
                               <td>{project.projectName}</td>
                              <td>{project.description}</td>
                              <td>{project.projectName}</td>
                             


                              <td>
                                <button className='btn btn-danger ms-3' onClick={() => handleDelete(project._id)}>Delete</button>
                                {/* <Link href="/admin" className='btn btn-primary'>Edit</Link> */}
                                <Link
                                  href={`/admin/testimonial/${project._id}/edit`}
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