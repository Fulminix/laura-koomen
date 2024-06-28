import React from 'react'
import '../styles/Home.css';
import '../components/Footer'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="home">
      <div className="headingHome">
        Laura Koomen
      </div>
      <div className="infoHome">
        <p>Photographer based in Haarlem</p>
        <p>Email: LauraKoomen@gmail.com</p>
      </div>
      <div className="containerButton">
        <Link to="/Photography" className='button'>WEBSITE</Link> 
      </div>
      <Footer />
    </div>
  )
}

export default Home;
