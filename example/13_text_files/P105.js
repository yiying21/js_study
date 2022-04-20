'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제105) ‘Numbers.txt’라는 이름의 새로운 파일을 생성한다. 한 줄에 쉼표로 구분된 다섯 개의 숫자를 추가한다.
// 프로그램을 실행하고 나서 이 프로그램이 저장된 위치에 해당 파일이 생성되었는지 확인한다.
// 여러분이 윈도우 시스템을 사용하고 있다면 이 파일을 메모장에 불러와서 확인하는 게 가장 쉽게 확인하는 방법일 것이다.

const array = [1, 2, 3, 4, 5];
const blob = new Blob(array, { type: 'text/html' });

// https://curryyou.tistory.com/442
