var year1 = parseInt(prompt("Введите начальный год", ""));
var year2 = parseInt(prompt("Ввведите конечный год", ""));

if (year1 > year2){
  alert('Ошибка');
}
for (var i = year1; i <= year2; i++) {
  if ( i % 4 !== 0 || i % 100 == 0 && i % 400 !== 0 ) {
    continue;
  }
  console.log(i)
}
