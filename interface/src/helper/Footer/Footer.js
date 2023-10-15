import React from "react";
import './footer.css'
const Footer = () => {
    const fb = require('../../assets/icon/facebook.png')
    const instagram = require('../../assets/icon/insta.png')
    const tiktok = require('../../assets/icon/tiktok.png')
    const twitter = require('../../assets/icon/twitter.png')

  
  return (
    <>
      <footer>

<div className="footer-content">

  <h3>JaggerPlay</h3>

  <p>
  PT. JaggerPlay Teknologi <br></br> Jl. Teknologi RT 002 RW 001 No. 210 Kp. Manggis Indah, Gubeng Kec. Dinoyo Malang, Jawa Timur - 162132 Indonesia
</p>

  <ul className="socials">

    <li><img a></img></li>

    <li><a href="#"><img src={fb}></img></a></li>

    <li><a href="#"><img src={instagram}></img></a></li>

    <li><a href="#"><img src={tiktok}></img></a></li>

    <li><a href="#"><img src={twitter}></img></a></li>


  </ul>

</div>

<div className="footer-bottom">

  <p>Copyright @JaggerPlay 2023 </p>

  

</div>

</footer>

    </>
  );
};

export default Footer;
