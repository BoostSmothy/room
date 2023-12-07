
const nav = document.querySelector('.navbardown');

nav.addEventListener('click', navbarDown);


function navbarDown() {
   
   
   if(navBar.className === "navbar__container-list"){
      navBar.className +=" active-nav";
   }
   else{
      navBar.className = "navbar__container-list";
   }  
   
   
};

   window.addEventListener("resize", function() {
      let windowWidth = window.innerWidth;

      if (windowWidth >= 768) {
         let navBar = document.getElementById("navBar");
         navBar.className = "navbar__container-list";
      }
   });