"use strict";

// Задание №1 Форматтер чисел

function parseCount(value) {
  if (!Number.parseInt(value)) throw new Error("Невалидное значение");
  return Number.parseInt(value);
}
function validateCount(parseValue) {
  try {
    parseCount(parseValue);
  } catch (e) {
    return e;
  }
  return Number.parseInt(parseValue);
}

// Задание №2 Треугольник

class Triangle {
  constructor(firstSide, secondSide, thirdSide) {
    this.firstSide = firstSide;
    this.secondSide = secondSide;
    this.thirdSide = thirdSide;

    if (
      !(
        this.firstSide < this.secondSide + this.thirdSide &&
        this.secondSide < this.firstSide + this.thirdSide &&
        this.thirdSide < this.firstSide + this.secondSide
      )
    )
      throw new Error("Треугольник с такими сторонами не существует");
  }

  getPerimeter() {
    return this.firstSide + this.secondSide + this.thirdSide;
  }

  getArea() {
    const p = this.getPerimeter() / 2;
    return +Math.sqrt(
      p * (p - this.firstSide) * (p - this.secondSide) * (p - this.thirdSide)
    ).toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (e) {
    return {
      getArea: () => "Ошибка! Неправильный треугольник",
      getPerimeter: () => "Ошибка! Неправильный треугольник",
    };
  }
}
