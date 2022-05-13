'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';
import fs from 'fs';

// 문제114) Books.csv 파일을 사용하여 각 행 번호와 그에 대한 데이터를 출력하라.

// Books.csv 파일을 사용한다.
const file = 'Books.csv';
const books = [];
const array = fs.readFileSync(file, 'utf-8').toString().split('\n');
array.pop('');

for (let value of array) {
  const list = value.split(',');
  books.push(list);
}

// 각 행 번호와 그에 대한 데이터를 출력하라.
let i = 0;
for (let row of books) {
  const data = '행 번호 - ' + i.toString() + ' : ' + row;
  console.log(data);
  i += 1;
}
