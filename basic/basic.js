/**
 * 의미를 부여하여 변수 이름 작명 : 시맨틱 Semantic 이라고 한다.
 */
var book = "책";
var book = "책", point = 123;

var book = "책",
    point = 123;

var point = amount = 123; //권장 형태는 아니다. 값이 연동되는 경우도 있다.


/**
 * JS 스펙 이란?
 * 자바스크립트 문법을 작성한 문서
 */
console.log(123);
var point = 456;
console.log(point);

var point = 123;
console.log(point);

/**
 * 정수, 실수, 숫자 처리
 * - 64 비트 부동 소수점 처리
 * - 자바스크립트는 정수와 실수를 구분하지 않고 실수로 계산한다.
 */
console.log(.123)
console.log(0.12 + 5)

/**
 * 상수
 * - 영문 대문자를 사용하여 상수로 사용한다는 시맨틱 선언
 * - JS 가 제공하는 상수는 변경 불가 : MAX_VALUE, MIN_VALUE 등
 */
var ONE = 1;
console.log(ONE)
console.log(Number.MAX_VALUE)

/**
 * 진수
 * - 16진수
 *  - 0xFF : 255(16*15 + 15)
 *  - 0xF : 15
 */
console.log(0xFF)

/**
 * 데이터 타입
 * - 문자는 "", '' 모두 사용 가능하다.
 * - 데이터는 타입을 가진다.(***)
 */
var value = 123;
console.log(value)
console.log(typeof value) //number

var value = "sports";
console.log(value)
console.log(typeof value) //string

/**
 * number, string 타입
 * - 언어 타입 : Undefined, Null, Boolean, String, Number, Object
 * - Number 타입
 *  - 부호를 가진 값
 *  - NaN(Not-a-Number), Infinity, -Infinity 까지 총 3개를 더 포함한다.
 *  - NaN 이 있다고 오류를 발생시키기 보다는 NaN 값을 확인해서 이를 처리할 수 있도록 하는 것이 js 특징이다.
 *  
 * - 대문자 Undefined : 스펙에서 사용하는 타입
 * - 소문자 undefined : 값 => 변수를 선언만 한 것을 의미한다.
 * 
 * - 반드시, 변수는 이름과 값이 함께 선언되어야 한다.
 * - 하지만 초깃값인지 값을 할당한 것인지 구분이 되지 않으므로 권장하지 않는다.
 * - 대신, null 을 할당한다. 
 * 
 * - 대문자 Null : 스펙에서 사용하는 타입
 * - 소문자 null : 값
 *  - undefined : 단지 변수만 선언
 *  - null : null 을 할당해야 null 이 되므로 코드를 수행한 것이 된다.
*/
var point = 1 * "A";
console.log(point) //NaN(숫자가 아닌 것을 나타내는 값)

var point = "책, '123'";
console.log(point)

point = '책, "123"';
console.log(point)

var point1;
console.log(point1) //undefined

var point2 = null;
console.log(point2) //null

/**
 * Boolean, Object
 * - Boolean : true, false
 * - 대문자 Object
 *  - {name: value} 형태 
 *  - property : name(혹은 key) 과 value 하나를 지칭
 *  - 프로퍼티 집합
 *  - 프로퍼티 예시) title : "책"
 *  - 프로퍼티가 0개여도 된다.
 * 
 */
var book = {
    title : "책", point : 123
};
console.log(book)

var book2 = {}
console.log(book2)

/**
 * 기본 데이터 타입 : Primitive 타입
 * - typeof 로 null 과 프로퍼티는 구분할 수 없다.
 */
console.log(typeof 123) //number
console.log(typeof "문자열") //string
console.log(typeof true) //boolean
console.log(typeof undefined) //undefined

console.log(typeof null) //object
console.log(typeof {book : "책"}) //object