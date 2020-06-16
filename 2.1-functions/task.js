"use strict";
console.log(
  `\n******************* Задача №1.Корни квадратного уравнения *******************\n `
);

function getSolutions(a, b, c) {
  if (a === 0) {
    return (x = "Значение а - НЕ может быть равно 0");
  }

  let roots = [];

  let D = Math.pow(b, 2) - 4 * a * c;

  if (D < 0) {
    return { D, roots: [] };
  } else if (D === 0) {
    roots.push(-(b / (2 * a)));
    return { D, roots };
  } else if (D > 0) {
    roots.push((-b + Math.sqrt(D)) / (2 * a));
    roots.push((-b - Math.sqrt(D)) / (2 * a));
    return { D, roots };
  }
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);

  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);

  if (result.D < 0) {
    console.log(`Уравнение не имеет вещественных корней`);
  } else if (result.D === 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
  } else if (result.D > 0) {
    console.log(
      `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`
    );
  }
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

console.log(
  "\n******************* Задача №2. Журнал успеваемости *******************\n "
);

let data = {
  algebra: [2, 4, 5, 2, 3, 4],
  geometry: [2, 4, 5],
  russian: [3, 3, 4, 5],
  physics: [5, 5],
  music: [2, 2, 6],
  english: [4, 4, 3],
  poetry: [5, 3, 4],
  chemistry: [2],
  french: [4, 4],
};

function getAverageScore(obj) {
  let objectWithAverage = makeNewObject(obj);

  objectWithAverage.average = getAverageMark(Object.values(objectWithAverage));

  return objectWithAverage;
}

function getAverageMark(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr.reduce((x, y) => x + y) / arr.length;
    //   return +(arr.reduce((x, y) => x + y)).toFixed(3);
  }
}
// Вспомогательная функция:
function makeNewObject(objNew) {
  let object = {};
  for (let i in objNew) {
    object[i] = getAverageMark(objNew[i]);
  }
  return object;
}
console.log(getAverageScore(data));

console.log(
  "\n******************* Задача №3. Расшифровка данных *******************\n "
);

const secretData = {
  aaa: 0,
  bbb: 1,
};

function getDecodedValue(secret) {
  return secret === 0 ? "Родриго" : "Эмильо";
}

function getPersonData(obj) {
  let discriptSecretData = {};

  discriptSecretData.firstName = getDecodedValue(obj.aaa);
  discriptSecretData.lastName = getDecodedValue(obj.bbb);

  //console.log(discriptSecretData);
  return discriptSecretData;
}

getPersonData(secretData);

console.log(getPersonData(secretData));
