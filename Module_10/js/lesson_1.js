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
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("query"); // Отримати значення параметра "query"
const page = urlParams.get("page"); // Отримати значення параметра "page" (ще один квері-параметр)
console.log(query); // Виведе: "javascript"
console.log(page); // Виведе: "1"
