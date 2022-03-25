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

/**
 * Unicode
 * - 세계의 모든 문자를 통합하여 코드화
 * - 언어, 이모지 등
 * - 코드 값을 코드 포인트라고 부름.
 * - 0000 ~ FFFF, 10000 ~ 1FFFF 값에 문자 매핑
 * - 유니코드 컨소시엄
 * 
 * 표기 방법
 * - u와 숫자 형태 : u0031 은 숫자 1
 * - js 는 u 앞에 역슬래시 작성
 * - 역슬래시를 문자로 표시하려면 두 개 작성(\\)
 * - ES6 에서 표기 방법 추가 됨.
 * 
 * UTF
 * - 유니코드의 코드 포인트를 매핑하는 방법
 * - UTF-8 : 8비트로 코드 포인트 매핑
 */

/**
 * 관계 연산자
 * >, <, >=, <=
 * instancof
 */

console.log(("\u0033" > "\u0032")); //true
console.log("A" > "1"); //true
console.log("가" > "다"); //false

//문자 하나씩 비교
console.log("A07" > "A21"); //false

/**
 * 동등, 부등, 일치, 불일치 연산자
 * 동등 : ==
 * - 값 타입은 비교하지 않음
 * - 값 타입이 다르면 문자 타입을 숫자 타입으로 변환하여 비교
 * 
 * - undefined 와 null 모두 값인데, 타입이 undefined 인 것이며,
 * - null 은 타입이 object 이다.
 * - 따라서 동등 비교시 둘은 값으로 true 가 나온다.
 * 
 * 부등 : !=
 * 
 * 일치 : ===
 * 값과 타입이 모두 같으면 true
 * 값 또는 타입이 다르면 false
 * -> === 로 먼저 비교하고 == 로 비교하자!!!
 * 
 * 불일치 : !==
 * 값 또는 타입이 다르면 true
 */

console.log("A" == "B"); //false
var value4; //undefined
console.log(value4 == null); //true

console.log("A" != "B"); //true

console.log(1 === "1"); //false
console.log(value4 === null); //false

/**
 * 콤마, 그룹핑, 논리 연산자
 * 
 * 콤마 연산자
 * - 콤마로 표현식을 분리
 * 
 * 그룹핑
 * - 괄호
 * 
 * 논리
 * - || 
 * - undefined => false
 * - 숫자 0 => false
 * - 0이 아닌 숫자 => true
 * 
 * - &&
 * - 모두 true -> true
 */

var value = 0, point = 5;
var value4;
//true 가 아니라 true 가 되는 변수의 값을 반환
console.log(value4 || value || point); //5

//point 가 true 이므로 뒤에는 보지 않고 바로 반환
console.log(point || value4 || value); //5

//마지막까지 비교했는데 모두 false 이면 마지막 변수 반환
console.log(value || value4); //undefined

var num = 3;
console.log(point && num); //3

//value4 가 false 니까 그 뒤는 보지 않고 value4 값 반환
console.log(value4 && value); //undefined

/**
 * 조건 연산자(3항 연산자)
 * exp ? exp-1 : exp-2
 * 
 * 연산자 우선순위(MDN 사이트 참고)
 */
console.log(1 === 1 ? "같음" : "다름");
console.log(1 === "1" ? "같음" : "다름");