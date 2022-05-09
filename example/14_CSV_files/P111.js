'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';
import fs from 'fs';

// 문제111) 다음의 데이터를 저장할 csv 파일을 생성하고 그 이름을 'Books.csv' 라고 하라.

const file = 'Books.csv';

// 'Books.csv’라는 이름의 새로운 파일을 생성한다 (비동기 메서드 : open() 사용)
fs.open(file, 'w', (err, fd) => {
  if (err) throw err;
  console.log('Create a new file named "Books.csv"');
});

const newRecord1 = 'Title,Author,Publication Date\n';
fs.writeFile(file, newRecord1, (err) => {
  if (err) throw err;
  console.log('Data addition complete');
});

const newRecord2 = 'To Kill A Mockingbird, Harper Lee, 1960\n';
fs.appendFile(file, newRecord2, (err) => {
  if (err) throw err;
  console.log('Data addition complete');
});

const newRecord3 = 'A Brief History of Time, Stephen Hawking, 1988\n';
fs.appendFile(file, newRecord3, (err) => {
  if (err) throw err;
  console.log('Data addition complete');
});

const newRecord4 = 'The Great Gatsby, F. Scott Fitzgerald, 1922\n';
fs.appendFile(file, newRecord4, (err) => {
  if (err) throw err;
  console.log('Data addition complete');
});

const newRecord5 =
  'The Man Who Mistook His Wife for a Hat, Oliver Sacks, 1985\n';
fs.appendFile(file, newRecord5, (err) => {
  if (err) throw err;
  console.log('Data addition complete');
});

const newRecord6 = 'Pride and Prejudice, Jane Austen, 1813\n';
fs.appendFile(file, newRecord6, (err) => {
  if (err) throw err;
  console.log('Data addition complete');
});
