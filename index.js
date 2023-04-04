'use strict';

let inputStart = document.querySelector(".inputStart");
let inputEnd = document.querySelector(".inputEnd");
let inputSelectedDays = document.querySelector(".selectedDays"); 
let inputDimension = document.querySelector(".dimension");
let inputPreset = document.querySelector(".preset")
let calculate = document.querySelector(".calculate");
let viewResult = document.querySelector(".viewResult");

calculate.addEventListener("click", () => {
  let start = Date.parse(inputStart.value);
  let end = Date.parse(inputEnd.value);
  let selectedDays = inputSelectedDays.value;
  let dimension = inputDimension.value;
  let resultMillisec = end - start;
  let result;
  if (selectedDays === "1") {
    switch (dimension) {
      case "4":
        result = `${resultMillisec / 1000 +86400} SECONDS`;
        break;
      case "3":
        result = `${resultMillisec / 60000+1440} MINUTS`;
        break;
      case "2":
        result = `${resultMillisec / 3600000 +24} HOURS`;
        break;
      case "1":
        result = `${resultMillisec / 86400000 +1} DAYS`;
        break;
    }
    viewResult.innerHTML = `RESULT: ${result}`;
    //return result;
  }
  if (selectedDays === "3") {
    let resultDay = resultMillisec / 86400000;
    let weekend = 0;
    let currentlyDay;
    let getday = new Date();
    for (let i = 0; i <= resultDay; i++) {
      getday.setTime(start + 86400000 * i);
      currentlyDay = getday.getDay();
      if (currentlyDay === 0 || currentlyDay === 6) {
        weekend++;
      }
    }
    switch (dimension) {
      case "4":
        result = `${weekend * 86400} SECONDS`;
        break;
      case "3":
        result = `${weekend * 1440} MINUTS`;
        break;
      case "2":
        result = `${weekend * 24} HOURS`;
        break;
      case "1":
        result = `${weekend} DAYS`;
        break;
    }
    viewResult.innerHTML = `RESULT: ${result}`;
    //return result;
  }
  if (selectedDays === "2") {
    let resultDay = resultMillisec / 86400000;
    let weekday = 0;
    let currentlyDay;
    let getday = new Date();
    for (let i = 0; i <= resultDay; i++) {
      getday.setTime(start + 86400000 * i);
      currentlyDay = getday.getDay();
      if (currentlyDay === 1 || currentlyDay === 2 || currentlyDay === 3|| currentlyDay === 4|| currentlyDay === 5) {
        weekday++;
      }
    }
    switch (dimension) {
      case "4":
        result = `${weekday * 86400} SECONDS`;
        break;
      case "3":
        result = `${weekday * 1440} MINUTS`;
        break;
      case "2":
        result = `${weekday * 24} HOURS`;
        break;
      case "1":
        result = `${weekday} DAYS`;
        break;
    }
    viewResult.innerHTML = `RESULT: ${result}`;
   // return result;
  }
})

function viewResultField(){
  viewResult.style.display = "block";
};
calculate.addEventListener('click', viewResultField);// появляется поле резалт