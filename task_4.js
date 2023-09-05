// Задание 4.
// Реализуйте следующее консольное приложение подобно примеру, 
// который разбирался в видео. Реализуйте его на прототипах.
// Определите иерархию электроприборов. Включите некоторые в 
// розетку. Посчитайте суммарную потребляемую мощность всех 
// включенных приборов (передайте аргумент). 
// Таких приборов должно быть как минимум два 
// (например, настольная лампа и компьютер). 
// Выбрав прибор, подумайте, какими свойствами он обладает.

function Appliance(name, power) {
    this.name = name,
    this.power = power,
    this.enabled = false
  };
  
  Appliance.prototype.toggle = function() {
    this.enabled = !this.enabled;
    console.log(`${this.name} сейчас ${this.enabled ? 'включен/а' : 'выключен/а'}`);
  };

  function Lamp (name, power, brightness) {
    Appliance.call(this, name, power),
    this.brightness = brightness
  };
  
  Lamp.prototype = Object.create(Appliance.prototype);
  Lamp.prototype.constructor = Lamp;

  function Phone(name, power, brand) {
    Appliance.call(this, name, power),
    this.brand = brand
  };
  
  Phone.prototype = Object.create(Appliance.prototype);
  Phone.prototype.constructor = Phone;
  
  
  const phone = new Phone('Телефон', 300, 'Apple');
  const lamp = new Lamp('Лампа', 40, 'UDN'); 

  phone.toggle();
  lamp.toggle();

  function calculateTotalPower(...appliances) {
    let totalPower = 0;
    for (const appliance of appliances) {
      if (appliance.enabled) {
        totalPower += appliance.power;
      }
    }
    return totalPower;
  }
  
  const totalPower = calculateTotalPower(lamp, phone);
  console.log(`Общее энергопотребление: ${totalPower} ватт`);