'use strict';

// 1. variable : 변수로 할당된 후 변경될 수 있는 값
// let : Mutable 타입 (read & wirte)
// {} block scope  : 블럭 안에 코드를 넣으면 블럭 밖에서는 볼 수 없음
// global scope : 글로벌 스콥은 어느 곳에서나 볼 수 있음, 글로벌한 변수는 항상 메모리에 탑재되므로 최소한으로 사용

let globalName = 'globalName';
{
  let name = 'eunyoung';
  console.log(name);
  name = 'Hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// 2. contants : 한번 할당하면 절때 바뀌지 않는 값, 보안성이 우수함
/// const : Immutable 타입 (read only)

const daysInweek = 7;

// 3. variable types
/// primittive : 더 이상 작은 단위로 나눠질 수 없는 single item
/// >> number, string, boolean, null, undefiedn, symboll
/// object type : single item들을 여러개 묶어서 한 단위, 한 박스로 관리할 수 있게 해줌
/// >> box container
/// function : 변수에 할당 가능, 함수의 파라미터 인자로 전달 가능, 함수의 리턴 타입으로 function을 전달 가능
/// >> frist-class function

// ## number
const count = 17;
const size = 17.1;

console.log(`value : ${count}, type: ${typeof count}`);
console.log(`value : ${size}, type: ${typeof size}`);
/// 출력값 : 정수도 소수점도 모두 number 타입으로 출력
/// >> value : 17, type: number
/// >> value : 17.1, type: number

/// number = infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);
/// 출력값
/// >> Infinity
/// >> -Infinity
/// >> NaN

// ## string
const brenden = 'btrenden';
const greeting = 'Hello' + brenden; // + 기호를 사용해도 무방함
console.log(`value: ${greeting}, type: ${typeof greeting}`); // 백틱 기호`` + ${}를 사용하면 +기호보다 간편함
/// 출력값 : value: Hellobtrenden, type: string

const HelloBob = `hi ${brenden}!`;
console.log(`value: ${HelloBob}, type:${typeof HelloBob}`);
/// 출력값 : value: hi btrenden!, type:string

// ## boolean : 참과 거짓
/// false : 0, null, undefinded, NaN, ''
/// true : 어떤 정의된 값
const canRead = true;
const test = 3 < 1;

console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);
// 출력값
// value: true, type: boolean
// value: false, type: boolean

// ## null : 값이 텅텅 빈 상태
let noting = null;
console.log(`value: ${noting}, type: ${typeof noting}`);
// 출력값 : value: null, type: object

// ## undefiedn : 값이 할당되지 않은 상태
let x;
console.log(`value: ${x}, type: ${typeof x}`);
// 출력값 : value: undefined, type: undefined

// ## symboll : 고유한 식별자를 사용할 때 활용
const symboll1 = Symbol('id'); // 동일한 스트링을 작성해도 다른 심볼로 인식됨
const symboll2 = Symbol('id');
console.log(symboll1 === symboll2);
/// 출력값 : false

const gsymboll1 = Symbol.for('id'); // .for 을 사용하여 주어진 스트링에 맞는 심볼을 만들어달라는 의미
const gsymboll2 = Symbol.for('id');
console.log(gsymboll1 === gsymboll2);
/// 출력값 : true

console.log(`value: ${symboll1.description}, type: ${typeof symboll1}`); // 심볼 변수 사용시 변수 뒤에 .description을 사용해서 스트링으로 변환 후 출력해야 함
/// 출력값 : value: id, type: symbol

// ## object : 물건, 물체들을 대표할 수 있는 박스 형태
/// const eunyoung = { name: 'eunyoung', age: 20 }; //eunyoung 이라는 object를 만들어서 이름은 eunyoung 이고 나이는 20살이다, const로 정의했으므로 다른 오브젝트로 할당이 불가능함
/// eunyoung.name = michelle; //.name 으로 사용시 값은 변경 가능
/// eunyoung.age = 21; //.age 으로 사용시 값은 변경 가능
/// console.log(`${eunyoung.name}, ${eunyoung.age}`); // ?? 값이 변경되었음을 어떻게 확인하는지.

// 4. Dynamic typing : 프로그램이 동작할 때 할당된 값에 따라서 타입이 변경될 수 있음
let text = 'hello';
/// console.log(text.charAt(0)); // text.charAt(0) 의 변수 문의
/// 출력값 : h
/// 배열은 0,1,2,3..순으로 매겨짐
/// 0은 첫번째 이므로 h로 출력됨

console.log(`value: ${text}, type: ${typeof text}`);
/// 출력값 : value: hello, type: string

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
/// 출력값 : value: 1, type: number
/// number만 있는 경우 number로 인식

text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
/// 출력값 : value: 75, type: string
/// string + number = string 으로 인식

text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
/// 출력값 : value: 4, type: number
/// string / string = 나누기 연산으로 number로 인식
