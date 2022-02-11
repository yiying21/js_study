'use strict';

import { question } from 'readline-sync';

// qusestion은 입력받고 consol.log는 출력한다
// window powershell에서 한글 깨질 때 [System.Console]::OutputEncoding = [System.Text.Encoding]::UTF8 선언 후 시작

// 문제15) 사용자에게 좋아하는 색을 입력하라고 요청한다.
// 만약 "red" "RED" 또는 "Red" 를 입력하면 "I like red too"라는 메시지를 출력하라.
// 그렇지 않다면 "I don't like that colour, I prefer red"라는 메시지를 출력하라.

const color = question('좋아하는 색을 입력:');

if (color == 'red' || color == 'RED' || color == 'Red') {
  console.log('I like red too');
} else {
  console.log("I don't like that colour, I prefer red");
}

// || (or) : 처음으로 true가 나오면 멈춘다, or중에 하나라도 true면 true이다

if (color.toUpperCase() == 'RED') {
  console.log('I like red too');
} else {
  console.log("I don't like that colour, I prefer red");
}

//.toUpperCase : 전체를 대문자로 바꿔주는 함수
//.toLowcase  : 전체를 소문자로 바꿔주는 함수
