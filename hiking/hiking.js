const image=document.querySelector(".trips");
image.addEventListener("click",function(e){
  console.log("clicking is happening on image!",e.target.id);
  if (e.target.id==="photo2" || e.target.id==="photo1" || e.target.id==="photo3")
       {
  console.log("e-target-id",e.target.id);       
  const img=document.querySelector(`#${e.target.id}`); 
  console.log("e-target-id",img);         
  var currWidth=img.clientWidth;
  console.log("Current Width is",currWidth);
         
  //getting a title below the image
  const title=document.querySelector(`.${e.target.id}>h3`);
  console.log( "Title=",title);  
  title.classList.add("zoomed");
  title.style.opacity=1;
  console.log("title with zoomed properties",title);       
  img.style.width = (currWidth + 200) + "px";
  // currWidth=img.clientWidth;  
  currWidth=img.style.width;       
  console.log( "Increased width with 200px",currWidth);

//   side menu appears
   const sideMenu=document.querySelector(`.${e.target.id}>aside`);
  //  e.target.
   sideMenu.classList.add("show");      
 // Zooming out 
 img.addEventListener("mouseleave",function(e){
 console.log("mouseleave is happening!");
   currWidth = img.clientWidth;
   img.style.width = (currWidth - 200) + "px";
  console.log( "Decreased width",img.style.width); 
  title.classList.remove("zoomed");
  console.log( "Title should be without zoomed class=",title);
  title.style.opacity=0.5; 
  // document.createAttribute
  const div=document.createElement("div");
  div.setAttribute(src,im);
  document.
})
}
})
