//             node Module_10/kahoot         - запуск через термінал

//! --------------------   УРОК 1   --------------------------

//* 1. Набір правил, який визначає порядок та особливості передачі інформації

//?  протокол передачі даних
//!  інтерфейс отриманих даних
//!  протокол отриманих даних
//!  інтерфейс передачі даних

//* 2. Який протокол використ. для передачі довільних даних в інеті як текст

//?  HTTP (HyperText Transfer Protocol (протокол передачі гіпертексту))
//!  TLS
//!  NTP
//!  TCP

//* 3. На якій моделі побудовано протокол HTTP

//!  Сервер - Сервер
//!  Клієнт - Клієнт
//!  Клієнт - Мережа
//?  Клієнт - Сервер

// * 4. Надбудова HTTP, в якій повідомлення між Клієнтом та Сервером шифруються з метою підвищення безпеки

//?  HTTPS
//!  SSH
//!  FTP
//!  DNS

//* 5. Виберіть неіснуючий HTTP метод

//!  DELETE
//!  PUT
//!  GET
//?  GRAB

//* 6. Для чого у запиті чи у відповіді використовуються HTTP заголовки

//?  Для передачі службової інфи
//!  SSH
//!  FTP
//!  DNS

//* 7. Який символ URL вказує на початок списку параметрів запиту?

//!   =
//!   |
//?   ?
//!   &

//* 8. Який символ поділяє параметри запиту?

//!   =
//!   |
//!   ?
//?   &

//* 9. Який неіснуючий формат даних передачі через мережу

//!   JSON
//!   XML
//!   CSV
//?   PTD

//* 10. Що означає статус 200 у відповіді бекенда

//?  успішна відповідь проведення операції
//!  SSH
//!  FTP
//!  DNS

//* 11. Що повертає метод fetch()

//?  Проміс
//!  SSH
//!  FTP
//!  DNS

//* 12.
const getUser = (userId) => {
  const url = `https://my-api.com/users/${userId}`;
  fetch(url).then((res) => res.json());
};

getUser(1).then((user) => console.log(user));

//! --------------------   УРОК 2   --------------------------

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

// fetch("https://my-api.com")
//   .then((response) => {
//     console.log("Response status code:", response.status);

//     if (response.ok) {
//       return console.log("Ok");
//     }
//     console.log("Not Ok");
//   })
//   .catch((error) => {
//     console.error("Fetch error:", error);
//     console.log("Error");
//   });

//!  "Ok"
//?  "Not Ok"
//?  "Error"
//!  Нічого

//* 7.Неправильне твердження переваги Пагінації

//!  Завантаження додаткового контенту лише за необхідності
//!  Швидкість відображення сторінки веб-сайту
//?  Підвищення SEO веб-сторінки   (для кращої індексації сторінки при пошуку)
//!  Обмеження розміру завантажених даних в кожному запиті

//* 8. Де вказується значення Пагінації для бекенда при HTTP запиті?

//?  У параметрах запиту
//!  У тілі запиту
//!  У хедерах
//!  У MIME-типі (це тип інфи який ми можемо передавати - )

//* 9. Які параметри зазвичай надає бекенд для керування Пагінацією для бекенда при HTTP запиті?

//!  Кількість елементів в групі
//!  Номер групи елементів
//?  Номер групи та кількість елементів у групі
//!  Список фільтрів

//* 10. Як при Пагінації дізнатися про кінець колекції

//?  Бекенд повертає необхідні дані
//!  ***
//!  ***
//!  ***

//! ----------------------------------------------

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
