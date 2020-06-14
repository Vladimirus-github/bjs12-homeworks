"use strict";

function getResult(a, b, c) {
  let x = [];
  let x1, x2;

  // ax^2 + bx - c = 0, причем a != 0.
  if (a === 0) {
    return (x = "Значение а НЕ может быть равной 0");
  }

  let D = Math.pow(b, 2) - 4 * a * c;

  if (D > 0) {
    x.push((x1 = (-b + Math.sqrt(D)) / (2 * a)));
    x.push((x2 = (-b - Math.sqrt(D)) / (2 * a)));
  } else if (D === 0) {
    x.push((x1 = -(b / (2 * a))));
  }
  /*
  D > 0:  a = 1, b = −8, c = 12;
  D = 0:  a = 1, b = -6, c = 9;
  D < 0:  a = 5, b = 3, c = 7;
  */
  return x;
}

function getAverageMark(marks) {
  let averageMark;

  if (!marks.length) {
    averageMark = 0;
    // averageMark = "Оценок нетути - это очень странно! Родителей в школу!";
  } else if (marks.length > 5) {
    marks.splice(5);
    // marks = marks.slice(0, 5);
    console.log(
      `Количество оценок больше 5. В расчет пойдут только ПЕРВЫЕ ПЯТЬ отметок: ${marks}`
    );
    averageMark = average(marks);
  } else if (marks.length <= 5) {
    averageMark = average(marks);
  }

  function average(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum / arr.length;
  }

  return averageMark;
}

function askDrink(name, dateOfBirthday) {
  let result;

  const age = new Date().getFullYear() - dateOfBirthday.getFullYear();

  if (age > 18) {
    result = `Не желаете ли олд-фэшн, ${name}?`;
  } else {
    result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  }

  return result;
}
