const celcius = document.querySelector("#celcius"),
fahrenite = document.querySelector("#fahrenite");

//console.log(celcius,fahrenite);
window.addEventListener("load", ()=>celcius.focus());

celcius.addEventListener("input" , ()=>{
    fahrenite.value=((celcius.value*9)/5+32).toFixed(2);
    if(!celcius.value) fahrenite.value="";
});

fahrenite.addEventListener("input", ()=>{
    celcius.value=(((fahrenite.value- 32)*5)/9).toFixed(2);
    if(!fahrenite.value) celcius.value="";
});