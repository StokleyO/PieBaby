import "./styles.css";
import logo from "./logo.png";
import facebookIcon from "../pictures/fb-icon.png";
import twitterIcon from "../pictures/tw-icon.png";
import linkedInIcon from "../pictures/li-icon.png";
import tikTokIcon from '../pictures/tik-logo.png';


export default function Footer() {
  return (
    
    <div className="Footer">
      <div className="topFooter">
        <h2>Come Eat With Us</h2>
        <a href="mailto:me@stokleyonuba.com">
        <button className="footerBtn">Contact Us</button></a>
      </div>
      <h2 style={{textDecoration: "underline", marginBottom: "15px", cursor: "pointer"}} onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });}}>Links</h2>
      <div className="footerLinks">
        <div className="linksMenu">
          <a href="#location"><p className="body-text" onClick={() => {
        let modalLocation = document.getElementById("myModalLocation");
        modalLocation.classList.add("active");
        let mapVis = document.getElementById("map-imgId");
        mapVis.classList.add("mapVisible")
       }}>Location</p></a>
          <a href="#nutrition"><p className="body-text" onClick={() =>{
        let modal = document.getElementById("myModalNutrition");
        modal.classList.add("active");
      }}>Nutrition Information</p></a>
          <a href="#blog" onClick={() =>{        
        let modalBlog = document.getElementById("myModalBlog");
        modalBlog.classList.add("active");
        let iframeClass = document.getElementById("iframeId");
        iframeClass.classList.add("visible2");
      }}><p className="body-text">Blog</p></a>
        </div>
        <div className="linksMenu">
          <a href="#menu" onClick={() => {
        let modalMenu = document.getElementById("myModalMenu");
        modalMenu.classList.add("active");
       }}><p className="body-text">Menu</p></a>
          <a href="#vip"><p className="body-text" onClick={() =>{
        let modal = document.getElementById("myVipModal");
        modal.classList.add("active");
      }}>Become a VIP</p></a>
          <a href="#order"><p className="body-text" onClick={() => {
        let modalOrder = document.getElementById("myOrderModal");
        modalOrder.classList.add("active");
       }}>Order</p></a>
        </div>
      </div>
      <div className = "linksMenu2">
          <a href="twitter"><img className = "socialLogo" src = {twitterIcon} alt="twitter" style = {{width:"6vmin", height: "6vmin"}}/></a>
          <a href="facebook"><img className = "socialLogo" src= {facebookIcon} alt="facebook" style = {{width:"9vmin", height: "8.5vmin", paddingBottom: "1vmin"}} /></a>
          <a href="LinkedIn"><img className = "socialLogo" src={linkedInIcon} alt="linkedIn" style = {{width:"6vmin", height: "6vmin"}} /></a>
          <a href="TikTok"><img className="socialLogo" src={tikTokIcon} alt="Tik-Tok" style = {{width:"6vmin", height: "6vmin"}} /></a>

      </div>
    </div>
   
  );
}
