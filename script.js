let bill = document.querySelector("#bill");
let tipOne = document.querySelector("#tip1");
let tipTwo = document.querySelector("#tip2");
let tipThree = document.querySelector("#tip3");
let tipFour = document.querySelector("#tip4");
let tipFive = document.querySelector("#tip5");
let tipPercent = document.querySelector("#tip");
let errorOne = document.querySelector("small");
let tipAmt = document.querySelector("#tipAmount");
let total = document.querySelector("#total");
let reset = document.querySelector('#reset')
let percent1 = 0.05;
percent2 = 0.1;
percent3 = 0.15;
percent4 = 0.25;
percent5 = 0.5;
let percentUnknown;
let people = document.querySelector("#no");

tipOne.addEventListener("click", () => {
  if (
    isNaN(bill.value) ||
    bill.value == "" ||
    parseFloat(
      bill.value === 0 ||
        isNaN(people.value) ||
        people.value == "" ||
        parseFloat(people.value) === 0
    )
  ) {
    errorOne.style.visibility = "visible";
    document.getElementById("error").textContent = "input valid number";
  } else if (bill.value > 0 && people.value > 0) {
    tipAmt.textContent =
      "$" + ((bill.value / people.value) * percent1).toFixed(2);
    total.textContent =
      "$" +
      (
        bill.value / people.value +
        (bill.value / people.value) * percent1
      ).toFixed(2);
    document.getElementById("error").textContent = "";
    errorOne.style.visibility = "hidden";
  } else {
    errorOne.style.visibility = "visible";
    document.getElementById("error").textContent = "input valid number";
  }
  bill.value = "";
  people.value = "";
});

tipTwo.addEventListener("click", () => {
  if (
    isNaN(bill.value) ||
    bill.value == "" ||
    parseFloat(
      bill.value === 0 ||
        isNaN(people.value) ||
        people.value == "" ||
        parseFloat(people.value) === 0
    )
  ) {
    errorOne.style.visibility = "visible";
    document.getElementById("error").textContent = "input valid number";
  } else if (bill.value > 0 && people.value > 0) {
    tipAmt.textContent =
      "$" + ((bill.value / people.value) * percent2).toFixed(2);
    total.textContent =
      "$" +
      (
        bill.value / people.value +
        (bill.value / people.value) * percent2
      ).toFixed(2);
    document.getElementById("error").textContent = "";
    errorOne.style.visibility = "hidden";
  } else {
    errorOne.style.visibility = "visible";
    document.getElementById("error").textContent = "input valid number";
  }
  bill.value = "";
  people.value = "";
});

tipThree.addEventListener("click", () => {
  if (
    isNaN(bill.value) ||
    bill.value == "" ||
    parseFloat(
      bill.value === 0 ||
        isNaN(people.value) ||
        people.value == "" ||
        parseFloat(people.value) === 0
    )
  ) {
    errorOne.style.visibility = "visible";
    document.getElementById("error").textContent = "input valid number";
  } else if (bill.value > 0 && people.value > 0) {
    tipAmt.textContent =
      "$" + ((bill.value / people.value) * percent3).toFixed(2);
    total.textContent =
      "$" +
      (
        bill.value / people.value +
        (bill.value / people.value) * percent3
      ).toFixed(2);
    document.getElementById("error").textContent = "";
    errorOne.style.visibility = "hidden";
  } else {
    errorOne.style.visibility = "visible";
    document.getElementById("error").textContent = "input valid number";
  }
  bill.value = "";
  people.value = "";
});

tipFour.addEventListener("click", () => {
  if (
    isNaN(bill.value) ||
    bill.value == "" ||
    parseFloat(
      bill.value === 0 ||
        isNaN(people.value) ||
        people.value == "" ||
        parseFloat(people.value) === 0
    )
  ) {
    errorOne.style.visibility = "visible";
    document.getElementById("error").textContent = "input valid number";
  } else if (bill.value > 0 && people.value > 0) {
    tipAmt.textContent =
      "$" + ((bill.value / people.value) * percent4).toFixed(2);
    total.textContent =
      "$" +
      (
        bill.value / people.value +
        (bill.value / people.value) * percent4
      ).toFixed(2);
    document.getElementById("error").textContent = "";
    errorOne.style.visibility = "hidden";
  } else {
    errorOne.style.visibility = "visible";
    document.getElementById("error").textContent = "input valid number";
  }
  bill.value = "";
  people.value = "";
});

tipFive.addEventListener("click", () => {
  if (
    isNaN(bill.value) ||
    bill.value == "" ||
    parseFloat(
      bill.value === 0 ||
        isNaN(people.value) ||
        people.value == "" ||
        parseFloat(people.value) === 0
    )
  ) {
    errorOne.style.visibility = "visible";
    document.getElementById("error").textContent = "input valid number";
  } else if (bill.value > 0 && people.value > 0) {
    tipAmt.textContent =
      "$" + ((bill.value / people.value) * percent5).toFixed(2);
    total.textContent =
      "$" +
      (
        bill.value / people.value +
        (bill.value / people.value) * percent5
      ).toFixed(2);
    document.getElementById("error").textContent = "";
    errorOne.style.visibility = "hidden";
  } else {
    errorOne.style.visibility = "visible";
    document.getElementById("error").textContent = "input valid number";
  }
  bill.value = "";
  people.value = "";
});

tipPercent.addEventListener('input', ()=>{
   if( tipPercent.value == '' || tipPercent.value== 0 ){
    errorOne.style.visibility = 'visible'
   }else if(tipPercent.value > 0 && people.value>0 ){
    percentUnknown = parseFloat(tipPercent.value) / 100
    tipAmt.textContent = '$' + (bill.value/people.value * percentUnknown).toFixed(2)
    total.textContent = '$'+ (bill.value/people.value  + bill.value/people.value * tipPercent.value/100).toFixed(2)
    errorOne.style.visibility = 'hidden'
    document.getElementById("error").textContent = ""
   }
})

reset.addEventListener('click', ()=>{
    tipAmt.textContent = '$0.00'
    total.textContent = '$0.00'
    bill.value = "";
    people.value = "";
    tipPercent.value = '';
})


