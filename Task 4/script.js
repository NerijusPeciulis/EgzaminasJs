/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

fetch(ENDPOINT)
  .then((response) => response.json())
  .then((cars) => {
    cars.forEach((toDo) => {
      console.log(toDo);
      const card = createCard(toDo);
      document.querySelector("#output").append(card);
    });
  });
function createCard(toDo) {
  const card = document.createElement("div");
  const brand = document.createElement("h2");
  const models = document.createElement("p");

  brand.textContent = toDo.brand;
  models.textContent = toDo.models;

  card.append(brand, models);

  card.setAttribute("class", "card");

  return card;
}
