//             node Module_11/js/lesson_1         - запуск через термінал
//! Асинхронні функції

//* Робота з бекендом може бути заплутаною - після однієї асинхронної операції необхідно зробити ще один запит на сервер на підставі отриманих даних, і так кілька разів.
//* Наприклад, на сторінці профілю користувач хоче подивитися список друзів. Перше, що необхідно зробити, - підтвердити його права доступу до цієї сторінки на бекенді.
//* Для цього потрібно зробити запит до 'my-api.com/me'. Якщо бекенд дозволить доступ, у відповіді ми отримаємо унікальний токен доступу до захищених ресурсів.

// https://jsonplaceholder.typicode.com/users

// const fetchFriends = () => {
//   return fetch("my-api.com/me").then((token) => {
//     console.log(token);
//   });
// };

// Виклик функції та виведення результату в консоль
// fetchFriends();

// const fetchFriends = () => {
//   return fetch("my-api.com/me")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data); // Вивід даних
//     });
// };

// const fetchFriends = () => {
//   return fetch("my-api.com/me")
//     .then((token) => {
//       return fetch(`my-api.com/profile?token=${token}`);
//     })
//     .then((user) => {
//       console.log(user.id);
//     });
// };

// const fetchFriends = () => {
//   return fetch("my-api.com/me")
//     .then((token) => {
//       return fetch(`my-api.com/profile?token=${token}`);
//     })
//     .then((user) => {
//       return fetch(`my-api.com/users/${user.id}/friends`);
//     });
// };

// fetchFriends()
//   .then((friends) => console.log(friends))
//   .catch((error) => console.error(error));

const fetchFriends = async () => {
  const token = await fetch("my-api.com/me");
  const user = await fetch(`my-api.com/profile?token=${token}`);
  const friends = await fetch(`my-api.com/users/${user.id}/friends`);
  return friends;
};

fetchFriends()
  .then((friends) => console.log(friends))
  .catch((error) => console.error(error));

//! ASYNC AXIOS
async function serviceCountry() {
  const URL = "https://restcountries.com/v3.1/name/Ukraine5";
  try {
    const { data } = await axios.get(URL);
    console.log(data);
    return data;
  } catch (err) {
    console.log("TRY-CATCH:", err);
  }
}
