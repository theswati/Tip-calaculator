let input_box=document.querySelector("input");
let btn=document.querySelector("button");
let output=document.querySelector(".output");


//once button is clicked
//get the value of inputbox
//and find 2% as tip
//and show the output


//events=>click
//addevent listener


btn.addEventListener("click",calculateTip);

function calculateTip (){
   console.log(input_box.value)
   let value=input_box.value // in html, value points to real value inside input 
   // we dont use innerHTMl beacuse there is no opening ot closing tag
   let tip=value*0.02
   //console.log(tip)
   output.innerHTML=`You should tip ${tip}`
}

