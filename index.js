'use strict';

function viewResultField(){
  viewResult.style.display = "block";
};






let start = document.querySelector(".inputStart");
let end = document.querySelector(".inputEnd");
let selectedDays = document.querySelector(".selectedDays"); 
let dimension = document.querySelector(".dimension");
let calculate = document.querySelector(".calculate");
let viewResult = document.querySelector(".viewResult");


console.log("start", start.value);
console.log("end", end);
console.log("selectedDay", selectedDays);

function durationBetweenDates(
  start,
  end,
  selectedDays, 
  dimension
) {
  if (selectedDays === "0") {
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
    case "seconds":
      result = resultMillisec / SEC_IN_MILLISECONDS;
      break;
    case "minuts":
      result = resultMillisec / MIN_IN_MILLISECONDS;
      break;
    case "hours":
      result = resultMillisec / HOUR_IN_MILLISECONDS;
      break;
    case "days":
      result = resultMillisec / DAY_IN_MILLISECONDS;
      break;
  }
    console.log(`${result} ${dimension}`);
    return `${result} ${dimension}`;
    }
}


calculate.addEventListener('click', viewResultField);// появляется поле резалт
calculate.addEventListener('click', durationBetweenDates);//сам подсчет
