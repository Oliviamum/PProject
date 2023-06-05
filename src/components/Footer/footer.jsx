import React from 'react';
import './footer.css';



const Card = ({ title, link }) => (
  <div className="card">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <h3>{title}</h3>
    </a>
  </div>
);

const Footer = () => {
  const githubLink = 'https://github.com/';
  const youtubeLink = 'https://www.youtube.com/';
  const contactLink = 'mailto:your-email@example.com';

  return (
    <section>
      <h2></h2>
      <div className="card-container">
        <Card title="GitHub" link={githubLink} />
        <Card title="YouTube" link={youtubeLink} />
        <Card title="Contact" link={contactLink} />
      </div>
    </section>
  );
};

export default Footer









/*import FooterImage from "../../Images/langlearn1.png";
import Card from './card';
import data from "./data";
import './footer.css';

const Footer = () => {
  return (
    <section id="">
      <div className='container footer__container'>
      <div className='container footer__container'>        
        <div className='footer__left'></div>
          <div className='footer__left'></div>
          <div className='footer__portrait'>
            <img src= {FooterImage} alt = "Footer" />
          </div>
        </div>
      </div>       
    </section>   
     )
    }


      export default Footer*/
