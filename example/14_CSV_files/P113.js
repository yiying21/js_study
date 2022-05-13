'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';
import fs from 'fs';

// 문제113) Books.csv 파일을 사용하며, 리스트에 몇 개의 레코드를 추가하고 싶은지 묻고 입력한 만큼 추가할 수 있도록 한다.
// 모든 데이터가 추가된 후에 사용자에게 검색할 저자의 이름을 입력하라고 요청하고, 입력된 저자의 모든 책 정보를 출력한다.
// 만약 입력한 저자의 책이 하나도 없다면 그에 맞는 메시지를 출력하라.

// Books.csv 파일을 사용하며, 리스트에 몇 개의 레코드를 추가하고 싶은지 묻고 입력한 만큼 추가할 수 있도록 한다.
const file = 'Books.csv';
const numList = question('몇개의 레코드를 추가하고 싶은지 숫자로 입력: ');

for (let i = 0; i < numList; i++) {
  const newRecord = question('newRecord 입력(예시:QQQ,WWW,EEE): ');
  const newRecord1 = newRecord + '\n';
  fs.appendFileSync(file, newRecord1, (err) => {
    if (err) throw err;
    console.log('A new record has been added to the "Books.csv" file.');
  });
}

// 검색할 저자의 이름을 입력하라고 요청한다.
const books = [];
let count = 0;

const author = question('검색할 저자의 이름을 입력: ');
const array = fs.readFileSync(file, 'utf-8').toString().split('\n');
array.pop('');

for (let value of array) {
  const list = value.split(',');
  books.push(list);
}
// 입력된 저자의 모든 책 정보를 출력한다.
for (let row of books) {
  if (row[1] === author) {
    console.log(row);
    count += 1;
  }
}
if (count === 0) {
  console.log('There are no books by the author you entered.');
}

// for...of 명령문
// 반복가능한 객체 (Array, Map, Set, String, TypedArray, arguments 객체 등을 포함)에 대해서 반복하고
// 각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프를 생성한다
