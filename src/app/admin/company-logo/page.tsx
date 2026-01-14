"use client"
import MainAppContentHeader from '../components/MainAppContentHeader'
import AdminLayout from '../components/AdminLayout'
import companyLogoAction from "./company-logo.action";
import { useActionState, useEffect, useState } from 'react';
import clientFetch from '../../../lib/api/clientFetch';



type LogoResponse = {
  success: boolean;
  message: string;
  data: { logo: Logo };
};
interface Logo {
  _id: string;
  companyLogoImage: string;
  status: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
}

// We'll return this shape from the server action
type ActionState = {
  success?: boolean;
  message?: string;
  errors?: string[];
  logo?: Logo;
};

const initialState: ActionState = {
  success: undefined,
  message: undefined,
  errors: undefined,
  logo: undefined,
};
const CompanyLogo = () => {
  const [state, formAction, isPending] = useActionState(companyLogoAction, initialState);
  const [getLogo, setLogo] = useState<any>([]);

  useEffect(() => {
    const getProfileData = async () => {
      try {
        const response = await clientFetch<LogoResponse>("/api/company-logo/all-logos");
        setLogo(response.data.logo);
      } catch (err) {
        console.error("Failed to load profile:", err);
      }
    };
    getProfileData();
  }, [isPending]);

  const handleDelete = async (logoId: string) => {
    if (!confirm("Are you sure you want to delete this logo?")) return;
    const previousLogos = [...getLogo];
    setLogo(getLogo.filter((logo: any) => logo._id !== logoId));
    try {
      await clientFetch(`/api/company-logo/delete/${logoId}`, {
        method: "DELETE",
      });
      // Success!
      // alert("Logo deleted");
      // router.refresh() or mutate swr/tanstack query
    } catch (err: any) {
      setLogo(previousLogos);
      alert(err?.message || "Could not delete logo");
    }
  };

  return (
    <>
      <AdminLayout>
        <MainAppContentHeader
          title=""
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Company Logo', href: '/company-logo' },
          ]}
        />
        <div className="app-content">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-md-12">
                <div className="card card-primary card-outline mb-4">
                  <div className="card-header">
                    <div className="card-title">Add Company Logo</div>
                  </div>
                  <form action={formAction}>
                    <div className="card-body">
                      {/* <label htmlFor="inputGroupFile02" className="form-label">Company Logo</label> */}
                      <div className="input-group mb-3">
                        <input type="file" className="form-control" id="inputGroupFile02" name="companylogo" />
                        <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                      </div>
                    </div>
                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                  </form>
                </div>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-12">
                <div className="card mb-12">
                  <div className="card-header">
                    <h3 className="card-title">All Company Logos</h3>
                  </div>

                  <div className="card-body">
                    <table className="table table-bordered" role="table">
                      <thead>
                        <tr>
                          <th style={{ "width": "10px" }} scope="col">#</th>
                          <th scope="col">Company Logo Image</th>
                          {/* <th scope="col">Progress</th> */}
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* <tr className="align-middle">
                        <td>1.</td>
                        <td>Update software</td>
                        <td>
                          <div className="progress progress-xs">
                            <div className="progress-bar progress-bar-danger" style={{ "width": "55%" }}></div>
                          </div>
                        </td>
                        <td><span className="badge text-bg-danger">55%</span></td>
                      </tr>
                      <tr className="align-middle">
                        <td>2.</td>
                        <td>Clean database</td>
                        <td>
                          <div className="progress progress-xs">
                            <div className="progress-bar text-bg-warning" style={{ "width": "70%" }}></div>
                          </div>
                        </td>
                        <td><span className="badge text-bg-warning">70%</span></td>
                      </tr>
                      <tr className="align-middle">
                        <td>3.</td>
                        <td>Cron job running</td>
                        <td>
                          <div className="progress progress-xs progress-striped active">
                            <div className="progress-bar text-bg-primary" style={{ "width": "30%" }}></div>
                          </div>
                        </td>
                        <td><span className="badge text-bg-primary">30%</span></td>
                      </tr>
                      <tr className="align-middle">
                        <td>4.</td>
                        <td>Fix and squish bugs</td>
                        <td>
                          <div className="progress progress-xs progress-striped active">
                            <div className="progress-bar text-bg-success" style={{ "width": "90%" }}></div>
                          </div>
                        </td>
                        <td><span className="badge text-bg-success">90%</span></td>
                      </tr> */}
                        {getLogo.map((logo, index) => {


                          return (
                            <tr className="align-middle" key={logo._id}>
                              <td>{index + 1}.</td>

                              <td>
                                <img
                                  src={logo.companyLogoImage}
                                  alt="Company Logo"
                                  style={{ width: "200px", height: "200px" }}
                                />
                              </td>

                              {/* <td>
          <div className="progress progress-xs">
            <div
              className={`progress-bar ${
                logo.status
                  ? "progress-bar-success"
                  : "progress-bar-danger"
              }`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </td> */}

                              <td>
                                {/* <span
            className={`badge ${
              logo.status ? "text-bg-success" : "text-bg-danger"
            }`}
          >Delete
            {progress}%
          </span> */}
                                <button className='btn btn-danger' onClick={() => handleDelete(logo._id)}>Delete</button>
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

export default CompanyLogo