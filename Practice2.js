// 6.1 Function compose
// Определите символ compose и добавьте его в Function.prototype с помощью метода,
//  который объединяет функцию this с аргументом метода, возвращая новую функцию, 
//  которая применяет обе составные функции, одну за другой, к своему аргументу и возвращает результат.

let compose = Symbol("compose");
Function.prototype[compose] = function (f) {
   let self = this;
   return function () {
     //console.log(arguments);
     //console.log(Array.prototype.slice.call(arguments));
       let result = f.apply(null, Array.prototype.slice.call(arguments));
       result = self.apply(null, [result]);
       return result;
   }
};

const res = Function[compose](function() {
  console.log('ARG', arguments)
  return 'HELLO';
});
console.log(res(1,2,3));


// 6.2 Privacy
// Измените класс Queue, чтобы использовать символ вместо имени свойства с нижним 
// подчеркиванием для свойства private content.

class Queue {
    constructor() {
        let content = Symbol("content");
        this[content] = [];
        this.put = function (elt) {
            return this[content].push(elt)
        }
 
        this.take = function () {
            return this[content].shift()
        }
    }
 }
 
 let q = new Queue
 q.put(1)
 q.put(2)
 console.log(q.take())
 console.log(q.take())

 //7.1 Дан массив, выведите его элементы последовательно на экран в обратном порядке.

let arr = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'];
arr.reverse();
for (let curr of arr){
    alert(curr);
}

//7.2 Дан массив с числами, найдите сумму элементов этого массива.

let arr = [1, 2, 3, 4, 5];
var sum = 0;
for (let curr of arr){
    sum += curr;
}
alert(sum);

//7.3 Дана строка. С помощью for-of подсчитайте количество букв 's' в ней.

let str = 'Given a string. Using for-of, count the number of letters in it.';
let i = 0;
for (let symb of str) {
    if (symb == 's') {i++};
}
alert(i);
