'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';
import fs from 'fs';

// 문제112) 111번 프로그램에서 만든 Books.csv 파일을 사용한다.
// 사용자에게 다른 레코드를 입력하도록 요청하고 입력된 데이터를 파일의 끝에 추가한다.
// csv 파일의 각 행을 한 줄에 하나씩 출력하라.

// 111번 프로그램에서 만든 Books.csv 파일을 사용한다.
const file = 'Books.csv';

// 사용자에게 다른 레코드를 입력하도록 요청한다.
const newRecord = question('다른 레코드 입력: ');
const newRecord1 = newRecord + '\n';

// 입력된 데이터를 파일의 끝에 추가한다.
fs.appendFileSync(file, newRecord1, (err) => {
  if (err) throw err;
  console.log('Data addition complete');
});

// csv 파일의 각 행을 한 줄에 하나씩 출력한다.
const csv = fs.readFileSync(file, 'utf-8');
console.log(csv.toString());
