function init(){
    const hamburger=document.querySelector(".hamburger");
const sidebarCloseButton=document.querySelector( ".close-button" ); 
const sidebarContainer=document.querySelector(".sidebar-container");

const openSideBar =() =>{
    sidebarContainer.classList.add("show-sidebar")
    // console.log(sidebarContainer.classList);
}
const closeSideBar=() =>{
    sidebarContainer.classList.remove("show-sidebar")
    // console.log(sidebarContainer.classList);

}

hamburger.addEventListener("click",openSideBar);
sidebarCloseButton.addEventListener("click",closeSideBar);

console.log(sidebarContainer);
console.log(hamburger);


}
init();





function  initNavbarActiveLink() {
    const navbarContainer=document.querySelector(".nav-container");
console.log(navbarContainer);


window.addEventListener("scroll",function(){
    const scrollNumber=window.scrollY;
    // console.log(window.innerWidth);
    const targetNumber=window.innerWidth>=992 ? 70:50;
    if(scrollNumber>=targetNumber){
        navbarContainer.classList.add("sticky-nav")
    }else{
        navbarContainer.classList.remove("sticky-nav")
    }
});

}

initNavbarActiveLink();



