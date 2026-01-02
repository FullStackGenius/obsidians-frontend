import React from "react";

const page = () => {
  return (
    <>
     <div className="login-page bg-body-secondary">
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header">
            <a
              href="../index2.html"
              className="link-dark text-center link-offset-2 link-opacity-100 link-opacity-50-hover"
            >
              <h1 className="mb-0">
                <b>Admin</b>LTE
              </h1>
            </a>
          </div>
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form action="../index3.html" method="post">
              <div className="input-group mb-1">
                <div className="form-floating">
                  <input
                    id="loginEmail"
                    type="email"
                    className="form-control"
                    placeholder=""
                  />
                  <label htmlFor="loginEmail">Email</label>
                </div>
                <div className="input-group-text">
                  <span className="bi bi-envelope"></span>
                </div>
              </div>
              <div className="input-group mb-1">
                <div className="form-floating">
                  <input
                    id="loginPassword"
                    type="password"
                    className="form-control"
                    placeholder=""
                  />
                  <label htmlFor="loginPassword">Password</label>
                </div>
                <div className="input-group-text">
                  <span className="bi bi-lock-fill"></span>
                </div>
              </div>

              <div className="row">
                <div className="col-8 d-inline-flex align-items-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      {" "}
                      Remember Me{" "}
                    </label>
                  </div>
                </div>

                <div className="col-4">
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
            </form>

            <p className="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default page;
