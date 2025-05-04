import React from "react";
import "../css/About.css";
import owner from "../assets/front image.avif";
import Footer from "./Footer";

function About() {
  return (
    <div className="about-container">
      <img
        src="https://img.freepik.com/premium-vector/color-illustration-tourist-traveling-with-suitcase-world-tourism-day-oneline-drawing_718518-5423.jpg"
        alt="Loading..."
        className="about-image"
      />
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          Hello! I'm a passionate traveler who finds joy in exploring the world
          and discovering the beauty of nature, culture, and adventure. I
          believe that traveling isn’t just about visiting new places; it’s
          about creating memories, sharing experiences, and connecting with
          people.
        </p>
        <p>
          My dream is to inspire others to step out of their comfort zones and
          embark on their journeys. With upcoming tours to picturesque
          destinations like Manali, the serene town nestled in the Himalayas,
          and Rishikesh, the yoga capital of the world, I aim to make each trip
          an unforgettable adventure.
        </p>
        <p>
          Join me as I share my travel stories and tips, hoping to ignite your
          wanderlust and help you discover the thrill of exploring. Let’s
          journey together to make life an amazing adventure!
        </p>
        <a href="https://www.youtube.com/@uplakshyakashyap1486">Youtube</a>
      </div>
      <Footer />
    </div>
  );
}

export default About;
