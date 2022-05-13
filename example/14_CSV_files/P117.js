'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';
import fs from 'fs';

// 문제117) 사용자의 이름을 묻는다.
// 두 개의 수(1부터 100까지)를 입력 받아 두 수를 더하는 퀴즈를 만들어 출력하고 답을 입력받는다.
// 총 2개의 문제를 입력받고, 답을 맞추면 점수를 +1 한다.
// 사용자의 이름과 질문, 답변 그리고 최종 점수를 csv 파일에 저장한다. 프로그램이 실행될 때마다 csv 파일에 추가되며 덮어쓰지 않는다.

const file = 'quiz.csv';
const array = [];
let score = 0;

// 사용자의 이름을 묻는다.
const name = question('이름 입력: ');

// 두 개의 수(1부터 100까지)를 입력 받아 두 수를 더하는 퀴즈1을 만들고 답을 맞추면 점수를 +1 한다
const Quiz1RandomNum1 = Math.floor(Math.random() * 100 + 1);
const Quiz1RandomNum2 = Math.floor(Math.random() * 100 + 1);

const quiz1 = `${Quiz1RandomNum1} + ${Quiz1RandomNum2}`;
const quiz1Answer = questionInt(`${Quiz1RandomNum1} + ${Quiz1RandomNum2} = `);
const quiz1Sum = Quiz1RandomNum1 + Quiz1RandomNum2;

if (quiz1Answer === quiz1Sum) {
  score += 1;
}

// // 두 개의 수(1부터 100까지)를 입력 받아 두 수를 더하는 퀴즈2를 만들고 답을 맞추면 점수를 +1 한다
const Quiz2RandomNum1 = Math.floor(Math.random() * 100 + 1);
const Quiz2RandomNum2 = Math.floor(Math.random() * 100 + 1);

const quiz2 = `${Quiz2RandomNum1} + ${Quiz2RandomNum2}`;
const quiz2Answer = questionInt(`${Quiz2RandomNum1} + ${Quiz2RandomNum2} = `);
const quiz2Sum = Quiz2RandomNum1 + Quiz2RandomNum2;

if (quiz2Answer === quiz2Sum) {
  score += 1;
}

// 사용자의 이름과 질문, 답변 그리고 최종 점수를 배열에 추가하고, 문자열로 변환한다.
array.push([name, quiz1, quiz1Answer, quiz2, quiz2Answer, score]);
const newArray = array.join('\n') + '\n';
console.log(newArray);

// 사용자의 이름과 질문, 답변 그리고 최종 점수를 csv 파일에 저장한다.
// 프로그램이 실행될 때마다 csv 파일에 추가되며 덮어쓰지 않는다.
fs.appendFileSync(file, newArray, (err) => {
  if (err) throw err;
  console.log('New data has been added to the "quiz.csv" file.');
});
