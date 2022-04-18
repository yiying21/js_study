'use strict';

// async ? 체이닝된 여러개의 promise 를 좀 더 간결하게 만들 때 사용

// 1. async 사용해보기

// promise 사용 코드 ↓
// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     resolve('ellie');
//   });
// }

// async 사용 코드 ↓
async function fetchUser() {
  // async를 함수 앞에 쓰면 코드 블록이 자동으로 promise로 바뀐다.
  return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await : async가 붙은 함수 안에서만 사용 가능
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms)); // delay라는 함수는 promise를 리턴하는데, 정해진 ms(1초)가 지나면 resolve를 호출한다
}

async function getApple() {
  await delay(1000); // await를 사용하여 1초를 기다린 후 사과를 리턴한다
  //   throw 'error'; // 에러를 발생 시키는 코드
  return '🍎';
}

async function getBanana() {
  await delay(1000); // await를 사용하여 1초를 기다린 후 바나나를 리턴한다
  return '🍌';
}

// 사과와 바나나를 동시에 가져오고 싶을 때
async function pickFruits() {
  // 병렬로 기능을 수행하는 코드 ↓
  const appplePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await appplePromise; // apple을 1초 동안 기다리고
  const banana = await bananaPromise; // banana를 1초 동안 기다리고
  return `${apple} + ${banana}`; // apple 과 banana를 묶어서 리턴한다

  // promaise 사용 코드 ↓
  //   return getApple().then((apple) => {
  //     // getAppl()을 먼저 부른다음 getAppl()이 받아와지면
  //     return getBanana().then((banana) => `${apple}+${banana}`); // getAppl()을 이용해서 getBanana()을 받아온다. 그 다음 apple 과 banana를 묶어서 리턴한다
  //   });

  // async와 await 사용 코드 ↓
  //   const apple = await getApple(); // apple을 1초 동안 기다리고
  //   const banana = await getBanana(); // banana를 1초 동안 기다리고
  //   return `${apple} + ${banana}`; // apple 과 banana를 묶어서 리턴한다
}

pickFruits().then(console.log); // pickFruits()이 다 받아와지면 콘솔 로그에 출력한다

// 3. Useful Promise APIs : Promise.all([]) 사용하여 병렬 기능을 간단하게 작성할 수 있다
// Promise.all([]) : 모든 promise가 병렬적으로 다 받을 때까지 모아주는 API
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]) // 배열 형태로 getApple(), getBanana()의 promise를 전달하게되면
    .then(
      (fruits) => fruits.join(' + ') // getApple(), getBanana() 배열이 다 받아지면 fruits로 전달이 되고, 배열을 스트링으로 묶을 수 있는 .join()을 이용한다
    );
}

pickAllFruits().then(console.log); // pickAllFruits()이 성공적으로 받아지면 콘솔 로그로 출력한다

// Promise.race([]) : 배열에 전달된 promise 중에서 가장 먼저 값을 리턴하는 아이만 전달하는 API
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);

// 4. callback-to-promise
// async & await를 이용한 코드 ↓
class UserStorage {
  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async loginUser(id, password) {
    await this.delay(2000);
    if (
      (id === 'ellie' && password === 'dream') ||
      (id === 'coder' && password === 'academy')
    ) {
      return id;
    } else {
      throw 'not found';
    }
  }

  async getRoles(user) {
    await this.delay(1000);
    if (user === 'ellie') {
      return { name: 'ellie', role: 'admin' };
    } else {
      throw 'no access';
    }
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

async function findUserRole() {
  const user = await userStorage.loginUser(id, password);
  const userInfo = await userStorage.getRoles(user);
  return alert(`Hello ${userInfo.name}, you have a ${userInfo.role} role!`);
}

findUserRole().then().catch(console.log);

// 기존 promise 코드 ↓
// class UserStorage {
//   loginUser(id, password) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (
//           (id === 'ellie' && password === 'dream') ||
//           (id === 'coder' && password === 'academy')
//         ) {
//           resolve(id);
//         } else {
//           reject(new Error('not found'));
//         }
//       }, 2000);
//     });
//   }
//   getRoles(user) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (user === 'ellie') {
//           resolve({ name: 'ellie', role: 'admin' });
//         } else {
//           reject(new Error('no access'));
//         }
//       }, 1000);
//     });
//   }
// }

// const userStorage = new UserStorage();
// const id = prompt('enter your id');
// const password = prompt('enter your password');
// userStorage
//   .loginUser(id, password) // userStoragedptj 로그인하고
//   .then(userStorage.getRoles) // 로그인에 성공하면 userStorage의 getRoles를 호출한다
//   .then((user) => alert(`hello ${user.name}, you have a ${user.role} role`)) // 모든게 성공하면 얼럿창을 노출한다
//   .catch(console.log); // 문제가 생기면 콘솔 로그를 출력한다
