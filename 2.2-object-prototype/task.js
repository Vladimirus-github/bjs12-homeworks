"use strict";

// Задание №1

String.prototype;

String.prototype.isPalindrome = function () {
  const newString = this.toString().toLowerCase().replace(/ /g, "");
  // let newString = this.toString().toLowerCase().split(" ").join("");

  // const newStringReverse = `\u202E${newString}`;  ПОЧЕМУ НЕ работает ????

  const newStringReverse = [...newString].reduce((prev, next) => next + prev);
  // const newStringReverse = this.toString().toLowerCase().replace(/ /g, "").split("").reverse().join("");

  /*function stringReverse(str) {
    return str.split("").reverse().join("");
  }
  const newStringReverse = stringReverse(newString);
  let result = newString === newStringReverse ? true : false;
  */

  let result = newString === newStringReverse ? true : false;

  return result;
};

// Задание №2

function getAverageMark(marks) {
  let averageMark;
  if (marks.length === 0) {
    return 0;
  } else {
    return (averageMark = Math.round(
      marks.reduce((x, y) => x + y) / marks.length
    ));
    /* АЛЬТЕРНАТИВНЫЕ ДЛИННЫЕ РЕШЕНИЯ:

    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    return (averageMark = Math.round(sum / marks.length));

    ************** ***************

    let sum = 0;
    for (let value of marks) {
    sum += value;
    }
    return (averageMark = Math.round(sum / marks.length));

    */
  }
  //   return averageMark;
}

// Задача №3

function checkBirthday(birthday) {
  let now = Math.round(Date.now());
  birthday = Date.parse(birthday);

  let diff = now - birthday;

  const msInYear = 1000 * 60 * 60 * 24 * 365.25;
  let age = diff / msInYear;

  let verdict = age >= 18 ? true : false;

  //	Date.prototype.getUnixTimeStamp = function() {
  //		return Math.round(this.getTime() / 1000);    // Перевод милесекунд в секунды и округление до ближайшего целого...
  //	}
  //
  //	let now = new Date().getUnixTimeStamp();

  return verdict;
}
