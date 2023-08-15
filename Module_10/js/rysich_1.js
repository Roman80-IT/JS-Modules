// ********* Links ********* \\

// https://media.licdn.com/dms/image/C5112AQEr5Pvwftcnpw/article-cover_image-shrink_600_2000/0/1538241940135?e=1687392000&v=beta&t=nBUq1TFjTuJmww0wqfhnd8A8SI_Vnq4S0F-xk2GI3YM
// https://uk.wikipedia.org/wiki/SOAP
// https://swapi.dev/

// https://www.postman.com/downloads/
// https://rickandmortyapi.com/documentation
// https://www.weatherapi.com/docs/

// https://developer.themoviedb.org/reference/trending-movies

//* Приклад документації до API
// https://rickandmortyapi.com/documentation/#rest

//! -------- РИСІЧ 19-й урок --------

//? 19:00
// https://api.privatbank.ua/#p24/exchange

//? 29:00
//   postman.com

//? 30:00
// https://swapi.dev/documentation
//? 32:00 (пояснення GPT)
//* У JS термін "квері-параметри" використовується для посилання на частину URL, яка містить дані запиту,
//* передані з одного веб-ресурсу на інший. Це може бути частина URL-адреси після символу запитання(?), включаючи параметри та їх значення,
//* які передаються у вигляді пар "ключ=значення". Ці параметри використовуються для передачі інформації між різними сторінками, скриптами або серверами.

//* Поточна URL-адреса: https://www.example.com/search?query=javascript&page=1
// const urlParams = new URLSearchParams(window.location.search);
// const query = urlParams.get("query"); // Отримати значення параметра "query"
// const page = urlParams.get("page"); // Отримати значення параметра "page" (ще один квері-параметр)
// console.log(query); // Виведе: "javascript"
// console.log(page); // Виведе: "1"

//? 37:00 (пояснення GPT)
//! Питання на співбесіду:    JS: Куди можна відправляти запити  (запит клієнта на сервер) і з чим можна попрацювати?
//* У JS є декілька способів відправити запити з клієнта на сервер. Основні методи для цього включають:

//*  - XMLHttpRequest: Це старий, але все ще підтримуваний спосіб відправки запитів. Він дозволяє створювати запити до сервера і обробляти їх результати.
//*    Проте, цей метод не надає зручних інтерфейсів для роботи з асинхронним кодом.

//*  - Fetch API: Сучасний спосіб відправки запитів, який надає більш чистий і простий інтерфейс для взаємодії з сервером.
//*    Fetch API повертає обіцянку(Promise), що спрощує роботу з асинхронним кодом.

//*  - Axios: Це стороння бібліотека, яка надає легкий спосіб відправки запитів на сервер. Вона додатково підтримує відмінний обробник помилок і
//*    інтерсептори для обробки запитів.

//*  - WebSocket: Для більшої взаємодії між клієнтом і сервером в реальному часі ви можете використовувати WebSocket,
//*    який дозволяє встановити постійне з'єднання між сторонами.

//*  Операції, які можна виконувати на сервері - їх можливості безмежні, основні операції включають:

//*  - Запит та отримання даних: можна відправляти запити до сервера, щоб отримати дані, такі як тексти, зображення, відео, JSON-об'єкти

//*  - Відправка даних на сервер: можна надсилати дані з клієнта на сервер, наприклад, при відправці форми, завантаженні файлів або оновленні стану додатка.

//*  - Аутентифікація та авторизація: можна перевіряти ідентифікацію користувачів, здійснювати перевірку доступу до ресурсів та ін.

//*  - Виконання операцій на базі даних: можна взаємодіяти з базою даних на сервері, додавати, оновлювати, видаляти записи або отримувати з них інформацію.

//*  - Обробка бізнес-логіки: Сервер може виконувати різноманітні обчислення і логічні операції відповідно до бізнес-логіки додатка.

//*  Увага!  при взаємодії з сервером важливо дотримуватися принципів безпеки - обробка введених даних і забезпечення аутентифікації та авторизації,
//*          щоб запобігти можливим загрозам безпеці.

//? 37:00
//* Параметри - ми уточнюємо бекенду, яку наступну групу елементів хочемо отримати, і так, доки в колекції не закінчаться елементи
//*    Символ ? вказує на старт параметрів запиту. Кожен параметр - це пара ім'я=значення. Символ & використовується для зазначення смислового «І», розділяючи параметри в рядку запиту.
//*    2 і більше параметри розділяємо 'Амперсандом (&)'
// const url = "https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name";

//? 44:30
// https://www.weatherapi.com/docs/
//* робота з документацією API

//? 45:50
//* Авторизація
//? 47:00
// http://api.weatherapi.com/v1/forecast.json
//* Вводимо в Params:
//* key    API Key    99a73e78ccf9440fa4e155312231208
//* q      Paris
//* days   5
// api.weatherapi.com/v1/forecast.json?key=ce2cb9b2a3da414bb5b172546231704&q=Paris&days=5

//? 49:30
//*  Перевірка на валідність URL в postman.com - зробити запит
// * і за рахунок postman не потрібно консолити, що видає бекенд

//? 49:30
//! Питання на співбесіду:     показуємо в коді: об'єкт, ключ, масив
//? 54:30 - 1:02:00
//! Питання на співбесіду:    вивчити Крос-доменні запити
// можливість бекенда зробити один з найкращих захистів від сторонніх запитів

//? 1:06:00 - 1:18:00     Перерва
//?     'Ctrl + =' зумити додаток Postman

//? 1:20:00
//*  1. Створюємо запит на бекенд
//*  це функція, яка буде приймати назву міста і кількість днів:

// function getWeather(city, days) {
// //* на реальному проекті буде багато запитів, тому розділяємо його на: 1. спочатку базовий URL 2. ендпоінт який потрібний
//  //* api.weatherapi.com/v1/forecast.json?key=ce2cb9b2a3da414bb5b172546231704&q=Paris&days=5
//   const BASE_URL = "http://api.weatherapi.com/v1";
//   const API_KEY = "ce2cb9b2a3da414bb5b172546231704";
//  //* запит на бекенд:
//   fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}`)
//*  оскільки 'fetch' повертає проміс, то ми маємо опрацювати за доп. ланцюжка методів then(), catch(), finally():
//    .then((resp) => console.dir(resp)
//   );
//
// }
//* ТЕСТ:
// getWeather("Paris", 5);

//* В консолі в першу чергу дивимося на 'status' і 'ok'

//? 1:26:00
//* Моделюємо помилки в консолі

// fetch(`${BASE_URL}/forecast.json?${params}`).then((resp) => {
//   console.log(resp.json());
//* першим then робимо перевірку, яким статусом опрацювало
//    if (!resp.ok) {
//* якщо не Ок - самостійно сетимо помилку, можна написати щось своє, або використати statusText (по іншому сказати - опрацьовуємо помилкуІ):
//      throw new Error(resp.statusText);
//    }
//* якщо Ок - повертаємо розпарсений json - тут ми не використовуємо JSON.parse - тому, що для обєкта респонса є вже відразу вбудований метод json:
//* цей метод 'resp.json' повертає нам проміс - тому ми вимушені обробляти ще одним 'then'
//   return resp.json();
// });

//* Фактично в першому 'then' ми маємо опрацювати помилку і вказати, що в нас відбувається парс 'json'-а
//* В наступному ланцюжку ми вже будемо отримувати ті дані, які ми розпарсили
//? 1:30:30
//* На практиці - перша ф-ція getWeather, яка відпрацьовує за запит - всередині неї пишуть лише один 'then'
//*   Наступні ланцюжки - вже за межами ф-ції - на результаті виконання ф-ції\
//? 1:31:00
//* тому вказуємо, що ми повертаємо результат 'fetch':

function getWeather(city, days) {
  const BASE_URL = "http://api.weatherapi.com/v1";
  const API_KEY = "ce2cb9b2a3da414bb5b172546231704";
  const params = new URLSearchParams({
    key: API_KEY,
    q: city,
    days: days,
    lang: "uk",
  });

  return fetch(`${BASE_URL}/forecast.json?${params}`).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}
//* а там де викликалася ф-ція, ми вже пишемо 'then':
getWeather("Paris", 5)
  .then((data) => console.log(data))
  .catch((err) => console.log(err)); //* 'catch' якщо у нас є помилка

//* Якщо все успішно, ми отримаємо обєкт відповіді з бекенда:
//* current(поточна погода), forecast(прогноз), location(локація)
//* по суті data = resp.json()

//? 1:35:00
//* З першого 'then' є два шляхи - або наступний 'then' або 'catch' якщо помилка

//? 1:36:30
//* Створимо форму де користувач зможе вводити дані