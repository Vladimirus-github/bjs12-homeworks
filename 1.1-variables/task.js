/*
	Кратко о работе с функциями:
	1) Значения в скобках - это аргументы, которые мы получаем в момент вызова функции. Их и надо присваивать требуемым в заданиях переменным.
	2) После ключевого слова return вместо комментария необходимо написать переменную либо выражение с ответом.
	3) console.log() прописывать не обязательно, т.к. команда return уже означает вывод результата работы функции.
 */

// Задание №1
function averageMark(a, g, p) {
  let algebra = a;
  let geography = g;
  let physics = p;

  let average = (algebra + geography + physics) / 3;

  return average.toFixed(2);
}

// ниже см. альтернативное решение.

// Задание №2
function sayHello(userName) {
  let myName = userName;

  let message = `Hello World! Меня зовут ${userName}.`;

  return message;
}

// Задание №3
function calculateFormula() {
  let x = 2;
  let y = 22;
  let z = 0;

  let result = x * y + 5 * z + x - 1;
  // let result = (x * (y + 5) * (z + x - 1));
  // let result = (x * y + 5) * (z + (x - 1));

  return result;
}
/*
// Альтернативное решение Задания №1, если будет больше предметов:

let jornalPerson = {
	algebra: 5,
	geography: 4,
	physics: 5,
	paint: 5,
	music: 5,
	bilogy: 4,
  };
  
  function averageMark(obj) {
	let array = [];
  
	function createArr(obj) {
	  for (let i in obj) {
		array.push(obj[i]);
	  }
	  return array;
	}
  
	createArr(obj);
  
	function calcSumAndCount(arr) {
	  let count = 0;
	  let sum = 0;
  
	  for (let i = 0; i < arr.length; i++) {
		count += 1;
		sum += arr[i];
	  }
  
	  return { allSum: sum, allCount: count };
	}
  
	let sumAndCount = calcSumAndCount(array);
	
	let average = sumAndCount.allSum / sumAndCount.allCount;
  
	return average.toFixed(2);
  }
  
  console.log(`Средний бал ученика: ${averageMark(jornalPerson)}`);

  */
