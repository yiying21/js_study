'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';
import fs from 'fs';

// 문제114) Books.csv 파일을 사용하며, 사용자에게 시작 년도와 끝 년도를 입력하라고 요청한다.
// 입력된 두 년도 사이에 출간된 모든 책을 출력하라.

// Books.csv 파일을 사용하며, 사용자에게 시작 년도와 끝 년도를 입력하라고 요청한다.
const startYear = questionInt('시작 년도 입력: ');
const endYear = questionInt('끝 년도 입력: ');

const file = 'Books.csv';
const books = [];
const array = fs.readFileSync(file, 'utf-8').toString().split('\n');
array.pop('');

for (let value of array) {
  const list = value.split(',');
  books.push(list);
}

// 입력된 두 년도 사이에 출간된 모든 책을 출력하라.
for (let row of books) {
  if (row[2] >= startYear && row[2] <= endYear) {
    console.log(row);
  }
}
