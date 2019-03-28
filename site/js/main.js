menuB = document.querySelector(".m_button");
menuB.addEventListener("click", appear);
let menu = document.querySelector("menu")
let dark = document.querySelector(".dark")
let button = document.querySelector(".m_icon")

function appear(event){
    menu.classList.toggle("hidden_menu")
    dark.classList.toggle("hidden_dark")
    dark.addEventListener("click", appear)
     if (button.innerHTML == "menu"){
         button.innerHTML = "clear";
     }else{
         button.innerHTML = "menu";
     }
}


