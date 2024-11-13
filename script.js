function cm2ToM2(cm2) {
  console.log(cm2 / 1000);
}
cm2ToM2(1000);
cm2ToM2(3000);

function kvadratenKoren(broj) {
  console.log(Math.sqrt(broj));
}
kvadratenKoren(16);

function hoursToMinutes(h) {
  return h * 60;
}
console.log(hoursToMinutes(3));

var book1 = {
  bookName: "Crime and Punishment",
  yearOfPublishing: "December 1866",
  Author: "Fyodor Dostoevsky",
  stock: 5,
  print: function () {
    console.log(
      `Knigata so ime ${this.bookName}, datum na izdavanje ${this.yearOfPublishing} i avtor ${this.Author}.`
    );
  },
};
book1.print();

var book2 = {
  bookName: "Uncle Vanya",
  yearOfPublishing: 1898,
  Author: "Anton Chekhov",
  stock: 0,
  print: function () {
    console.log(
      `Knigata so ime ${this.bookName}, datum na izdavanje ${this.yearOfPublishing} i avtor ${this.Author}.`
    );
  },
};
book2.print();

var book3 = {
  bookName: "Romeo and Juliet",
  yearOfPublishing: 1597,
  Author: "William Shakespeare",
  stock: 3, 
  print: function () {
    console.log(
      `Knigata so ime ${this.bookName}, datum na izdavanje ${this.yearOfPublishing} i avtor ${this.Author}.`
    );
  },
};
book3.print();

const knigi = ["Crime and Punishment", "Uncle Vanya", "Romeo and Juliet"];
console.log(knigi)

for (var i = 0; i < knigi.length; i++) {
    console.log(`Knigata so reden broj ${i + 1} e: ${knigi[i]}`)
  
}






const ime = [ "Nade", "Naum", "Nikola", "Nina"]
const poeni = [90,46,70,80]

for (var i = 0; i < poeni.length; i++) {
   if  (poeni[i] < 70) {
    console.log(`Ucenikot ${ime[i]} ne go polozi ispitot, bidejki ima ${poeni[i]} od potrebni 70.`)
   }
  else {
      console.log(`Ucenikot ${ime[i]} go polozi ispitot, bidejki ima ${poeni[i]} od potrebni 70.`)
  } 
}





