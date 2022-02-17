'use strict';

import { question } from 'readline-sync';

// 문제17) 사용자의 나이를 묻자.
// 만약 18세 이상이면 "You can vote"라는 메시지를 표시하라.
// 만약 17세라면 "You can learn to drive"2 는 메시지를 표시하라.
// 만약 16세 라면 "You can buy a lottery ticket"이라는 메시지를 표시하라.
// 만약 16세 미만이라면 "You can go Trick-or-Treating"이라는 메시지를 표시하라.

const age = Number(question('나이가 몇 살입니까?'));

// if문
if (age >= 18) {
  console.log('You can vote');
} else if (age == 17) {
  console.log('You can learn to drive');
} else if (age == 16) {
  console.log('you can buy a lottery ticke');
} else {
  console.log('You can go Trick-or-Treating');
}

// // switch문 사용시 소괄호 안에 참, 거짓을 넣어줘야 함
switch (true) {
  case age >= 18:
    console.log('You can vote');
    break;
  case (age = 17):
    console.log('You can learn to drive');
    break;
  case (age = 16):
    console.log('you can buy a lottery ticke');
    break;
  default:
    console.log('You can go Trick-or-Treating');
    break;
}
