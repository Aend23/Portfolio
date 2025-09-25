import React, { useEffect, useState } from "react";
import { FaSquareGithub, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { TbBrandGmail } from "react-icons/tb";
import image from "../assets/selfImage.avif";
import ScrollReveal from "scrollreveal";
import cv from "../assets/Ankush_CV .pdf";

export default function Home() {
  const [showButton, setShowButton] = useState("Download CV");

  useEffect(() => {
    const mulText = document.querySelector("#multiple");

    const textLoad = () => {
      setTimeout(() => {
        if (mulText) {
          mulText.textContent = "{ Developer }";
        }
      }, 0);

      setTimeout(() => {
        if (mulText) {
          mulText.textContent = "{ Engineer }";
        }
      }, 4000);

      setTimeout(() => {
        if (mulText) {
          mulText.textContent = "{ Learner }";
        }
      }, 8000);
    };

    textLoad();
    const intervalId = setInterval(textLoad, 12000);

    ScrollReveal({
      distance: "80px",
      duration: 2000,
      delay: 200,
    });

    ScrollReveal().reveal(".home-content", { origin: "top" });
    ScrollReveal().reveal(".home-img", { origin: "bottom" });
    ScrollReveal().reveal(".home-content h1", { origin: "left" });
    ScrollReveal().reveal(".home-content", { origin: "right" });

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleButtonClick = () => {
    const content = "Hello, this is your CV content!";

    const blob = new Blob([content], { type: "application/octet-stream" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = cv;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

   setShowButton("Downloaded");
  };

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Ankush Yadav</h1>
        <div className="container">
          <span className="text">
            And I'm a{" "}
            <span
              className="text"
              id="multiple"
              style={{ color: "#0ef" }}
            ></span>
          </span>
        </div>
        <div className="social-media">
          <a
            href="https://github.com/Aend23"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareGithub className="icon" />
          </a>
          <FaSquareXTwitter className="icon" />
          <a href="https://www.linkedin.com/in/ankush-yadav-856580240/">
            <FaLinkedin className="icon" />
          </a>
        </div>
        {showButton && (
          <a className="btn" onClick={handleButtonClick} href="#">
           {showButton}
          </a>
        )}

        <a className="btn" href="#projects">
          Projects
        </a>
      </div>
      <div className="home-img">
        <img src={image} alt="" />
      </div>
    </section>
  );
}
