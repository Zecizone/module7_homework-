// Задание 2.
// Написать функцию, которая принимает в качестве аргументов 
// строку и объект, 
// а затем проверяет есть ли у переданного объекта свойство 
// с данным именем. Функция должна возвращать true или false.

let obj = {
    single:'single-quoted',
  };

  function foo(obj, single){
    if (obj.hasOwnProperty('single')) {
        return true;
      } else {
        return false;
      };
  };
  
  console.log(foo(obj, 'single'));