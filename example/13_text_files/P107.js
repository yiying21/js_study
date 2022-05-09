'use strict';

import fs from 'fs';

// 문제107) ‘Names.txt’ 파일을 열고 읽어서 데이터를 표시하라.

// ‘Names.txt’ 파일을 연다 (비동기 메서드 : open() 사용)
fs.open('Names.txt', 'r', (err, fd) => {
  if (err) throw err;
  console.log('Opened file "Names.txt".');
});

// 파일을 읽어서 데이터로 표시하라.(비동기 메서드 : readFile() 사용)
fs.readFile('Names.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// 비동기 메서드 : readFile()
// 동기 메서드 : readFileSync(), 반드시 두번째 인자를 "utf8"로 명시하여 인코딩 되도록 해줘야 함
// try {
//   const data = fs.readFileSync('Names.txt', 'utf-8');
//   console.log(data);
// } catch (err) {
//   console.log(err);
// }

//flag 값
// - 'r' - 읽기로 열기. 파일이 존재하지 않으면 에러발생.
// - 'r+' - 읽기/쓰기로 열기. 파일이 존재하지 않으면 에러발생.
// - 'w' - 쓰기로 열기. 파일이 존재하지 않으면 만들어지고, 파일이 존재하면 지우고 처음부터 씀.
// - 'w+' - 읽기/쓰기로 열기. 파일이 존재하지 않으면 만들어지고, 파일이 존재하면 처음부터 씀.
// - 'a' - 추가 쓰기로 열기. 파일이 존재하지 않으면 만들어짐.
// - 'a+' - 파일을 읽고/추가쓰기모드로 열기. 파일이 존재하지 않으면 만들어짐
