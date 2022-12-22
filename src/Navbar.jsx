import "./styles.css";
import Blog from "./Blog.jsx";
import logo from "./logo.png";
import { useState, useEffect, useRef } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export default function Navigator () {

const [openNav, setOpenNav] = useState(false);
 
useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
}, []);

const navList = (
  <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal"
    >
      <a href="#home" className="flex items-center" onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });    
        }}>
        Home
      </a>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal"
    >
      <a href="#location" className="flex items-center" onClick={() => {
        let modalLocation = document.getElementById("myModalLocation");
        modalLocation.classList.add("active");
        let mapVis = document.getElementById("map-imgId");
        mapVis.classList.add("mapVisible")
       }}>
        Location
      </a>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal"
    >
      <a href="#menu" className="flex items-center" onClick={() => {
        let modalMenu = document.getElementById("myModalMenu");
        modalMenu.classList.add("active");
       }}>
        Menu
      </a>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal"
    >
      <a href="#nutrition" className="flex items-center " onClick={() =>{
        let modal = document.getElementById("myModalNutrition");
        modal.classList.add("active");
      }}>
        Nutrition Information
      </a>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal"
    >
      <a href="#vip" className="flex items-center " onClick={() =>{
        let modal = document.getElementById("myVipModal");
        modal.classList.add("active");
      }}>
        Become a VIP
      </a>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal"
    >
      <a href="#blog" className="flex items-center" onClick={() =>{        
        let modalBlog = document.getElementById("myModalBlog");
        modalBlog.classList.add("active");
        let iframeClass = document.getElementById("iframeId");
        iframeClass.classList.add("visible2");
      }}>
        Blog
      </a>
    </Typography>
  </ul>
);

return (
  <Navbar className="mx-auto max-w-fit-xl py-2 px-4 lg:px-8 lg:py-4">
    <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
      <Typography
        as="a"
        href="#"
        variant="small"
        className="mr-4 cursor-pointer py-1.5 font-normal"
      >
        <span>Pie Baby</span>
      </Typography>
      <div className="hidden lg:block">{navList}</div>
      <Button size="sm" className="hidden lg:inline-block" onClick={() => {
        let modalOrder = document.getElementById("myOrderModal");
        modalOrder.classList.add("active");
       }}>
        <span className="order-btn">Place Order</span>
      </Button>
      <IconButton
        variant="text"
        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
        ripple={false}
        onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </IconButton>
    </div>
    <MobileNav open={openNav}>
      {navList}
      <Button size="sm" fullWidth className="mb-2" onClick={() => {
        let modalOrder = document.getElementById("myOrderModal");
        modalOrder.classList.add("active");
       }}>
        <span className="order-btn">Place Order</span>
      </Button>
    </MobileNav>
  </Navbar>
);
}
