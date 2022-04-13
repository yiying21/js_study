'use strict';

// class
// - 연관있는 데이터(속성 또는 행동)를 한 곳에 묶어놓는 컨테이너 같은 곳
// - 템플릿이라고 불리우며, class에는 데이터가 들어있지 않고 틀만 정의해놓으며 한 번만 선언함 (붕어빵 틀)

// object
// - class를 이용하여 실제 데이터를 넣어 만드는 것 (붕어빵)

// 1. class 선언
class person {
  // person 이라는 class를 만들고
  constructor(name, age) {
    // constructor라는 메서드로 object를 만들 때 필요한 데이터를 전달함
    // constructor? 클래스의 인스턴스 객체를 생성하고 초기화하는 특별한 메서드
    this.name = name; // 속성(field)에 name에서 전달받으 데이터를 this.name에 할당함
    this.age = age; // 속성(field)이 추가됨
  }
  speak() {
    // speak 라는 행동(method)가 추가됨
    console.log(`${this.name}: hello!`);
  }
}

// class 선언 후 object 생성

const ellie = new person('ellis', 20); // 새로운 오브젝트를 만들 때에는 new 라는 키워드 사용
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and Setters

class User {
  // User 라는 class에는 3개의 필드가 존재함 (firstName, lastName, _age)
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    // get 키워드를 통해 값을 리턴함
    return this._age; // get에서 사용하는 변수명은 앞에 _를 붙여 다른 변수로 지정해야 함
  }

  set age(value) {
    // set 키워드를 통해 값을 설정함, get과 다르게 set은 값을 설정하기 때문에 value 를 받아와야 함
    // set에서 사용하는 변수명은 앞에 _를 붙여 다른 변수로 지정해야 함
    this._age = value < 0 ? 0 : value; // this._age가 0보다 작으면 0으로 출력 아니라면 value를 출력해라
  }
}

const user1 = new User('Steve', 'job', -1);
console.log(user1.age); // 사람의 나이가 -1일 수 없으므로 다른 처리가 필요함

// 3. Field (public, private)

class Experiment {
  publicField = 2; // 생성자를 쓰지 않고 필드를 정의할 수 있는데 그냥 정의하게 되면 publicField 이라고 하며, 외부에서 접근 가능함
  #privateField = 0; // #가 붙으면 privateField 인데 class 내부에서만 값이 보여지고 변경 및 접근 가능하지면 class 외부에서는 값을 읽을수도 변경할 수도 없음
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // privateField는 읽을 수 없으므로 undefined 로 출력됨

// 4. 'Static' properties and methods (정적 속성 및 행동) : 클래스의 정적 메서드를 정의함
// 정적 메서드 : 클래스의 인스턴스 없이 호출이 가능하며 클래스가 인스턴스화되면 호출할 수 없다. 어플리케이션의 유틸리티 함수를 만드는데 사용

class Article {
  static publisher = 'Dream Coding'; // static 은 class 자체에 붙어 있음
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const aticle1 = new Article(1); // aticle1 이라는 오브젝트
const aticle2 = new Article(2); // aticle2 라는 오브젝트
console.log(Article.publisher); // static 함수가 있다면 class 이름을 호출해야 함. 출력값 : Dream Coding
Article.printPublisher(); // 출력값 : Dream Coding

// 5. Inheritance (상속과 다양성)
// 예를 들어 각각 다른 모양(삼각형, 직사각형, 정사각형 등)이 있다면 모두를 아우를 수 있는 '모양'으로 정의하고, 공통 속성값을 재사용하면 간편하다

class shape {
  constructor(width, height, color) {
    // shape(모양) 이라는 클래스에 width, height, color 라는 필드가 있고
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    // draw 라는 메소드 1개
    console.log(`drawing ${this.color} color!`);
  }
  getArea() {
    // getArea 라는 메소드 1개가 있음
    return this.width * this.height;
  }
}

// Rectangle : 직사각형, extend: 연장하다
// 위 코드에서 이어서 Rectangle 이라는 클래스를 만들고 싶다면, 'extends' 라는 클래스를 사용하면 위 shape에서 정의한 내용이 Rectangle에 포함되어 연장됨
class Rectangle extends shape {}
class Triangle extends shape {
  draw() {
    // draw 함수를 오버라이딩해서 사용할 수 있음
    super.draw(); // super. 함수를 사용하면 부모의 draw 함수(메소드)를 호출할 수 있음
    console.log('▲');
  }
  getArea() {
    return (this.width * this.height) / 2; // 필요한 함수만 오버라이딩 해서 작성할 수 있음 (삼각형에서는 (너비x높이)/2 공식을 추가)
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
// 출력값 : drawing blue color!
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());
// 출력값 : drawing red color!

// 6. InstanceOF : 왼쪽에 있는 오브젝트가 오른쪽에 있는 클래스에 의해 만들어진건지 아닌지 확인 (true 와 false를 리턴함)
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // fales
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof shape); // shape을 상속했기 때문에 true
console.log(triangle instanceof Object); // 모든 오브젝트 클래스는 자바스크립트에 오브젝트를 상속했기 때문에 true
console.log(triangle.toString()); // 출력값 : Triangle: color: red

// 예제

class Counter {
  constructor() {
    this.counter = 0;
  }
  increase() {
    this.counter++;
    console.log(this.counter);
  }
}
const coolCounter = new Counter();
coolCounter.increase();
