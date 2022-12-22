import React from "react";
import "./blog.css"


export default function Blog() {
  return (
    <div>
        <div id="myModalBlog" className="modal"> 
        <div id="modal-content" className="modal-content">
          <span class="close" onClick={() => {
        let modal = document.getElementById("myModalBlog");
        modal.classList.remove("active");
        let iframeClass = document.getElementById("iframeId");
        iframeClass.classList.remove("visible2");
       }}>&times;</span>

      <div>
        <iframe id = "iframeId" className= "iframeClass" loading="lazy" src="https://www.wkayleads.com/"></iframe>
      </div>


      </div>
      </div>
      </div>

  );
}
