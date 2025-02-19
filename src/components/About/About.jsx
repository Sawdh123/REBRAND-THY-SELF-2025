import React from 'react';
import "./About.css";
import Header from "./../Header/Header.jsx";
import Footer from "./../Footer/Footer.jsx";
import aboutVector from "./../../assets/about_vector.png";
import aboutAnime from "./../../assets/about_anime.gif";

function About() {
  return (
    <div className='section-container'>
      <Header
        heading="About Me"
        subHeading="Entry-Level Developer | Computer Science Student">
      </Header>
      <div className='about-main'>
        <div className='about-main-left'>
            <h3 className='about-sub-heading'>Developer</h3>
            <p className='about-sub-heading-details'>
              I'm <strong>Awadh AL-YZIDI</strong>, a dynamic Computer Science student at Carleton University (Sept 2021–Apr 2025). I specialize in building scalable software solutions using technologies like Python, C++, Java, React.js, Node.js, and Docker. I’m passionate about solving real-world problems and am actively seeking an entry-level or junior role where I can contribute my skills and grow professionally.
            </p>
            <h3 className='about-sub-heading'>Interests</h3>
            <p className='about-sub-heading-details'>
              When I'm not coding, I love swimming, playing soccer, hitting the gym, and volleyball. My outgoing nature helps me thrive in collaborative environments, and I always bring energy and creativity to every project.
            </p>
        </div>
        <div className='about-main-right'>
            <img
                src={aboutAnime}
                alt="about-anime"
                className="about-anime"
                loading="lazy"
            />
        </div>
      </div>
      <Footer
        phrase="Check out my "
        link="projects!"
        toAddress="/projects">
      </Footer>
      <div className='vector-frame'>
        <img 
          src={aboutVector}
          alt="about"
          className='about-vector'
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default About;
