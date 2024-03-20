import React from 'react'

export default function HeroSection() {
  return (
    <section id="heroSection" className='hero--section'>
        <div className='hero--section--content--box'>
            <div className='hero--section-content'>
                <p className='section--title'>
                    Hey I'm Monae
                </p>
                <h1 className='hero--section--title'>
                    <span className='hero--section-title--color'>Full Stack</span>{" "}
                <br />
                Developer
                </h1>
                <p className='hero--section-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati magnam ab commodi accusamus, non et incidunt inventore officia atque quia modi, quibusdam in? Minus, fugiat aperiam! Error nostrum libero architecto!
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur odio hic modi nobis dignissimos vitae reiciendis necessitatibus omnis aliquam tempore, cumque officia, consectetur sed architecto minus illo quis velit.
                </p>
            </div>
            <button className='btn btn-primary'>Get In Touch</button>
        </div>
        <div className='hero--section--img'>
            <img src='./img/hero_img.png' alt="hero-section" />
        </div>
    </section>
  )
}
