/**
 * property
 * - {name : value} 형태
 * - name 에는 따옴표 작성 생략 가능하다. 
 * - 작성하지 않아도 문자열로 간주하기 때문
 * 
 * - 오브젝트와 객체 구분이 필요할 때는 별도 표기하겠음.
 */
var book = {
    title : "책",
    point : 123
}

var book = {
    title : "책",
    point : {
        tem : 10,
        bonus : 200,
        promotion : function() {

        }
    }
}

var obj = {};
obj.abc = 123;
console.log(obj.abc);

obj["abc"]  = 456;
console.log(obj["abc"])

var book = {title : "js 책"};
var varName = "title";
book[varName] = "html 책";
console.log(book); //{ title: 'html 책' }

/**
 * 프로퍼티 열거
 */
var obj = {book : "책"};
var value = obj.book;
console.log(value);

var value = obj.contents;
console.log(value); //undefined

//ES5 부터는 작성 순서대로 읽힌다.
var sports = {
    soccer : "축구",
    baseball : "야구",
    basketball : "농구"
}
for (var item in sports) {
    console.log(item + " " + sports[item]);
}