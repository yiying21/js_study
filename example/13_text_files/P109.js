'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';
import fs from 'fs';

// 문제109) 사용자에게 다음과 같이 메뉴를 표시하라

// Create a new file
// Display the file
// Add a new item to the file Make a selection 1, 2 or 3:

// 사용자에게 1, 2 또는 3을 입력하라고 요청한다. 다른 것을 입력한다면 에러 메시지를 출력한다.
// 만약 1을 선택하면 과목명을 입력하라고 요청하고, 그것을 ‘Subject.txt'라는 이름의 새로운 파일에 저장한다. 기존 파일이 있다면 새 파일로 덮어쓰게 된다
// 2를 선택하면 'Subject.txt' 파일의 내용을 출력한다
// 3을 선택하면 새로운 과목명을 입력하라고 요청하고, 그것을 파일에 저장한 후에 파일의 전체 내용을 출력 한다.

console.log(
  '# Create a new file\n# Display the file\n# Add a new item to the file Make a selection 1, 2 or 3'
);
const file = 'Subject.txt';

const num = questionInt('1 또는 2 또는 3을 입력: ');
// 1을 선택하면 과목명을 입력하라고 요청하고, 그것을 ‘Subject.txt'라는 이름의 새로운 파일에 저장한다
if (num === 1) {
  const data = question('과목명 입력: ');
  const data1 = data + '\n';
  fs.writeFile(file, data1, (err) => {
    if (err) throw err;
    console.log(`The "${data}" is saved in the "${file}" file.`);
  });
  // 2를 선택하면 'Subject.txt' 파일의 내용을 출력한다
} else if (num === 2) {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
  // 3을 선택하면 새로운 과목명을 입력하라고 요청하고, 그것을 파일에 저장한 후에 파일의 전체 내용을 출력 한다.
} else if (num === 3) {
  const newData = question('새로운 과목명 입력: ');
  const newData1 = newData + '\n';
  fs.appendFile(file, newData1, (err) => {
    if (err) throw err;
    console.log(`The "${newData1}" is saved in the ${file}file.`);
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  });
  // 다른 것을 입력한다면 에러 메시지를 출력한다
} else {
  console.log('Invalid number.');
}
