//             node Module_10/kahoot         - запуск через термінал

//? ПАГІНАЦІЯ

//* 1. В якій вкладці інструментів розробника можна переглянути інформацію про HTTP запити:

//?  Network
//!  Performance
//!  Application
//!  Console

//* 2. Як називаєтсья частина URL адреси, виділена кольором:
//   https://*www.weatherapi.com/my/producer?name=dreame

//!   parameters
//?   protocol (протокол передачі даних)
//!   host
//!   domain

//* 3. Як називаєтсья частина URL, виділена кольором:
//   https://*  www.weatherapi.com   /my/producer?name=dreame

//!   parameters
//?   host (сервер?)
//!   query
//!   path

//* 4.  Як називаєтсья частина URL, виділена кольором:
//   https://www.weatherapi.com  //*  /my/producer   ?name=dreame

//!   parameters
//!   resource
//!   values
//?   path (шлях)

//* 5.  Як називаєтсья частина URL, виділена кольором:
//   https://www.weatherapi.com/my/producer  //* ?name=dreame

//!   search
//?   parameters (інформація, яку передаємо з фронтенду на сервер)
//!   resource
//!   path

//* 6. Що буде виведено в консоль, якщо статус коду відповіді сервера 404?

// fetch("https://my-api23.com")
//   .then((response) => {
//     if (response.ok) {
//       return console.log("Ok");
//     }
//     console.log("Not Ok");
//   })
//   .catch(() => console.log("Error"));

fetch("https://my-api.com")
  .then((response) => {
    console.log("Response status code:", response.status);

    if (response.ok) {
      return console.log("Ok");
    }
    console.log("Not Ok");
  })
  .catch((error) => {
    console.error("Fetch error:", error);
    console.log("Error");
  });

//!  "Ok"
//!  "Not Ok"
//?  "Error"
//!  Нічого

//* 7.
// const promise = new Promise((resolve, reject) => {
//   reject("Whoops");
// });

// promise.then((value) => console.log(value));

//?   Помилка

//* 2. Послідовність
// console.log("A");

// setTimeout(() => console.log("B"), 0);

// const promise = new Promise((resolve) => {
//   resolve("C");
// });

// promise.then((value) => console.log(value));

// console.log("D");

//?   A > D > C > B

//* 3.
//?  Проміс - об'єкт, який представляє результат асинхронної операції

//* 4.   У проміса є стан settled ?
//?  Ні (Так)
// Коли проміс виконаний або відхилений, то кажуть, що він завершений (settled). Це просто термін, який описує те, що проміс перебуває в будь-якому стані, крім очікування.

//* 5. Що буде виведено в консоль:
// const promise = new Promise((resolve) => {
//   resolve(10);
// });

// promise
//   .then((value) => {
//     new Promise((resolve) => {
//       resolve(value * 2);
//     });
//   })
//   .then((value) => console.log(value));

//? undefined (відсутній return)

//* 6. Які параметри отримає колбек-функція executor?
// const executor = () => {
//   //........
// };

//?   resolve і reject (можна було б навіть
//?   отримати через arguments, якби це була звичайна ф - ція)

//* 7. Послідовність
// console.log("A");

// const promise = new Promise((resolve) => {
//   resolve("B");
// });

// promise.then((value) => console.log(value));

// console.log("C");

//?   A > C > B

//* 8. Які стани є у проміса?
// Проміс може бути у трьох станах:

// Очікування (pending) - початковий стан під час створення промісу.
// Виконано (fulfilled) - операція виконана успішно з будь-яким результатом.
// Відхилено (rejected) - операція відхилена з помилкою.

//* 9. Метод then()  повертає об'єкт Promise
//* використовується для обробки результату асинхронних операцій,

//* 10. settled значить
// Виконано (fulfilled) - операція виконана успішно з будь-яким результатом.
// Відхилено (rejected) - операція відхилена з помилкою.

// Коли проміс виконаний або відхилений, то кажуть, що він завершений (settled). Це просто термін, який описує те, що проміс перебуває в будь-якому стані, крім очікування.
