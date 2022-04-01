/**
 * * ES3 기준
 */

/**
 * 배열 특징
 * - 순서를 갖는다.
 * - [, , , ] 이 처럼 작성시 undefined
 */

var book = new Array();
var book = Array();
var book = []; //일반적으로 이 방법 사용

//1차원
var list = [12, 34, 56];
for (var k = 0; k < list.length; k++) {
    console.log(list[k]);
}

//2차원
var list = [[12, 34, 56]];
for (var k = 0; k < list.length; k++) {
    var one = list[k];
    for (var m = 0; m < one.length; m++) {
        console.log(one[m]);
    }
}

//3차원

/**
 * 프로퍼티 리스트
 * unshift() : 배열 처음에 엘리먼트 삽입
 * shift() : 첫 번째 엘리먼트를 삭제하고 삭제한 엘리먼트 반환
 * push() : 배열 끝에 엘리먼트 첨부
 * pop() : 마지막 엘리먼트를 삭제하고 삭제한 엘리먼트 반환
 * splice() : 엘리먼트를 삭제하고 새로운 엘리먼트를 삽입, 삭제한 엘리먼트 반환
 */

var obj = new Array(3);
console.log(typeof obj); //object
console.log(obj.length); //3
console.log(obj);

var two = new Array([10, 20]);
console.log(two);

/**
 * - 엘리먼트 추가/삭제 메커니즘
 * - delete 연산자
 *  - var 변수는 삭제 불가
 *  - 글로벌 변수는 삭제 가능
 *  - 삭제할 프로퍼티 이름 작성
 *  - 인덱스로 배열의 엘리먼트 삭제
 * 
 * 변수 선언시 var 키워드 사용!!
 */
value = "글로벌 변수";
console.log(delete value);

try {
    console.log(value);
} catch(e) {
    console.log("존재하지 않음"); //변수는 삭제시 엘러가 발생하지만,
}

var book = {title : "책"};
console.log(delete book.title);
console.log(book.title); //프로퍼티는 삭제시 undefined 가 발생한다.

//var 키워드 사용시, 위 처럼 프로퍼티 오브젝트여도 삭제 불가능
var book = {title : "책"};
console.log(delete book); //false

/**
 * 배열 엘리먼트 삭제 메커니즘
 * - 특정 인덱스 값을 삭제해도 길이가 변경되지 않는다.
 * - 삭제된 인덱스에 undefined 설정
 * - 배열을 읽을 때 제외시켜야 한다.
 */
var value = [1, 2, 3, 4];
console.log(delete value[1]);
console.log(value); //[ 1, <1 empty item>, 3, 4 ]

for (var k = 0; k < value.length; k++) {
    if (value[k] === undefined) {
        continue;
    }
    console.log(value[k]);
}

/**
 * 엘리먼트 삽입, 첨부
 */
var value = [1, 2];
value.unshift(345, 67);
console.log(value); //[ 345, 67, 1, 2 ]

value.push(34, 56);
console.log(value); //[ 345, 67, 1, 2, 34, 56 ]

var value = [1, 2];
var result = value.concat(9, 8, 7);
console.log(value); //[ 1, 2 ]
console.log(result); //[ 1, 2, 9, 8, 7 ]

/**
 * 엘리먼트 복사
 */
var origin = [1, 2, 3, 4, 5];
var result = origin.slice(1, 3);
console.log(origin);
console.log(result);

//slice() : 배열의 일부 또는 전부를 복사하여 반환
//파라미터 값이 음수면 파라미터 값 + length 
//-4 + 5 = 1 / -2 + 5 = 3
var result = origin.slice(-4, -2);
console.log(result); //[ 2, 3 ]

/**
 * 엘리먼트 값을 문자열로 변환
 */
var value = [1, 2, 3];
var result = value.join("##");
console.log(result); //1##2##3

/**
 * splice()
 */
var value = [1, 2, 3, 4, 5];
var result = value.splice(1, 3);
console.log(value); //[ 1, 5 ]
console.log(result); //[ 2, 3, 4 ]

var value = [1, 2, 3, 4, 5];
console.log(value.splice(1, 3, "A", "B"));
console.log(value);

/**
 * sort()
 * - 주의 : sort 대상 배열도 정렬됨.
 */
var value = [101, 26, 7, 1234];
console.log(value.sort()); //[ 101, 1234, 26, 7 ]

/**
 * sort() 알고리즘
 */
//101-26 하면 양수니까 둘이 값을 바꾸고, 101-7 하면 양수니까 둘이 바꾸고, 101-1234 는 음수니까 안 바꾼다 => [26, 7, 101, 1234]
//-> 26-7 하면 양수니까 바꾸고 이후로는 계속 안 바뀐다. => [7, 26, 101, 1234]
 var value = [101, 26, 7, 1234];
 value.sort(function(one, two) {
     return one - two;
 });
console.log(value); 

var value = [101, 26, 7, 1234];
value.sort(function(one, two) {
    return two - one;
});
console.log(value); //[ 1234, 101, 26, 7 ]

var value = [1, 5, 3, 8];
console.log(value.reverse()); //[ 8, 3, 5, 1 ]