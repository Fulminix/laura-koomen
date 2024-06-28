import React from 'react'
import Navbar from "../components/Navbar";
import FooterPhotography from "../components/FooterPhotography";
import '../styles/Photography.css';

import img1 from '../assets/imagesPhotography/1.jpg';
import img2 from '../assets/imagesPhotography/2.jpg';
import img3 from '../assets/imagesPhotography/3.jpg';
import img4 from '../assets/imagesPhotography/4.jpg';
import img5 from '../assets/imagesPhotography/5.jpg';


const Photography = () => {
  return (
    <div>
      <Navbar />
      <div className='imagesPhotography'>
        {imageData.map((image,index) => (
          <div key={index} className='imagePhotography'>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <FooterPhotography />
    </div>
  )

}
  
  export default Photography;

const imageData = [
  {
    src: img1,
    alt: "Description of Image 1",
  },
  {
    src: img2,
    alt: "Description of Image 2",
  },
  {
    src: img3,
    alt: "Description of Image 3",
  },
  {
    src: img4,
    alt: "Description of Image 4",
  },
  {
    src: img5,
    alt: "Description of Image 5",
  },
  // Add more images as needed
];