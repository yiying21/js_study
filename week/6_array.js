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

// c) forEach 사용 (자주 사용!!!)
// forEach는 배열 안에 들어있는 value 들마다 내가 전달한 함수를 출력한다

fruits.forEach(function (fruit, Index, array) {
  // Array는 보통 받아오지 않음
  console.log(fruit, Index);
});

// 이름이 없는 function은  => 함수 사용가능 >> 사용시 아래처럼 변경 가능
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy (추가, 삭제, 복사)

// 아이템을 맨 뒤에 배열하고 싶을 때 : .push()
fruits.push(`🥭`, `🍑`);
console.log(fruits);

// 배열에서 맨 뒤에 있는 아이템을 삭제하고 싶을 때 : .pop()
fruits.pop();
fruits.pop(); // 하나를 더 빼고 싶으면 추가
console.log(fruits);

// 맨 앞에서부터 아이템을 넣고 싶을 때 : .unshift()
fruits.unshift(`🥭`, `🍑`);
console.log(fruits);

// 맨 앞에서부터 아이템을 빼고 싶을 때 : .shift()
fruits.shift();
fruits.shift(); // 하나를 더 빼고 싶으면 추가
console.log(fruits);

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
