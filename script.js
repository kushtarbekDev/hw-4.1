// const sivra = document.querySelector("#sivra");

// const userText = document.querySelector("#userText");

// const userLive = document.querySelector("#userLive");

// const button = document.querySelector("button");

// const checkboxInput = document.querySelector("#checkboxInput");

// function userName() {
//   const people = [
//     { id: 1, name: "Иван", age: 30, city: "Москва" },
//     { id: 2, name: "Анна", age: 25, city: "Санкт-Петербург" },
//     { id: 3, name: "Петр", age: 35, city: "Новосибирск" },
//     { id: 4, name: "Елена", age: 28, city: "Екатеринбург" },
//     { id: 5, name: "Дмитрий", age: 40, city: "Казань" },
//     { id: 6, name: "Мария", age: 22, city: "Ростов-на-Дону" },
//     { id: 7, name: "Алексей", age: 33, city: "Воронеж" },
//     { id: 8, name: "Татьяна", age: 29, city: "Уфа" },
//     { id: 9, name: "Ольга", age: 38, city: "Самара" },
//     { id: 10, name: "Виктор", age: 27, city: "Краснодар" },
//     { id: 11, name: "Юлия", age: 32, city: "Челябинск" },
//     { id: 12, name: "Сергей", age: 24, city: "Владивосток" },
//     { id: 13, name: "Ирина", age: 31, city: "Пермь" },
//     { id: 14, name: "Роман", age: 26, city: "Томск" },
//     { id: 15, name: "Наталья", age: 34, city: "Омск" },
//     { id: 16, name: "Михаил", age: 36, city: "Архангельск" },
//     { id: 17, name: "Екатерина", age: 27, city: "Тула" },
//     { id: 18, name: "Андрей", age: 29, city: "Калуга" },
//     { id: 19, name: "Валентина", age: 33, city: "Иркутск" },
//     { id: 20, name: "Александра", age: 25, city: "Саратов" },
//   ];
//   const randomUser = people[Math.floor(Math.random() * people.length)];
//   return randomUser.name;
// }

// // button.addEventListener("click", () => {
// //   userText.textContent = userName();
// //   userText.textContent = randomUser.name;
// //   if (randomUser.id === 1) {
// //     userLive.textContent = `Ползовител:${randomUser.name}, Город: ${randomUser.city}, Возраст: ${randomUser.age}`;
// //   }
// // });
// button.addEventListener("click", () => {
//   const randomUser = userName();
//   userText.textContent = randomUser.name;

//   if (randomUser.id === randomUser.id) {
//     userLive.textContent = `Ползовител:${randomUser.name} Город: ${randomUser.city} Возраст: ${randomUser.age}`;
//     // } else {
//     //   userLive.textContent = "";
//     // }
//   }
// });

// function generet() {
//   let length = 8;
//   let newString = new Array(length)
//     .fill(0)
//     .map(() => Math.floor(Math.random() * 10));

//   return newString.join("");
// }

// button.addEventListener("click", () => {
//   sivra.textContent = generet();
// });
// //
// function checkbox() {
//   if (checkboxInput.checked) {
//     document.body.style.transition = ".8s";
//     document.body.style.background = "black";
//   } else {
//     document.body.style.background = "none";
//   }
// }

// checkboxInput.addEventListener("click", checkbox);
// //

const sivra = document.querySelector("#sivra");
const userText = document.querySelector("#userText");
const userLive = document.querySelector("#userLive");
const button = document.querySelector("button");
const checkboxInput = document.querySelector("#checkboxInput");

function userName() {
  const people = [
    { id: 1, name: "Иван", age: 30, city: "Москва" },
    { id: 2, name: "Анна", age: 25, city: "Санкт-Петербург" },
    { id: 3, name: "Петр", age: 35, city: "Новосибирск" },
    { id: 4, name: "Елена", age: 28, city: "Екатеринбург" },
    { id: 5, name: "Дмитрий", age: 40, city: "Казань" },
    { id: 6, name: "Мария", age: 22, city: "Ростов-на-Дону" },
    { id: 7, name: "Алексей", age: 33, city: "Воронеж" },
    { id: 8, name: "Татьяна", age: 29, city: "Уфа" },
    { id: 9, name: "Ольга", age: 38, city: "Самара" },
    { id: 10, name: "Виктор", age: 27, city: "Краснодар" },
    { id: 11, name: "Юлия", age: 32, city: "Челябинск" },
    { id: 12, name: "Сергей", age: 24, city: "Владивосток" },
    { id: 13, name: "Ирина", age: 31, city: "Пермь" },
    { id: 14, name: "Роман", age: 26, city: "Томск" },
    { id: 15, name: "Наталья", age: 34, city: "Омск" },
    { id: 16, name: "Михаил", age: 36, city: "Архангельск" },
    { id: 17, name: "Екатерина", age: 27, city: "Тула" },
    { id: 18, name: "Андрей", age: 29, city: "Калуга" },
    { id: 19, name: "Валентина", age: 33, city: "Иркутск" },
    { id: 20, name: "Александра", age: 25, city: "Саратов" },
  ];
  const randomUser = people[Math.floor(Math.random() * people.length)];
  return randomUser;
}

button.addEventListener("click", () => {
  const randomUser = userName();
  userText.textContent = randomUser.name;

  userLive.textContent = `Пользователь: ${randomUser.name}, Город: ${randomUser.city}, Возраст: ${randomUser.age}`;
});

function generet() {
  let length = 8;
  let newString = new Array(length)
    .fill(0)
    .map(() => Math.floor(Math.random() * 10));

  return newString.join("");
}

button.addEventListener("click", () => {
  sivra.textContent = generet();
});

function checkbox() {
  if (checkboxInput.checked) {
    document.body.style.transition = ".8s";
    document.body.style.background = "black";
  } else {
    document.body.style.background = "none";
  }
}

checkboxInput.addEventListener("click", checkbox);
