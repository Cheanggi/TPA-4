import React from 'react'
import "./Project.css";
import Project1 from "./img/img1.png";
import Project2 from "./img/img2.jpeg";
import Project3 from "./img/img3.jpg";

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">Portfolio</h1>
        <p className="heading p__color">
            My Latest Project
        </p>
      </div>
      <div className="container">
        <div className="row">
            <div className="col__3">
                <div className="project__box pointer relative">
                    <div className="project__box__img pointer relative">
                        <div className="project__img__box">
                            <img src={Project1} alt="" className="project__img" />
                        </div>
                        <div className="mask__effect"></div>
                    </div>
                    <div className="project__meta absolute">
                        <h5 className="project__text">Web Lowongan Kerja Disabilitas</h5>
                        <a href="#" className="project__btn">View Details</a>
                    </div>
                </div>
            </div>

            <div className="col__3">
                <div className="project__box pointer relative">
                    <div className="project__box__img pointer relative">
                        <div className="project__img__box">
                            <img src={Project2} alt="" className="project__img" />
                        </div>
                        <div className="mask__effect"></div>
                    </div>
                    <div className="project__meta absolute">
                        <h5 className="project__text">Web Rumah Sakit</h5>
                        <a href="#" className="project__btn">View Details</a>
                    </div>
                </div>
            </div>

            <div className="col__3">
                <div className="project__box pointer relative">
                    <div className="project__box__img pointer relative">
                        <div className="project__img__box">
                            <img src={Project3} alt="" className="project__img" />
                        </div>
                        <div className="mask__effect"></div>
                    </div>
                    <div className="project__meta absolute">
                        <h5 className="project__text">Web SIMBIMI</h5>
                        <a href="#" className="project__btn">View Details</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Project
