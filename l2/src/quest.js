'use strict';

const riddle = parseInt(Math.random() * 100);

function guess(num) {
  let answer = parseInt(prompt('Угадайте число от 0 до 100'));
  if (answer > num) {
    alert("Слишком большое число");
  } else if (answer < num) {
    alert('Слишком маленькое число');
  } else if (answer == num) {
    alert('Вы угадали, число: ' + num);
    return;
  } else {
    alert('Попробуйте еще раз!');
  }
  guess(num);
}

guess(riddle);