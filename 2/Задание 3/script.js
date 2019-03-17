var num = 0 ;
var numNew = 0;

while (numNew !== null){
  numNew = prompt("Введите число", '');
  if (parseInt(numNew)){
    num += parseInt(numNew);
}
}
alert("Результат: " + num);
