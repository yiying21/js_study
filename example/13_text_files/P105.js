'use strict';

import fs from 'fs';

// 문제105) ‘Numbers.txt’라는 이름의 새로운 파일을 생성한다. 한 줄에 쉼표로 구분된 다섯 개의 숫자를 추가한다.
// 프로그램을 실행하고 나서 이 프로그램이 저장된 위치에 해당 파일이 생성되었는지 확인한다.
// 여러분이 윈도우 시스템을 사용하고 있다면 이 파일을 메모장에 불러와서 확인하는 게 가장 쉽게 확인하는 방법일 것이다

const file = 'Numbers.txt';
const data = '1,2,3,4,5';

// Numbers.txt’라는 이름의 새로운 파일을 생성한다 (비동기 메서드 : open() 사용)
fs.open(file, 'w', (err, fd) => {
  if (err) throw err;
  console.log('Create a new file named "Numbers.txt"');
});

// 한줄에 쉼표로 구분된 다섯개의 숫자를 추가한다. (비동기 메서드 : appendFile() 사용)
fs.appendFile(file, data, (err) => {
  if (err) throw err;
  console.log('Five numbers have been added to the data.');
});

// 기존 파일에 새로운 데이터를 추가할 때 사용하는 메서드
// - 동기식 : appendFile()
// - 비동기식 : appendFileSync()
