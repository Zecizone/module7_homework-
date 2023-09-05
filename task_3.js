// Задание 3.
// Написать функцию, которая создает пустой объект, 
// но без прототипа.

function obj() {
    return Object.create(null);
  };
  
  let newObj = obj();
  
  console.log(newObj); 