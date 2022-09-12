const screen = (outPut) => console.log(outPut);
var btns = document.querySelectorAll("button");
var calc = document.querySelector("#curr-calc");
var answ = document.querySelector("#answer");
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
//link
var link = document.querySelector(".footer");
link.addEventListener("click", () => alert("Open github"));
