/**
 * 함수 function
 * - 작명 규칙 : 동사 + 명사, camelCase
 */
function book() {
    var title = "js 책";
}

var point = function(one, two) {
    var total = one + two;
    var bonus = total + 100;
}

var temp;
temp = function(name) {
    this.name = "책 이름";
    return name;
}
console.log(temp("책"));

/**
 * 함수 호출
 */
function setValue(a, b) {
    var total = a + b;
    return total;
}
console.log(setValue(10, 20));

function getPoint() {

}
var result = getPoint();
console.log(result); //undefined

/**
 * 주석 사례
 * 
 * @function calculateAmount
 * 1. 파라미터로 받은 수량에 단가를 곱해 금액 계산, 결과 반환
 * 2. 수량과 단가의 0체크는 함수 호출전에 실행
 * 
 * @param {Number} quantity, 수량
 * @param {Number} price, 단가
 * @return {Number} 계산 결과
 */

//코드는 간결하게 작성하는 것이 원칙! simple is the best!
