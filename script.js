const screen = document.querySelector(".calculator-screen");
let result1;
let result2;
let start = true;

function btnCalculator(n) {
  if ((n >= 0 && n <= 9) || n == ".") {
    if (start) {
      screen.value += n;
    } else {
      screen.value = "";
      screen.value += n;
      start = true;
    }
  } else if (n == "+" || n == "-" || n == "/" || n == "*" || n == "%") {
    result1 = screen.value + " " + n + " ";
    start = false;
  } else if (n == "=") {
    result1 += screen.value;
    result2 = eval(result1);
    screen.value = result2;
    result1 = "";
    result2 = "";
  } else if (n == "CE") {
    screen.value = "";
  } else if (n == "C") {
    screen.value = "";
    result1 = "";
  } else if (n == "backspace") {
    let str = screen.value;
    str = str.substring(0, str.length - 1);
    screen.value = str;
  }
}
