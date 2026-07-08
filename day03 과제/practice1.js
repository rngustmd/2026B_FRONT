let 이름 = prompt( '이름 :' )
// prompt() : 사용자에게 입력창을 띄워 값을 입력받는 함수
// 입력받은 값은 문자열(String) 타입 반환
// 예] 김코딩 입력 → 변수 이름 '김코딩' 저장
let 메뉴 = prompt( '메뉴 :' )
// prompt('메뉴 :') 처리 후 입력받은 값 반환
// 예] 아메리카노 입력 → 변수 메뉴 "아메리카노" 저장
let 수량 = prompt( '수량 :')
// prompt()는 문자열(String) 반환
// // 계산을 하지 않는다면 Number() 미사용
// 계산을 할 경우 Number(prompt()) 사용
console.log( `[주문접수]` )
console.log( `이름 : ${ 이름 }` ) // 변수 저장된 값 출력
console.log( `메뉴 : ${ 메뉴 }` )
console.log( `수량 : ${ 수량 }` )









