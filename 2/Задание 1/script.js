var num1 = parseInt(prompt('Введите первое число', ''));
var num2 = parseInt(prompt('Введите второе число', ''));

if (isNaN (num1) || isNaN (num2)){
  alert('Ошибка');
}
else if (num1 > num2) {
  alert('Первое число больше второго');
}
else if( num1 < num2){
  alert('Второе число больше первого');
}
else {
  alert('Числа равны');
}
