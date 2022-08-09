function menuShow(){
    document.querySelector('.side-menu-design').classList.add('show');
   }
   const menu=document.getElementById('hamburger-menu');
   console.log(menu);
   menu.addEventListener('click', menuShow);
   
   const close=document.getElementById('menu-close');
   close.addEventListener("click",function(e){
     document.querySelector('.side-menu-design').classList.remove('show');
   })
   
   
    