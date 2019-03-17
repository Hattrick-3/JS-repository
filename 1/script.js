var myName = prompt('Введите Ваше имя');
var mySurname = prompt('Введите Вашу фамилию');
var myBirthYear = prompt('Введите Ваш год рождения');

var currentYear = 2019;
var age = currentYear - myBirthYear;

if (age < 20) {
  alert('Привет, ' + myName + ' ' + mySurname + '!');
}
else if(age >= 20 && age < 40){
  alert('Добрый день, ' + myName + ' ' + mySurname + '!');
}
else {
  alert('Здравствуйте, ' + myName + ' ' + mySurname + '!');
}
