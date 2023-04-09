'use strict';

let inputStart = document.querySelector(".inputStart");
let inputEnd = document.querySelector(".inputEnd");
let inputSelectedDays = document.querySelector(".selectedDays"); 
let inputDimension = document.querySelector(".dimension");
let inputPreset = document.querySelector(".preset")
let calculate = document.querySelector(".calculate");
let viewResult = document.querySelector(".viewResult");
let startForLocal = document.querySelector(".startLocal");
let endForLocal = document.querySelector(".endLocal");
let resultForLocal = document.querySelector(".resultLocal");
let tableLocal = document.querySelector(".tableLocal");

inputStart.addEventListener("change", () => {
  inputEnd.disabled = false;
})

calculate.addEventListener("click", () => {
  let startLocal = inputStart.value;
  localStorage.setItem("start", startLocal);
  let endLocal = inputEnd.value; 
  localStorage.setItem("end", endLocal);
  let start = Date.parse(inputStart.value);
  let end = Date.parse(inputEnd.value);
  let selectedDays = inputSelectedDays.value;
  let dimension = inputDimension.value;
  let resultMillisec = end - start;
  let result;
  if (selectedDays === "allDay") {
    switch (dimension) {
      case "seconds":
        result = `${resultMillisec / 1000 +86400} SECONDS`;
        break;
      case "minuts":
        result = `${resultMillisec / 60000+1440} MINUTS`;
        break;
      case "hours":
        result = `${resultMillisec / 3600000 +24} HOURS`;
        break;
      case "days":
        result = `${resultMillisec / 86400000 +1} DAYS`;
        break;
    }
    viewResult.innerHTML = `RESULT: ${result}`;
    //return result;
  }
  if (selectedDays === "weekends") {
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
      case "seconds":
        result = `${weekend * 86400} SECONDS`;
        break;
      case "minuts":
        result = `${weekend * 1440} MINUTS`;
        break;
      case "hours":
        result = `${weekend * 24} HOURS`;
        break;
      case "days":
        result = `${weekend} DAYS`;
        break;
    }
    viewResult.innerHTML = `RESULT: ${result}`;
    //return result;
  }
  if (selectedDays === "weekdays") {
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
      case "seconds":
        result = `${weekday * 86400} SECONDS`;
        break;
      case "minuts":
        result = `${weekday * 1440} MINUTS`;
        break;
      case "hours":
        result = `${weekday * 24} HOURS`;
        break;
      case "days":
        result = `${weekday} DAYS`;
        break;
    }
    viewResult.innerHTML = `RESULT: ${result}`;
   // return result;
  }
  localStorage.setItem("result", result);
})
startForLocal.innerHTML = localStorage.getItem("start");
endForLocal.innerHTML = localStorage.getItem("end");
resultForLocal.innerHTML = localStorage.getItem("result");
let newline = document.createElement("tr");
newline.innerHTML = `<th scope="row">2</th> <td>${localStorage.getItem("start")}</td><td>${localStorage.getItem("end")}</td><td>${localStorage.getItem("result")}</td>`; 

function viewResultField() {
  viewResult.style.display = "block";
};
calculate.addEventListener('click', viewResultField);// появляется поле резалт