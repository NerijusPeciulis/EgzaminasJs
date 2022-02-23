/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */
class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;

    this.movieProperties = () => {
      return ` Title: ${this.title} 
      Director: ${this.director} 
      Budget: ${this.budget}`;
    };
  }
}

const movieBudget = new Movie("JsLabirintai", "Nerijus", Number("100000000"));

console.log(movieBudget.movieProperties());

// 2

this.wasExpensive = () => {
  if (movieBudget.budget >= Number(100000000)) {
    return "True";
  } else {
    return "False";
  }
};

console.log(wasExpensive());
