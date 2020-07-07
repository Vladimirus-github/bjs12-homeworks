"use strict";

// *****    Задача №1. Печатное издание    *****

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    return (this.state *= 1.5);
  }

  set state(state) {
    if (state < 0) {
      return (this._state = 0);
    } else if (state > 100) {
      return (this._state = 100);
    } else {
      return (this._state = state);
    }
  }

  get state() {
    return this._state;
  }
}
class Magazine extends PrintEditionItem {
  constructor(...parameters) {
    super(...parameters);
    this.type = "magazine";
  }
}
class Book extends PrintEditionItem {
  constructor(author, ...parameters) {
    super(...parameters);
    this.author = author;
    this.type = "book";
  }
}
class NovelBook extends Book {
  constructor(...parameters) {
    super(...parameters);
    this.type = "novel";
  }
}
class FantasticBook extends Book {
  constructor(...parameters) {
    super(...parameters);
    this.type = "fantastic";
  }
}
class DetectiveBook extends Book {
  constructor(...parameters) {
    super(...parameters);
    this.type = "detective";
  }
}

// *****    Задача №2. Библиотека    *****

class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      return this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let key in this.books) {
      if (this.books[key][type] === value) {
        // здесь происходит обращение к ЗНАЧЕНИЮ ключа объекта - books[key][type] и сравнивается с запрашиваемым значением
        return this.books[key];
      }
    }
    return null;

    // for (let i = 0; i < this.books.length; i++) {
    //   if (this.books[i][type] === value) {       //    ---//---  - books[i][key]
    //     return this.books[i];
    //   }
    // }
    // return null;
  }

  giveBookByName(bookName) {
    for (let key in this.books) {
      if (this.books[key].name === bookName) {
        return this.books.splice(key, 1)[0];
      }
    }
    return null;

    /* for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        return this.books.splice(i, 1)[0];    
        /* в этой записи мы делаем следующее: 
        return this.books.splice(i, 1) - вырезается и возвращается массив с объектом внутри...
        return this.books.splice(i, 1)[0]; - вырезается и возвращается 0 индекс массива, а в этом индексе лежит наш искомый объект
        
      }
    } */
  }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
/*
Последовательные проверки: 
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"
console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
const readBook = new FantasticBook("Михаил Ефремов", "Час Быка", 1919, 576);
library.giveBookByName("Час Быка");
readBook.state = 29;
readBook.fix();
library.addBook(readBook);
console.log(library.books);
*/

// *****    Задача №3. Школьный журнал    *****

class StudentLog {
  constructor(name) {
    this.name = name;
    this.scoolSubject = {};
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    // Проверка на предел для оценки от 1 до 5 и на число:
    if (isNaN(grade) || grade < 0 || grade > 6) {
      console.log(
        `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`
      );
      return 0;
    } else {
      // Проверка на существование свойства в объекте:
      if (!this.scoolSubject.hasOwnProperty(subject)) {
        // если нет, то -> создаем свойство и присваиваем ему значение
        this.scoolSubject[subject] = [grade];
      } else {
        // Если такое свойство есть, то просто пушим в него числовое значение...
        this.scoolSubject[subject].push(grade);
      }
    }
    // Возвращаем кол-во оценок в предмете
    return this.scoolSubject[subject].length;
  }

  getAverageBySubject(subject) {
    if (!this.scoolSubject.hasOwnProperty(subject)) {
      return 0;
    } else {
      for (let i in this.scoolSubject[subject]) {
        return (
          this.scoolSubject[subject].reduce((x, y) => x + y) /
          this.scoolSubject[subject].length
        );
      }

      //*************** АЛЬТЕРНАТИВА:
      // let sum = 0;
      // let count = 0;
      // for (let i in this.scoolSubject[subject]) {
      //   sum += this.scoolSubject[subject][i];
      //   count += 1;
      // }
      // return sum / count;
    }
  }

  getTotalAverage() {
    let averages = [];
    for (let subj in this.scoolSubject) {
      averages.push(this.getAverageBySubject(subj));
    }

    return averages.reduce((x, y) => x + y) / averages.length;

    /*
    if (Object.values(this.scoolSubject).length === 0) {
      return 0;
    } else {
      const valNum = Object.values(this.scoolSubject);
      let ddd = [];
      for (let i in valNum) {
        for (let k in valNum[i]) {
          ddd.push(valNum[i][k]);
        }
      }
      return ddd.reduce((x, y) => x + y) / ddd.length;
    }
    */
  }
}

/*
const log = new StudentLog("Oleg Nikiforov");
console.log(log.getName());

log.addGrade(2, "algebra");
log.addGrade(4, "algebra");
log.addGrade(5, "geometry");
log.addGrade(4, "geometry");

console.log(log.getAverageBySubject("geometry")); // 4.5
console.log(log.getAverageBySubject("algebra")); // 3
console.log(log.getAverageBySubject("math")); // 0

console.log(log.getTotalAverage()); // 3,75

*/
