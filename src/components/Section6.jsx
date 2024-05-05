import React from "react";
import Quot from "../assets/quot.png";
import "../components/Section6.css";
import UserImg from "../assets/2 (1).jpg";

const Section6 = () => {
  return (
    <section style={{paddingBottom:"100px"}} className="preview__section">
      <div className="container">
        <div className="preview__section__head">
          <h5>CLIENTS REVIEW</h5>
          <h2>My testomonial</h2>
        </div>

        <div className="preview__section__cards">
          <div className="preview__section__cards__crd">
            <div className="preview__section__cards__img">
              <img src={UserImg} alt="" />
            </div>

            <div className="preview__section__cards__crd__icon">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>

            <div className="preview__section__cards__crd__head">
              <h3>Eleanor pena</h3>
              <h5>Marketing Coordinator</h5>
            </div>

            <div className="preview__section__cards__crd__content">
              <p>
                Financial planners help people to knowledge in about how to
                invest and in save their moneye the most efficient way eve plan
                ners help people tioniio know ledige in about how.
              </p>
              <img width="50px" height="35px" src={Quot} alt="" />
            </div>
          </div>

          <div className="preview__section__cards__crd">
            <div className="preview__section__cards__img">
              <img src={UserImg} alt="" />
            </div>

            <div className="preview__section__cards__crd__icon">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>

            <div className="preview__section__cards__crd__head">
              <h3>Eleanor pena</h3>
              <h5>Marketing Coordinator</h5>
            </div>

            <div className="preview__section__cards__crd__content">
              <p>
                Financial planners help people to knowledge in about how to
                invest and in save their moneye the most efficient way eve plan
                ners help people tioniio know ledige in about how.
              </p>

              <img width="50px" height="35px" src={Quot} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;