/**
 * Built-In
 * 
 * 값 타입, 연산자, 오브젝트를 사전에 만들어 놓은 것
 * js 코드를 처리하는 영역에
 * 사전 처리를 하지 않고 즉시 사용
 * 
 * 빌트인 값 타입 : Undefined, Null, Boolean, Number, String, Object
 * 빌트인 연산자 : +, -, *, / 등
 */

/**
 * 빌트인 오브젝트 : 다수의 key-value 오브젝트 조합
 * 
 * 빌트인 Number 오브젝트
 * 123과 같은 숫자, 상수, 지수를 처리하는 object
 * 이미 key-value 형태
 * 소문자 object 는 데이터 처리가 중요, 그래서 함수가 포함
 * 
 * Number 처리를 위한 프로퍼티의 집합
 * 
 */

var obj = Number;
console.log(Number.length); //1
console.log(Number.isNaN(123)); //false
console.log(obj.length); //1

/**
 * 빌트인 오브젝트 유형
 * - Number 오브젝트
 * - String 오브젝트
 * - Boolean 오브젝트
 * - Ohject 오브젝트
 * - Array
 * - Function 
 * - Math
 * - Date
 * - JSON
 *  - [{"name":"value"}]
 * - RegExp
 * - Gloabl
 *  - 모든 코드에서 공유, 접근 가능
 *  - 전역 객체라고도 하며, 뉘앙스 차이 있음.
 *  - 소스 파일 전체에서 하나만 존재
 */