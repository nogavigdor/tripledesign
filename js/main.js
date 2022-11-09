const hamburgerBox=document.querySelector('.hamburger-box');
/* const closeIcon=document.querySelector('.fa-xmark');
const barsIcon=document.querySelector('.fa-bars');
*/
const mainMenu=document.querySelector('.main-menu');

const menuItem=Array.from(document.getElementsByClassName('menu-item'));

const topBarNavWrapper=document.querySelector('.top-bar-nav-wrapper');


const toggleMenu = ()=>{
 /*   
    closeIcon.classList.toggle('toggle-close-menu');
    barsIcon.classList.toggle('toggle-bars-menu');
    */
  
   hamburgerBox.classList.toggle('close-menu')
   mainMenu.classList.toggle('toggle-main-menu');
   topBarNavWrapper.classList.toggle('toggle-top-bar-nav-wrapper');
   /* Will only be executed on pages other than the home due to difference in menu styling
   btween the home page and the rest of the pages */
   
   menuItem.forEach((item)=>{item.classList.toggle('active-menu-item')});
   
}

hamburgerBox.addEventListener('click', ()=>{ toggleMenu();});




/*
//was disabled due to converting the top bar into fixed, 
//so there is no need top this top arrow.
//to the top of screen button

const toTop=document.querySelector('.to-top');

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset>100)
        toTop.classList.add("to-top-active");
    else
        toTop.classList.remove("to-top-active");
})

*/

