'use strict';

import { question } from 'readline-sync';

// 문제59) 다섯 개의 색상을 표시하고 그들 중 하나를 사용자에게 선택하라고 요청한다.
// 만약 프로그램이 선택한 것과 동일하면 "Well done"이라고 출력하고, 그렇지 않다면 컴퓨터가 선택한 색상이 포함된 위트 있는 문장을 출력하라.
// 예: "I bet you are GREEN with envy" 또는 "You are probably feeling BLUE right now". 다시 맞혀 보라고 사용자에게 색상을 입력하라고 한다.
// 사용자가 맞힐 때까지 이 작업을 반복한다.

const colors = ['red', 'orange', 'yellow', 'green', 'blue'];

while (true) {
  const result = colors[Math.floor(Math.random() * 4)];
  console.log(`랜덤 색상 : ${result}`);
  const user = question('red, orange, yellow, green, blue 중 1개 입력: ');
  if (user === result) {
    console.log('Well done');
    break;
  } else {
    switch (result) {
      case 'red':
        console.log('떙~! 원숭이 엉덩이는 빨강');
        break;
      case 'orange':
        console.log('떙~! 탐스러운 주황귤');
        break;
      case 'yellow':
        console.log('떙~! 내 피부는 노랑색!');
        break;
      case 'green':
        console.log('떙~! 초록 매실 드셔보셨나');
        break;
      case 'blue':
        console.log('떙~! 내 피는 파랑색~!');
        break;
      default:
        console.log('떙~! 다른 색은 집어쳐~!');
        break;
    }
  }
}
