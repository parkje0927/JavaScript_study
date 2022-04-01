### 자바스크립트 특징

1.  스크립팅 언어 특징
- 사용하는 시점에 컴파일하고 실행
- 컴파일 순서는 소스 파일의 위에서부터 아래로 컴파일
- 이때, 함수 안의 코드는 컴파일하지 않음.
- 함수가 호출되었을 때, 위의 방법으로 컴파일
 
2. 객체
- 개념적 접근
- 행위와 속성으로 구성
- 객체를 형상화하면 행위가 메소드가 되고, 속성이 프로퍼티가 된다. 객체가 클래스로 된다.
- 클래스는 행위와 속성을 정의한 것으로 인스턴스로 생성하여 프로그램에서 사용한다.

3. js 의 OOP 구현 방법
- prototype
    - prototype 에 메소드 연결
- 다른 언어는 class 안에 메소드와 프로퍼티를 작성하지만,
- 자바스크립트는 **prototype 에 메소드를 연결**하여 작성한다.
- ES6에서 class 에 메소드를 작성 but 내부에서 prototype 에 연결

```javascript
var Book = function(){};

Book.prototype.getBook = function() {
    return "JS book";
}
```
- 아래와 같이 사용해도 내부적으로는 위와 같이 동작하다.
```javascript
class Book {
    contructor(title) {
        this.title = title;
    }

    getBook() {
        return this.title;
    }
}
```

4. 자바스크립트 인스턴스
- Instance : Class 를 new 연산자로 생성한 것
- 인스턴스마다 프로퍼티 값을 유지
```javascript
var Book = function(point) {
    this.point = point;
}

Book.prototype.getPoint = function() {
    return this.point + 100;
}

var oneInstance = new Book(200); //300
```