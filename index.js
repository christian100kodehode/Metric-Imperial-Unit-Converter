let num = 25;

document.getElementById("num-el").textContent = num;
let numEl = document.getElementById("num-el");

let numresultM = document.getElementById("resultat-m");
let numresultL = document.getElementById("resultat-l");
let numresultK = document.getElementById("resultat-k");

function usrInput() {
  let userPrompt = prompt("Enter a new number");
  if (userPrompt != null) {
    num = userPrompt;
    numEl.textContent = userPrompt;

    converter();
  }
}

function converter() {
  let resultM = num * 3.2808399;
  let resultF = num / 3.2808399;
  numresultM.textContent = num + " meters = " + resultM.toFixed(3) + " feet " + " | " + num + " feet= " + resultF.toFixed(3) + " meters";

  let resultL = num / 4.546092;
  let resultG = num * 4.546092;
  numresultL.textContent = num + " liters = " + resultL.toFixed(3) + " gallon " + " | " + num + " gallon= " + resultG.toFixed(3) + " liters";

  let resultK = num * 2.20462262;
  let resultP = num / 2.20462262;
  numresultK.textContent = num + " kilos = " + resultK.toFixed(3) + " pound " + " | " + num + " pound= " + resultP.toFixed(3) + " kilos";
}
