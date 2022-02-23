/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const clickButton = document.querySelector("#btn__element");

const divState = document.querySelector("#btn__state");

let clicks = 0;

clickButton.addEventListener("click", () => {
  clicks++;

  divState.innerText = clicks;
});
