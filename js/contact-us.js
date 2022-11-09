
//contact us button

const contactUsMain=document.querySelector(".contact-us-main");



const changeText=()=>{
    contactUsMain.innerHTML='Lets meet';

  const something= ()=>{
    window.location.href= 'contact-us.html' ;
  }

    setTimeout(something,1000);




}
contactUsMain.addEventListener("touchstart",changeText);
contactUsMain.addEventListener("click",changeText);
