var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(const tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");
    
}
var sidemenu = document.getElementById("sidemenubar");
function menubaropen(){
    sidemenu.style.right = "0";
}
function menubarclose(){
    sidemenu.style.right = "-200px";
}

