import React from "react";
import Star from "./star";
export default function Contact() {
  return (
    <section>
      <div className="container mx-auto text-sec dark-star py-16 pt-36">
        <div className="contactContent flex flex-col items-center md:px-5 gap-8">
          <h2 className="uppercase text-4xl font-bold">Contact Component</h2>
          <Star />
          <div className="w-full flex items-center justify-center ">
            <form className="w-full lg:w-2/3">
              <div className="relative mb-3">
                <input type="text" id="name" className="peer" placeholder=" " />
                <label
                  htmlFor="name"
                  className="peer-placeholder-shown:top-3 peer-focus:top-2 peer-focus:text-main"
                >
                  User Name
                </label>
              </div>
              <div className="relative mb-3">
                <input
                  type="number"
                  className="peer"
                  id="age"
                  placeholder=" "
                />
                <label
                  htmlFor="age"
                  className="peer-placeholder-shown:top-3   peer-focus:top-2  peer-focus:text-main"
                >
                  User Age
                </label>
              </div>
              <div className="relative mb-3">
                <input
                  type="email"
                  className="peer"
                  id="email"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="peer-placeholder-shown:top-3   peer-focus:top-2  peer-focus:text-main"
                >
                  User Email
                </label>
              </div>
              <div className="relative mb-3">
                <input
                  type="text"
                  className="peer"
                  id="password"
                  placeholder=" "
                />
                <label
                  htmlFor="password"
                  className="peer-placeholder-shown:top-3   peer-focus:top-2  peer-focus:text-main"
                >
                  User Password
                </label>
              </div>

              <button type="submit" className="btn bg-main text-white">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
