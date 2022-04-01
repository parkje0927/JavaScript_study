/**
 * ES5 기준
 */

console.log(Array.isArray([1, 2, 3]));

var value = [1, 2, 3, 4, 5];
console.log(value.indexOf(5)); //5의 인덱스는? 4
console.log(value.indexOf("5")); //-1

/**
 * 두 번째 인덱스 의미 : 그 인덱스부터 검색하라
 * String 오브젝트는 두 번째 파라미터에 음수를 작성하면, 0으로 간주
 * Array 오브젝트는 음수에 length 를 더해 시작 인덱스로 사용
 */

/**
 * 콜백 함수를 가진 Array 메소드
 * 지금부터 다루는 7개 메소드는 모두 콜백 함수를 호출한다.
 * 키워드는 시맨틱과 독립성이다.
 */

/**
 * forEach()
 * break, continue 는 사용 불가
 */
var list = ["A", "B", "C"];
list.forEach(function(el, index, all) {
    console.log(el + " " + index + " " + all);
    // A 0 A,B,C
    // B 1 A,B,C
    // C 2 A,B,C
});

//아래와 같은 방법으로 사용!
var fn = function(el, index, all) {
    console.log(el + " " + index + " " + all);
};
list.forEach(fn); //forEach 메소드에 콜백함수는 독립적으로 구동

var list = [1, 2];
var fn = function(el, index, all) {
    console.log(el + this.ten);
    // 11
    // 12
}

list.forEach(fn, {ten : 10});

/**
 * for(), forEach() 차이
 * 
 * - forEach()
 *  - 엘리먼트를 추가하더라도 처리하지 않음
 *  - 추가는 처리하지 않지만, 삭제는 반영
 *  - 엘리먼트를 삭제하면 배열에서 삭제되므로 반복에서 제외됨
 *  - 처음부터 끝까지 반복한다는 시맨틱
 *  - 반복 중간에 끝나지 않는다는 시맨틱
 *  - 시맨틱으로 소스 코드의 가독성 향상
 * 
 * - for()
 *  - break, continue 
 */
var list = [1, 2, 3];
var fn = function(el, index, all) {
    if (index === 0) {
        list.push("AB");
    }
    console.log(el);
}

list.forEach(fn);

var list = [1, 2, 3, 4, 5];
var fn = function(el, index, all) {
    if (index % 2 == 1) {
        delete list[index];
    } else {
        console.log(el);
    }

    // 1
    // 3
    // 5
}

list.forEach(fn);

var list = new Array(1000000);
var check = function(el, index, all) {

}

var start = Date.now();
console.log("start : " + start);

list.forEach(check);

var end = Date.now();
console.log("end : " + end);

console.log("총 걸린 시간 : " + (end - start));


/**
 * true, false 를 반환하는 메소드 : every()
 * - false 를 반환할 때까지 콜백 함수 호출 : every()
 * - true 를 반환할 때까지 콜백 함수 호출 : some()
 */
var value = [20, 10, 30, 40];
var fn = function(el, index, all) {
    console.log(el);
    return el > 15;
};
var result = value.every(fn);
console.log("결과 : " + result);

/**
 * 필터, 매핑
 * filter : true 를 반환하면 현재 읽은 엘리먼트를 반환
 */
var value = [10, 20, 30, 40];
var fn = function(el, index, all) {
    return el > 15;
}
var result = value.filter(fn);
console.log(result); //[ 20, 30, 40 ]

var fn = function(el, index, all) {
    return el + this.add;
}
var point = {add : 100};
var result = value.map(fn, point);
console.log(result); //[ 110, 120, 130, 140 ]

/**
 * 반환 값을 파라미터 값으로 사용
 */
var value = [1, 3, 5, 7];
var fn = function(prev, curr, index, all) {
    console.log(prev + ", " + curr);
    return prev + curr;

    //1)
    // 1, 3
    // 4, 5
    // 9, 7

    //2)
    // 7, 1
    // 8, 3
    // 11, 5
    // 16, 7
}
//1)
var result = value.reduce(fn);
console.log(result); //16

var result = value.reduce(fn, 7);
console.log(result); //23