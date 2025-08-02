import React from "react";
import { useState } from "react";
import Star from "./star";
import img1 from "../assets/imgi_1_poert1.png";
import img2 from "../assets/imgi_2_port2.png";
import img3 from "../assets/imgi_3_port3.png";
import "../Style/portofolio.css";
export default function Portofolio() {
  const [imgOverlay, setimgOverlay] = useState("");
  function showPic(e) {
    setimgOverlay(e);
  }
  const imgs = [img1, img2, img3, img1, img2, img3];
  return (
    <>
      <section className="text-sec pt-3 dark-star min-h-screen">
        <div className="container pb-10 pt-36 mx-auto">
          <div className="portofolioContent flex flex-col items-center justify-center gap-2">
            <h2 className="uppercase text-3xl font-bold">
              Portofolio Component
            </h2>
            <Star />
            <div className="services py-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {imgs.map((img, idx) => (
                  <div className="col-span-1" key={idx}>
                    <article>
                      <div className="img relative">
                        <img
                          src={img}
                          className="img-fluid w-full object-cover rounded-2"
                          alt=""
                        />
                        <div
                          onClick={() => showPic(img)}
                          className="overlay opacity-0 flex justify-center items-center absolute top-0 bottom-0 start-0 end-0 "
                        >
                          <i className="fa-solid fa-plus text-white"></i>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {imgOverlay && (
        <section
          onClick={() => setimgOverlay("")}
          className="box fixed h-screen bg-opacity-70 top-0 bottom-0 start-0 end-0 flex justify-center items-center"
        >
          <div className="container mx-auto text-center">
            <div className="popupImg tex-center ">
              <img
                onClick={(e) => e.stopPropagation()}
                src={imgOverlay}
                className="imgOverlay img-fluid object-cover w-50 mx-auto"
              ></img>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
