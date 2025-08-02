import React from 'react'
import Star from './star'

function About() {
  return (
    <section className='bg-main text-white light-star'>
      <div className="container mx-auto px-10">
        <div className="aboutContent flex flex-col items-center justify-center gap-2 h-screen">
          <h2 className="uppercase text-3xl font-bold">About Component</h2>
          <Star/>
          <div className="aboutTxt grid grid-cols-1 md:grid-cols-2 text-center gap-3" >
            <div className="col-span-1">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            </div>
            <div className="col-span-1">

            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About