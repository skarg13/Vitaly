'use strict';

let symbols = "1234567890!@#$%^&*()_+-=[]{}|/;':,.<>?qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
let password = "";

/**
 * Функция возвращает случайное целое число между min и max
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 * @see https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Examples
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generate(passLenght) {
  let symbolPosition = getRandomInt(0, 91);
  password += symbols.charAt(symbolPosition);
  passLenght--;
  if (passLenght != 0) {
    generate(passLenght);
  }
}

function askPassLenght() {
  return parseInt(prompt('Введите длину пароля'));
}

generate(askPassLenght());
alert(`Ваш пароль: ${password}`)