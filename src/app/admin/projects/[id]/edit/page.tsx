import React from 'react'
import MainAppContentHeader from '../../../components/MainAppContentHeader'
import AdminLayout from '../../../components/AdminLayout'

const page = () => {
   const projectSizes = [{}];
  const timeLines  = [{}];
  const timeResources =  [{}];
  const kpiss = [{}];
  const services  = [{}];
  const technologies = [{}];
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
                <div className="card card-primary card-outline mb-4">
                  <div className="card-header">
                    <div className="card-title">Project</div>
                  </div>


                  <form >
                    <div className="card-body">

                      {/* General error */}
                      {/* {state.errors?._general && (
                        <div className="alert alert-danger">{state.errors._general}</div>
                      )} */}

                      <div className="mb-3">
                        <label htmlFor="clinetName" className="form-label">Project Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          //   className={`form-control ${state.errors?.clinetName ? "is-invalid" : ""}`}
                          id="projectName"
                          name="projectName"
                          defaultValue="sfdhsajfsjfkasfs"
                          //   defaultValue={state.fieldValues?.clinetName}
                          
                        />
                        {/* {state.errors?.clinetName && (
                          <div className="invalid-feedback">{state.errors.clinetName}</div>
                        )} */}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="desination" className="form-label">Project Slug *</label>
                        <input
                          className="form-control"
                          defaultValue="sfdhsajfsjfkasfs"
                          type="text"
                          //   className={`form-control ${state.errors?.desination ? "is-invalid" : ""}`}
                          id="projectSlug"
                          name="projectSlug"
                          //   defaultValue={state.fieldValues?.desination}
                          
                        />
                        {/* {state.errors?.desination && (
                          <div className="invalid-feedback">{state.errors.desination}</div>
                        )} */}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="description" className="form-label">Short Description *</label>
                        <textarea
                          className="form-control"
                          //   className={`form-control ${state.errors?.description ? "is-invalid" : ""}`}
                          id="shortDescription"
                          name="shortDescription"
                          defaultValue="sfdhsajfsjfkasfs"
                          rows={4}
                          //   defaultValue={state.fieldValues?.description}
                          
                        />
                        {/* {state.errors?.description && (
                          <div className="invalid-feedback">{state.errors.description}</div>
                        )} */}
                      </div>



                      <div className="mb-3">
                        <label htmlFor="featuredImage" className="form-label">
                          Featured Image * (max 5MB)
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          //   className={`form-control ${state.errors?.placeholderImage ? "is-invalid" : ""}`}
                          id="featuredImage"
                          name="featuredImage"
                          accept="image/jpeg,image/png,image/webp"
                          
                        />
                        {/* {state.errors?.placeholderImage && (
                          <div className="invalid-feedback">{state.errors.placeholderImage}</div>
                        )} */}
                      </div>
                      <hr />

                      <div className="mb-3">
                        <label htmlFor="projectInfoTitle" className="form-label">Project Info Title *</label>
                        <input
                          type="text"
                          className="form-control"
                          //   className={`form-control ${state.errors?.clinetName ? "is-invalid" : ""}`}
                          id="projectInfoTitle"
                          name="projectInfoTitle"
                          defaultValue="sfdhsajfsjfkasfs"
                          //   defaultValue={state.fieldValues?.clinetName}
                          
                        />
                        {/* {state.errors?.clinetName && (
                          <div className="invalid-feedback">{state.errors.clinetName}</div>
                        )} */}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="projectInfoSubtitle" className="form-label">Project Info SubTitle *</label>
                        <input
                          type="text"
                          className="form-control"
                          //   className={`form-control ${state.errors?.clinetName ? "is-invalid" : ""}`}
                          id="projectInfoSubtitle"
                          name="projectInfoSubtitle"
                          defaultValue="sfdhsajfsjfkasfs"
                          //   defaultValue={state.fieldValues?.clinetName}
                          
                        />
                        {/* {state.errors?.clinetName && (
                          <div className="invalid-feedback">{state.errors.clinetName}</div>
                        )} */}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="projectInfoImage" className="form-label">
                          Project Info Image * (max 5MB)
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          //   className={`form-control ${state.errors?.placeholderImage ? "is-invalid" : ""}`}
                          id="projectInfoImage"
                          name="projectInfoImage"
                          accept="image/jpeg,image/png,image/webp"
                          
                        />
                        {/* {state.errors?.placeholderImage && (
                          <div className="invalid-feedback">{state.errors.placeholderImage}</div>
                        )} */}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description *</label>
                        <textarea
                          className="form-control"
                          //   className={`form-control ${state.errors?.description ? "is-invalid" : ""}`}
                          id="description"
                          name="description"
                          rows={4}
                          //   defaultValue={state.fieldValues?.description}
                          defaultValue="sfdhsajfsjfkasfs"
                        />
                        {/* {state.errors?.description && (
                          <div className="invalid-feedback">{state.errors.description}</div>
                        )} */}
                      </div>

                      <div className="row">
                        <div className="mb-3 d-flex align-items-center">
                          <label className="form-label mb-0">Project Size</label>

                          <span
                            className="badge bg-primary ms-3"
                            style={{ cursor: "pointer" }}
                            // onClick={addMoreProjectSize}
                          >
                            Add More
                          </span>
                        </div>


                        {projectSizes.map((projectSize, index) =>
                          <div className="row mb-2" key={index} >
                            <div className="col-11">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter size"
                                name="projectSize"
                                // defaultValue={projectSize}
                                // onChange={(e) => handleChangeProjectSize(e.target.value, index)}
                              />
                            </div>
                            {projectSizes.length > 1 && (
                              <div className="col-1">
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                //   onClick={() => onRemoveProjectSize(index)}
                                >
                                  Remove
                                </button>

                              </div>
                            )}
                          </div>
                        )}

                      </div>


                      <div className="row">
                        <div className="mb-3 d-flex align-items-center">
                          <label className="form-label mb-0">TimeLine</label>

                          <span
                            className="badge bg-primary ms-3"
                            style={{ cursor: "pointer" }}
                            // onClick={addMoreTimeLine}
                          >
                            Add More
                          </span>
                        </div>


                        {timeLines.map((timeLine, index) =>
                          <div className="row mb-2" key={index} >
                            <div className="col-11">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter timeLine"
                                name="timeLine"
                                // defaultValue={timeLine}
                                // onChange={(e) => handleChangeTimeLine(e.target.value, index)}
                              />
                            </div>
                            {timeLines.length > 1 && (
                              <div className="col-1">
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                //   onClick={() => onRemoveTimeLine(index)}
                                >
                                  Remove
                                </button>

                              </div>
                            )}
                          </div>
                        )}

                      </div>

                      <div className="row">
                        <div className="mb-3 d-flex align-items-center">
                          <label className="form-label mb-0">Time Resource</label>

                          <span
                            className="badge bg-primary ms-3"
                            style={{ cursor: "pointer" }}
                            // onClick={addMoreTimeResource}
                          >
                            Add More
                          </span>
                        </div>


                        {timeResources.map((timeResource, index) =>
                          <div className="row mb-2" key={index} >
                            <div className="col-11">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter timeResource"
                                name="timeResource"
                                // defaultValue={timeResource}
                                // onChange={(e) => handleChangeTimeResource(e.target.value, index)}
                              />
                            </div>
                            {timeResources.length > 1 && (
                              <div className="col-1">
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                //   onClick={() => onRemoveTimeResource(index)}
                                >
                                  Remove
                                </button>

                              </div>
                            )}
                          </div>
                        )}

                      </div>

                      <div className="row">
                        <div className="mb-3 d-flex align-items-center">
                          <label className="form-label mb-0">KPIS</label>

                          <span
                            className="badge bg-primary ms-3"
                            style={{ cursor: "pointer" }}
                            // onClick={addMoreKpis}
                          >
                            Add More
                          </span>
                        </div>


                        {kpiss.map((kpis, index) =>
                          <div className="row mb-2" key={index} >
                            <div className="col-11">
                              <input
                                type="text"
                                className="form-control"
                                name="kpis"
                                placeholder="Enter kpis"
                                // defaultValue={kpis}
                                // onChange={(e) => handleChangeKpis(e.target.value, index)}
                              />
                            </div>
                            {kpiss.length > 1 && (
                              <div className="col-1">
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                //   onClick={() => onRemoveKpis(index)}
                                >
                                  Remove
                                </button>

                              </div>
                            )}
                          </div>
                        )}

                      </div>

                      <hr />

                      <div className="mb-3">
                        <label htmlFor="projectSolutionContent" className="form-label">Project Solution content *</label>
                        <textarea
                          className="form-control"
                          //   className={`form-control ${state.errors?.description ? "is-invalid" : ""}`}
                          id="projectSolutionContent"
                          name="projectSolutionContent"
                          rows={4}
                          defaultValue="sfdhsajfsjfkasfs"
                          //   defaultValue={state.fieldValues?.description}
                          
                        />
                        {/* {state.errors?.description && (
                          <div className="invalid-feedback">{state.errors.description}</div>
                        )} */}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="projectSolutionImage" className="form-label">
                          Project Solution Image * (max 5MB)
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          //   className={`form-control ${state.errors?.placeholderImage ? "is-invalid" : ""}`}
                          id="projectSolutionImage"
                          name="projectSolutionImage"
                          accept="image/jpeg,image/png,image/webp"
                          
                        />
                        {/* {state.errors?.placeholderImage && (
                          <div className="invalid-feedback">{state.errors.placeholderImage}</div>
                        )} */}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="clinetName" className="form-label">Clinet Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="sfdhsajfsjfkasfs"
                          //   className={`form-control ${state.errors?.clinetName ? "is-invalid" : ""}`}
                          id="clinetName"
                          name="clinetName"
                          //   defaultValue={state.fieldValues?.clinetName}
                          
                        />
                        {/* {state.errors?.clinetName && (
                          <div className="invalid-feedback">{state.errors.clinetName}</div>
                        )} */}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="clinetName" className="form-label">Clinet Desination *</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="sfdhsajfsjfkasfs"
                          //   className={`form-control ${state.errors?.clinetName ? "is-invalid" : ""}`}
                          id="clinetDesination"
                          name="clinetDesination"
                          //   defaultValue={state.fieldValues?.clinetName}
                          
                        />
                        {/* {state.errors?.clinetName && (
                          <div className="invalid-feedback">{state.errors.clinetName}</div>
                        )} */}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="description" className="form-label">Clinet Review *</label>
                        <textarea
                          className="form-control"
                          defaultValue="sfdhsajfsjfkasfs"
                          //   className={`form-control ${state.errors?.description ? "is-invalid" : ""}`}
                          id="clinetReview"
                          name="clinetReview"
                          rows={4}
                          //   defaultValue={state.fieldValues?.description}
                          
                        />
                        {/* {state.errors?.description && (
                          <div className="invalid-feedback">{state.errors.description}</div>
                        )} */}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="clientImage" className="form-label">
                          Clinet Image * (max 5MB)
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          //   className={`form-control ${state.errors?.placeholderImage ? "is-invalid" : ""}`}
                          id="clientImage"
                          name="clientImage"
                          accept="image/jpeg,image/png,image/webp"
                          
                        />
                        {/* {state.errors?.placeholderImage && (
                          <div className="invalid-feedback">{state.errors.placeholderImage}</div>
                        )} */}
                      </div>

                      <div className="row">
                        <div className="mb-3 d-flex align-items-center">
                          <label className="form-label mb-0">Services provided</label>

                          <span
                            className="badge bg-primary ms-3"
                            style={{ cursor: "pointer" }}
                            // onClick={addServiceData}
                          >
                            Add More
                          </span>
                        </div>

                        {services.map((service, index) => (
                          <div className="row mb-2" key={index}>
                            <div className="col-8">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter service"
                                // name={`services[${index}][name]`}
                                // name={`services_name_${index}`}
                                // value={service}
                                // onChange={(e) => handleChange(e.target.value, index)}
                              />
                            </div>

                            <div className="col-3">
                              {/* <input type="text" name={`services[${index}][oldServiceImage]`} defaultValue={`qwdkjqkdkqd${index}`}/> */}
                              <input
                                type="file"
                                  // name={`services[${index}][image]`}
                                  name={`services_image_${index}`}
                                className="form-control"
                              // placeholder="Enter service"
                              // value={service}
                              // onChange={(e) => handleChange(e.target.value, index)}
                              />
                            </div>

                            <div className="col-1">
                              {services.length > 1 && (
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                //   onClick={() => removeServiceData(index)}
                                >
                                  Remove
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="row">
                        <div className="mb-3 d-flex align-items-center">
                          <label className="form-label mb-0">Technology used</label>

                          <span
                            className="badge bg-primary ms-3"
                            style={{ cursor: "pointer" }}
                            // onClick={addTechnologyData}
                          >
                            Add More
                          </span>
                        </div>

                        {technologies.map((technology, index) => (
                          <div className="row mb-2" key={index}>
                            <div className="col-8">
                              <input
                                type="text"
                                className="form-control"
                                //  name={`technologies[${index}][name]`}
                                // name={`technologies_name_${index}`}
                                placeholder="Enter technology"
                                // value={technology}
                                // onChange={(e) => handleChangeTechnolgy(e.target.value, index)}
                              />
                            </div>

                            <div className="col-3">
                              <input
                                type="file"
                                //  name={`technologies[${index}][image]`}
                                //  name={`technologies_image_${index}`}
                                className="form-control"
                              // placeholder="Enter service"
                              // value={service}
                              // onChange={(e) => handleChange(e.target.value, index)}
                              />
                            </div>

                            <div className="col-1">
                              {technologies.length > 1 && (
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                //   onClick={() => removeTechnologyData(index)}
                                >
                                  Remove
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>

                    <div className="card-footer">
                      <button
                        type="submit"
                        className="btn btn-primary"
                      // disabled={isPending}
                      >
                        {/* {isPending ? "Saving..." : "Create Testimonial"} */}
                        Save
                      </button>
                    </div>
                  </form>
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