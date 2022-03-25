/**
 * 문장, 화이트 스페이스, 세미콜론 자동 삽입, 블록
 * 
 * 블록
 * 형태 : {문장 리스트 option}
 * 문장 리스트 작성은 선택(option) 이며 앞으로 표기는 opt 로 함.
 */
var one = 1 
var two = 1;

if (one == two) {
    var result = one + two;
    console.log(result);
}

if (one == two)
var result = one + two;
console.log(result);

/**
 * if, debugger
 * 
 * debugger
 * - 브라우저의 개발자 도구 창이 열려 있을 때만 멈춤
 * - ES5 부터 지원
 */

var sports = "스포츠";
debugger;
console.log(sports);

/**
 * while (표현식)
 * 
 * do ~ while 
 * - while 문과 처리는 같으나 do 문을 먼저 실행
 * - do 문을 실행하고 while 문의 표현식을 평가해서 true 면 다시 do 문을 실행한다.
 * - k 가 3이 되면 while 문의 블록을 실행한다.
 */

//2까지 출력
var k = 1;
while (k < 3) {
    console.log(k);
    k++;
}

//3까지 출력
var k = 0;
do {
    console.log("do : " + k);
    k++;
} while (k < 3) {
    console.log("while : " + k);
}

/**
 * for (초기값 opt; 비교 opt; 증갑 opt) 문장
 * opt 는 생략 가능하지만 사실 가독성이 떨어져서 추천X
 */
for (var k = 0; k < 2; k++) {
    console.log(k);
}

for (var k = 0; k < 3;) {
    console.log(k);
    k++;
}

var k = 0;
for (; k < 3;) {
    console.log(k);
    k++;
}

for (var k = 0; ;) {
    console.log(k);
    k++;
    if (k > 2) {
        break;
    }
}

var odd = null;
var even = null;
for (var i = 1;i <= 50; i++) {
    if (i % 2 == 1) {
        odd += i;
    } else {
        even += i;
    }
}
console.log("1 ~ 50까지 홀수의 합 : " + odd);
console.log("1 ~ 50까지 짝수의 합 : " + even);

/**
 * break, continue
 */
var k = 0, m = 0;
while (m < 3) {
    m++;
    if (m === 2) {
        break;
    }
    console.log(m);
}

for (var k=0;k<5;k++) {
    if (k === 2 || k === 3) {
        continue;
    }
    console.log(k);
}

/**
 * switch
 */
var exp = 1;
switch(exp) {
    case 1:
        console.log(100);
        break;
    case 2:
        console.log(200);
        break;
}

/**
 * try-catch, throw
 */
var value;
try {
    value = ball;
} catch(error) {
    console.log("catch 실행");
} finally {
    console.log("error 발생 유무와 관계 없이 실행")
}

var value;
try {
    throw "예외 발생";
    var data = "sports"; //이 부분은 실행 안 된다.
} catch(error) {
    console.log(error);
    console.log(data);
} finally {
    console.log("error 발생 유무와 관계 없이 실행")
}

try {
    throw {
        msg : "예외 발생시킴 proeprties",
        bigo : "임의의 이름 사용 properties"
    }
} catch(error) {
    console.log(error.msg);
    console.log(error.bigo);
}

try {
    throw new Error("예외 발생시킴 object");
} catch(error) {
    console.log(error.message);
}

/**
 * strict 모드
 * use strict : 엄격하게 js 문법 사용의 선언
 * - 코딩 실수를 예방할 수 있으므로 필수적으로 선언!!
 */
book = "책";
console.log(book); //책, 권장하지는 않는 방법

"use strict";
try {
    variable = "변수 선언하지 않음";
    console.log(variable);
} catch(error) {
    console.log(error.message);
}

/**
 * label 문장의 코드를 작성하고 사용하지 않는 이유는?
 * 
 * label : break 나 continue 구문과 함께 사용할 수 있다.
 * 원하는 식별자로 구문 앞에 레이블을 추가할 수 있다.
 */
var i, j;
loop1:
for (i=0;i<3;i++) {
    loop2:
    for (j=0;j<3;j++) {
        if (i === 1 && j === 1) {
            break loop1;
        }
        console.log("i = " + i + ", j = " + j);
    }
}
// i = 0, j = 0
// i = 0, j = 1
// i = 0, j = 2
// i = 1, j = 0

/**
 * "use strict" 아래에 with 문을 사용한 코드를 작성하세요.
 * 에러 확인
 * 에러가 발생한 이유는?
 * 
 * 엄격모드는 with 를 사용하지 못하게 한다. 
 * with 사용의 문제는, 
 * 런타임중에 블록 안의 모든 이름이 전달된 객체의 프로퍼티나 인근 스코프 내의 변수로 매핑될 수 있다는 것이다.
 * 엄격모드는 with 를 구문 에러로 만들어 with 의 이름이 런타임에 알 수 없는 위치를 참조하지 않도록 한다.
 */

// "use strict";
// var x = 17;
// with (obj) {
//     x;
// }
