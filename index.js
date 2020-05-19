const rules= document.querySelector(".rules");
const ruleSection= document.querySelector(".rules-hide");


rules.addEventListener("click",()=>{
    console.log(ruleSection);
ruleSection.classList.add("visible");
 document.body.style.backgroundColor="hsl(237, 49%, 15%)";
//  setTimeout( ()=>{
//     ruleSection.classList.remove("visible");  
//     document.body.style.backgroundColor=" hsl(214, 47%, 23%)";
//  }, 4000 );
});