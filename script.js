var tabContents = document.getElementsByClassName("tab-contents");
var tablinks = document.getElementsByClassName("tab-links");

function opentab(tabname){
    for(const tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(const tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
    
}
var sidemenu = document.getElementById("sidemenubar");
function menubaropen(){
    sidemenu.style.right = "0";
}
function menubarclose(){
    sidemenu.style.right = "-200px";
}

const seeMoreButton = document.getElementById("seeMoreButton");
const itemList = document.getElementById("hidden-list");
seeMoreButton.addEventListener("click", function () {
    if (itemList.style.display === "none") {
        itemList.style.display = "grid"; 
        seeMoreButton.textContent = "See Less"; 
    } else {
        itemList.style.display = "none"; 
        seeMoreButton.textContent = "See More"; 
    }
});

