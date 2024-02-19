const inputNumber1 = document.getElementById("number1");
const inputNumber2 = document.getElementById("number2");
const resultBox = document.getElementById("result-box");


document.getElementById("btn-plus").addEventListener("click", () => realizarOperacao("+"));
document.getElementById("btn-times").addEventListener("click", () => realizarOperacao("*"));
document.getElementById("btn-clear").addEventListener("click", limparCampos);

inputNumber1.classList.remove("input-error");
inputNumber2.classList.remove("input-error");

function realizarOperacao(op) {
    const n1 = parseFloat(inputNumber1.value);
    const n2 = parseFloat(inputNumber2.value);

  if(isNumber(n1)&& isNumber(n2)){
    const result = (op == "+") ? n1 + n2 : n1 * n2;
    resultBox.innerText = result; 

    inputNumber1.classList.remove("input-error");
    inputNumber2.classList.remove("input-error");
  }
  else{
    inputNumber1.classList.toggle("input-error", !isNumber(n1));
    inputNumber2.classList.toggle("input-error", !isNumber(n2));
  }
  }

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

function limparCampos() {
    inputNumber1.value = "";
    inputNumber2.value = "";
    resultBox.innerText = "0";
    inputNumber1.classList.remove("input-error");
    inputNumber2.classList.remove("input-error");
}
