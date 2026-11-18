const display=document.getElementById("colorDisplay");
const btnGenerate=document.getElementById("generateBtn");
const text=document.getElementById("textHEX");

btnGenerate.addEventListener("click",()=>{
let strHex='#';

 for(let i=0;i<6;i++){
   strHex+=Math.floor(Math.random() * 16).toString(16);
 }
   display.style.backgroundColor=strHex;
   text.textContent=strHex;
})