const rules= document.querySelector(".rules");
const ruleSection= document.querySelector(".rules-hide");
const cross=document.querySelector(".close-image")
const choice=document.querySelector(".choice");
const step2=document.querySelector(".step-2");


const choiceHandler=function (event) {
const selectedDiv=event.target.closest('div');
choice.remove();
step2.classList.add("visible");
const selectedDivClass=selectedDiv.getAttribute("class");
const selectedDivClassImageURL=selectedDiv.querySelector('img').getAttribute("src");
const image1=step2.querySelector(".position-1");
image1.classList.add(selectedDivClass);
const image1URL=image1.querySelector("img");
image1URL.setAttribute("src",selectedDivClassImageURL );

// for position 2 image for 3 second only
const position2=document.querySelector(".position-2");
position2.classList.add("pseudo");


};



choice.addEventListener('click',choiceHandler);







rules.addEventListener("click",()=>{
    console.log(ruleSection);
ruleSection.classList.toggle("visible");
document.body.classList.toggle("manage-background");

  setTimeout( ()=>{
    ruleSection.classList.remove("visible");  
     document.body.classList.remove("manage-background")
  }, 8000 );
});

cross.addEventListener("click",function(){
    ruleSection.classList.remove("visible");
    document.body.classList.remove("manage-background")

});
