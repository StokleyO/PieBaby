import React from 'react';
import "./styles.css";
import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';

import cartImg from '../pictures/cartImg.png';

export default function Order() {
    const form = useRef();
    const foodSelect = useRef();
    const foodQty = useRef();



    const [myOrder, setMyOrder] = useState([
      
    ]);

    var finalOrder = myOrder;

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_g2p3jxr', 'template_61id4rp', form.current, 'nQuwz4t0MsLali26j')
          .then((result) => {
              console.log(result.text);
              orderName.value = "";
              orderPhone.value="";
              orderFood.value="";
              orderPickup.value="";
              orderFood.value="";
              orderQty.value="";
              setMyOrder([{}]);

              alert("Great Success");
          }, (error) => {
              console.log(error.text);
              alert("Error");
          });
      };
    
 
    return (
    <div id="myOrderModal" className="modal"> 
        <div id="modal-content" className="modal-content" style={{backgroundImage: "url(" + "https://img.freepik.com/free-photo/croissants-bread-frame-with-copy-space_23-2148365473.jpg?w=2000" + ")", backgroundSize: "cover"}}>
          <span class="close" style={{fontSize: "54px", color: "black"}} onClick={() => {
        let modal = document.getElementById("myOrderModal");
        modal.classList.remove("active");
       }}>&times;</span>
        <h2 style={{fontSize: 60, marginTop: 20, marginBottom: 40, color: "black"}}>Place an Order:</h2><br />
        <form ref={form} onSubmit={sendEmail}>
        <label for="orderName" style={{color: "black",  fontSize: "35px",fontFamily: "'Poppins', sans-serif"}}>Name:</label><br />
        <input type="text" id="orderName" class="orderInput" name="orderName" style={{border: 'none', marginBottom: "30px", padding: "2vmin", borderRadius: "50px", fontFamily: "'Poppins', sans-serif", color: "Black", textAlign: "center", width: "40vmin", fontSize: "25px"}} /><br />

        <label for="orderPhone" style={{color: "black",  fontSize: "35px", fontFamily: "'Poppins', sans-serif"}}>Phone Number:</label><br />
        <input type="tel" id="orderPhone" class="orderInput" name="orderPhone" style={{border: 'none', marginBottom: "30px", padding: "2vmin", borderRadius: "50px", fontFamily: "'Poppins', sans-serif", color: "Black", textAlign: "center", width: "40vmin", fontSize: "25px"}} /><br />


       {/* This is where Menu Ordering Starts */}
        <label for="orderFood" style={{color: "black",  fontSize: "35px", fontFamily: "'Poppins', sans-serif"}}>What Would You Like To Eat:</label><br />

        <select ref={foodSelect} id="orderFod" name="orderFood" class="orderInput" onChange={(e) => {
            currentFood = e.target.value;

        }} style={{border: 'none', marginBottom: "25px", padding: "2vmin", borderRadius: "50px", fontFamily: "'Poppins', sans-serif", color: "Black", textAlign: "center", width: "40vmin", fontSize: "25px"}}>
        <option value="blank"></option>
        <option value="Chicken Curry Pie">Chicken Curry Pie</option>
          <option value="Curry Goat Pie">Curry Goat Pie</option>
          <option value="Spicy Beef Pie">Spicy Beef Pie</option>
          <option value="Peppered Fish Pie">Peppered Fish Pie</option>
          <option value="Spinach & Mushroom Pie">Spinach & Mushroom Pie (Veg.)</option>
          <option value="Cashew Pie">Cashew Pie (Veg.)</option>

          <option value="Pineapple">Pineapple Pie</option>
          <option value="Banana Peanut Butter Cookies">Banana Peanut Butter Cookies</option>
          <option value="Strawberry Pie">Strawberry Pie</option>
          <option value="Key Lime Pie">Key Lime Pie</option>
          <option value="Ginger & Coconut Pie">Ginger & Coconut Pie</option>
        </select> 
        <label for="orderQty"></label>
        <input type="number" ref={foodQty} id="orderQty" class="orderInput" name="orderQty" onChange = {(e) => {
          currentQty = e.target.value
        }}style={{border: 'none', marginBottom: "25px", marginLeft: "10px", padding: "2vmin", borderRadius: "50px", fontFamily: "'Poppins', sans-serif", color: "Black", textAlign: "center", width: "15vmin", fontSize: "25px"}}>
        </input> <button type="button" onClick={function () {
          let updatedSelect = `${foodSelect.current.value}` + " (" + `${foodQty.current.value}` + "x), ";
          
          setMyOrder([...myOrder, updatedSelect]);
          foodSelect.current.value = "";
          foodQty.current.value = "";
        }}><img src={cartImg} alt="Add to Cart" width={"40px"} /></button>
        <br />

        {/* This is where Menu Ordering Ends */}

        
        {/* <input type="text" id="orderFood" class="orderInput" name="orderFood" style={{border: 'none', marginBottom: "50px", padding: "2vmin", borderRadius: "50px", fontFamily: "'Poppins', sans-serif", color: "Black", textAlign: "center", width: "40vmin", fontSize: "25px"}} /><br /> */}

        <p style={{color: "black",  fontSize: "35px", marginTop: "20px"}}>Cart</p>
        <ul style={{color: "black", fontSize: "20px", fontFamily: "'Poppins', sans-serif", marginTop: "12px", marginBottom: "25px"}}>
          {myOrder.map(function (value, index) {
            return (
              <li style={{marginBottom: "10px"}}>
                {value}
              </li>
            )
          })}
        </ul>
        <label for="orderPickup" style={{color: "black",  fontSize: "35px", marginTop: "50px"}}>When Would You Like To Pick Up:</label><br />
        <input type="datetime-local" id="orderPickup" class="orderInput" name="orderPickup" style={{border: 'none', marginBottom: "30px", padding: "2vmin", borderRadius: "50px", fontFamily: "'Poppins', sans-serif", color: "Black", textAlign: "center", width: "40vmin", fontSize: "25px"}} /><br /><br />

        <input type="submit" value="Send Order" class="sendInput" style={{border: '1px solid black', cursor: "pointer", marginBottom: "30px", padding: "2vmin", borderRadius: "50px", fontFamily: "'Poppins', sans-serif", color: "Black", textAlign: "center", width: "40vmin", fontSize: "25px"}}></input>
        </form>

      

            
        </div>
    </div>
  )
}
