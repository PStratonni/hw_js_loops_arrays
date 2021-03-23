// Первое задание
// let numer;
// const m = 10;
// while (true) {
//   numer = +prompt("Введите число");
//   if (numer < m) {
//     alert("Меньше");
//   } else if (numer > m) {
//     alert("Больше");
//   } else {
//     alert("Вы угадали!");
//     break;
//   }
// }



//Второе задание
// const multiplicationTable = [
//   ["", "", "", "", "", "", "", "", ""],
//   ["", "", "", "", "", "", "", "", ""],
//   ["", "", "", "", "", "", "", "", ""],
//   ["", "", "", "", "", "", "", "", ""],
//   ["", "", "", "", "", "", "", "", ""],
//   ["", "", "", "", "", "", "", "", ""],
//   ["", "", "", "", "", "", "", "", ""],
//   ["", "", "", "", "", "", "", "", ""],
//   ["", "", "", "", "", "", "", "", ""],
//   ["", "", "", "", "", "", "", "", ""],
// ];
// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     multiplicationTable[i][j] = (i + 1) * (j + 1);
//   }
// }
// console.table(multiplicationTable);



//Третье задание
// const teams = ["Заря", "Буревестник", "Вымпел", "Ураган"];
// const resultTable = [
//   ["", "", "", "", ""],
//   ["", "", "", "", ""],
//   ["", "", "", "", ""],
//   ["", "", "", "", ""],
//   ["", "", "", "", ""],
// ];
// for (let i = 0; i < teams.length + 1; i++) {
//   for (let j = 0; j < teams.length + 1; j++) {
//     if (i === 0 && j === 0) {
//       resultTable[i][j] = "X";
//       continue;
//     }
//     if (i === 0) {
//       resultTable[i][j] =resultTable[j][i] =teams[j - 1];
//     }
//     if (i === j) {
//       resultTable[i][j] = "X";
//     }
//     if(i>0&&j>i){resultTable[i][j]=resultTable[j][i]=`${Math.floor(Math.random()*Math.floor(3))} - ${Math.floor(Math.random()*Math.floor(3))}`}
//   }
// }
// console.table(resultTable);
