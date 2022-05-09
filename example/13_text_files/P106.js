'use strict';

import fs from 'fs';

// 문제106) ‘Names.txt’라는 이름의 새로운 파일을 생성한다. 다섯 명의 이름을 한 줄에 하나씩 문서에 추가한다.
// 프로그램을 실행한 후에 이 프로그램이 저장된 위치에 해당 파일이 제대로 생성되었는지 확인하라.

const file = 'Names.txt';
const data = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE'];

// 'Names.txt’라는 이름의 새로운 파일을 생성하여 연다 (비동기 메서드 : open() 사용)
fs.open(file, 'w', (err, fd) => {
  if (err) throw err;
  console.log('Create a new file named "Names.txt"');
});

// 다섯 명의 이름을 한 줄에 하나씩 문서에 추가한다 (비동기 메서드 : appendFile() 사용)
data.forEach((value) => {
  const add = value + '\n';
  fs.appendFile(file, add, (err) => {
    if (err) throw err;
    console.log('A name was added to the file.');
  });
});

// 파일 닫기는 어떻게..?
// fs.close(fd,(err) => console.log(err));

// 파일에 쓰기시 사용되는 메서드
// - 비동기식 메서드 : writeFile()
// - 동기식 메서드 : writeFileSync()

// 동기식 메서드 : writeFileSync().. 이게 왜 안될까..
// try {
//   const file = 'Names.txt';
//   const data = 'A\nB\nC\nD\nE';
//   fs.writeFileSync(file, date);
// } catch (err) {
//   console.log(err);
// }

// try...catch 문은 실행할 코드블럭을 표시하고 예외(exception)가 발생(throw)할 경우의 응답을 지정
