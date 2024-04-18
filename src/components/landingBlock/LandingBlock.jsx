import React from "react";
import "./landingBlock.css";
import img from "./portfolio-pic1.svg";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function LandingBlock() {

  const navigate=useNavigate()


  return (
    <div className="landing-block">
      <div className="landing-body">
        <div className="landing-left">
          <div className="left-top">
            <h3>Hi, I am Shailendra Pawar</h3>
            <h1 className=" text-yellow-400">Full-stack web developer</h1>
          </div>

          <div className="left-middle">
            <p className=" text-slate-300">
              i like to create solid products with
            </p>
            <span className=" text-slate-300">great user exerpience</span>
            <div className="social-links">
              <a href="https://github.com/shailendrapawar" target="blank">
                <FaGithub />
              </a>
              <a href="www.linkedin.com/in/shailendra-pawar792" target="blank">
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/shailendra.pawar.50159"
                target="blank"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
          <div className="left-bottom">
            <button onClick={()=>navigate('/contact')} className=" border-2 rounded-md text-white hover:bg-blue-500">
              let's talk
            </button>
            <button className="text-white bg-blue-500 rounded-md">
              Resume
            </button>
          </div>
        </div>

        <div className="landing-right">
          <img src={img}></img>
        </div>
      </div>
    </div>
  );
}

export default LandingBlock;
