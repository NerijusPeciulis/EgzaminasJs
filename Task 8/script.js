/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(a, b) {
  this.a = a;
  this.b = b;

  this.sum = () => {
    const result = this.a + this.b;
    return result;
  };
  this.subtraction = () => {
    const result = this.a - this.b;
    return result;
  };
  this.multiplication = () => {
    const result = this.a * this.b;
    return result;
  };
  this.division = () => {
    const result = this.a / this.b;
    return result;
  };
}

const newCalculator = new Calculator(5, 5);

console.log(newCalculator.sum());
console.log(newCalculator.subtraction());
console.log(newCalculator.multiplication());
console.log(newCalculator.division());
