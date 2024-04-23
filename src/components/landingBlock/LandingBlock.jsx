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
    <div className="landing-block flex justify-center items-center">
      <div className="landing-body flex">
        <div className="landing-left flex flex-col justify-evenly">
          <div className="left-top flex flex-col text-white justify-evenly">
            <h3 className=" w-auto min-h-10 h-12 overflow-hidden">Hi, I am Shailendra Pawar</h3>
            <h1 className=" text-yellow-400">Full-stack web developer</h1>
          </div>

          <div className="left-middle flex flex-col text-white justify-evenly">
            <p className=" text-slate-400">
              i like to create solid products with
            </p>
            <span className=" text-slate-400 p-2">great user exerpience</span>
            <div className="social-links mt-5 h-14 flex justify-evenly items-center">
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
          <div className="left-bottom flex justify-evenly">
            <button onClick={()=>navigate('/contact')} className=" border-2 rounded-md text-white hover:bg-blue-500">
              let's talk
            </button>
            <button className="text-white bg-blue-500 rounded-md">
              Resume
            </button>
          </div>
        </div>

        <div className="landing-right grid place-items-center">
          <img src={img}></img>
        </div>
      </div>
    </div>
  );
}

export default LandingBlock;
