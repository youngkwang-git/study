//변수의 선언 방법과 값 할당
var book = "책";

// 값을 할당하는 또 다른 방법 
// (,)를 사용하여 다수 선언
var book = "책", point = 123;
// 줄을 바꾸어 작성
var book = "책",
    point = 123;
// 줄끝에 콤마
var book = "책"
    ,point = 123;

// 변수의 값 할당 규칙, 나중의 값으로 바뀜
var point = 123;
point = 456;
console.log(point); // 456

//같은 값 할당 (노쓸모이니 참고만)
var point = amount = 123; // 권장하지 않음, 값이 연동되는 경우도 있음