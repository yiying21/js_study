'user strict';
import * as fs from 'fs';
import { question } from 'readline-sync';

// fs.open('Names2.txt', 'a+', (err, fd) => {
//   if (err) {
//     console.log(`open error: ${err}`);
//   }
//   const newName = question('새로운 이름을 입력하세요.\n');
//   fs.writeSync(fd, newName, (err, written, str) => {
//     if (err) {
//       console.log(`write error: ${err}`);
//     }

//     console.log(`writter: ${written}, string:${str}`);
//   });
//   try {
//     const data = fs.readFileSync('Names2.txt'); //매개 변수를 fd 입력하면 읽지 못함??
//     const stringData = data.toString();
//     console.log(stringData);
//   } catch (err) {
//     console.log(err);
//   }
//   fs.close(fd, () => console.log('close fs'));
// });

const bufferData = fs.readFileSync('Names.txt');

console.log(bufferData.toString().split('\n'));
