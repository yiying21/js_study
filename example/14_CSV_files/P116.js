'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';
import fs from 'fs';

// 문제116) Books.csv 파일의 데이터를 배열로 가져온다.
// 사용자에게 배열을 표시하고, 배열의 어떤 행을 삭제하고 싶은지를 선택하라고 요청하여 선택한 행을 삭제 한다.
// 또한, 수정하고 싶은 데이터를 선택하라고 요청하고 선택한 행을 수정한다.
// 데이터를 원래의 csv 파일에 다시 써서 기존 데이터를 수정된 데이터로 덮어쓴다.

// Books.csv 파일의 데이터를 배열로 가져온다.
const file = 'Books.csv';
const books = [];
const array = fs.readFileSync(file, 'utf-8').toString().split('\n');
array.pop('');

for (let value of array) {
  const list = value.split(',');
  books.push(list);
}
// 사용자에게 배열을 표시한다
console.log(books);

// 배열의 어떤 행을 삭제하고 싶은지를 선택하라고 요청하여 선택한 행을 삭제 한다
const deleteRow = questionInt('배열 중 삭제하고 싶은 행 번호 입력: ');
books.splice(deleteRow, 1);
console.log(books);

// 수정하고 싶은 데이터를 선택하라고 요청하고 선택한 행을 수정한다.
const dataModification = questionInt('수정하고 싶은 데이터의 행 입력: ');
books.splice(dataModification, 0, ['gogo', 'young', '1987']);

// 데이터를 원래의 csv 파일에 다시 써서 기존 데이터를 수정된 데이터로 덮어쓴다.
const booksStr = books.join('\n');
console.log(booksStr);
fs.writeFileSync(file, booksStr, (err) => {
  if (err) throw err;
  console.log('New data saved in file "Books.csv".');
});
