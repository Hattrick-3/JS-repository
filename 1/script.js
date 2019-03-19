let myName = prompt('Введите Ваше имя');
let mySurname = prompt('Введите Вашу фамилию');
let myBirthYear = prompt('Введите Ваш год рождения');

const CURRENT_YEAR = 2019;
let age = CURRENT_YEAR - myBirthYear;

if (age < 20) {
  alert('Привет, ' + myName + ' ' + mySurname + '!');
}
else if (age >= 20 && age < 40) {
  alert('Добрый день, ' + myName + ' ' + mySurname + '!');
}
else {
  alert('Здравствуйте, ' + myName + ' ' + mySurname + '!');
}
