//submenu pop out for mobile
var mobile_submenu_link = document.getElementById("submenu_link");
var mobile_submenu = document.querySelector(".mobile_submenu");
mobile_submenu_link.addEventListener("click", function(){
    mobile_submenu.classList.toggle("up");
})

//Second navbar Animation
var second_nav = document.querySelector(".snav__container");
var upArrow = document.querySelector('.up_arrow_container');

window.onscroll = function(){
    if(window.pageYOffset >= 140){
        setTimeout(() => {
            second_nav.classList.add("sticky");
        }, 50);
        upArrow.classList.add("up");
        if(searchBarContainer.classList.contains('search')){
            searchBarContainer.classList.remove('search');
            searchBar.value = '';
        }
    }
    else if(window.pageYOffset < 70){
        setTimeout(() => {
            second_nav.classList.remove("sticky");
        }, 50);
        
        upArrow.classList.remove("up");
    }
}

//types of Arts for mobile
var outerlayers = document.querySelectorAll('.artstyle_outerlayer');
var innerlayer = document.querySelector(".artstyle_innerlayer");
var turn_button = document.querySelector(".as_front a");

outerlayers.forEach(div => {
    div.addEventListener('click', turn);
    
})

function turn(){
    this.classList.toggle("turn");
}

//search box
var searchIcon = document.getElementById("search_icon");
var searchBarContainer = document.getElementById("searchBarContainer");
var searchBar = document.getElementById('searchBar');
var heightOfNav = document.querySelector('.fnav__container').clientHeight;
var height = heightOfNav.toString() + "px";

searchBar.style.height = height;

searchIcon.addEventListener("click", function(){
    
    searchBarContainer.classList.add('search');
    searchBar.focus();//autofocus
})

searchBar.addEventListener('blur', function(){
    searchBarContainer.classList.remove('search');
    searchBar.value = '';
})

//Gallery 
moreInfoBtn = document.getElementById("more_info");
moreInfoBtnImage = document.querySelector("#more_info img");
lessInfoBtn = document.getElementById("less_info");
lessInfoBtnImage = document.querySelector("#less_info img");
artWorks = document.querySelectorAll('.art_grid');

console.log(artWorks);

moreInfoBtn.addEventListener("click", function(){
    moreInfoBtn.classList.add('art_display_activated');
    moreInfoBtnImage.src = "../img/icon_svg/menu_white.svg"
    lessInfoBtn.classList.remove('art_display_activated');
    lessInfoBtnImage.src = "../img/icon_svg/grid.svg"

    artWorks.forEach(div => {
        div.classList.add('details-active');
    })
})

lessInfoBtn.addEventListener("click", function(){
    moreInfoBtn.classList.remove('art_display_activated');
    moreInfoBtnImage.src = "../img/icon_svg/menu.svg";
    lessInfoBtn.classList.add('art_display_activated');
    lessInfoBtnImage.src = "../img/icon_svg/grid_white.svg";

    artWorks.forEach(div => {
        div.classList.remove('details-active');
    })
})

//REDIRECTING TO ART_DETAILS HTML FILE FROM GALLERY 
var arts = document.querySelectorAll(".art");
arts.forEach(div => {
    div.addEventListener('click', function(){
        location.replace("../sub_pages/art_details.html");
    })
})






