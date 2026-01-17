import React from 'react';
import img2 from "../images/img2.jpg";

const Body = () => {
  return (
    <div className='theme'>

      {/* Hero / Introduction Section */}
      <section className='hero'>
        <div className='left'>
          <span className='title'>Where Innovation Meets Intelligence</span>
          <div className='bod'>
            <p>
              At Arah Infotech, we specialize in building cutting-edge software solutions and advanced AI-driven technologies that drive business growth, streamline operations, and empower organizations globally. We deliver intelligent, scalable, and user-centric technology solutions that address real-world challenges with precision and innovation.
            </p>
            <p>
              With deep expertise spanning software engineering, artificial intelligence, cloud infrastructure, cybersecurity, and user experience design, we help businesses innovate, optimize their workflows, and scale confidently in the digital era.
            </p>
            <a  href="./Moreinformation"><button className='btn1'>MORE INFORMATION</button></a>
          </div>
        </div>

        <div className='right'>
          <img className='image' src={img2} alt='Innovation Illustration' />
        </div>
      </section>

      {/* Additional Section Example */}
       <section className="mission-vision">
      <div className="container">
        <div className="card">
          <h2>Our Mission</h2>
          <p>
            To empower organizations through inte8lligent technology solutions
            that solve real-world problems and unlock new opportunities for
            growth.
          </p>
        </div>

        <div className="card">
          <h2>Our Vision</h2>
          <p>
            To be a global leader in innovative software and AI solutions,
            shaping the future of business through technology.
          </p>
        </div>
      </div>
    </section>

     
  

    </div>
  );
};

export default Body;
