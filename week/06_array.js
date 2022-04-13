'use strict';

// 비슷한 타입의 오브젝트들을 묶어 놓는 것을 '자료 구조' 라고 함
// 배열 : 인덱스 0 부터 시작하며 칸칸이 늘어 놓는 것
// 배열의 포인트는 '인덱스'

// 1. Declaration (선언)
const arr1 = new Array();
const arr2 = [1, 2]; // 0번째 인덱스에는 숫자1, 1번째 인덱스에는 숫자2가 들어 있는 배열
console.log(arr2);

// 2. Index position (인덱스 위치)

const fruits = ['🥝', `🍎`];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // 특정 과일을 출력시키기 위해서는 [인덱스 번호 입력]를 사용함, 배열의 첫번째 값을 찾기 위해서는 인덱스 0을 사용
console.log(fruits[fruits.length - 1]); // 배열의 마지막 값을 찾기 위해서는 [변수.length - 1] 를 사용

// 3. Looping over an array (배열에 대한 루핑)
// print all fruits 방법
// a) for 사용
for (let i = 0; i < fruits.length; i++) {
  // i가 0부터 시작해서 fruits의 길이 3까지 조건 체크
  console.log(fruits[i]); // fruits의 인덱스 i 를 받아서 출력
}

// b) for of 사용
for (let fruit of fruits) {
  // let fruit 라는 변수에 fruits 안에 들어있는 데이터를 한번씩 순차적으로 할당하여 다음 블럭 실행
  console.log(fruit);
}

const array4 = ['a', 'b', 'c'];
for (const element of array4) {
  console.log(element);
}
// expected output: "a"
// expected output: "b"
// expected output: "c"

// c) forEach 사용 (자주 사용!!!)
// forEach는 배열 안에 들어있는 value 들마다 내가 전달한 함수를 출력한다

fruits.forEach(function (fruit, Index, array) {
  // Array는 보통 받아오지 않음
  console.log(fruit, Index);
});

// 이름이 없는 function은  => 함수 사용가능 >> 사용시 아래처럼 변경 가능
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy (추가, 삭제, 복사)

// 아이템을 맨 뒤에 추가 배열하고 싶을 때 : .push()
fruits.push(`🥭`, `🍑`);
console.log(fruits);

// .push() 예시
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count); // 출력값: 4
console.log(animals); // 출력값: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals); // 출력값: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

// 배열에서 맨 뒤에 있는 아이템을 삭제하고 싶을 때 : .pop()
fruits.pop();
fruits.pop(); // 하나를 더 빼고 싶으면 추가
console.log(fruits);

// .pop() 예시
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop()); // 출력값: "tomato"
console.log(plants); // 출력값: Array ["broccoli", "cauliflower", "cabbage", "kale"]
plants.pop();
console.log(plants); // 출력값: Array ["broccoli", "cauliflower", "cabbage"]

// 맨 앞에서부터 아이템을 넣고 싶을 때 : .unshift()
fruits.unshift(`🥭`, `🍑`);
console.log(fruits);

// 맨 앞에서부터 아이템을 빼고 싶을 때 : .shift()
fruits.shift();
fruits.shift(); // 하나를 더 빼고 싶으면 추가
console.log(fruits);

// .shift() 예시
const array3 = [1, 2, 3];
const firstElement = array3.shift();
console.log(array3); // 출력값: Array [2, 3]
console.log(firstElement); // 출력값: 1

// 여기서 중요한 포인트는 shift 와 unshift 는 push 와 pop 보다 느리다!
// shift는 빼고 더할 때 이전 배열을 당겨와야 하기 때문에 배열 길이가 길수록 느려질 수 있다.

// 아이템을 지정된 포지션에서 삭제하고 싶을 떄 : .splice()
fruits.push(`🥭`, `🍑`, `🍋`);
console.log(fruits);

fruits.splice(1, 1); // 문법 : .splice(시작하는 인덱스 번호, 삭제할 개수 입력), 삭제할 개수 미입력시 시작하는 인덱스 번호부터 모두 삭제됨
console.log(fruits);
fruits.splice(1, 1, `🍎`, `🍉`); // 인덱스 1번의 과일을 삭제하고, 사과와 수박을 추가해줘.
console.log(fruits);

// 두가지의 배열을 묶어서 만들고 싶을 때 : .concat()
const fruit2 = [`🍐`, `🥥`]; // 새로운 배열을 만들고
const newFruits = fruits.concat(fruit2); // newFruits 라는 새로운 변수에 .concat(새로운 배열의 변수명)를 사용하여 리턴
console.log(newFruits);

// 5. Searching (검색)
// 배열안에 어떤 아이템이 몇 번째 인덱스에 있는지 알고 싶을 때 : .indexOf(검색할 아이템명)

console.log(fruits);
console.log(fruits.indexOf(`🥝`));
console.log(fruits.indexOf(`🍉`));
console.log(fruits.indexOf(`🍔`)); // 배열에 해당 아이템이 없을 때 .indexOf() 사용시 -1를 출력함

// 배열에 해당 아이템이 있는지 없는지 알고 싶을 때  : .includes() >> true 또는 false로 리턴
console.log(fruits.includes(`🍉`)); // 수박은 있으므로 true
console.log(fruits.includes(`🍔`)); // 햄버거는 없으므로 false

// 제일 마지막에 인덱스 번호를 알고 싶을 때 : .lastIndexOf()
fruits.push(`🥝`);
console.log(fruits);
console.log(fruits.indexOf(`🥝`)); // 제일 첫번째에 해당하는 값을 만나면 리턴함
console.log(fruits.lastIndexOf(`🥝`)); // 제일 마지막에 해당하는 값을 만나면 리턴함

// 주어진 배열을 string으로 변환하기 : .join()
// .join() : 배열에 있는 모든 아이템을 더해서 string으로 리턴하는데 ()괄호 안에 구분자(콤마 등)를 넣어도 된다.
const fruits1 = ['apple', 'banana', 'orange'];
const result = fruits1.join(', and ');
console.log(result); // 출력값 : apple, and banana, and orange

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join()); // 출력값: "Fire,Air,Water"
console.log(elements.join('')); // 출력값: "FireAirWater"
console.log(elements.join('-')); // 출력값: "Fire-Air-Water"

// 주어진 string을 배열로 변환하기 : .split()
// .split() : 괄호()안에 구분자,limit를 전달함 (limit는 옵션)
const fruits2 = '🍎, 🥝, 🍌, 🍒'; // 주어진 string이 콤마로 구분되어 있음
const result1 = fruits2.split(',');
console.log(result1); // 출력값 : ['🍎', ' 🥝', ' 🍌', ' 🍒']

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]); // 출력값: "fox"

const chars = str.split('');
console.log(chars[8]); // 출력값: "k"

const strCopy = str.split();
console.log(strCopy); // 출력값: Array ["The quick brown fox jumps over the lazy dog."]

// 배열을 거꾸로 만들기 : .reverse();
const array = [1, 2, 3, 4, 5];
const result2 = array.reverse();
console.log(result2); // 출력값: [5, 4, 3, 2, 1]

const array1 = ['one', 'two', 'three'];
console.log('array1:', array1); // 출력값: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed); // 출력값: "reversed:" Array ["three", "two", "one"]

// 방향 변경 이후 부터는 변경된 배열로 계속 노출되므로 주의!!
console.log('array1:', array1); // 출력값: "array1:" Array ["three", "two", "one"]

// 주어진 배열에서 첫번째, 두번째 배열을 제외한 새로운 배열 만들기 : .splice(); // .slice()
// splice(삭제를 시작할 인덱스 번호, 삭제할 개수), splice는 배열 자체를 수정하여 리턴하는 함수
// slice(삭제할 시작 인덱스 번호, 마지막 인덱스 번호) 단, 마지막 인덱스 번호는 제외되므로 +1 해줘야 함, slice는 배열에서 원하는 부분만 리턴하는 함수
const array2 = [1, 2, 3, 4, 5];
const result3 = array2.slice(2, 5); // 인덱스 번호 2부터 5까지 배열하겠다.(여기서 번호 5까지 노출시키려면 인덱스 번호 4에서 +1 해서 5로 입력해야 함)
console.log(result3); // 1, 2가 삭제된 3,4,5로 출력

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];
// 학생의 점수가 90점인 학생을 찾아라 : .find()
const result4 = students.find((student) => student.score === 90);
console.log(result4); // 출력값 : Student {name: 'C', age: 30, enrolled: true, score: 90}

// 학생들중 수업에 등록한 학생만 배열로 만들어라 : .filter()
const result5 = students.filter((student) => student.enrolled);
console.log(result5); // 출력값 : [Student, Student, Student]

// 학생들의 배열에서 점수만 뽑아서 점수 배열을 만들어라 (예시 result should be: [45, 80, 90, 66, 88]) : .map()
const result6 = students.map((student) => student.score);
console.log(result6); // 출력값 : [45, 80, 90, 66, 88]

// 학생들 중에 점수가 50점보다 낮은애가 있는지 없는지 확인해라 : .some() /.every()
// .some() : 하나라도 조건에 맞다면 true 를 리턴
// .every() : 배열에 모든 요소들이 맞아야 true 를 리턴
const result7 = students.some((student) => student.score < 50);
const result8 = !students.every((student) => student.score >= 50); // ! <<앞에 느낌표 사용시 리턴값의 반대를 출력
console.log(result7); // 출력값 : true
console.log(result8); // 출력값 : false

// 학생들의 평균 점수를 구하라 : .reduce() : 우리가 원하는 시작점부터 모든 배열을 돌면서 더하여 값을 누적할 때 사용
const result9 = students.reduce((prev, curr) => prev + curr.score, 0); // 시작값은 0으로 지정해줘야 함
// prev 는 이전에 콜백 함수에서 리턴된 값이 전달, curr는 배열의 아이템을 순차적으로 전달받는다
console.log(result9 / students.length); // 출력값 : 73.8

// 학생들의 모든 점수를 string을 변환하라 (예시  result should be: '45, 80, 90, 66, 88')
const result10 = students
  .map((student) => student.score) // 점수만 뽑아서
  .filter((score) => score >= 50) // 50점 이상인 점수만 뽑아서
  .join(); // 배열에 있는 모든 아이템을 더해서 string으로 리턴해라
console.log(result10);

// 학생들의 점수를 낮은 점수순으로 string으로 변환하라 : .sort()
const reduce11 = students
  .map((student) => student.score) // 점수만 뽑아서
  .sort((a, b) => a - b) // 낮은 점수순으로
  .join(); // 배열에 있는 모든 아이템을 더해서 string으로 리턴해라
console.log(reduce11);
