'use strict';

import { question } from 'readline-sync';
// qusestion은 입력받고 consol.log는 출력한다
// window powershell에서 한글 깨질 때 [System.Console]::OutputEncoding = [System.Text.Encoding]::UTF8 선언 후 시작

// 문제3 'What do you call a bear with no teeth?'라는 농담을 표시하고,다음줄에 'A gummy bear!'라는 답을 표시하는 코드를 한줄로 만들자.
// 두 줄의 문장을 한 구문(명령어)으로 출력해보자.

const input = question('What do you call a bear with no teeth?\nA gummy bear!');

console.log(input);
