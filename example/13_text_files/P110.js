'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';
import fs from 'fs';

// 문제110) 앞에서 생성한 Names.txt 파일을 이용하여 목록의 이름들을 출력한다
// 그 이름들 중 하나를 입력하라고 요청하고, 그 이름을 제외한 나머지 이름들을 Names2.txt라는 새로운 파일에 저장하라.
// 프로그램을 여러 번 실행하여 옵션들을 테스트하라.

// 앞에서 생성한 Names.txt 파일을 이용하여 목록의 이름들을 출력한다
const bufferData = fs.readFileSync('Names.txt');
const stringData = bufferData.toString();
const arrayData = stringData.split('\n');
arrayData.pop();
console.log(arrayData);

// 그 이름들 중 하나를 입력하라고 요청하고, 그 이름을 제외한다.
const name = question('위 이름중 하나를 입력: ');
arrayData.forEach((value, index) => {
  if (value == name) {
    arrayData.splice(index, 1);
  }
});

// 그 이름을 제외한 나머지 이름들을 Names2.txt라는 새로운 파일에 저장하고 출력한다.
arrayData.forEach((value) => {
  const name = value + '\n';
  fs.appendFile('Names2.txt', name, (err) => {
    if (err) throw err;
    console.log('Added new data to file "Names2.txt".');
  });
});
