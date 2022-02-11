'use strict';

import { question } from 'readline-sync';

// qusestion은 입력받고 consol.log는 출력한다
// window powershell에서 한글 깨질 때 [System.Console]::OutputEncoding = [System.Text.Encoding]::UTF8 선언 후 시작

// 문제16) 사용자에게 지금 비가 오는지 묻고 그 대답을 소문자로 변환하여 대소문자 상관없도록 한다.
// 만약 "yes"라고 입력한다면 바람이 부는지 묻는다.
// 두 번째 질문에 대해 "yes"라고 입력하면 "It is too windy for an umbrella" 라는 메시지를 표시하라.
// 그렇지 않다면 "Take an umbrella"라는 메시지를 표시하라.
// 만약 첫 번째 질문에 대해 "yes"라고 입력하지 않는다면 "Enjoy your day"라는 메시지를 표시하라.

const rain = question('지금 비가 오나요?');
console.log(rain.toLowerCase());

rain.toLowerCase() == 'yes';
console.log(rain === 'yes' ? '지금 비가 옵니까?' : 'Enjoy your day');
