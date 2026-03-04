//Element

const envelope= document.getElementById("envelope-container");
const letter = document .getElementById("letter-container");
const noBtn = document .querySelector(".no-btn");
const yesBtn=document.querySelector(".yes-btn");


const title=document .getElementById("letter-title");
const mainImg = document .getElementById("letter-main");
const buttons = document .getElementById("letter-buttons");
const finalText=document .getElementById("final-text");

// click envelope 
 envelope.addEventListener("click",()=>{
    envelope.style.display="none";
    letter.style.display="flex";

    setTimeout(()=>{
        document.querySelector(".letter-window").classList.add("open");
    },50);
 });

 //logic to make yes btn to grow

 let yesScale=1;

 yesBtn.style.position="relative";
 yesBtn.style.transformOrigin="center center";
 yesBtn.style.transition="transform 0.3s ease";

 noBtn.addEventListener("click",()=>{
     yesScale+= 2;

     if (yesBtn.style.position !== "fixed"){
        yesBtn.style.position= "fixed";
        yesBtn.style.top="50%";
        yesBtn.style.left="50%";
        yesBtn.style.transform=`translate(-50% , -50%) scale(${yesScale})`;
     }else{
        yesBtn.style.transform=`translate(-50% , -50%) scale(${yesScale})`;

     }
 });

 //yes is clicked
 yesBtn.addEventListener("click",()=>{
    title.textContent="YIPEEEEEEEE!";

    mainImg.src="cat.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display="none";

    finalText.style.display ="block";

 });
