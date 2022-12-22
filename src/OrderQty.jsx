import React from 'react';
import "./styles.css";

export const OrderQty = () => {
  return (
    <div>
        <select id="orderFood" name="orderFood" class="orderInput" style={{border: 'none', marginBottom: "25px", padding: "0vmin", borderRadius: "50px", fontFamily: "'Poppins', sans-serif", color: "Black", textAlign: "center", width: "40vmin", fontSize: "25px"}}>
        <option value="blank"></option>
          <option value="chicken">Chicken Curry Pie</option>
          <option value="goat">Curry Goat Pie</option>
          <option value="beef">Spicy Beef Pie</option>
          <option value="fish">Peppered Fish Pie</option>
          <option value="spinach">Spinach & Mushroom Pie (Veg.)</option>
          <option value="cashew">Cashew Pie (Veg.)</option>

          <option value="pineapple">Pineapple Pie</option>
          <option value="banana">Banana Peanut Butter Cookies</option>
          <option value="strawberry">Strawberry Pie</option>
          <option value="keylime">Key Lime Pie</option>
          <option value="coconut">Ginger & Coconut</option>
        </select> 
        <label for="orderQty"></label>
        <input type="number" id="orderQty" class="orderInput" name="orderQty" style={{border: 'none', marginBottom: "25px", marginLeft: "10px", padding: "0vmin", borderRadius: "50px", fontFamily: "'Poppins', sans-serif", color: "Black", textAlign: "center", width: "40vmin", fontSize: "25px"}}>
        </input>
        <br />

    </div>
  )
}
