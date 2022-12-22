import "./styles.css";
import { useState, useEffect, useRef } from "react";
import logo from "./logo.png";
import beef from '../pictures/beef3.jpg';
import strawberry from '../pictures/strawberry-rotate.jpg';
import veggie from '../pictures/veggie-rotate.jpg';
import meat from '../pictures/meat.jpg';
import triangle from '../pictures/tri.webp';
import React from 'react';
import heroImg from '../pictures/IMG_9168.jpg';
import hero1 from '../pictures/hero1.avif';
import hero2 from '../pictures/hero2.avif';
import hero3 from '../pictures/hero3.avif';
import hero4 from '../pictures/hero4.avif';
import hero5 from '../pictures/hero5.avif';
import bakeSplash from '../pictures/newSplash.jpg';

export default function About() {
  <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>

  const [pgAnimation, setPgAnimation] = useState("paragraph-card");
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };
 
  useEffect(() => {
    if (scrollPosition >= 735) {
    let red = document.getElementById("red");
      red.classList.add("visible");
      let redText = document.getElementById("redText");
      redText.classList.add("em-wider");
    } if (scrollPosition > 1715) {
      let blue = document.getElementById("blue");
      blue.classList.add("visible");
      let blueText = document.getElementById("blueText");
      blueText.classList.add("em-wider");
    } if (scrollPosition > 2585) {
      let green = document.getElementById("green");
      green.classList.add("visible");
      let greenText = document.getElementById("greenText");
      greenText.classList.add("em-wider");
    } if (scrollPosition >= 5) {
      let logoMark = document.getElementById("logo-mark");
      logoMark.classList.add("logo-mark-shrunk");
    } if (scrollPosition < 5 ) {
      let logoMark = document.getElementById("logo-mark");
      logoMark.classList.remove("logo-mark-shrunk");
      red.classList.remove("visible");
      blue.classList.remove("visible");
      green.classList.remove("visible");
    }
  });

  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return <div className="About">
     <center>
                <div id = "heroId" className="hero" style = {{backgroundImage: `url(${bakeSplash})`}} onClick = {() => {
                  let hero = document.getElementById("heroId")
                  hero.classList.add("animate");
                }}>
                  <div className="about-title" >
                <h1 className="title-text2">PIE BABY PALM PIES </h1>
                <h3 className="title2">Founded in 2022 with a mission to make handheld comfort food for fueling your sweet life.</h3>
                <img src={logo} alt="logo" style = {{width: "120px", marginTop: "-50px"}}/>
                <h4 className="enter-site">Click To Enter <br/> ▼ </h4>
              </div>
                 </div>
              </center>
              
          <a href="#home"><img src={logo} className="logo-mark" id="logo-mark" onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });}} /></a>
              <div className="about-title" >
                <h1 className="title-text">THE MISSION AND CULTURE OF<br />PIE BABY </h1>
              </div>

             

              <div className="yellow">
               
                <p className="body-text"> We're a delicious little company located inside Baytown Lounge Abuja FCT, Nigeria. We happily create delicious locally sourced savoury and sweet pies with a nod to the Nigerian culture. We keep a strong focus on your well-being and the health of this wonderful country. Each day, we strive to feed a broad audience of friends, neighbors, professionals and village visitors.  Our menu will be nontraditional in flavor combinations, constantly changing to honor Nigeria’s agriculture.  We strive to test the limits of our creativity while challenging and pleasing the palates of Pie Baby enthusiasts.  We make dough with our hands daily while living our  big-hearted mission: to serve pie, uplift Nigerian culture, and each other. </p>
                <p className="body-text"> Our work becomes easier when we can ask ourselves if we're honoring the content of that statement.  We work with farmers who grow food and flowers throughout the country, and our pie menu changes in sync with the harvest and allowable transport.  This allow us to be creative and work in harmony with growers and nature. </p>
                
                <div>
                <div className="circle"></div>
                <img src={meat} className= "image-left" alt="Meat" style={{width: "70vmin"}} />
                </div>
              </div>
              
              <div className="bar-divide"> </div>

              <div className="tag red" id="red">
                <h3  className = "title-3"id="redText">NIGERIA</h3>
                <p className="body-text"> We want to take care of our people; most importantly, our team. We want to build a business for employees that pays a fair and living wage; provides growth and learning opportunities; fosters a family-style community; embodies our vision of a tribe that vibes; continues to challenge traditional, profit-driven business practices; and maintains a mentality of continuous learning to keep improving, together, in the ways we empower staff. We take pride in our work </p>
                <div className="circle2"></div>
                <img  className = "image-right" src={beef} alt = "Beef Pie" style={{width : "70vmin"}} />
              </div>
              <div className="bar-divide"> </div>

              <div className="tag blue" id="blue">
                <h3 className = "title-3" id="blueText">NUMBERS</h3>
                <p className="body-text">Like any business, we need to make money to run. To be a profitable, viable business means we can afford to pay employees exceptional living wages; invest in meaningful staff development opportunities; and continue to deepen our understanding and practices for building a sustainable and exceptional community-minded bakery that delivers a deliciousness in the palm of your hand. </p>
                <p className="body-text">On top of that, we can participate in the growth of local economy through buying seasonal produce from local farmers, hiring reliable people, and investing in the community.</p>
                <div className="circle3">▲</div>
                <img  src={strawberry} className= "image-left" alt = "Strawberry Pie" style={{width : "70vmin"}} />
              
              </div>
              <div className="bar-divide"> </div>

              <div  className="tag green" id="green">
                <h3 className = "title-3"id="greenText">NATURE</h3>
                <p className="body-text"> In every way that we can, we want to employ practices that lessen our carbon footprint and reduce our waste and, ultimately, help us take better care of our lived environment. That means we try to keep expanding our recycling capability. We are working with companies like Lomi to take our first steps toward our dream of a robust composting process to recycle our food scraps. </p>
                <p className="body-text">We’re miles and miles away from where we’d like to be, and we’re always looking for more new and creative ways to approach doing business differently.</p>
                <div className="circle4">◆</div>
                <img src={veggie} className= "image-right" alt = "Veggie" style={{width : "70vmin"}} />              
              </div>

            {/* LOCATION MODAL */}

            <div id="myModalLocation" className="modal"> 
              <div id="modal-content" style={{backgroundImage: "url(" + "https://media.istockphoto.com/id/1151367251/vector/seamless-texture-city-map-in-retro-style-outline-map.jpg?s=612x612&w=0&k=20&c=0EzK-SAxKD6tkZJGMjICcYenqTgL6SXc8LFGxMpHY3Y=" + ")"}} className="modal-content">
              <span class="close-menu" style={{fontSize: 48}} onClick={() => {
        let modal = document.getElementById("myModalLocation");
        modal.classList.remove("active");
        let mapVis = document.getElementById("map-imgId");
        mapVis.classList.remove("mapVisible");
       }}>&times;</span>
                <p style={{fontWeight: 600, fontSize: 48, textDecoration: "underline", color: "rgb(52, 0, 9)", marginBottom: 50}} className="body-text">Come Visit Us!</p> <center>
                <iframe id = "map-imgId" className = "map-imgCl"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.696748597974!2d7.4703152142352085!3d9.000026391921525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0cf25b0dcf85%3A0x1928d15106437fa7!2s8%20Oladipo%20Diya%20St%2C%20Gudu%20900110%2C%20Abuja%2C%20Federal%20Capital%20Territory%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1670890268201!5m2!1sen!2sus" style = {{width:"800", height:"600", border:0, marginBottom:35}} allowfullscreen="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </center>
                <p style={{fontWeight: 600, fontSize: 26, marginBottom: 0, color: "rgb(52, 0, 9)"}} className="body-text">8 Oladipo Diya Street, Abuja, FTC, Nigeria</p>
              </div>
            </div>

      {/* MENU MODAL */}
            <div id="myModalMenu" className="modal"> 
              <div id="modal-content" className="modal-content-menu">
              <span class="close-menu" style={{fontSize: 48}} onClick={() => {
        let modal = document.getElementById("myModalMenu");
        modal.classList.remove("active");
       }}>&times;</span>
                <p className="body-text" style={{fontSize: 140, marginTop: 50, marginBottom: 90, color: "white"}}>Menu</p>
                <p className="body-text" style={{fontSize: 16, color: "#FAF9F6"}}>Every pie’s filling is crafted at the peak of Nigeria's vast growing season, from coconuts, limes and pears in July to strawberries in November. We do our best to source all of our products locally when possible - from flour to vegetables and fruit. </p>
                <div className="menuDiv">
                  <div className="leftMenu">
                  <h2 style={{color: "white"}}>Savory Pies</h2>
                  <p className="body-text-menu">Chicken Curry</p>
                  <p className="body-text-menu">Curry Goat</p>
                  <p className="body-text-menu">Spicy Beef</p>
                  <p className="body-text-menu">Peppered Fish</p>
                  <p className="body-text-menu">Spinach & Mushroom (Veg.)</p>
                  <p className="body-text-menu">Cashew (Veg.)</p>
                  </div>
                  <div className="rightMenu">
                  <h2 style={{color: "white"}}>Sweet Pies</h2>
                  <p className="body-text-menu">Pineapple</p>
                  <p className="body-text-menu">Banana Peanut Butter Cookies</p>
                  <p className="body-text-menu">Strawberry (Seasonal)</p>
                  <p className="body-text-menu">Key Lime</p>
                  <p className="body-text-menu">Ginger & Coconut</p>
                  </div>
                </div>
                <p className="body-text" style={{fontSize: 16, marginTop: 20, marginBottom: 0, color: "#FAF9F6"}}>Because of our commitment to our seasonal ingredients, you might want to pin our website or call ahead.  We love the creative challenge of coming up with new flavors to highlight what Nigeria has to offer in every season.</p>
              </div>
            </div>
          </div>;  
}
