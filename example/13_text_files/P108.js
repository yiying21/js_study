'use strict';
import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';
import fs from 'fs';

// 문제108) ‘Names.txt’ 파일을 연다. 사용자에게 새로운 이름을 입력하라고 요청한다.
// 입력된 이름을 파일의 끝에 추가하고(파일에 저장) 전체 파일을 출력하라.

// ‘Names.txt’ 파일을 연다 (비동기 메서드 : open() 사용)
fs.open('Names.txt', 'r', (err, fd) => {
  if (err) throw err;
  console.log('Opened file "Names.txt".');
});

// 사용자에게 새로운 이름을 입력하라고 요청한다.
const file = 'Names.txt';
const data = question('새로운 이름 입력: ');

// 새롭게 입력된 데이터를 추가한 후 전체 파일을 출력한다
fs.appendFile(file, data, (err) => {
  if (err) throw err;
  console.log(`Added "${data}" to the file.`);
  fs.readFile('Names.txt', 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
});

// // 새로운 이름 입력 요청 후 파일의 끝에 추가후 저장
// const file = 'Names.txt';
// const data = question('새로운 이름 입력: ');
// fs.appendFile(file, data, (err) => console.log(err));

// // 전체 파일을 출력
// fs.readFile('Names.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
