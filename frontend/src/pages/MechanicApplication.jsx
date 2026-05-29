import React from "react";

function MechanicApplication() {
  return (
    <section className="contact-section mechanic-page">
      <div className="container py-5">
        <h2 className="text-center contact-title mb-4">
          Apply to be a Mechanic
        </h2>

        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="card shadow-sm p-4 contact-card">

              <form>

                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Years of Experience</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Years of experience"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Specialization</label>
                  <select className="form-control">
                    <option>Engine Repair</option>
                    <option>Diagnostics</option>
                    <option>Tyres</option>
                    <option>Electrical Systems</option>
                    <option>General Service</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">About You</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Tell us about your experience"
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">Upload CV</label>

                  <input
                    type="file"
                    className="form-control"
                    accept=".pdf,.doc,.docx"
                  />
                </div>

                <button
                  type="submit"
                  className="btn contact-btn w-100"
                >
                  Submit Application
                </button>

              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MechanicApplication;