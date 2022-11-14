import React from 'react';
import "./Blog.css";
import Blog1 from "./img/blog3.jpg";
import Blog2 from "./img/blog3.jpg";
import Blog3 from "./img/blog3.jpg";

function Blog() {
  return (
    <div className="blog component__space" id="Blog">
        <div className="heading">
            <h1 className="heading">Blog</h1>
            <p className="heading p__color">
            Front End Bootcamp Class
            </p>
        </div> 
        <div className="container">
            <div className="row">
                <div className="col__3">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={Blog1} alt="" className="project__img" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="Blog__meta absolute">
                            <h5 className="project__text">React Js Basic</h5>
                            <h4 className="project__text">install, component, form</h4>
                            <a href="https://reactjs.org/docs/getting-started.html" className="blog project__btn btn">Read More</a>
                        </div>
                    </div>
                </div>

                <div className="col__3">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={Blog2} alt="" className="project__img" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="Blog__meta absolute">
                            <h5 className="project__text">React Js Lanjutan</h5>
                            <h4 className="project__text">lifecycle method and hook, Proptypes</h4>
                            <a href="https://id.reactjs.org/docs/hooks-overview.html" className="blog project__btn btn">Read More</a>
                        </div>
                    </div>
                </div>

                <div className="col__3">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={Blog3} alt="" className="project__img" />
                            </div>
                            <div className="mask__effect"></div>
                        </div>
                        <div className="Blog__meta absolute">
                            <h5 className="project__text">React Router</h5>
                            <h4 className="project__text">install, route</h4>
                            <a href="https://reactrouter.com/en/main" className="blog project__btn btn">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;
