'use strict';

let myMoney = parseInt(prompt('Введите сумму которую вы хотите внести на счет:'));

function getSquare(money) { 
  if (money === "") {
    alert ('Вы нечего не ввели');
    return; 
  }
  if (money === null) {
    alert('Вы нажали отмена');
    return; 
  }
  money = Number(money);
  if (isNaN(money)) {
    alert('Вы ввели не коректное значение: ' + money); 
    return;
  }
  return money; // функция дальше
}

let num = getSquare(myMoney);

/**
 * функция возвращения падежа рубля
 * @param {nuber} num кол-во рублей ввиде числа 
 * @returns {string} слово "рубль" в правильном падеже
 */

function getCase(num) {
  let beforLastDigit = getDigitBeforLastDigit(num);
  if (beforLastDigit == 1) {
    return "рублей";
  } 
  num = String(num);
  let lastNumber = num.charAt(num.length - 1);
  switch (lastNumber){
    case 6:
    case 0:
    case 5:
    case 7:
    case 8:
    case 9:
      return "рублей";
    case 1:
      return "рубль";
    case 2:
    case 3:
    case 4:
      return "рубля";
  }
}

/**
 * Функция возвращает предпоследнюю цифру, если она есть, иначе NULL
 * @param {number} num 
 * @returns {(number|null)}
 */

function getDigitBeforLastDigit(num) {
  num = String(num);
  let digit = num.charAt(num.length - 2);
  if (digit !== "") {
    return Number(digit);
  }
  return null;
}

alert(`Ваша сумма ${myMoney} ${getCase(myMoney)} успешно зачисленна.`);