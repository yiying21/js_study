'use strict';

// Promise ? (promise는 자바스크립트에 내장된 오브젝트의 일종으로 비동기적으로 콜백 함수 대신 유용하게 쓸 수 있는 오브젝트 )
// Promise 의 상태 : promise가 만들어져서 수행중일 때 pending 상태 -> 성공적으로 끝내면 fulfilled 상태 or 문제가 있을 때 rejected 상태
// Producer vs Consumer
// promise = class

// 1. Producer (Promise 만들기)
// 새로운 Promise가 만들어질 때에는 우리가 전달한 executor 라는 콜백 함수가 바로 자동 실행됨
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie');
    // reject(new Error('어떤 에러가 발생했는지 입력')); // 자바스크립트에서 제공하는 오브젝트 Error 사용
  }, 2000);
});

// 2. Consumer (Promise 사용하기) : then, catch, finally를 이용해 값을 받아올 수 있음
promise //
  .then((value) => {
    console.log(value); //성공한 값 : 위 resolve의 파라미터가 전달됨
  })

  .catch((error) => {
    console.log(error); // 실패한 값 : 위  reject의 파리미터가 전달됨
  })
  .finally(() => {
    console.log('finally'); // 성공과 실패 상관없이 위 기능을 마지막으로 한 번더 수행하고 싶을 때 사용
  });

// 3. Promise chaining (Promise 연결하기)
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber // then은 값을 바로 전달해도 되고, 또 다른 비동기인 Promise를 전달해도 된다.
  .then((num) => num * 2) // num 에 resolve(1) 이 전달되서 1*2 = 2가 전달
  .then((num) => num * 3) // num에 2가 전달되어 2*3 = 6이 전달
  .then((num) => {
    // 6이 전달되고, 새로운 promise가 전달됨
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000); // 6-1 = 5가 전달
    });
  })
  .then((num) => console.log(num)); // 출력값 : 2초뒤 5

// 4. Error handling (오류를 잘 처리 하자)
// 총 3개의 promise 로 구성
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`🐓`), 1000); // 1초 후 암탉을 리턴하는 promise
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen}=> 🥚`), 1000); // 암탉을 받아와서 1초 후 달걀을 리턴하는 promise
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000); // 달걀을 받아오다가 에러 발생
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg}=> 🍳`), 1000); // 달걀을 받아와서 1초 후 달걀프라이를 리턴하는 promise
  });

getHen() // 암탉을 받아오고나서
  .then((hen) => getEgg(hen)) // 전달받은 닭을 이용해서 getEgg() 함수를 호출
  .then((egg) => cook(egg)) // 받아온 달걀을 가지고 cook() 함수를 호출
  .then((meal) => console.log(meal)); // 요리된 음식 문자열을 콘솔 로그에 출력

// 하나만 호출하는 경우 아래와 같이 생략하여 간단하게 입력 가능
getHen() //
  .then(getEgg)
  .catch((error) => {
    return '🍞'; // 달걀을 받아올때 문제가 생긴 경우 문제가 발생하지 않도록 빵으로 대체해서 리턴함
  })
  .then(cook)
  .then(console.log)
  .catch(console.log); // 달걀에서 에러가 발생했으나 에러가 제일 밑으로 전달되면서 catch가 잡혀짐

// 5. callback-to-promise : preomise로 간단하게 만들기
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'ellie' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'ellie') {
          resolve({ name: 'ellie', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage
  .loginUser(id, password) // userStoragedptj 로그인하고
  .then(userStorage.getRoles) // 로그인에 성공하면 userStorage의 getRoles를 호출한다
  .then((user) => alert(`hello ${user.name}, you have a ${user.role} role`)) // 모든게 성공하면 얼럿창을 노출한다
  .catch(console.log); // 문제가 생기면 콘솔 로그를 출력한다
