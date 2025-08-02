import React from "react";

export default function Footer() {
  return (
    <section className="text-white ">
      <div className="bg-sec">
        <div className="container mx-auto py-3">
          <div className="grid grid-cols-1 md:grid-cols-3 py-24 gap-5">
            <div className="col-span-1">
              <div className="content flex flex-col justify-center items-center gap-2">
                <h3 className="text-3xl font-medium text-white uppercase">LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="content flex flex-col justify-center items-center gap-2">
                <h3 className="text-3xl font-medium text-white uppercase"> about the web</h3>
                <div className="icons flex gap-4">
                  <a
                    href="#"
                    className="btn-outline-light rounded-full text-white flex items-center content-center p-2"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a
                    href="#"
                    className="btn-outline-light rounded-full text-white flex items-center justify-center p-2"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="btn-outline-light rounded-full text-white flex items-center justify-center p-2"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="#"
                    className="btn-outline-light rounded-full text-white flex items-center justify-center p-2"
                  >
                    <i className="fa-solid fa-globe"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="content flex flex-col text-center gap-2">
                <h3 className="text-3xl font-medium uppercase"> ABOUT FREELANCER</h3>
                <p className="md:w-2/3 mx-auto">
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-white text-center py-5 mb-0 bg-tertiary">
          Copyright © Your Website 2021
        </p>
      </div>
    </section>
  );
}
