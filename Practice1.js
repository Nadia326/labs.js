'use strict'

///1 Продемонстрируйте на примере различие между объявлением переменных через var, let и const.
function showDifference() {
    console.log("'var' loop with setTimeout");
 
    for (var i = 0; i < 5; i++) {
        setTimeout(() => console.log(i), 10);
    }
 
    setTimeout(() => {
        console.log("'let' loop with setTimeout");
 
        for (let i = 0; i < 5; i++) {
            setTimeout(() => console.log(i), 10);
        }
    }, 50);
 
    setTimeout(() => {
        console.log("'const' loop with setTimeout. There will be an error");
 
        for (const i = 0; i < 5; i++) {
            setTimeout(() => console.log(i), 10);
        }
    }, 100);
 }
 showDifference();

 /// 2.1 Дан массив testArray. Запишите первый элемент этого массива в переменную first,
 // второй - в переменную second, третий - в переменную third, 
 //а все остальные элементы массива - в переменную newAarray.

let testArray = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'];
let [first, second, third, ...newArray] = testArray;
console.log(first + '|' + second + '|' + third + '|' + newArray);

//2.2 Дан массив. Запишите последний элемент этого массива в переменную first,
// а предпоследний - в переменную second.

let testArray = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'];
testArray.reverse();
let [first, second] = testArray;
console.log(first + '|'+ second);

//2.3 Дан массив. Запишите второй элемент этого массива в переменную second, 
//третий - в переменную third. Если в массиве нет третьего элемента - запишите 
//в переменную third значение 'empty_third', а если нет второго - в переменную second 
//запишите значение 'empty_second'. Первый элемент никуда записывать не надо. 

let testArray = ['first', 'second'];
let [, second = 'empty_second', third = 'empty_third'] = testArray;
console.log(second);

//2.4 Дан объект {name: 'John', 'surname': 'Smith', 'age': '20'}. 
//Запишите соответствующие значения в переменные name, surname и age.

let user = {
    name: 'John',
    surname: 'Smith',
    age: '20'
 };
 
 let { name, surname, age } = user;
 console.log(name + ' ' + surname + ' ' + age);
 
//2.5 Дан объект {name: 'John', 'surname': 'Smith', 'age': '20'}.
// Запишите соответствующие значения в переменные name, surname и age. 
//Сделайте так, чтобы, если какое-то значение не задано - оно принимало следующее значение 
//по умолчанию: {name: 'UnknownName', 'surname': 'DefaultSurname', 'age': '0'}. 

let user = {
    // name: 'John',
    surname: 'Smith',
    // age: '20'
 };
 
 let {name = 'UnknownName', surname = 'DefaultSurname', age = '0'} = user;
 document.write(name + ' ' + surname + ' ' + age);

 //3.1 Пользователь вводит URL адрес в input в формате http или https.
 // Выведите только имя домена без префиксов http://, https://. НЕ использовать функцию URL.

 function getHostName(str) {
    var result = str.slice(str.indexOf("//") + 2)
    return result.slice(0, result.indexOf("/"));
 }

 //3.2 Написать функцию, которая преобразует ASCII символы в шестнадцатеричную систему.

 function asciiToHex(str) {
    var arr1 = [];
    for (var n = 0, l = str.length; n < l; n++) {
        var hex = Number(str.charCodeAt(n)).toString(16);
        arr1.push(hex);
    }
 
    return arr1.join('');
 }

 //3.3 Написать функцию, которая оставит в строке  только заданное количество строк. Пример:
//Test Data :
//console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
//Output : 
//"The quick brown fox"

function truncate(str, no_words) {
    return str.split(" ").splice(0, no_words).join(" ");
 }

 //second variant
 function truncate1(str, no_words) {
     return str.split(" ", no_words).join(" ");
 }

 //4.1 Поддельная точка
//Используйте один объектный литерал для создания объекта, который неотличим от Pointinstance,
// без вызова конструктора Point.

class Point {
    constructor(x, y) {
      this.x = x, this.y = y
    }
    add(other) {
      return new Point(this.x + other.x, this.y + other.y)
    }
}
   
function checkFakePoint() {
    var fakePoint = Object.assign(Object.create(Point.prototype), {
        x: Math.random(),
        y: Math.random()
    });
    console.log(fakePoint instanceof Point);
}
   
//4.2 Конфигурируемая собственность
//Заполните функцию startNode, используя один объектный литерал. 
//Функция должна возвращать объект со свойствами type и value, содержащими значение 
//аргументов с этими именами, а третье свойство, названное параметром sourceProperty,
// устанавливается равным значению параметра sourceValue.



function startNode(type, value, options) {
    return {
        type,
        value,
        [options.sourceProperty]: options.sourceValue
    }
}

console.log(startNode("Identifier", "foo", {
    sourceProperty: "src",
    sourceValue: "bar.js"
}))
      
//4.3 Singleton
//Добавьте метод get к объекту ids, который возвращает следующий идентификатор 
//и увеличивает его nextcounter. Используйте короткий синтаксис метода.

var ids = {
    next: 0
}
    
var ids = {
    next: 0,
    get: function () {
        return ids.next++;
    }
}

console.log(ids.get())
   // → 0
console.log(ids.get())
   // → 1

//4.4 Написать функции, которые в процессе выполнения кода (4).plus(3).minus(1) дали бы на выходе 6.

// Поскольку, мы работаем с числами, надо расширить прототип Number новыми методами.
Number.prototype.plus = function (value) {
    return this + value;
}
Number.prototype.minus = function (value) {
    return this - value;
}
console.log((4).plus(3).minus(1));

  // Число два будет доступно через this в функции plus. Из нее мы возвращаем результат сложения числа,
  // на которое указывает this и числа, переданного в качестве аргумента. Аналогично для minus.
  
  /*5.	Знакомство с классами. Необходимо решить следующие задачи с использованием классов.

  В одном городе есть электрическая сеть. К ней могут быть подключены:
  ●	электростанции, вырабатывают мощность от 1 до 100 мегаватт
  ●	солнечные панели, генерируют от 1 до 5 мегаватт днем (в зависимости от вида панели, то есть
     некоторые панели генерируют 1 мегаватт, некоторые 2 и так далее) и 0 ночью
  ●	жилые дома, в них от 1 до 400 квартир, потребляют 4 кВт на квартиру днем и 1 кВт ночью.
  ●	линии электропередач, ведущие в другие города, по ним может подаваться недостающая или 
  отдаваться лишняя энергия. У линий есть свойство «мощность», которая определяет, сколько мегаватт
   можно передать по ней, а также «цена мегаватта», которое показывает сколько можно получить или 
   придется заплатить за переданный/полученный мегаватт. На разных линиях может быть разная цена.
  Дан список всех элементов электросети. Напиши программу, рассчитывющую, сколько электричества необходимо
   закупить (или можно продать) днем и ночью для обеспечения баланса и сколько это будет стоить
    (или принесет прибыли). Используй продвинутый ООП подход для решения задачи.*/

    function ElectricalNetwork(elements) {
        if (Array.isArray(elements)) {
            this.elements = elements;
        } else {
            throw new TypeError("elements must be an array");
        }
       }
       
       function Electrostation(power) {
        if (power >= 1 * Math.pow(10, 6) && power <= 100 * Math.pow(10, 6)) {
            this.power = power;
            this.nightpower = power;
        } else {
            throw new RangeError("power must be in range from 1 MW to 100 MW");
        }
       }
       
       Electrostation.prototype.getPower = function() {
        return this.power;
       }
       
       Electrostation.prototype.getPowerAtNight = function() {
        return this.nightpower;
       }
       
       function SolarPanele(power) {
        if (power >= 1 * Math.pow(10, 6) && power <= 5 * Math.pow(10, 6)) {
            this.power = power;
        } else {
            throw new RangeError("power must be in range from 1 MW to 5 MW")
        }
       }
       
       SolarPanele.prototype.nightpower = 0;
       
       SolarPanele.prototype.getPower = function() {
        return this.power;
       }
       
       SolarPanele.prototype.getPowerAtNight = function() {
        return this.nightpower;
       }
       
       
       function someTypeOfSolarPanel() {
        this.power = 1 * Math.pow(10, 6);
       }
       
       someTypeOfSolarPanel.prototype = Object.create(SolarPanele.prototype);
       someTypeOfSolarPanel.prototype.constructor = someTypeOfSolarPanel;
       
       
       function anotherTypeOfSolarPanel() {
        this.power = 2 * Math.pow(10, 6);
       }
       
       anotherTypeOfSolarPanel.prototype = Object.create(SolarPanele.prototype);
       anotherTypeOfSolarPanel.prototype.constructor = anotherTypeOfSolarPanel;
       
       
       function House(apartments) {
        if (Array.isArray(apartments)) {
            if (apartments.length >= 1 || apartments.length <= 400) {
                this.apartments = apartments;
            } else {
                throw new RangeError("apartments count must be from 1 to 400");
            }
        } else {
            throw new TypeError("apartments must be an array");
        }
       
        this.power = 0;
        this.nightpower = 0;
       }
       
       House.prototype.getPower = function() {
        for (var apartment in apartments) {
            this.power += apartments[apartment]['power'];
        }
       
        return this.power;
       }
       
       House.prototype.getPowerAtNight = function() {
        for (var apartment in apartments) {
            this.nightpower += apartments[apartment]['nightpower'];
        }
       
        return this.nightpower;
       }
       
       
       
       function Apartment() {
        this.power = -5 * Math.pow(10, 3);
        this.nightpower = -1 * Math.pow(10, 3);
       }
       
       
       function PowerLine(power, price) {
        this.power = power;
        this.price = price;
       }
       
       
       function Counter() {
       
       }
       
       Counter.countPowerAt24Hours = function(electricalnetwork) {
        var power = 0;
       
        for (var element in electricalnetwork.elements) {
            if (electricalnetwork.elements[element] instanceof PowerLine != true) {
                power += electricalnetwork.elements[element].getPower();
                power += electricalnetwork.elements[element].getPowerAtNight();
            }
        }
       
        return power;
       }
       
       Counter.countBalance = function(electricalnetwork) {
        power = Counter.countPowerAt24Hours(electricalnetwork);
       
        var price = 0;
       
        for (var element in electricalnetwork.elements) {
            if (electricalnetwork.elements[element] instanceof PowerLine) {
                var balance = 0;
       
                if (power > 0) {
                    balance = power - electricalnetwork.elements[element].power;
       
                    if (balance < 0) {
                        price += power / Math.pow(10, 6) * electricalnetwork.elements[element].price;
                        power = 0;
                    } else if (balance > 0) {
                        price += (power - balance) * electricalnetwork[element].price;
                        power = balance;
                    }
                } else if (power < 0) {
                    balance = electricalnetwork.elements[element].power + power;
       
                    if (balance > 0) {
                        price += power / Math.pow(10, 6) * electricalnetwork.elements[element].price;
                        power = 0;
                    } else if (balance < 0) {
                        price += (power - balance) / Math.pow(10, 6) * electricalnetwork.elements[element].price;
                        power = balance;
                    }
                } else if (power == 0) {
                    continue;
                }
       
                electricalnetwork.elements[element].power -= Math.abs(balance);
            }
        }
       
        return price;
       }
       
       apartments = [];
       
       for (var i = 0; i < 400; i++) {
        apartments[i] = new Apartment();
       }
       
       var electricalnetwork = new ElectricalNetwork([
        new Electrostation(1 * Math.pow(10, 6)),
        new House(apartments),
        new House(apartments),
        new House(apartments),
        new SolarPanele(1 * Math.pow(10, 6)),
        new SolarPanele(3 * Math.pow(10, 6)),
        new SolarPanele(5 * Math.pow(10, 6)),
        new PowerLine(5 * Math.pow(10, 6), 1000),
        new PowerLine(15 * Math.pow(10, 6), 500)
       ]);
       
       console.log("Price difference from sale: " + Counter.countBalance(electricalnetwork));
       
       
  
     

   
   

   



