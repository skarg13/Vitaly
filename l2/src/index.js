'use strict';

let myMoney = prompt('Введите сумму которую вы хотите внести на счет:');

function getSquare(money) { // вместо throw new Error можно сделать alert
  if (money === "") {
    throw new Error('Вы нечего не ввели'); // выводит ошибку в консоль
  }
  if (money === null) {
    throw new Error ('Вы нажали отмена'); // выводит ошибку в консоль
  }
  money = Number(money);
  if (isNaN(money)) {
    throw new Error('Вы ввели не коректное значение: ' + money); // выводит ошибку в консоль
  }
  return money; // функция дальше
}

alert(getSquare(myMoney));