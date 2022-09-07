var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var btn5 = document.querySelector("#btn5");
var btn6 = document.querySelector("#btn6");
var btn7 = document.querySelector("#btn7");
var btn8 = document.querySelector("#btn8");
var btn9 = document.querySelector("#btn9");
var btn10 = document.querySelector("#btn10");
var btn11 = document.querySelector("#btn11");
var btn12 = document.querySelector("#btn12");
var btn13 = document.querySelector("#btn13");
var btn14 = document.querySelector("#btn14");
var btn15 = document.querySelector("#btn15");
var btn16 = document.querySelector("#btn16");
var btn17 = document.querySelector("#btn17");
var btn18 = document.querySelector("#btn18");
var btn19 = document.querySelector("#btn19");
currCalculations = document.querySelector("#curr-calc");
displayAnswer = document.querySelector("#answer");
var string1 = [];
var string2 = [];
var answer;
//array of all buttons
const btnArr = [
  btn1,
  btn2,
  btn3,
  btn4,
  btn5,
  btn6,
  btn7,
  btn8,
  btn9,
  btn10,
  btn11,
  btn12,
  btn13,
  btn14,
  btn15,
  btn16,
  btn17,
  btn18,
  btn19,
];
//functions for operators
const clearAll = () => {
  currCalculations.textContent = " ";
  displayAnswer.textContent = " ";
  string1 = [];
  answer = 0;
};
const backSpace = () => {};
const percentage = () => {
  newNum;
};
const divide = () => {
  string1.push("/");
};
const multiply = () => {
  string1.push("*");
  currCalculations.textContent += string1.toString(",").replaceAll(",", "");
};
const subtract = () => {
  string1.push("-");
  currCalculations.textContent += string1.toString(",").replaceAll(",", "");
};
const add = () => {
  string1.push("+");
  currCalculations.textContent += string1.toString(",").replaceAll(",", "");
};
const giveAnswer = () => {
  console.log(string1);
};
const seven = () => {
  string1.push(7);
  currCalculations.textContent += string1.toString(",").replaceAll(",", "");
};

const eight = () => {
  string1.push(8);
  currCalculations.textContent += string1.toString(",").replaceAll(",", "");
};
const nine = () => {
  string1.push(9);
  currCalculations.textContent += string1.toString(",").replaceAll(",", "");
};
const four = () => {
  string1.push(4);
  currCalculations.textContent += string1.toString(",").replaceAll(",", "");
};
const five = () => {
  string1.push(5);
  currCalculations.textContent += string1.toString(",").replaceAll(",", "");
};
const six = () => {
  string1.push(6);
  currCalculations.textContent += string1.toString(",").replaceAll(",", "");
};
const one = () => {
  string1.push(1);
  currCalculations.textContent += string1.toString(",").replaceAll(",", "");
};
const two = () => {
  string1.push(2);
  currCalculations.textContent += 2;
};
const three = () => {
  string1.push(3);
  currCalculations.textContent += string1.toString(",").replaceAll(",", "");
};
const zero = () => {
  string1.push(0);
  currCalculations.textContent += string1.toString(",").replaceAll(",", "");
};
const dot = () => {
  string1.push(".");
  currCalculations.textContent += string1.toString(",").replaceAll(",", "");
};
//eventlisteners for operators
btnArr[0].addEventListener("click", clearAll);
btnArr[1].addEventListener("click", backSpace);
btnArr[2].addEventListener("click", percentage);
btnArr[3].addEventListener("click", divide);
btnArr[4].addEventListener("click", seven);
btnArr[5].addEventListener("click", eight);
btnArr[6].addEventListener("click", nine);
btnArr[7].addEventListener("click", multiply);
btnArr[8].addEventListener("click", four);
btnArr[9].addEventListener("click", five);
btnArr[10].addEventListener("click", six);
btnArr[11].addEventListener("click", subtract);
btnArr[12].addEventListener("click", one);
btnArr[13].addEventListener("click", two);
btnArr[14].addEventListener("click", three);
btnArr[15].addEventListener("click", add);
btnArr[16].addEventListener("click", zero);
btnArr[17].addEventListener("click", dot);
btnArr[18].addEventListener("click", giveAnswer);

////Computation Logic
