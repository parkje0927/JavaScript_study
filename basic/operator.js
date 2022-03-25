/**
 * 연산자
 * +, -, *, /, %
 * >, >=, <, <=
 * 콤마, typeof, delete, void
 * instanceof, in, new 등
 * 
 * 표현식
 * - 예시) var total = 1 + 2;
 * - 자바스크립트는 표현식의 연결이다.
 */

/**
 * 단일 할당 연산자 : =
 * 복합 할당 연산자 : +=, -=, *=, /=, %=. <<=, >>=, >>>=, &=, ^=, |=
 */

/**
 * 해석이란?
 * - JS 코드를 기계어로 바꾸는 것. Compile
 * - "엔진이 해석하고 실행한다" 라고 한다. 
 */

/**
 * 산술 연산자 +
 */
var value = 1 + 2 + "ABC"
console.log(value) //3ABC
console.log(typeof value) //string

/**
 * 숫자로 변환
 * - 연산하기 전에 우선 숫자로 변환
 * 값 타입      변환 값
 * undefined -> NaN
 * Null      -> 0
 * Boolean   -> true : 1, false : 0
 * Number    -> 변환 전/후 같음
 * String    -> 값이 숫자이면 숫자로 연산 단, 더하기는 연결(***)
 */
var value1;
console.log(10 + value1) //NaN

console.log(10 + null) //10
console.log(10 + true) //11
console.log(10 + false) //10

console.log(10 + "23") //1023
console.log(123 - "23") //100

/**
 * 산술 연산자 -, *, /, %
 * - 양쪽의 평가 결과가 하나라도 숫자가 아닐 때 NaN 반환
 */
console.log("135" - 2) //133
console.log(10 * "20") //200
console.log(10 * true) //10
console.log(10 * false) //0
console.log(10 * null) //0
console.log(10 * undefined) //NaN
console.log(10 * "a") //NaN

console.log(2.3 * 3) //6.8999(더 정확하게 하기 위해서는 10을 곱했다가 다시 나눈다.)
console.log(2.3 * 10 * 3 / 10) //6.9

//분모가 0이면 Infinity 반환
//분자가 0이면 0
console.log(10 / "a") //NaN
console.log(10 / undefined) //NaN

console.log(10 / 0) //Infinity
console.log(0 / 10) //0

console.log((5 * 10 % (2.3 * 10)) / 10) //0.4
console.log((5 * 10 - (2 * 2.3 * 10)) / 10)

/**
 * 단항 연산자 +
 * - 값을 number 타입으로 변환
 * - Number() 도 기능이 같다.
 * 
 * 단항 연산자 -
 * - 값의 부호를 바꿈
 * - 연산할 때만 바꾸고 원래 값은 변경 X
 * - 가독성이 떨어진다.
 */
var value = "7";
console.log(typeof value) //string
console.log(typeof +value) //number
console.log(typeof Number(value)) //number

var value = 7;
console.log(-value)
console.log(8 + -value)

/**
 * 전치, 후치 ++ 연산자
 * 전치, 후치 -- 연산자
 * ! 연산자 => 원래 값은 바뀌지 않으며 사용할 때만 변환
 */
var one = 1;
var value = one++ + 3;
console.log(value); //4

var one = 1;
var value = ++one + 3;
console.log(value); //5

var two = 2;
var value = two-- + 3;
console.log(value); //5

var two = 2;
var value = --two + 3;
console.log(value); // 4

var value = true;
console.log(!value); //false
console.log(!!"A"); //A 는 true, 따라서 !!A 는 true