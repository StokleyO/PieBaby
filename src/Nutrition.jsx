import React from 'react'
import Strawberry from "../pictures/strawberry.jpg"
import {useState} from 'react'
import "./nutrition.css";

import Choose from '../pictures/savory.jpg';

import Chicken from '../pictures/chicken-curry-hand-pie.jpg';
import Beef from '../pictures/spicy-beef-hand-pie.jpg';
import Goat from '../pictures/curry-goat-hand-pie.jpg'
import Fish from '../pictures/peppered-fish-hand-pie.jpg';
import Spinach from '../pictures/spinach-hand-pie.jpg';
import Cashew from '../pictures/cashew-hand-pie.jpg';

import Pineapple from '../pictures/pineapple-hand-pie.jpg';
import Cookie from '../pictures/peanut-butter-banana-cookie.jpg';
import Straw from '../pictures/strawberry-hand-pie.jpg';
import Lime from '../pictures/key-lime-hand-pie.jpg';
import Coconut from '../pictures/coconut-hand-pie.jpg';



export default function Nutrition() {
  const [food, setFood] = useState("Select Your Favorite Pie");

  const foodArray = [
    {
      foodName: "Choose Your Food",
      servingSize: "0",
      calFat: "",
      dailyVal: " ",
      totalFat: " ",
      cholesterol: " ",
      sodium: " ",
      protein: " ",
      img: Choose,
      type: "Savory Pies"
    },
    {
      foodName: "Chicken Curry",
      servingSize: "4oz",
      calFat: " ",
      dailyVal: " ",
      totalFat: " ",
      cholesterol: " ",
      sodium: " ",
      protein: "6g",
      img: Chicken ,
      type: "Savory Pies"
    },
    {
      foodName: "Curry Goat",
      servingSize: "8oz ",
      calFat: " ",
      dailyVal: " ",
      totalFat: " ",
      cholesterol: " ",
      sodium: " ",
      protein: "7g",
      img: Goat,
      type: "Savory Pies"
    },
    {
      foodName: "Spicy Beef",
      servingSize: "4oz",
      calFat: " ",
      dailyVal: " ",
      totalFat: " ",
      cholesterol: " ",
      sodium: " ",
      protein: "10g",
      img: Beef,
      type: "Savory Pies"
    },
    {
      foodName: "Peppered Fish",
      servingSize: "10oz",
      calFat: " ",
      dailyVal: " ",
      totalFat: " ",
      cholesterol: " ",
      sodium: " ",
      protein: "8g",
      img: Fish,
      type: "Savory Pies"
    },
    {
      foodName: "Spinach & Mushroom",
      servingSize: "4oz",
      calFat: " ",
      dailyVal: " ",
      totalFat: " ",
      cholesterol: " ",
      sodium: " ",
      protein: "2g",
      img: Spinach,
      type: "Vegetarian"
    },
    {
      foodName: "Cashew",
      servingSize: "4oz",
      calFat: " ",
      dailyVal: " ",
      totalFat: " ",
      cholesterol: " ",
      sodium: " ",
      protein: "6g",
      img: Cashew,
      type: "Vegetarian"
      
    },
    {
      foodName: "Pineapple",
      servingSize: "8oz",
      calFat: " ",
      dailyVal: " ",
      totalFat: " ",
      cholesterol: " ",
      sodium: " ",
      protein: "0g",
      img: Pineapple,
      type: "Sweet Pies & Cookies"
        
    },
    {
      foodName: "Banana Peanut Butter Cookies",
      servingSize: "4oz",
      calFat: " ",
      dailyVal: " ",
      totalFat: " ",
      cholesterol: " ",
      sodium: " ",
      protein: "1g",
      img: Cookie,
      type: "Sweet Pies & Cookies"
        
    },
    {
      foodName: "Strawberry (Seasonal)",
      servingSize: "6oz",
      calFat: " ",
      dailyVal: " ",
      totalFat: " ",
      cholesterol: " ",
      sodium: " ",
      protein: "0g",
      img: Straw,
      type: "Sweet Pies & Cookies"
        
    },
    {
      foodName: "Key Lime",
      servingSize: "4oz",
      calFat: " ",
      dailyVal: " ",
      totalFat: " ",
      cholesterol: " ",
      sodium: " ",
      protein: "0g",
      img: Lime,
      type: "Sweet Pies & Cookies"
        
    },
    {
      foodName: "Ginger & Coconut",
      servingSize: "4oz",
      calFat: " ",
      dailyVal: " ",
      totalFat: " ",
      cholesterol: " ",
      sodium: " ",
      protein: "1g",
      img: Coconut,
      type: "Sweet Pies & Cookies"        
    }
  ];


  return (

    <div id = "myModalNutrition" className = "modal">
      <div id="modal-content" className="modal-content">
        

<div className="nutritionContainer">
      <select className="selectMenu" onChange={(e) => {setFood(e.target.value)}}>
        {foodArray.map((foodArray) => (<option value={foodArray.foodName}>{foodArray.foodName}</option>))}
      </select>

      <div>
        {foodArray
          .filter((card, index) => {return food == card.foodName})
          .map((card, index) => {

            return (
              <div>
                <section class="performance-facts">
                  <header class="performance-facts__header" />
                  <h1 class="performance-facts__title">Nutrition Facts</h1>
                  <p className = "serving-info">Serving Size {card.servingSize} (about 82g) </p>
                  <p className = "serving-info">Serving Per Container 8</p>

                  <table class="performance-facts__table">
                    <thead>
                      <tr>
                        <th colspan="3" class="small-info">
                          Amount Per Serving
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th colspan="2">
                          <b>Calories</b>
                          {card.servingSize}
                        </th>
                        <td>Calories from Fat 130</td>
                      </tr>
                      <tr class="thick-row">
                        <td colspan="3" class="small-info">
                          <b>% Daily Value*</b>
                        </td>
                      </tr>
                      <tr>
                        <th colspan="2">
                          <b>Total Fat</b>
                          {card.totalFat}
                        </th>
                        <td>
                          <b>22%</b>
                        </td>
                      </tr>
                      <tr>
                        <td class="blank-cell"></td>
                        <th>Saturated Fat 9g</th>
                        <td>
                          <b>22%</b>
                        </td>
                      </tr>
                      <tr>
                        <td class="blank-cell"></td>
                        <th>Trans Fat 0g</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th colspan="2">
                          <b>Cholesterol</b>
                          {card.cholesterol}
                        </th>
                        <td>
                          <b>18%</b>
                        </td>
                      </tr>
                      <tr>
                        <th colspan="2">
                          <b>Sodium</b>
                          {card.sodium}
                        </th>
                        <td>
                          <b>2%</b>
                        </td>
                      </tr>
                      <tr>
                        <th colspan="2">
                          <b>Total Carbohydrate</b>
                          17g
                        </th>
                        <td>
                          <b>6%</b>
                        </td>
                      </tr>
                      <tr>
                        <td class="blank-cell"></td>
                        <th>Dietary Fiber 1g</th>
                        <td>
                          <b>4%</b>
                        </td>
                      </tr>
                      <tr>
                        <td class="blank-cell"></td>
                        <th>Sugars 14g</th>
                        <td></td>
                      </tr>
                      <tr class="thick-end">
                        <th colspan="2">
                          <b>Protein</b>
                          {card.protein}
                        </th>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>

                  <table class="performance-facts__table--grid">
                    <tbody>
                      <tr>
                        <td colspan="2">Vitamin A 10%</td>
                        <td>Vitamin C 0%</td>
                      </tr>
                      <tr class="thin-end">
                        <td colspan="2">Calcium 10%</td>
                        <td>Iron 6%</td>
                      </tr>
                    </tbody>
                  </table>

                  <p class="small-info">
                    * Percent Daily Values are based on a 2,000 calorie diet.
                    Your daily values may be higher or lower depending on your
                    calorie needs:
                  </p>

                  <table class="performance-facts__table--small small-info">
                    <thead>
                      <tr>
                        <td colspan="2"></td>
                        <th>Calories:</th>
                        <th>2,000</th>
                        <th>2,500</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th colspan="2">Total Fat</th>
                        <td>Less than</td>
                        <td>65g</td>
                        <td>80g</td>
                      </tr>
                      <tr>
                        <td class="blank-cell"></td>
                        <th>Saturated Fat</th>
                        <td>Less than</td>
                        <td>20g</td>
                        <td>25g</td>
                      </tr>
                      <tr>
                        <th colspan="2">Cholesterol</th>
                        <td>Less than</td>
                        <td>300mg</td>
                        <td>300 mg</td>
                      </tr>
                      <tr>
                        <th colspan="2">Sodium</th>
                        <td>Less than</td>
                        <td>2,400mg</td>
                        <td>2,400mg</td>
                      </tr>
                      <tr>
                        <th colspan="3">Total Carbohydrate</th>
                        <td>300g</td>
                        <td>375g</td>
                      </tr>
                      <tr>
                        <td class="blank-cell"></td>
                        <th colspan="2">Dietary Fiber</th>
                        <td>25g</td>
                        <td>30g</td>
                      </tr>
                    </tbody>
                  </table>

                  <p class="small-info">Calories per gram:</p>
                  <p class="small-info text-center">
                    Fat 9 &bull; Carbohydrate 4 &bull; Protein 4
                  </p>
                </section>

                <img className="foodImage" id="foodImage" src={card.img} alt={card.foodName} />
                <span class="close" onClick={() => {
            let modal = document.getElementById("myModalNutrition");
            modal.classList.remove("active");
            }}> &times;</span>

              </div>
            );
          })}
      </div>
    </div>
  </div>
</div>
)}
