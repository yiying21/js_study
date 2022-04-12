'use strict';

// javascript is synchronous. (자바스크립트는 동기식이다)
// Execute the code block by orger after hoisting. (호스팅 후 작성한 코드가 동기적으로 실행된다)
// hoisting? 변수, 함수 선언들이 제일 위로 올라가는 것

// 동기적인 실행 방법
console.log('1');
console.log('2');
console.log('3');

// 콜백을 넣어 비동기적인 실행 방법
console.log('1'); // 동기
setTimeout(() => console.log('2'), 1000); // 비동기 : setTimeout api 를 사용하여 브라우저에게 1초 뒤에 전달해준 콜백을 실행해라.
console.log('3'); // 동기

// Synchronous callback (동기적 콜백)
function printImmediately(print) {
  // 함수 선언이 제일 위로 올라가고
  print();
}

// Asynchronous callback (비동기적 콜백)
function printWithDelay(print, timeout) {
  // 함수 선언이 제일 위로 올라가고
  setTimeout(print, timeout);
}

printImmediately(() => console.log('hello')); // 동기
printWithDelay(() => console.log('async callback'), 2000); // 비동기 : 2초 뒤 async callback 출력
// 출력값 : console.log('1'); -> console.log('3'); -> console.log('hello') 순서로 출력 -> 1초 뒤 console.log('2') -> 2초 뒤 async callback 출력

// 콜백 지옥 예제 : 콜백 체인이 길어질수록 어디서 문제가 발생했는지 찾기 어렵다.
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
