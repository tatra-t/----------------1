'use strict';
function viewDiv(){
  document.querySelector(".result").style.display = "block";
};
//надо привязать к кнопке culculate



let start = document.querySelector(".start");
let end = document.querySelector(".end");
let dimension = document.querySelector(".dimension");
function durationBetweenDates(
  start = new Date(),
  end = new Date(),
  dimension = "days"
) {
  const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;
  const HOUR_IN_MILLISECONDS = 60 * 60 * 1000;
  const MIN_IN_MILLISECONDS = 60 * 1000;
  const SEC_IN_MILLISECONDS = 1000;
  const startDate = Date.parse(start);
  const endDate = Date.parse(end);
  let resultMillisec = Math.abs(startDate - endDate);
  let result;
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
durationBetweenDates();
