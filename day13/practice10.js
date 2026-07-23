/*
3. 데이터 관리

저장소: 모든 회원 정보는 브라우저의 **localStorage**를 사용하여 저장 및 관리되어야 합니다. 

데이터 구조: 회원 목록은 객체(Object)를 담는 배열(Array) 형태로 관리합니다.

각 회원 객체는 { 'no' : 회원번호 , 'id' : 아이디, 'pw' : 비밀번호 } 형태를 가집니다.

회원번호(no)는 등록 시마다 1씩 자동 증가해야 합니다.

이 배열 전체는 JSON.stringify()를 통해 문자열로 변환된 후, localStorage에 'memberList'라는 키(key)로 저장되어야 합니다.

4. 핵심 기능 구현

 signup() 구현:

입력된 아이디와 비밀번호를 입력받아 (memberList)배열 에 새로 생성한 회원 객체를 추가(push)합니다.

회원번호는 현재 배열의 마지막 회원번호에 1을 더한 값으로 자동 부여합니다.

login() 구현:

입력된 아이디와 비밀번호를 입력받아 (memberList)배열 내의 어떤 회원 객체의 id, pw 값과 모두 일치하면, "로그인 성공" 알림창을 띄
우고 함수를 즉시 종료합니다.

일치하는 정보를 찾지 못하면, "동일한 회원정보가 없습니다. 로그인실패" 알림창을 띄웁니다.
*/

// 1. HTML
// 2. 메모리 구조
// let memberList = [ { no , id , pw } , { no , id , pw } ]
// 3. 함수
    // 지역변수(함수가 실행중) vs 전역변수(프로그램 실행중)
// [1] signup 함수
function signup(){
    // 1. 입력받은 값 가져오기
    let id = document.querySelector('.signId').value;
    let pw = document.querySelector('.signPw').value;
    // [*] localStorage 에 memberList 배열 가져오기 *JSON파싱*
    let memberList = JSON.parse( localStorage.getItem('memberList') )
    console.log( memberList ) // 없으면 null
    if( memberList == null ){ // 최초 등록이면 배열 구성
        memberList = [ ]
    }
    // 마지막인덱스 : .length -1
    let no = memberList.length == 0 ? 1 : memberList[ memberList.length-1 ].no+1
    // 2. 객체화
    let obj = { no , id , pw }
    // 3. 배열 저장한다.  --> JSON으로 파싱해서 가져오기 ; 전역변수 X
    memberList.push( obj ) ; console.log( memberList );
    // 4. 성공처리
    alert('등록 성공');
    // [*] localStorage 에 memberList 배열 저장하기
    localStorage.setItem( 'memberList' , JSON.stringify(memberList) )
} // f end

// [2] login 함수 , 자료 단순 비교
function login( ){ 
    // 1. 입력받은 값 가져오기
    let id = document.querySelector('.loginId').value;
    let pw = document.querySelector('.loginPw').value;
    // 2. 입력받은 값이 배열내 정보와 비교
    // [*] localStorage 기존 배열 가져온다.
    let memberList = JSON.parse( localStorage.getItem( 'memberList' ) );
    if( memberList == null ){
        return;
    }
    for( let i = 0 ; i <= memberList.length -1 ; i ++ ){
        if( memberList[i].id == id && memberList[i].pw == pw ){
            alert( "로그인 성공" ); // return 을 만남
            return;
        }
    }
    alert( "회원정보가 없습니다.") // return 을 못 만남
}
