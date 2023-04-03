'use strict';

function viewResultField(){
  viewResult.style.display = "block";
};






let inputStart = document.querySelector(".inputStart");
let inputEnd = document.querySelector(".inputEnd");
let inputSelectedDays = document.querySelector(".selectedDays"); 
let inputDimension = document.querySelector(".dimension");
let inputPreset = document.querySelector(".preset")
let calculate = document.querySelector(".calculate");
let viewResult = document.querySelector(".viewResult");
//viewResult.innerHTML = `RESULT: ${currentResult}`;

calculate.addEventListener("click", () => {
 let start = Date.parse(inputStart.value);
  console.log(start);
  return start;
})
calculate.addEventListener("click", () => {
 let end = Date.parse(inputEnd.value);
  console.log(end);
  return end;
})
calculate.addEventListener("click", () => {
 let selectedDays = inputSelectedDays.value;
  console.log(selectedDays);
  return selectedDays;
})
calculate.addEventListener("click", () => {
 let dimension = inputDimension.value;
  console.log(dimension);
  return dimension;
})

console.log(start);

calculate.addEventListener('click', viewResultField);// появляется поле резалт
calculate.addEventListener('click', durationBetweenDates);
function durationBetweenDates(
  start,
  end,
  dimension
) {
  const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;
  const HOUR_IN_MILLISECONDS = 60 * 60 * 1000;
  const MIN_IN_MILLISECONDS = 60 * 1000;
  const SEC_IN_MILLISECONDS = 1000;
  const startDate = Date.parse(start);
  const endDate = Date.parse(end);
  let resultMillisec = Math.abs(startDate - endDate);
  let result;
  
    console.log(resultMillisec);
  switch (dimension) {
    case "4":
      result = resultMillisec / SEC_IN_MILLISECONDS;
      break;
    case "3":
      result = resultMillisec / MIN_IN_MILLISECONDS;
      break;
    case "2":
      result = resultMillisec / HOUR_IN_MILLISECONDS;
      break;
    case "1":
      result = resultMillisec / DAY_IN_MILLISECONDS;
      break;
  }
  let currentResult = `${result} ${dimension}`;
    console.log(currentResult);
    return currentResult;
    
}