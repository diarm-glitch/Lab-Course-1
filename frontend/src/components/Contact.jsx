function Contact() {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="text-center contact-title mb-4">Contact Us</h2>
        <div className="row justify-content-center">

          <div className="col-md-8 col-lg-6">
            <div className="card shadow-sm p-4 contact-card">
              <form>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" placeholder="Enter your name" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="4" placeholder="Write your message"></textarea>
                </div>
                <button type="button" className="btn contact-btn w-100">

                </button>
                  Send Message
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
