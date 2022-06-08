let navBar = document.querySelector (".menuPhone")

function menu() {
   if(navBar.style.transform == "translateX(-100%)"){
      navBar.style.transform = "none";
   }else{
      navBar.style.transform = "translateX(-100%)"
   }
}

function menuClose() {
      navBar.style.transform = "translateX(-100%)"
}