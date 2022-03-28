/**
 * String 오브젝트
 * -  문자 처리를 위한 오브젝트
 * - 함수와 프로퍼티가 포함되어 있음.
 */

var book = "12" + "AB" + "qwer";
console.log(book);

/**
 * String()
 * 123
 * string
 */
var value = String(123);
console.log(value);
console.log(typeof value);

/**
 * new String()
 * - 인스턴스를 생성하여 반환
 * - 123이 프리미티브 값이 된다.
 * 
 * [String: '123']
 * object
 */
var value = new String(123);
console.log(value);
console.log(typeof value);

/**
 * valueOf()
 */
var obj = String(123);
console.log(obj.valueOf());

var obj = new String(123);
console.log(obj.valueOf());

/**
 * length 프로퍼티
 * - 문자 수 반환
 * 
 * 엔진이 value.length 를 만나면
 * -> value 가 String 타입이므로
 * -> 내부에서 new String("ABC")를 하게 되며
 * -> [[PrimitiveValue]] : "ABC" 를 보고 length 프로퍼티를 만든다.
 * -> 생성한 인스턴스의 length 값인 3을 반환하게 된다.
 * 
 * 이름 : 값
 * 0 : "A"
 * 1 : "B"
 * 2 : "C"
 */
var value = "ABC";
for (var k=0;k<value.length;k++) {
    console.log(value[k]);
}

/**
 * trim()
 * - 문자열 앞뒤의 화이트 스페이스 삭제
 */
var value = "  abc  ";
console.log(value.trim().length);

/**
 * 함수 호출 구조
 */
var value = 123;
var result = value.toString();
console.log(typeof result);

/**
 * "123".toString()
 * - 왜 하지? 의미가 없지 않나?
 * -> 
 * __proto__:
 *  toString();
 *  __proto__
 *      toString();
 * 
 * - 그래서 대부분의 빌트인 오브젝트에 toString() 과 valueOf() 가 있다.
 */
var obj = String;
var instance = new String("123");

//obj 에 toString() 이 없다.
var oneProto = instance.__proto__;
//문자열을 toString 으로 변환하는 것
var oneString = oneProto.toString; //toString 함수가 있는지 확인

//여기서 instance.__proto__ 를 펴치면 toString() 이 있다.
var twoProto = instance.__proto__.__proto__;
//프로퍼티를 toString 으로 변환하는 것
var twoString = twoProto.toString; //twoProto 에서 toString() 이 있다. 

//구조적으로 toString() 이 두 개가 있는 모습니다.

//String 오브젝트에 toString() 이 없으면
//Object 오브젝트의 toString() 이 호출된다.
//"123" 을 Object 타입으로 인식하여 변화낳기 때문에 String 오브젝트에 toString() 이 있는 것이다.

/**
 * js 함수 호출 구조
 * - 우선 데이터 타입으로 오브젝트를 결정하고 오브젝트의 함수를 호출한다. 
 */

//__proto__.__proto__ 의 toString() 이 호출된 것
//즉, Object 오브젝트의 toString() 이 호출된다.
//[object Undefined] 와 같이 이상한 값이 나오므로 빌트인 String 오브젝트에 toString() 이 있는 것
var result = toString(123);
console.log(result); //[object Undefined]

/**
 * 인덱스로 문자열 처리
 */
var value = "sports";
console.log(value.charAt(1)); //p
console.log(value[1]); //p
console.log(value.charAt(12)); //""
console.log(value[12]); //undefined

//찾는 문자 없으면 -1 반환
var value = "123123";
console.log(value.indexOf(2)); //1번 인덱스 반환
console.log(value.indexOf(23)); //1번 인덱스 반환
console.log(value.indexOf(2, 3)); //3번째부터 2를 찾기

/**
 * indexOf(a, b)
 * b 가 0 보다 작으면 처음부터 검색
 * b 가 length 보다 크면 -1 반환
 * b 가 NaN 이면 처음부터 검색
 */

/**
 * lastIndexOf()
 * 오른쪽에서 왼쪽으로 검색
 */
var value = "1231231";
//index 는 앞에서부터 순서니까 index 4번에서 부터 거꾸로 1을 찾으면 index 3번이 반환
console.log(value.lastIndexOf(1, 4)); //3

/**
 * indexOf(searchValue, fromIndex)
 */

console.log("=== indexOf 함수 ===");
var value = "123456781234";
console.log(value.indexOf(3)); //2
console.log(value.indexOf(4, 6)); //11
console.log(value.indexOf(4, -1)); //3
console.log(value.indexOf(-1, 3)); //-1

console.log("=== lastIndexOf 함수 ===");
var value = "123456781234";
console.log(value.lastIndexOf(3)); //10
console.log(value.lastIndexOf(4, 6)); //3
console.log(value.lastIndexOf(4, -1)); //-1
console.log(value.lastIndexOf(-1, 3)); //-1

/**
 * 문자열 연결
 * - 인스턴스의 프리미티브 값을 연결한다.
 */
var result = "sports".concat("축구", 11);
console.log(result); //sports축구11


/**
 * 대소문자 변환
 * - toLowerCase()
 * - toUpperCase()
 */

/**
 * 문자열 추출
 * substring(a, b)
 * - a 가 음수이면 0으로 간주
 * - a 가 b 보다 크면 둘을 바꿔서 처리
 * - NaN 이 오면 0으로 간주 -> 그때 a 가 b보다 크면 둘을 바꿔서 처리
 */
var value = "012345678";
console.log(value.substring(2, 5)); //234

/**
 * substr(시작 인덱스, 반환할 문자 수)
 */

/**
 * slice()
 * false, undefined, null, 빈 문자열, NaN 은 0으로 간주
 */

/**
 * match() 
 * - 매치 결과를 배열로 반환
 */
var value = "Sports";
console.log(value.match(/s/)); //[s]
console.log(value.match("spo")); //null

/**
 * replace()
 */
var value = "abcabc";
console.log(value.replace("a", "바꿈")); //console.log(value.replace(/a/, "바꿈")); 와 같다.

function change() {
    return "함수";
}

console.log(value.replace(/a/, change())); //함수bcabc

/**
 * search()
 */
var value = "cbacba";
console.log(value.search(/a/)); //2
console.log(value.search("K")); //-1

/**
 * split()
 */
console.log("12_34_56".split("_")); //[ '12', '34', '56' ]
console.log("12_34_56".split("_", 1)); //[ '12' ]

/**
 * Unicode 함수
 */
var value = "1Aa가";
for (var k=0;k<value.length;k++) {
    console.log(value.charCodeAt(k));
}
console.log(value.charCodeAt(12));

//fromCharCode 는 proto 에 있는 게 아닌 원본에 있다.
console.log(String.fromCharCode(49, 65, 97, 44032)); //1Aa가

var value = "나";
console.log(value.localeCompare("가")); //1 (나 - 가)
console.log(value.localeCompare("나")); //0
console.log(value.localeCompare("다")); //-1