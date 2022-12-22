import React from 'react';
import "./styles.css";
import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Order() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_g2p3jxr', 'template_1pgcxio', form.current, 'nQuwz4t0MsLali26j')
          .then((result) => {
              console.log(result.text);
              vipEmail.value = "";
              vipName.value = "";
              vipPhone.value="";
              vipBirthday.value="";

              alert("Great Success");
          }, (error) => {
              console.log(error.text);
              alert("Error");
          });
      };
    
 
    return (
    <div id="myVipModal" className="modal"> 
        <div id="modal-content" className="modal-content" style={{backgroundImage: "url(" + "https://www.freevector.com/uploads/vector/preview/14781/FreeVector-Leather.jpg" + ")", backgroundSize: "1525px 855px", backgroundRepeat: "no-repeat"}}>
          <span class="close" style={{fontSize: "54px", color: "white"}} onClick={() => {
        let modal = document.getElementById("myVipModal");
        modal.classList.remove("active");
       }}>&times;</span>
        <h2 style={{fontSize: 80, marginTop: 20, marginBottom: 35, color: "white"}}>Become a VIP:</h2><br />
        <form ref={form} onSubmit={sendEmail}>
        <label for="vipEmail" style={{color: "white", fontSize: "35px", fontFamily: "'Poppins', sans-serif"}}>Email Address:</label><br />
        <input type="text" id="vipEmail" class="orderInput" name="vipEmail" style={{border: 'none', marginBottom: "50px", padding: "2vmin", borderRadius: "50px", fontFamily: "'Poppins', sans-serif", color: "Black", textAlign: "center", width: "40vmin", fontSize: "25px"}} /><br />

        <label for="vipName" style={{color: "white", fontSize: "35px", fontFamily: "'Poppins', sans-serif"}}>Full Name:</label><br />
        <input type="text" id="vipName" class="orderInput" name="vipName" style={{border: 'none', marginBottom: "50px", padding: "2vmin", borderRadius: "50px", fontFamily: "'Poppins', sans-serif", color: "Black", textAlign: "center", width: "40vmin", fontSize: "25px"}} /><br />

        <label for="vipPhone" style={{color: "white", fontSize: "35px", fontFamily: "'Poppins', sans-serif"}}>Phone Number:</label><br />
        <input type="tel" id="vipPhone" class="orderInput" name="vipPhone" style={{border: 'none', marginBottom: "50px", padding: "2vmin", borderRadius: "50px", fontFamily: "'Poppins', sans-serif", color: "Black", textAlign: "center", width: "40vmin", fontSize: "25px"}} /><br />

        <label for="vipBirthday" style={{color: "white", fontSize: "35px", fontFamily: "'Poppins', sans-serif"}}>Birthday (Optional):</label><br />
        <input type="date" id="vipBirthday" class="orderInput" name="vipBirthday" style={{border: 'none', marginBottom: "50px", padding: "2vmin", borderRadius: "50px", fontFamily: "'Poppins', sans-serif", color: "Black", textAlign: "center", width: "40vmin", fontSize: "25px"}} /><br /><br />

        <input type="submit" value="Sign Up" class="sendInput" style={{border: '1px solid white', cursor: "pointer", marginBottom: "50px", padding: "2vmin", borderRadius: "50px", fontFamily: "'Poppins', sans-serif", color: "White", textAlign: "center", width: "40vmin", fontSize: "30px"}}></input>
        </form>
        </div>
    </div>
  )
}
