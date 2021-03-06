2021년 9월 30일 자바스크립트 기초 공부시작

[기본문법] 21.09.30-

- 대부분은 알고 있는 내용이지만 데이터타입을 자바스크립트에서 어떻게 처리하는지나 어떤 데이터 타입이 있느지 등 한번 더 정확하게 공부함.

1. 헬로우 자바스크립트

- HTML파일에 자바스크립트를 불러오거나 태그안에서 작성하는 방법

2. 문장

- 세미콜론까지 한문장이고 보통 내어쓰기는 2칸이나 4칸을 사용함

3. 변수

- 변수는 값을 저장하는 영역이고 다시 사용하기 위해 값을 할당함
- 변수는 시멘틱하게 작명해야 함
- 하나의 변수의 값을 2번 이상 할당할경우 나중의 값으로 변함

4. 주석

- 주석은 자바스크립트 코드로 인식되지 않음
- (//) 한줄 주석과 (/\* \*/) 블록주석이 있음
- Js 스펙이란 자바스크리브 문법을 작성한 문서
- ES3, ES5는 JS 스펙의 에디션

5. 콘솔로그

- 소괄호 안에 작성값을 브라우저 콘솔창에 출력
- JS에서 제공하는 것은 아니며 콘솔로그 api에서 지원함

6. 정수, 실수, 숫자 처리

- 정수는 소수가 없는 숫자
- 실수는 소수를 가진 숫자
- 자스는 정수와 실수를 구분하지 않고 모두 1.0으로 간주하나 1로 표시함
- 부동소수점 처리란 123을 123.0으로 처리하는 것 정수와 실수의 계산이 가능해짐
- ES6에 정수, 실수 구문을 추가

7. 상수, 진수

상수

- 변경할 수 없는 값
- 자바스크립트에서는 선언적 의미였지만 ES6에 const가 생기면서 상수가생김;
- 관례적으로 영문 대문자를 사용함 var ONE = 1;
- 자스가 제공하는 상숫값을 변경 불가 number.MAX_VALUE 등

진수

- 10진수: 123
- 16진수: 1자리 0, 2자리 x, 3자리 0~f 대소문자 구분하지 않음
- 8진수: ES6에서 첫자리 1자리 0, 2자리 O, 3자리 0~7로 재정의
- 2진수: ES6에서 특별한 방법 제공

8. 데이터 타입(자료형)

- 데이터 타입의 형태 숫자, 문자 등
- typeOf 연산자를 사용하면 데이터타입을 리턴
- keyword 특별한 단어를 가진
- 데이터는 반드시 타입을 갖는다
- 자바스크립트는 타입을 먼저 선언하고 타입에 맞는 데이터를 할당하지 않음

9. Number, String

언어타입과 스펙타입

- 언어타입 undefined, Null, Boolean, String, Number, Object
- 스펙타입 자스 문서 작성타입

Number Type

- 부호를 가진 값
- 특수 값으로 NaN, Infinity, -Infinity가 있음

String Type

- 값을 (""),(') 사이에 작성
- 같이 사용할 때 "''" 같이 큰따옴표 안에 작은 따옴표를 표시하고 반대도 가능함

10. Undefined, Null

- 대문자 언디파인드는 스펙이서 사용하지만 소문자는 값임
- 변수의 비폴트 값
- 변수에 값을 할당하지 않았음을 나타내는 시멘틱
- 변수에 undefined할당 가능
- null은 의도적으로 값을 할당해야 함
- typeOf시 Object로 출력

11. Boolean, Object

- true, false

오브젝트

- Object는 {name: value} 형태
- 프로퍼티는 name과 value 하나를 지칭
- Object는 프로퍼티의 집합

-21.09.30

[연산자(Operator)] 21.09.30-

- 후치,전치 연산자에 개념을 정리했고 ||이나 && 사용시 다음문장을 어떻게 처리하는지 알게됨

1. 연산자, 표현식

- 연산은 규칙에 따라 계산하여 값을 구함
- 형태 +, -, /, %, >, <, >=, <=, ==, !=, !==, === 등
- 표현식의 형태 1+2, var total = 1+2
- 1+2는 표현식을 평가라고 하고 반드시 결과를 반환하며 이를 평가 결과라고 한다.

2. 할당연산자

- 단일과 복합이 있음
- 단일 =
- 복합 +=, -=, \*=, %= 등
- 먼저 = 앞을 연산한 후 할당 point += 3; 더하기를 먼저한 후 할당 // 10
- 왼쪽에서 오른쪽으로 표현식을 평가하고 오른쪽 평가 결과를 왼쪽 표현삭 평과 결과에 할당

3. 산술 연산자

- +연산자는 평과결과를 더함
- 한쪽이 숫자가 아니라면 더하지 않고 연결됨 // "안녕" + 123 = "안녕123"

4. 숫자로 변환

- 자바스크립트는 연산하기 이전에 우선 숫자로 변환을 시도함
- undefined: NaN, Null: 0, Boolean: 1||0, Number: 같음, String: 값이숫자면 숫자 단, +는 연결
- 10+undefined=NaN, 10+ture=11, 10+false=10, 10+null=10, 10+"123"=10123, 123-"23"=100

5. 산술연산자

- 10*"20"=200, 10*true=10, 10*false=0, 10*null=0, 10\*"A"=NaN
- 소수값을 처리할때 실수를 정수로 변환하여 값을 구하고 다시 정수를 실수로 변환해야 함
- 0/"A"=NaN, 0/0=NaN, 10/0=0, 0/10=infinity
- 3%2=1

6. 단항연산자

- +value +와 다름
- Number()를 사용하는 것이 더 가독성이 좋음
- -value, 값의 부호를 바꿈
- 원래 변수의 값은 바뀌지 않는다.

7. 후치, 전치, 논리 NOT연산자

- 형태 value++ 값을 자동으로 1증가시킴, ++value
- var one = 1; one++ + 3 = 4, var one = 1; ++one + 3 = 5
- -도 +와 같음
- !value 참은 거짓으로 거짓은 참으로 원래 값은 바뀌지 않고 사용할때만 변환함

8. 유니코드와 UTF

- 유니코드는 세계의 모든 문자를 통합하여 코드화
- UTF-8은 유니코드의 코드포인트를 매핑

9. 관계연산자

- 타입변환을 먼저 시도함
- (<,>) 넘버일 경우 왼쪽이 오른쪽보다 크면 참 아니면 거짓
- 스트링의 경우 한쪽이 스트링이면 거짓반환하고 모두 스트링이면 코드포인트로 비교

10. 동등, 부등, 일치, 불일치연산자

- ==, !=, ===, !== 3개 짜리는 타입까지 비교함

11. 콤마, 그룹핑 논리연산자

- (,)로 표현식을 분리 var b=1, a=2;
- () 소괄호 안을 먼저 평가
- || 또는 && 그리고

12. 조건연산자, 연산자우선순위

- exp ? exp-1 : exp-2 참이면 왼쪽 값 거짓이면 오른쪽 값 반환

-21.09.30

[문장] 21.09.30-

1. 문장,화이트스페이스, 세미콜론, 블록

- 화이트 스페이스는 보이지 않는 문자임 가독성을 위한것 문자마다 다른 기능을 갖고 있음
- 세미콜론을 작성하지 않고 줄바꿈을 해도 자동으로 삽입해준다.
- 블록 {} 실행 그룹으로 블록안에 모든 문장을 실행한다.

2. if, debugger

- if(표현식) {문장} else {문장} 블락을 사용하여 정리해야함
- debugger; 위치에서 실행 멈춤

-21.09.30

21.10.05-

3. while, do-while

- while 표현식의 평가 결과가 false 될 때까지 반복
- do while do 문을 먼저 실행하고 while을 평가하여 반복 (한번은 무조건 실행)

4. for

- for(초기값; 비교; 증감) {}
- 2번째의 비교 표현식의 평가 결과가 트루인동안 문장을 반복

5. break, continue

- break 반복을 도중에 종료시킴
- continue 멈추고 다시 실행함

6. switch

- switch (표현식) case defalult
- 일치하는 case가 없으면 default수행 이후 break를 사용해야함

7. try-catch, throw

- try {}catch{}finally
- 트라이문에 작성시 에러가 발생하더라도 프로그램이 죽지않고 캐치를 실행한다
- 파이널리는 기본적으로 실행함
- throw 명시적으로 예외를 발생시킴 캐치문의 파라미터로 들어감

8. strict모드

- 형태 "use strict";
- 엄격하게 js문법 사용의 선언
- 작성한 위치부터 적용
- 필수적으로 작성하는 것이 좋다

-21.10.05

[함수] 21.10.05-

1. 함수 구성요소, 함수 이름 규칙과 관례

- 특정 기능을 처리하는 자바스크립트 코드 묶음
- 첫문자는 영문자나 $, \_ 사용
- 함수코드를 읽지 않더라도 이름과 파라미터로 기능을 알 수 있도록 시맨트을 부여하여 한다.
- 카멜캐이스 사용
- 동사 + 명사의 형태로 동적인 모습

2. 함수 호출, return문

- 함수는 호출되어야 실행된다.
- 일반적으로 함수라고 하면 호출 받는 함수를 지칭한다.
- return 표현식opt
- return 또는 표현식을 작성하지 않으면 undefined반환
- return과 표현식을 한 줄에 작성

3. 주석 작성 목적, 주석 작성 사례

- 코드가 목적을 당설하기 위한 기능, 시나리오 등을 생각하고 정리하는 것
- 코드를 작성하기 전에 생각을 정리하여 주석으로 작성하는 것이 좋음
- 주석 작성 기준 코드의 목적, 결과가 미치는 영향을 작성
- 다른 사람이 알 수 있도록 자세하게 작성
- 되도록 코드는 간단하게 작성하는 것이 좋다.

-21.10.06

[오브젝트] 21.10.07-

1. 프로퍼티개요, 프로퍼티 추가/변경

- {name: value} 형태
- 함수도 value에 넣을수 있음
- var obj = {}; obj.abc = 123;

2. 프로퍼티 값 추출, for~in

- es5부터는 작성순서대로 읽혀짐

-21.10.07

[빌트인] 21.10.07-

1. 빌트인 개요, 빌트인 분류

- 값 타입 연산자, 오브젝트를 JS코드를 처리하는 영역에 사전에 만들어 놓은 것
- 사전처리를 하지 않고 즉시 사용
- 자바스크립트의 특징
- 빌트인 넘버 오브젝트는 123과 같은 숫자, 상수, 지수를 처리하는 오브젝트

2. 빌트인 오브젝트 유형

-21.10.07

[Number오브젝트] 21.10.07-

1. number오브젝트 개요, 프로퍼티 리스트

- 숫자처리를 위한 함수와 프로퍼티가 포함되어있다.
- new Number() 인스턴스 생성
- Number() 숫자 값으로 변환하여 반환
- Number.prototype
- toString() 숫자값을 문자열로 변환
- toLocaleString 숫자 값을 지역화 문자로 변환
- valueOf() 프리미티브 값 반환
- toExponential() 지수 표기로 변환
- toFixed() 고정 소숫점 표기로 변환
- toPrecision() 고정 소숫점 또는 지수 표기로 변환

2. Number 타입으로 변환, Number 상수

- Number(값) 소괄호 안의 값을 넘버타입으로 변환함
- Number.MAX_VALUE
- Number.MIN_VALUE
- Number.NaN
- Number.POSITIVE_INFINITY
- Number.NEGATIVE_INFINITY

3. 인스턴스 생성 방법/목적, new 연산자

- 오브젝트로 인스턴스를 생성하여 반환
- 원복을 복사하는 개념
- new 연산자를 사용하면 인스턴스
- 코딩관례로 첫 문자를 대문자로 작성
- var obj = new Number();
- 목적은 인스턴스 마다 값을 갖기 위함

4. Number인스턴스 생성

- new 연산자로 인스턴스를 생성하면 빌트인 오브젝트로 새로운 Number인스턴스를 생성함
- 인스턴스를 생성하면 prototype안에 정보를 복사함

5. 프리미티브 값, 타입, 값 구하기

- 언어에 있어 가장 낮은 단계의 값
- 오브젝트는 프리미티브 값을 제공하지 않음
- [[]]는 자바스크립트 엔진이 생성한 것
- 프리미트브 값을 갖는 오브젝트 boolean, date, number, string
- valueOf number인스턴스의 프리미팁 값 반환

-21.10.07
