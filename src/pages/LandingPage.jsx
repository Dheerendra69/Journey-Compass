import React from "react";
import "../css/LandingPage.css";
import HeroImage from "/hero-image.gif";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark text-white text-center py-5">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="display-4"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="typing d-none d-lg-inline">
              Welcome to Journey-Compass
            </span>

            <span className="typing d-block d-lg-none mx-auto px-2 fs-4 fs-sm-3 fs-md-2">
              Welcome to Journey-Compass
            </span>
          </motion.h1>

          <motion.p
            className="lead"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Your space to read, write, and share ideas.
          </motion.p>

          <motion.a
            href="/blogs"
            className="btn btn-primary btn-lg mt-3"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Get Started
          </motion.a>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-5 bg-white">
        <div className="container" data-aos="fade-right">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
              <img
                src={HeroImage}
                alt="About Journey-Compass"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-12 col-md-6">
              <h2 className="mb-3">About Journey-Compass</h2>
              <p>
                Journey-Compass was created with one mission: to empower
                storytellers and thinkers. Whether you're a beginner or a
                seasoned blogger, our platform provides the tools and audience
                you need to share your voice with the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5" data-aos="fade-down">
            Why Choose Us?
          </h2>
          <div className="row text-center text-md-start">
            <div
              className="col-12 col-md-4 mb-4 d-flex flex-column align-items-center px-3"
              data-aos="fade-up"
            >
              <i className="bi bi-pencil-square fs-1 text-primary mb-3"></i>
              <h5 className="fw-bold">Write Blogs</h5>
              <p className="text-muted text-center text-md-start">
                Create blogs easily with our simple editor.
              </p>
            </div>

            <div
              className="col-12 col-md-4 mb-4 d-flex flex-column align-items-center px-3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i className="bi bi-eye fs-1 text-success mb-3"></i>
              <h5 className="fw-bold">Read Anywhere</h5>
              <p className="text-muted text-center text-md-start">
                Browse blogs on the go from any device.
              </p>
            </div>

            <div
              className="col-12 col-md-4 mb-4 d-flex flex-column align-items-center px-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="bi bi-chat-dots fs-1 text-warning mb-3"></i>
              <h5 className="fw-bold">Engage</h5>
              <p className="text-muted text-center text-md-start">
                Comment, like, and share with the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blogs Preview */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4" data-aos="zoom-in">
            Recent Blogs
          </h2>
          <div className="row">
            <div className="col-12 col-md-4 mb-4" data-aos="flip-left">
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">The Future of AI</h5>
                    <p className="card-text">
                      Explore how AI is transforming the world.
                    </p>
                  </div>
                  <a
                    href="/blog/ai-future"
                    className="btn btn-outline-primary mt-auto"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-12 col-md-4 mb-4"
              data-aos="flip-left"
              data-aos-delay="200"
            >
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">Productivity Hacks</h5>
                    <p className="card-text">
                      Learn tips to improve your workflow.
                    </p>
                  </div>
                  <a
                    href="/blog/productivity"
                    className="btn btn-outline-primary mt-auto"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-12 col-md-4 mb-4"
              data-aos="flip-left"
              data-aos-delay="400"
            >
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">Travel Diaries</h5>
                    <p className="card-text">
                      Discover beautiful places around the globe.
                    </p>
                  </div>
                  <a
                    href="/blog/travel"
                    className="btn btn-outline-primary mt-auto"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-4" data-aos="fade-up">
            What Our Users Say
          </h2>
          <div className="row text-center">
            <div className="col-12 col-md-4 mb-4" data-aos="zoom-in">
              <blockquote className="blockquote px-3 py-4 bg-light border rounded h-100 shadow-sm">
                <p>
                  "Journey-Compass helped me build a following in just weeks.
                  Love it!"
                </p>
                <footer className="blockquote-footer mt-2">
                  Anjali Sharma, Writer
                </footer>
              </blockquote>
            </div>
            <div
              className="col-12 col-md-4 mb-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <blockquote className="blockquote px-3 py-4 bg-light border rounded h-100 shadow-sm">
                <p>"Beautiful interface and easy to use. Highly recommend!"</p>
                <footer className="blockquote-footer mt-2">
                  Rohit Mehta, Tech Blogger
                </footer>
              </blockquote>
            </div>
            <div
              className="col-12 col-md-4 mb-4"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <blockquote className="blockquote px-3 py-4 bg-light border rounded h-100 shadow-sm">
                <p>
                  "The best platform for turning your thoughts into content."
                </p>
                <footer className="blockquote-footer mt-2">
                  Priya Kapoor, Student
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-5 bg-light">
        <div className="container text-center" data-aos="fade-up">
          <h2 className="mb-3">Stay Updated!</h2>
          <p>
            Subscribe to get the latest blogs, updates, and exclusive content.
          </p>
          <form className="row gx-2 gy-2 justify-content-center mt-3">
            <div className="col-12 col-md-6">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
            <div className="col-12 col-md-auto">
              <button className="btn btn-primary w-100">Subscribe</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
