/**
 * 오브젝트 구분
 * - 빌트인 오브젝트
 * 사전에 만들어 놓은 오브젝트
 * 빌트인 Number 오브젝트, 빌트인 String 오브젝트
 * 
 * - 네이티브 오브젝트
 * js 스펙에서 정의한 오브젝트
 * 빌트인 오브젝트 포함
 * 여기에 js 코드를 실행할 때 만드는 오브젝트
 * 예) Argument 오브젝트
 * 
 * - 호스트 오브젝트
 * 빌트인, 네이티브 오브젝트를 제외한 오브젝트
 * 예) window, DOM 오브젝트
 * js 는 호스트 환경에서 브라우저의 모든 요소 기술을 연결하고 융합하며 이를 제어
 * DOM 에서 제공하는 오브젝트를 호스트 오브젝트라고 한다.
 * 마치 js 함수처럼 DOM 함수를 사용
 */
// var node = document.querySelector("div");
// console.log(node.nodeName);

/**
 * 강좌에서 오브젝트는 new 연산자를 사용하지 않고 빌트인 오브젝트로 만든 오브젝트를 지칭
 */
var abc = new Object(); //new 연산자를 사용한 abc 는 인스턴스
var obj = {}; //new 연산자를 사용하지 않은 obj 는 오브젝트

/**
 * 빌트인 Object 프로퍼티(ES3)
 * 
 * new Object() : 파라미터 데이터 타입의 인스턴스 생성
 * Object() : Object 인스턴스 생성
 */
var newNum = new Number(123);
console.log(typeof newNum); //object
//파라미터 값 타입에 따라 인스턴스 생성
console.log(newNum + 100);

var obj = Object({name : "js book"});
console.log(obj);
console.log(obj instanceof Object);

var emptyObj = Object();
console.log(emptyObj);

//아래와 같이 선언을 많이 함.
var obj2 = {name : "js book"};
console.log(obj2);
console.log(obj2 instanceof Object);

//프리미티브 값 반환
console.log(obj.valueOf());

/**
 * 빌트인 오브젝트 구조
 * 
 * - 오브젝트 이름
 * 
 * - 오브젝트.prototype
 * 인스턴스 생성 가능 여부 기준
 * 프로퍼티를 연결하는 오브젝트
 * 
 * - 오브젝트.prototype.constructor
 * 오브젝트의 생성자
 * 
 * - 오브젝트.prototype.method
 * 메소드 이름과 함수 작성
 */
var proto = Object.prototype;

/**
 * 함수와 메소드 연결
 * 
 * 함수
 * - 오브젝트에 연결
 * - Object.create()
 * 
 * 메소드
 * - 오브젝트의 prototype 에 연결
 * - Object.prototype.toString()
 */

/**
 * hasOwnProperty()
 */

//자신이 만든 것
var obj = {value : undefined};
var own = obj.hasOwnProperty("value");
console.log(own);

//자신이 만든 것이 아니라 빌트인 오브젝트에 있는 것이다.
var obj = {};
var own = obj.hasOwnProperty("hasOwnProperty");
console.log(own);

/**
 * 빌트인 Object 특징
 * - 인스턴스를 만들 수 있는 모든 빌트인 오브젝트의 __proto__ 에 
 * Object.prototype 의 6개 메소드가 설정됨.
 * - 따라서 빌트인 오브젝트로 만든 인스턴스에도 설정됨.
 */
var numObj = new Number(123);
console.log(Object.prototype.isPrototypeOf(numObj)); //true

console.log(1234.56.toLocaleString()); //1,234.56