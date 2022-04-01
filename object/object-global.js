/**
 * 모든 <script> 를 통해 하나만 존재
 * new 연산자로 인스턴스 생성 불가
 * 모든 코드에서 공유
 * 
 * 이름은 있지만 오브젝트 실체가 없다.
 * 
 * Global 오브젝트
 * - 실체가 없는데 그 안에 값은 윈도우 오브젝트에 저장된다.
 * 지역 함수, local 함수
 * 지역 변수, local 변수
 */

/**
 * Global 과 Window 관계
 * - 글로벌 오브젝트는 js 가 주체
 * - 윈도우 오브젝트는 윈도우가 주체
 * - 주체는 다르지만, 글로벌 오브젝트의 프로퍼티와 함수가 윈도우 오브젝트에 설정됨.
 * - 글로벌 오브젝트의 프로퍼티를 윈도우 오브젝트에서 가져올 수 있다.
 */

/**
 * 정수, 실수 변환
 */
console.log(parseInt(123.56));
console.log(parseInt("123.5fsdff6"));
console.log(parseInt(13, 16)); //1*16 + 3
console.log(parseInt()); //NaN

console.log(parseFloat("-123.5fsdff6") + 6);
console.log(parseFloat()); //NaN

/**
 * isNaN()
 * - 숫자 값이 아니면 true 반환
 * - 숫자 값이면 false 반환
 */
console.log(isNaN(123)); //false
console.log(isNaN("123")); //false 
console.log(Object.is(NaN, NaN)); //true(NaN 비교할 때 이 함수 사용)

/**
 * isFinite()
 */
console.log(isFinite(0 / 0)); //false

/**
 * 인코딩, 디코딩
 * - 인코딩 제외문자를 제외하고 "%16진수%16진수" 형태로 변환
 */

/**
 * eval() 함수
 */