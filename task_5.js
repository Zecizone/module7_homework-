// Задание 4.
// Реализуйте следующее консольное приложение с помощью классов.
// Определите иерархию электроприборов. Включите некоторые в 
// розетку. Посчитайте суммарную потребляемую мощность всех 
// включенных приборов (передайте аргумент). 
// Таких приборов должно быть как минимум два 
// (например, настольная лампа и компьютер). 
// Выбрав прибор, подумайте, какими свойствами он обладает.

class Appliance {
  constructor(name, power) {
    this.name = name,
    this.power = power,
    this.enabled = false
  }
  toggle() {
    this.enabled = !this.enabled;
    console.log(`${this.name} сейчас ${this.enabled ? 'включен/а' : 'выключен/а'}`);
  }
}

class Lamp extends Appliance {
  constructor(name, power, brightness) {
    super(name, power),
    this.brightness = brightness
  }
}

class Phone extends Appliance {
  constructor(name, power, brand) {
    super(name, power),
    this.brand = brand
  }
}

const phone = new Phone('Телефон', 300, 'Apple');
const lamp = new Lamp('Лампа', 40, 'UDN');

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