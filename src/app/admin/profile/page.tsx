"use client"
import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import clientFetch from '../../../lib/api/clientFetch'
import profileAction from './profile.action'





type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  profileImage: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

// Main API response type
type ProfileResponse = {
  success: boolean;
  message: string;
  data: {
    user: User;
  };
};
const page = () => {
  useEffect(() => {
    getProfileData();
  }, [])
  const [userData, setUserData] = useState<User>();
  const getProfileData = async () => {
    const getProfile = await clientFetch<ProfileResponse>("/api/user/profile");

    // console.log(getProfile);
    setUserData(getProfile.data.user);
  }

  return (
    <>
      <div className="layout-fixed sidebar-expand-lg sidebar-open bg-body-tertiary">
        <div className="app-wrapper">

          <NavBar />

          <SideBar />
          <main className="app-main">
            <div className="app-content-header">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6"><h3 className="mb-0">General Form</h3></div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-end">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">General Form</li>
                    </ol>
                  </div>
                </div>

              </div>

            </div>

            <div className="app-content">

              <div className="container-fluid">

                <div className="row g-4">



                  <div className="col-md-12">

                    <div className="card card-primary card-outline mb-4">

                      <div className="card-header"><div className="card-title">Profile</div></div>

                      <form action={profileAction}>

                        <div className="card-body">
                          <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputEmail1"
                              name="firstName"
                              defaultValue={userData?.firstName || ""}
                            />
                            {/* <div id="emailHelp" className="form-text">
                              We'll never share your email with anyone else.
                            </div> */}
                          </div>
                          <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="lastName"
                              name="lastName"
                            
                              defaultValue={userData?.lastName || ""}
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="email" defaultValue={userData?.email || ""} />
                          </div>
                          {/* <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                          </div> */}
                          <label htmlFor="inputGroupFile02" className="form-label">Profile Image</label>
                          <div className="input-group mb-3">

                            <input type="file" className="form-control" name="profileImage" id="inputGroupFile02" />
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

              </div>

            </div>

          </main>




          <footer className="app-footer">

            <div className="float-end d-none d-sm-inline">Anything you want</div>

            <strong>
              Copyright &copy; 2014-2025&nbsp;
              <a href="https://adminlte.io" className="text-decoration-none">AdminLTE.io</a>.
            </strong>
            All rights reserved.

          </footer>

        </div>
      </div>
    </>
  )
}

export default page