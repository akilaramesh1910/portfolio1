import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Hello,I'm AKILA</h2>
            <p>
            Frontend Developer | Using React to Create Interesting Online Experiences
            I'm an expert in creating engaging user interfaces with HTML, CSS, JavaScript, and React. devoted to transforming concepts into eye-catching digital works.
            </p>
        </div>
        <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <img src="./assets/images/img01.png" alt="" />
                </div>
                {/* <img src="./assets/images/img11.png" alt="" /> */}
            </div>    
            <div>
                <div className="tech-icon">
                    <img src="./assets/images/img02.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/img03.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/img04.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero