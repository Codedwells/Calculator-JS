const screen = (outPut) => console.log(outPut);
var btns = document.querySelectorAll("button");
var calc = document.querySelector(".curr-calc");
var answ = document.querySelector(".answer");
screen(answ);
//screen(calc);
////Computation Logic
btns.forEach((curr) => {
  curr.onclick = () => {
    if (curr.id == "equal" && calc.innerHTML == "") {
      answ.innerHTML = "empty!!!";
      setTimeout(() => {
        answ.innerHTML = 0;
        calc.innerHTML == "";
      });
    } else if (curr.id == "equal" && calc.innerHTML !== "") {
      answ.innerHTML = eval(calc.innerHTML);
      calc.innerHTML = answ.innerHTML;
    } else if (curr.id == "c") {
      calc.innerHTML = "";
      answ.innerHTML = "";
    } else if (curr.id == "del") {
      let string = calc.innerHTML.toString();
      calc.innerHTML = string.substring(0, calc.innerHTML.length - 1);
    } else {
      curr.id == "zero"
        ? (calc.innerHTML += 0)
        : curr.id == "dot"
        ? (calc.innerHTML += ".")
        : curr.id == "divide"
        ? (calc.innerHTML += "/")
        : (calc.innerHTML += curr.id);
    }
  };
});
//see it on github
var link = document.querySelector(".footer");
var main = document.querySelector(".main-container");
var shift = document.querySelector(".shift");
var container = document.querySelector("#container");
var outScreen = document.querySelector(".output-screen");
var container = document.querySelector("#container");
link.addEventListener("click", () => alert("Open github"));
//dark and light mode functionality

screen(shift);
shift.addEventListener("click", () => {
  shift.classList.toggle("dark");
  main.classList.toggle("dark");
  container.classList.toggle("light");
  outScreen.classList.toggle("smoke");
  calc.classList.toggle("dark-txt");
  answ.classList.toggle("dark-txt");
});
