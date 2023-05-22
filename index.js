/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputNum=document.getElementById("input-num")
let lengthEl=document.getElementById("length-el")
let lengthEl2=document.getElementById("length-el2")
let lengthEl3=document.getElementById("length-el3")
let btnConvert=document.getElementById("btn")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

btnConvert.addEventListener("click", function(){
    let baseValue=inputNum.value
    lengthEl.textContent=`${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters`
    
    lengthEl2.textContent=`${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} Gallons | ${baseValue} Gallons = ${(baseValue / literToGallon).toFixed(3)} liters`
    
    lengthEl3.textContent=`${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters`
    
})