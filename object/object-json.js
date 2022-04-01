var data = {
    book : "책",
    point : 55
};
function replace(key, value) {
    return key === "point" ? 11 : value;
}
var result = JSON.stringify(data, replace);
console.log(result);

/**
 * 파싱
 * - 서버에서 데이터를 가져올 때 어떤 에러가 나타날지 모르므로 try/catch 작성 필수!!!
 * - 값을 반환하지 않거나 undefined 를 반환하면 프로퍼티가 제외되므로 반환해야한다.
 */
var value = "123";
try {
    var result = JSON.parse(value);
} catch(e) {
    console.log("JSON 파싱 에러");
}
console.log(result);
console.log(typeof result);

