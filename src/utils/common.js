//генерация рандомного эл-та массива
function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

//генерация рандомного натурального числа числа
function getRandomNumber(number) {
  const randomNumber = Math.floor(Math.random() * number) + 1;
  return Number(randomNumber);
}
//счетчик
function incrementCounter(startFrom) {
  let counterStart = startFrom;
  return function () {
    return counterStart++;
  };
}

const getRandomIntFromDuration = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const updateItem = (items, update) => items.map((item) => item.id === update.id ? update : item);

export {
  getRandomArrayElement,
  incrementCounter,
  getRandomNumber,
  getRandomIntFromDuration,
  updateItem
};
