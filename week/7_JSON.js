'use strict';

// HTTP : Hypertest Transfer Protocal
// - 클라이언트가 서버에서 요청(request)하고, 서버는 클라이언트가 요청한 것에 맞는 응답(response)을 보내준다
// - 브라우저가 서버와 통신하기 위해서는 XMLHttpRequest, fetch() API 를 사용할 수 있음

// JSON : JavaScript Object Notation 의 약자로 데이터 포맷의 하나
// - 데이터를 주고 받을 떄 쓸 수 있는 가장 간단한 파일 포맷
// - 텍스트를 기반으로 하여 가벼움
// - 읽기에 편함
// - key 와 value로 이루어진 파일 포맷
// - 데이터를 서버와 주고 받을 때 직렬화 및 데이터 전송을 위해 사용
// - 프로그래밍 언어나 플랫폼에 상관없이 사용할 수 있음

// 1. Obeject -> JSON으로 변환하는 방법 : stringfy(obj)
let json = JSON.stringify(true);
console.log(json); // 출력값 : true

json = JSON.stringify(['apple', 'banana']);
console.log(json); // 출력값 : ["apple","banana"]

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    // 함수는 오브젝트에 있는 데이터가 아니기 때문에 제외 // Symbol 도 제외됨
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json); // 출력값 : {"name":"tori","color":"white","size":null,"birthDate":"2022-03-28T06:42:54.346Z"}

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json); // 출력값 : {"name":"tori","color":"white","size":null}

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value; // key가 name이 들어오면 무조건 ellie 라는 value로 설정하고, key가 name이 아니면 원래 value를 쓴다
});
console.log(json);

// 2. JSON -> Obeject로 변환하는 방법 : parse(json) // JSON.parse(변환하고 싶은 json)
json = JSON.stringify(rabbit); // rabbit을 JSON으로 변환하기
const obj = JSON.parse(json, (key, value) => {
  // key, value에 파라미터를 받아서 key, value를 콜백한다.
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value; // 만약 key가 birthDate면 birthDate를 new Date라는 새로운 오브젝트를 만들고 아니면 원래 value를 쓴다
});
console.log(obj);
rabbit.jump(); // 이전에 JSON으로 변환한 오브젝트는 함수가 포함되지 않으므로 유의

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

// 유용한 사이트
// json Diff (http://www.jsondiff.com/) : 차이점 확인하기
// json Beautifier (https://jsonbeautifier.org/) : 서버에서 받은 json를 예쁜 포맷으로 변경하기
// json Parser (https://jsonparser.org/) : json 타입을 오브젝트 타입으로 보고 싶을 때
// json Validator (https://tools.learningcontainer.com/json-validator/) : json 파일이 유효한 데이터인지 확인
