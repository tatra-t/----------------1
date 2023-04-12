'use strict';
const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;
const HOUR_IN_MILLISECONDS = 60 * 60 * 1000;
const MIN_IN_MILLISECONDS = 60 * 1000;
const SEC_IN_MILLISECONDS = 1000;
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
let dateEnd = document.querySelector(".dateEnd");
let persetWeek = document.querySelector('#week');
let persetMonth = document.querySelector("#month");
let persetNone = document.querySelector('#none');
let clear = document.querySelector('.clear');
let dimension = inputDimension.value;
let result;


inputStart.addEventListener("change", () => {
  inputEnd.disabled = false;
})
inputEnd.addEventListener("change", () => {
  if (Date.parse(inputEnd.value) < Date.parse(inputStart.value)) {
    calculate.disabled = true;
    dateEnd.style.display = "block";
  } else {
    calculate.disabled = false;
    dateEnd.style.display = "none";
  }
})
persetWeek.addEventListener("change", () => {
  let d = new Date(inputStart.value);
  let inputEndTemp = new Date(d.setDate(d.getDate() + 7));
  inputEnd.value = formatDate(inputEndTemp);
  console.log("inputEnd", inputEndTemp)
})
persetMonth.addEventListener("change", () => {
  let d = new Date(inputStart.value);
  let inputEndTemp = new Date(d.setMonth(d.getMonth() + 1));
  inputEnd.value = formatDate(inputEndTemp);
  console.log(inputEnd.value);
})
persetNone.addEventListener("change", () => {
  inputEnd.value = "";
})

if (inputStart.value === "" || inputEnd.value === "") {
  calculate.disabled = true;
}
clear.addEventListener('click', () => {
  inputStart.value ="";
  inputEnd.value = "";
  inputEnd.disabled = true;
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
        result = `${resultMillisec / SEC_IN_MILLISECONDS} SECONDS`;
        break;
      case "minuts":
        result = `${resultMillisec / MIN_IN_MILLISECONDS} MINUTS`;
        break;
      case "hours":
        result = `${resultMillisec / HOUR_IN_MILLISECONDS} HOURS`;
        break;
      case "days":
        result = `${resultMillisec / DAY_IN_MILLISECONDS} DAYS`;
        break;
    }
    viewResult.innerHTML = `RESULT: ${result}`;
  }
  if (selectedDays === "weekends") {
    let resultDay = resultMillisec / 86400000;
    let day = 0;
    let currentlyDay;
    let getday = new Date();
    for (let i = 0; i <= resultDay; i++) {
      getday.setTime(start + 86400000 * i);
      currentlyDay = getday.getDay();
      if (currentlyDay === 0 || currentlyDay === 6) {
        day++;
      }
    }
    convertTime(day);
  }
  if (selectedDays === "weekdays") {
    let resultDay = resultMillisec / 86400000;
    let day = 0;
    let currentlyDay;
    let getday = new Date();
    for (let i = 0; i <= resultDay; i++) {
      getday.setTime(start + 86400000 * i);
      currentlyDay = getday.getDay();
      if (currentlyDay === 1 || currentlyDay === 2 || currentlyDay === 3|| currentlyDay === 4|| currentlyDay === 5) {
        day++;
      }
    }
    convertTime(day);
  }
  localStorage.setItem("result", result);
})
startForLocal.innerHTML = localStorage.getItem("start");
endForLocal.innerHTML = localStorage.getItem("end");
resultForLocal.innerHTML = localStorage.getItem("result");
let newline = document.createElement("tr");
newline.innerHTML = `<th scope="row"></th> <td>${localStorage.getItem("start")}</td><td>${localStorage.getItem("end")}</td><td>${localStorage.getItem("result")}</td>`;
console.log(newline);
function viewResultField() {
  viewResult.style.display = "block";
};
calculate.addEventListener('click', viewResultField);// появляется поле резалт

function formatDate(inputEndTemp) {
  const date = new Date(inputEndTemp);
  let DD = date.getDate();
   if (DD <10) { 
    DD = "0"+ DD;
  }
  let MO = date.getMonth() + 1;
  if (MO <10) { 
    MO = "0"+ MO;
  }
  let YYYY= date.getFullYear();
  let inputEnd = YYYY + "-" + MO + "-" + DD ;
  return inputEnd;
}

function convertTime(day) {
  console.log(day);
  switch (inputDimension.value) {
    
    case "seconds":
      result = `${day * 86400} SECONDS`;
      break;
    case "minuts":
      result = `${day * 1440} MINUTS`;
      break;
    case "hours":
      result = `${day * 24} HOURS`;
      break;
    case "days":
      result = `${day} DAYS`;
      break;
  }
  viewResult.innerHTML = `RESULT: ${result}`;
  localStorage.setItem("result", result);
  return result;
}