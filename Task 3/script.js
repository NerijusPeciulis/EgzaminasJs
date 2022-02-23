/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const button = document.getElementById("btn");
button.addEventListener("click", () => {
  fetch("https://api.github.com/users")
    .then((response) => response.json())
    .then((createCards) => {
      createCards.forEach((information) => {
        console.log(information);
        const card = createCard(information);
        document.querySelector("#output").append(card);
      });
    });

  function createCard(information) {
    const card = document.createElement("div");
    const login = document.createElement("h1");
    const avatar_url = document.createElement("p");
    const removeMesage = document.querySelector("#message");

    removeMesage.textContent = "";
    login.textContent = information.login;
    avatar_url.textContent = information.avatar_url;

    card.append(login, avatar_url);
    card.setAttribute("class", "card");

    return card;
  }
});
