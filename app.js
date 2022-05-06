// Prototype
const car ={
    name: "BMW",
    color: 'black',
    extraBalon: 5,
    speed: function() {
        console.log("100 km/h");
    }
}

Object.prototype.sayHello = function(){
    console.log('Hello world');
}

const bus = Object.create(car);
bus.name = "MAN";
bus.extraBalon = 10;

const str = new String('New prototype');



//ES6

/*class Car {
    static type = 'CAR';
    constructor(options){
        this.name = options.name;
        this.isAirBag = options.isAirBag;
        this.extraBalon = options.extraBalon;
    }
    speed(){
        console.log('100 km/h');
    }
}

const BMW = new Car({
    name: 'BMW',
    isAirBag: true,
    extraBalon: 2
})

class Bus extends Car {
    constructor(options){
        super(options);
        this.weight = options.weight;
    }
    speed(){
        super.speed();
        console.log('50 km/h');
    }

    get extraBalonInfo(){
        return this.extraBalon * 3;
    }

    set extraBalonInfo(newValue){
        this.extraBalon = newValue;
    }
}

const Man = new Bus ({
    name: 'Man',
    isAirBag: false,
    extraBalon: 3,
    weight: '40.000 kg'
})*/

// 

/*class Component{
    constructor(selector){
       this.$el = document.querySelector(selector);
    }

    showElement(){
        this.$el.style.display = 'block';
    }

    hideElement(){
        this.$el.style.display = 'none';
    }
}

class Square extends Component {
    constructor(options){
        super(options.selector);
        this.$el.style.width = this.$el.style.height = options.size + 'px';
        this.$el.style.background = options.color;
    }
}

const square1 = new Square({
    selector: "#square1",
    size: 100,
    color: "crimson"
})

const square2 = new Square({
    selector: "#square2",
    size: 100,
    color: "coral"
})

class Circle extends Square {
    constructor(options){
        super(options);
        this.$el.style.borderRadius = '50%';
    }
}

const circle1 = new Circle({
    selector: "#circle1",
    size: 100,
    color: "red"
})

const circle2 = new Circle({
    selector: "#circle2",
    size: 100,
    color: "yellow"
})*/

/*function calcFunction(number){
    return function() {
        console.log(10 * number);
    }
}

const calc = calcFunction(8);
calc();*/

/*function calcFunction(number) {
    return function (n) {
        return n * number;
    }
}

const multTen = calcFunction(2);
const multTwenty = calcFunction(3);

console.log(multTen(20));
console.log(multTen(30));
console.log(multTwenty(40));
console.log(multTwenty(50));*/


/*function urlGenerator(domain) {
    return function (host) {
        return `http://${host}.${domain}`;
    }
}

const comUrl = urlGenerator('com');
console.log(comUrl('google'));
console.log(comUrl('netflix'));
console.log(comUrl('instagram'));
console.log(comUrl('twitter'));

const ruUrl = urlGenerator('ru');
console.log(ruUrl('mail'));
console.log(ruUrl('yandex'));
console.log(ruUrl('ok'));*/


/*function bind(context, fn){
    return function(...args){
        fn.apply(context, args);
    }
}

function personInfo(){
    console.log(
        `Name: ${this.name},
         Age: ${this.age},
         Job: ${this.job}`
    )
}
const hayrullo = {
    name: 'Hayrullo',
    age: 19,
    job: 'UX Designer'
}

const abdulhamid = {
    name: 'Abdulhamid',
    age: 19,
    job: 'Full-stack Dev'
}    

bind(hayrullo, personInfo)();
bind(abdulhamid, personInfo)();*/


//local  storage
/*const number = 8;

localStorage.removeItem('number');
console.log(localStorage.getItem('number'));
localStorage.setItem('number', number.toString());
console.log(localStorage.getItem('number'));
localStorage.setItem('number', number.toString());
localStorage.clear();*/

/*const person = {
    name: 'Abdulhamid',
    age: 19
}

localStorage.setItem('person', JSON.stringify(person));
const localData = localStorage.getItem('person');
const personInfo = JSON.parse(localData);

personInfo.name = 'Yusuf';
console.log(personInfo);

localStorage.setItem('updatedPerson', JSON.stringify(personInfo));*/
/*console.log(localData);*/
//JSON bu server orqali biror narsani yuvorish;
/*const json = JSON.stringify(person);
console.log('obj to json', json);

const obj = JSON.parse(json);
console.log('json to obj', obj);*/


/*function uzb() {
    console.log(this);
}
// object ichidagi this objectni o'ziga teng. 
const person = {
    name1: 'Abdulkhamid',
    age: 19,
    job: 'Front-End Dev',
    callContext: uzb,
    callAnotherContext: uzb.bind(this),
    callInfoJob: function (number) {
        console.group(`${this.name1}.info:`);
        console.log(`My name is ${this.name1}`);
        console.log(`My age is ${this.age}`);
        console.log(`My job is ${this.job}`);
        console.log(`My contact is ${ number}`)
        console.groupEnd();
    }
}
//call, apply
const backEndDev = {
    name1: 'Bilol',
    age: 20,
    job: 'Back-End Dev',
    contact: +82-516-150-9999
}

const fullInfo = person.callInfoJob.bind(backEndDev, '+82-516-150-9999');
person.callInfoJob.apply(backEndDev, ['+82-516-150-9999']);
person.callInfoJob.call(backEndDev, '+82-516-150-9999')*/

/*const array = [10, 20, 30, 40, 50];

Array.prototype.multBy = function (number) {
    return this.map(function (i) {
        return i*number;
    })
}
console.log(array.multBy(2));*/

/*let chooseBtn = document.getElementById("choose"),
    receiveBtn = document.getElementById("receive"),
    form = document.getElementsByClassName("input"),
    modal = document.querySelector(".modal"),
    text = document.getElementsByTagName("h2"),
    btn = document.querySelectorAll('.main_tel_title'),
    closeBtn = document.querySelector(".close");



text.addEventListener('mouseenter', function () {
    text.textContent = 'Выключено';
})
text.addEventListener('mouseleave', function() {
    text.textContent = 'Включено';
})


receiveBtn.addEventListener('click', function(){
    modal.style.display = 'block';
})
closeBtn.addEventListener('click', function (){
    modal.style.display = 'none';
})*/

//just practice
/*function myFirstApp(name, age) {
    alert(`Hi my name is ${name} and I am full-stack developer`)
     
    function showSkills() {
        let skills = ['html', 'css', 'javascript'];
        for (i = 0; i < skills.length; i++){
            alert(`You know a ${skills[i]}.`);
        }
    }
    showSkills();
    
    function checkAge() {
       if(age > 18){
           alert(`Exactly data for learning IT`);
       }else{
           alert(`Super data for learning IT`);
       } 
    }
    checkAge()
    
    function calcPow(num) {
        return num * num;
    }
    console.log(calcPow(5));


}
myFirstApp('Abdulkhamid', '19');*/



//decloration function
/*let num = 5;
function myFunction(age) {
    let num = 10;
    num++;
    console.log(num);
    console.log(`Hi I am ${age} years old.`);
}
myFunction('20');
console.log(num);*/


//expression function
/*let myFunc = function () {
    console.log('Hi my name is Abdulkhamid');
}
myFunc();*/


//if else and switch case
/*let age = prompt('Yoshingiz nechida?');
if (age < 18){
    alert('Xali vaqtli');
}else if(age > 80){
    alert('Endi kech');
}else{
    alert('Xush keldingiz');
}*/


/*switch(age){
    case '18':
        alert('Welcome to website');
        break;
    case '50':
        alert('You are old');
        break;
    default:
            alert('Sizi yoshiz nomalum');    
}*/


//practice number 1
/*let answers = [];
let questions = [
    'what is your name',
    'where are you from',
    'how old are you'
]

for (let i = 0; i < questions.length; i++){
    answers[i] = prompt(questions[i]);
}

console.log(answers);*/

// practice number2
/*let answers = [];
let questions = [
    'what is your name',
    'where are you from',
    'how old are you'
]
let i = 0;
do {
    answers[i] = prompt(questions[i]);
    console.log(answers);
    i++
}while(i < questions.length);*/

//practice number 3
/*let answers = [];
let questions = [
    'what is your name',
    'where are you from',
    'how old are you'
]
let i = 0;
while (i < questions.length){
    answers[i] = prompt(questions[i]);
    console.log(answers);
    i++
}*/



//first way
/*for (let i = 0; i < 10; i++) {
    console.log(i);
}*/

//second way
/*let i = 0;
do{
   console.log(i);
   i++
}while(i < 10)*/

//third way
/*let i = 0;
while (i < 10) {
    console.log(i);
    i++
}*/
