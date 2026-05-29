import { Link } from "react-router-dom";

function EmergencyPickup() {
  return (
    <section className="contact-section">
      <div className="container py-5">

        <h2 className="text-center contact-title mb-4">
          Emergency Pickup
        </h2>

        <div className="row justify-content-center">
          <div className="col-lg-7">

            <div className="card shadow-sm p-4 contact-card">

              <p className="text-center mb-4">
                Need urgent roadside assistance? 
                Fill the form below and our team will contact you immediately.
              </p>

              <form>

                <div className="mb-3">
                  <label className="form-label">Emri</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Shkruaj emrin"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Telefoni</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Shkruaj numrin e telefonit"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Lokacioni</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Shkruaj lokacionin"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Nevoja e servisit
                  </label>

                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Pershkruaj problemin"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn contact-btn w-100"
                >
                  Kerkoni Ndihme
                </button>

              </form>

              <div className="text-center mt-4">
                <h5>Emergency Hotline</h5>

                <p className="mb-0">
                  +383 44 123 456
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default EmergencyPickup;