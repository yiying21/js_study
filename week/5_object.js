'use strict';

// Objects를 만드는 방법
// Objects = {key : value} 의 집합체 // {우리가 접근할 수 있는 변수, 변수가 가지고 있는 값}으로 이루어짐

// 1. Literals and propeties
const obj1 = {}; // {} 를 활용 // Obeject lieral 문법
const obj2 = new Object(); // 'new'라는 키워드를 사용하여 class 탬플릿을 활용 // Object constructor 문법

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

ellie.hasjob = true; // hasjob를 true로 선언하면
console.log(ellie.hasjob); // 오브젝트에 hasjob이라는 타입을 추가할 수도 있고,
delete ellie.hasjob; // 삭제할 수도 있다
console.log(ellie.hasjob); // 가능하면 피해서 코딩

// 2. Computed properties (계산된 속성)
console.log(ellie.name); // .를 사용하여 오브젝트 변수를 입력 // 일반적인 코딩시 . 을 사용함
console.log(ellie['name']); // []을 사용하여 안에 오브젝트 안에 있는 변수의 이름을 '스트링' 타입으로 넣기 // 정확하게 어떤 키인지 모를 때 사용
ellie['hasjob'] = true;
console.log(ellie.hasjob);

function printValue(obj, key) {
  console.log(obj[key]); // 어떤 키인지 모를 때 [] 사용
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. property value shorthand
const person1 = { name: 'bab', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
// 추가로 동일한 타입을 추가하고 싶을 때 function 사용
const person4 = new Person('ellie', 30);
console.log(person4);

// 4. constructor function (생성자 함수)
function Person(name, age) {
  // 대문자로 시작하도록 함수 만듬
  this.name = name;
  // this = {}; 가 생략
  this.age = age;
  // return this; 가 생략
}

// 5. in operator : property existence check (key in obj) // 해당하는 오브젝트에 키가 있는지 없는지 확인하는 것
// true 와 false로 출력
console.log('name' in ellie); // 출력값 : true
console.log('age' in ellie); // 출력값 : true
console.log('random' in ellie); // 출력값 : false
console.log(ellie.random); // 출력값 : undefined

// 6. for..in vs for..of
// for(key in obj)
//console.clear();
//for (key in ellie) {
//  // ellie에 속한 키값이 돌때마다 지역변수인 key에 할당된다
//  console.log(key); // 출력값 : name age hasjob
//}
//
//// for(value of iterable)
//const arry = [1, 2, 3, 4];
//for (value of arry) {
//  // arry에 있는 모든 값이 value에 할당되면서 블럭안에서 출력하거나 계산함
//  console.log(value); // 출력값 1 2 3 4
//}

// 6. Fun cloning
// Object.assign()
const user = { name: 'ellie', age: '20' };
const user2 = user; // 동일한 레퍼런스가 들어있음
user2.name = 'coder';
console.log(user);

// 옛날에는..
const user3 = {};
for (key in user) {
  // user안에 있는 key가 뱅글뱅글 돌면서 name과 age가 할당됨
  user3[key] = user[key];
}
console.log(user3);

// 지금은..Object.assign() 사용
const user4 = {};
Object.assign(user4, user);
console.log(user4);
// 또는 아래 내용처럼 간단하게 사용
const user5 = Object.assign({}, user);
console.log(user5);
// 예시
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // 출력값 : blue // 뒤에  붙는 값일 수록 앞에 동일한 변수가 있다면 앞에 값에 덮어씌움
console.log(mixed.size); // 출력값 : big
