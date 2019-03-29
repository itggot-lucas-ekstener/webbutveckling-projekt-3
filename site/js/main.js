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


var prevScrollpos = window.pageYOffset;
let header = document.getElementById("header")
let hideClass = "header_hide"
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        if (header.classList.contains(hideClass)){
                header.classList.remove(hideClass)
        }
    } else {
        if (!header.classList.contains(hideClass)){
            header.classList.add(hideClass)
        }
    }
    prevScrollpos = currentScrollPos;
}