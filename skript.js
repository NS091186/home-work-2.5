//Задание 1
// Инструкция: Создайте объект user с полями name, age, и email. Заполните его значениями. Затем,
//используя объект, выведите информацию о пользователе в формате:
//"Имя: [name]"
//"Возраст: [age]"
//"Email: [email]
let user1= {
    name: "John Doe",
    age: 25,
    email: "john.doe@example.com",
   };
   console.log(user1.name);//John Doe
   console.log(user1.age);//25
   console.log(user1.email);//john.doe@example.com
    // Выведите информацию о пользователе здесь

//Задание 2: Обновление свойств объекта
//Инструкция: Измените значение свойства age у объекта user на 30 и добавьте новое свойство
//isAdmin со значением true. Выведите обновленный объект.

let user2 = {
    name: "John Doe",
    age: 25,
    email: "john.doe@example.com",
   };
  user2.age = 30// Обновите объект здесь
   console.log(user2);
   //{"name": "John Doe",
   // "age": 30,
   // "email": "john.doe@example.com"}
   
//Задание 3: Удаление свойства из объекта
//Инструкция: Удалите свойство email из объекта user, а затем проверьте, что оно действительно
//удалено, выведя объект в консоль.

let user3 = {
    name3: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    isAdmin: true,
   };
   delete user3.email;// Удалите свойство здесь
   console.log(user3);
   //{
    //"name3": "John Doe",
    //"age": 30,
    //"isAdmin": true}

   //Задание 4 
   //Инструкция: Напишите функцию transformUser, которая принимает объект user и возвращает новый
  // объект, содержащий только name и email, при этом name должно быть преобразовано в верхний регистр.
  
   
   function transformUser(user4) {
    // Реализуйте преобразование здесь
   const {email, name} = user4
   const uppercasedName = name.toUpperCase();
   return {
   name: uppercasedName,
   email: email
   }
   }; // Возвращайте новый объект
   let user4 = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    isAdmin: true,
   };
   let transformedUser = transformUser(user4);
   console.log(transformedUser); // Ожидаемый результат: { name: "JOHN DOE", email:"john.doe@example.com"}


   //Задание 5: Копирование объектов
//Инструкция: Используя оператор "spread" (...), создайте копию объекта user и измените в копии
//значение name на "Jane Doe". Оригинальный объект не должен измениться.
let user5 = {
 name: "John Doe",
 age: 30,
 email: "john.doe@example.com",
 isAdmin: true,
};
let userCopy = {...user5}; // Создайте копию и измените свойство name здесь
userCopy.name = "Jane Doe";
console.log(user5); // {name: 'John Doe', age: 30, email: 'john.doe@example.com', isAdmin: true}
console.log(userCopy); // {name: 'Jane Doe', age: 30, email: 'john.doe@example.com', isAdmin: true}
  
//Задание 6

function filterProperties(obj, keys) {
   const filteredUser = (user) => user.filter (user=> name, email);// Реализуйте фильтрацию здесь
    return {filterProperties}; // Возвращайте новый объект
   }
   let user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    isAdmin: true,
   };
   let filteredUser = filterProperties(user, ["name", "email"]);
   console.log(filteredUser); //


//Задание 7: Изменение структуры данных объекта
//Инструкция: Напишите функцию convertUser, которая принимает объект user и возвращает новый
//объект, где свойства name и age заменены на одно свойство profile, содержащее эти данные.


function convertUser(user7) {
    // Реализуйте преобразование здесь
   const copyUser7 = Object.assign({}, user7);
   delete copyUser7.name;
   delete copyUser7.age;
   copyUser7.profile = {age: copyUser7.age, name: copyUser7.name }
   console.log(copyUser7);
    // Возвращайте новый объект
    return copyUser7;
   }
   let copyUser7 = {
    name: "John Doe", 
    age: 30,
    email: "john.doe@example.com",
    isAdmin: true,
   };
   let convertedUser = convertUser(copyUser7);
   console.log(convertedUser);
 // Ожидаемый результат: { profile: { name: "John Doe", age: 30 }, email:
   //"john.doe@example.com", isAdmin: true }


//Задание 8: Объединение объектов
//Инструкция: Используя метод Object.assign, объедините два объекта user и details, чтобы
//получить один объединенный объект.
let user8 = {
 name: "John Doe",
 email: "john.doe@example.com",
};
let details = {
    age: 30,
    isAdmin: true,
   };
  let  mergedUser = Object.assign (user8, details);// Объедините объекты здесь
   console.log(mergedUser);
   // Ожидаемый результат: { name: "John Doe", email: "john.doe@example.com", age:
   //30, isAdmin: true }
   

   //Задание 9
   //Задание 9: Динамическое создание свойств
   //Инструкция: Создайте объект product и добавьте в него свойства name, price и category, используя
   //динамические ключи, которые задаются переменными.
  // let key1 = "name";
//let key2 = "price";
//let key3 = "category";
//let product = {}; // Создайте объект и добавьте свойства динамически
//console.log(product);
// Ожидаемый результат: { name: "Laptop", price: 1500, category: "Electronics" }


let key1 = "name";
let key2 = "price";
let key3 = "category";
let product = {
    [key1]: "Laptop",
    [key2]: 1500,
    [key3]: "Electronics"
}; // Создайте объект и добавьте свойства динамически
console.log(product);
// Ожидаемый результат: { name: "Laptop", price: 1500, category: "Electronics" }