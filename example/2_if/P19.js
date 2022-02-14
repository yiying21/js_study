'use strict';

import { question } from 'readline-sync';

// 문제19) 사용자에게 1이나 2 또는 3을 입력하라고 하자.
// 만약 1을 입력하면 "Thank you"라는 메시지를 표시하라.
// 만약 2를 입력하면 "well done"을 표시하라.
// 만약 3을 입력하면 "Correct"를 표시하라
// 만약 사용자가 다른 것을 입력하면 "Error message"를 표시하라.

const num = Number(question('1, 2, 3 중에 입력:'));

if (num == 1) {
  console.log('Thank you');
} else if (num == 2) {
  console.log('well done');
} else if (num == 3) {
  console.log('Correct');
} else {
  console.log('Error message');
}
