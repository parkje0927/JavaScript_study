/**
 * ES5 Object 에 함수가 추가됨.
 * 메소드는 하나도 없음.
 */

var obj = {};
Object.defineProperty(obj, "book", {
    value : "JS Book", 
    enumerable  : true
});
console.log(obj); //{ book: 'JS Book' }

/**
 * 프로퍼티 디스크립터
 * value/writable/enumerable/configurable
 * 
 * 데이터 : value, writable(변경 가능 여부)
 * 엑세스 : get, set
 * 공용 : enumearble, configurable(삭제 가능 여부)
 * 
 * 데이터는 공용과는 같이 쓸 수 있으나 엑세스와는 같이 사용 불가
 * 엑세스 역시 공용과는 같이 쓸 수 있으나 데이터와는 같이 사용 불가
 */

//value, get 같이 쓸 수 없음
var obj = {};
Object.defineProperty(obj, "book", {
    value : "JS book",
    //get : function() {}
    writable : true
});
console.log(obj); //{}
obj.book = "변경 가능";
console.log(obj.book); //변경 가능

var obj = {};
Object.defineProperty(obj, "book", {
    value : "JS book",
    configurable : true
});
delete obj["book"];
console.log(obj);

/**
 * getter, setter
 * value 속성이 없으면 get 함수 호출
 */

var obj = {}, data = {};
Object.defineProperty(obj, "book", {
    set : function(param) {
        data.title = param;
    },
    get : function() {
        return data.title;
    }
});

obj.book = "JS Book";
console.log(obj.book);

/**
 * 프로퍼티 추출
 */
function Book(point) {
    this.point = point;
}

Book.prototype.getPoint = function() {};
Book.prototype.setPoint = function() {};
var obj = new Book(100);

var result = Object.getPrototypeOf(obj);
for (var key in result) {
    console.log(key + " : " + result[key]);
    // getPoint : function() {}
    // setPoint : function() {} 
}

//hasOwnProperties => 열거가능여부 확인 안 함.
//keys => 열거가능여부 확인 함.

/**
 * 프로퍼티 디스크립터 함수
 */
var obj = {};
Object.defineProperty(obj, "book", {
    value : "책",
    writable : true,
    enumerable : true
});
var desc = Object.getOwnPropertyDescriptor(obj, "book");
for (var key in desc) {
    console.log(key + " : " + desc[key]);
}

/**
 * seal()
 * 추가 금지는 오브젝트 단위로 설정하고
 * 삭제 금지는 프로퍼티 단위로 설정한다.
 */