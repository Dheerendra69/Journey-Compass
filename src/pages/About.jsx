import "../css/About.css";
import AboutImage from "/About.avif";

function About() {
  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex justify-content-center align-items-center">
            <img
              src={AboutImage}
              alt="Loading..."
              className="img-fluid rounded shadow-sm about-image"
              style={{
                maxHeight: "400px",
                objectFit: "cover",
                width: "100%",
                maxWidth: "100%",
              }}
            />
          </div>

          {/* Content Section */}
          <div className="col-12 col-md-6 text-white">
            <div className="about-content px-2 px-md-4">
              <h1 className="mb-4">About Me</h1>
              <p>
                Hello! I'm a passionate traveler who finds joy in exploring the
                world and discovering the beauty of nature, culture, and
                adventure...
              </p>
              <p>
                My dream is to inspire others to step out of their comfort zones
                and embark on their journeys...
              </p>
              <p>
                Join me as I share my travel stories and tips, hoping to ignite
                your wanderlust and help you discover the thrill of exploring...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
