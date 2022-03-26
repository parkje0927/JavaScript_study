/**
 * 숫자 처리를 위한 오브젝트
 */

/**
 * Number()
 * - 파라미터 값이 String 타입이라도 값이 숫자면 변환 가능
 * - 파라미터 값을 작성하지 않으면 0을 반환
 */
console.log(Number("123") + 500); //623
console.log(Number("ABC")) //NaN

console.log(Number(0x14)); //20 (1*16 + 4)
console.log(Number(true)); //1
console.log(Number(null)); //0
console.log(Number(undefined)); //NaN

/**
 * 상수
 */

/**
 * new 연산자
 * - 원본을 복사하는 개념
 * - new 연산자를 사용하면 인스턴스
 * - 빌트인 Number 오브젝트로 인스턴스를 생성하여 반환
 * - 생성한 인스턴스 타입은 object
 * 
 * 대문자 Object : key-value 프로퍼티의 집합
 * 소문자 object : 인스턴스
 * 
 * 인스턴스 생성 목적
 * - 인스턴스마다 값을 갖기 위함.
 */

var obj = new Number(); //Number 처럼 첫 문자가 대문자면 인스턴스를 만드는 거구나 하고 알 수 있음.
console.log(typeof obj); //object

//값만 다르다 => 인스턴스 생성 목적
var oneObj = new Number("123");
var twoObj = new Number("456");
console.log(oneObj.valueOf());
console.log(twoObj.valueOf());

/**
 * new Number() : 새로운 Number 인스턴스를 생성
 * 
 * var obj = new Number(); 
 * 1. 새로 생성한 Number 인스턴스가 obj 에 할당된다.
 * [[Prototype]] : Number
 * [[PrimitiveValue]] : 123
 * 
 * 여기서 __proto__ 를 하면 위에서 [[Prototype]] 만 복사해서 준다. 나머지는 가린다. 
 * 
 * 인스턴스를 만드는 기준은 프로토타입
 * Object 인 __proto__ 에 넣어서 값을 주겠다!! => 이것이 인스턴스
 */

debugger;

var obj = new Number("123");

//빌트인 넘버 오브젝트를 복사해서 주는데 prototype 에 있는 것만 주고 나머지는 가려서 복사한다. 
var proto = obj.__proto__;

/**
 * PrimitiveValue
 * - 언어에 있어 가장 낮은 단계의 값
 * 
 * Number, String, Boolean : 인스턴스 생성 가능
 * Null, Undefined : 인스턴스 생성 불가
 * Object 는 primitive 값을 제공하지 않음.
 * 
 * [[PrimitiveValue]] => 자바스크립트 엔진이 만들었음.
 * PrimitiveValue 를 갖는 오브젝트 : Boolean, Date, Number, String
 */

//인스턴스를 생성하면 파라미터 값을 인스턴스의 PrimitiveValue 로 설정
var obj = new Number(123);

//obj 가 인스턴스이므로 값을 더할 수 없는데 값이 더해지는 것은 123을 인스턴스의 프리미티브 값으로 설정하기 때문
//프리미티브 값을 갖는 인스턴스에 값을 더하면 인스턴스의 프리미티브 값에 값을 더한다.
console.log(obj + 200);

//valueOf() : 인스턴스의 프리미티브 값 반환, 프리미티브 값을 key 로 하여 값을 구한다.
console.log(obj.valueOf());

/**
 * String 타입으로 변환, 지역화 문자
 * - toString() : data 를 String 타입으로 변환
 * - toLocaleString() : 지역화(파라미터에 언어 타입 사용 가능)
 */
var value = 20;
console.log(20 === value.toString()); //false
console.log(value.toString(16)); //20을 16진수로 변환하면 14

console.log(20..toString()); //실수로 처리하기 때문에 20.0을 의미하는 20. 으로 작성!!

var value = 1234.56;
console.log(value.toLocaleString());
console.log(value.toLocaleString('de-De'));

/**
 * 지수 타입으로 변환 : toExponential()
 * 고정 소수점 변환 : toFixed()
 */
var value = 1234;
console.log(value.toExponential()); //1.234e+3

//소수 이하는 3자리로 표시
var value = 123456;
console.log(value.toExponential(3)); //1.235e+5

var value = 1234.567;
console.log(value.toFixed()); //1235
console.log(value.toFixed(2)); //1234.57