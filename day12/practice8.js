/*
 [ 제품 관리 페이지]
    1. 목표
        사용자가 카테고리, 제품명, 가격, 이미지를 포함한 제품 정보를 등록하고, 등록된 모든 제품을 표 형태로 한눈에 확인하며 관리할 수 있는 웹 페이지를 제작합니다.
    2. 화면 구성
        페이지는 사용자가 정보를 입력하는 '제품 등록 영역'과 등록된 결과를 보여주는 '제품 목록 영역'으로 명확히 구분되어야 합니다.
        제품 등록 영역 (<div id="header">):
        카테고리 선택: 미리 정의된 카테고리 목록에서 제품의 분류를 선택할 수 있는 드롭다운 메뉴가 있어야 합니다. (예: '음료', '과자')
        제품명 입력: 등록할 제품의 이름을 텍스트로 입력할 수 있어야 합니다. (예: "코카콜라")
        제품 가격 입력: 제품의 가격을 숫자로 입력할 수 있어야 합니다. (예: 1000)
        제품 이미지 입력: 제품의 사진을 사용자의 컴퓨터에서 파일 형태로 선택하여 첨부할 수 있어야 합니다.
        등록 버튼: 모든 정보를 입력한 후, 목록에 제품을 추가하기 위한 "등록" 버튼이 있어야 합니다.
        제품 목록 영역 (<div id="main">):
        등록된 모든 제품 정보를 보여주는 표(테이블)가 있어야 합니다.
        표는 "이미지", "카테고리명", "상품명", "가격", "등록일", "비고" 순서의 열로 구성되어야 합니다.
        각 제품 항목(행)마다 해당 제품을 관리할 수 있는 "삭제" 버튼과 "수정" 버튼이 포함되어야 합니다.
    3. 핵심 기능
        초기 데이터 표시:
        사용자가 페이지에 처음 방문했을 때, 카테고리 선택 메뉴에는 두 개의 예시 카테고리('음료', '과자')가 기본적으로 표시되어 있어야 합니다.
        제품 목록 표에는 사용법을 쉽게 이해할 수 있도록 네 개의 예시 제품이 기본적으로 표시되어 있어야 합니다.
        제품 등록 기능:
        사용자가 '등록 영역'에 카테고리, 제품명, 가격을 모두 입력하고 "등록" 버튼을 클릭하면, 해당 제품이 '목록 영역' 표에 새로운 행으로 즉시 추가되어야 합니다.
        제품 등록 시, 등록 날짜는 현재 날짜로 자동 기록되어야 합니다.
        첨부된 이미지는 목록의 '이미지' 열에 표시되어야 하며, 이미지를 첨부하지 않은 경우 기본 이미지가 대신 표시되어야 합니다.
        제품 관리 기능:
        삭제: 각 제품의 "삭제" 버튼을 클릭하면 해당 제품이 목록에서 즉시 제거되어야 합니다.
        수정: "수정" 버튼을 클릭하면, prompt 창을 통해 새로운 제품명과 가격을 입력받아 해당 제품의 정보를 수정하고 목록을 즉시 갱신해야 합니다.
*/

/* 
    1. 기획서/요구사항 따른 프로토타입
    2. 메모리 설계
        1) 저장해야할 것들을 모두 찾아보기 , 카테고리명/제품명/가격/이미지/등록일
        2) 속성들 간의 종속관계 파악 , 테이블 나누기 
            카테고리명 제품명   가격   이미지      등록일 
            음료       콜라     1000   xxx.png    2026-07-22
            음료       사이다   2000   xxx.png    2026-07-23
            -------------------------------------------------
            카테고리명                      제품명      가격        이미지      등록일
            음료                            콜라        1000       xxx.png      2026-07-22
                                            사이다      2000        xxx.png     2026-07-22
        3) 쪼개진 테이블 간 연관 만들기 , 관계형데이터베이스*
            3-1) 테이블당 식별자(PREMARY KEY = PK) 1개 이상 권장
            3-2) 상하관계 파악해서 식별자(코드) 하위요소에 저장한다.( FK : 참조/외래 키) , *교집합*
            카테고리코드 카테고리명             제품코드    제품명      가격        이미지      등록일       카테고리코드(FK)
            1           음료                    1        콜라        1000        XXX.PNG    2026-07-22      1
            2           과자                    2       사이다       2000        XXX.PNG    2026-07-22      1
        4) JS(JSON) 로 표현 , 표 = 베열 / 객체 = 행 / 열 = 속성 
    
    3. 기능 설계 : CRUD , RESTAPI
        등록(CREATE) : 게시물쓰기 , 회원가입 , 수강신청 등등
            실행조건 : 등록버튼 클릭했을때  , 함수명: productAdd , 매개변수 : x  , 반환값 : x 

        조회(READ)   : 게시물전체조회 , 마이페이지 등등
            실행조건 : JS열릴때/최신화(등록/수정/삭제) , 함수명: productPrint , 매개변수 : x , 반환값 : x 

        수정(UPDATE) : 게시물수정 , 내정보수정 , 수강신청수정 등등 
            실행조건 : 수정버튼 클릭했을때  , 함수명: productUpdate , 매개변수 : 수정할제품코드(누구를/대상) , 반환값 : x 

        삭제(DELETE) : 게시물삭제 , 회원탈퇴 등등
            실행조건 : 삭제버튼 클릭했을때 , 함수명: productDelete , 매개변수 : 삭제할제콤코드(누구를/대상) , 반환값 : x 
*/
// 2.
let categoryList = [ { 'ccode' : 1 , 'cname' : '음료'  } , { 'ccode' : 2 , 'cname':'과자' } ]
let productList = [
    {'pcode' : 1, 'pname' : '콜라', 'pprice' : 1000, 'pimg' : 'https://placehold.co/100x100', 'pdate' : '2026-07-22', 'ccode' : 1 },
    {'pcode' : 2, 'pname' : '환타', 'pprice' : 2000, 'pimg' : 'https://placehold.co/100x100', 'pdate' : '2026-07-23', 'ccode' : 1 },
]

// [1] 전체조회 함수 
productPrint( ) // JS가 열릴때 최초 1번 실행 
function productPrint( ){
    // 1. 어디에
    let tbody = document.querySelector( '#main table tbody' )
    // 2. 무엇을 , 배열내 모든 객체(자료) 들을 HTML(문자열)형식 구성
    let html = ""
    for( let index = 0 ; index <= productList.length-1 ; index++ ){
        let product = productList[index] // index번째 제품객체 1개 
        // ++ 현재 index번째 제품의 카테고리번호에 해당하는 카테고리명 찾기
        let cname = ''
        for( let j = 0 ; j <= categoryList.length-1 ; j++ ){
            if( categoryList[j].ccode == product.ccode ){ // 만약에 카테고리내 카테고리번호 와 제품의 카테고리번호 같다면 
                cname = categoryList[j].cname;
                break; // 찾았으면 끝 
            }
        } 
        // 만일 샘플 HTML 존재하면 복사 해서 `백틱 사이 붙여넣기 , 변수 자리에 ${ } 변경 
        html += `<tr>
                    <td> <img src=${ product.pimg } /> </td>
                    <td> ${ cname } </td> <td> ${ product.pname } </td> 
                    <td> ${ product.pprice} </td> <td> ${ product.pdate } </td> 
                    <td> 
                        <button class="deleteBtn" onClick="productDelete( ${ product.pcode } )">삭제</button> 
                        <button class="updateBtn" onClick="productUpdate( ${ product.pcode } )">수정</button> 
                    </td>
                </tr>`
    } // for end 
    // 3. 출력 
    tbody.innerHTML = html
} // F END 

// [2] 삭제 함수 
function productDelete( pcode ){
    // 1. 삭제할 pcode의 제품객체를 배열에서 찾는다.
    for( let index = 0 ; index <= productList.length -1 ; index ++ ){
        if(productList[index].pcode == pcode ){
           productList.splice( index , 1 ); // 2. 배열에서 요소 삭제 . splice( 인덱스번호 , 개수 )
           alert('삭제 성공');
           productPrint()// 3. 조회구역 최신화
           return // 주의할점 : return function{} 탈출 VS break for{} 탈출
        }
    }
} // f end

// [3] 수정 함수
function productUpdate( pcode ){
    // 1. 수정할 pcode의 제품객체를 배열에서 찾는다.
    for( let index = 0 ; index <= productList.length -1 ; index++ ){
        if(productList[index].pcode == pcode ){
            let newPname = prompt( '수정할 제품명 입력하세요.' )
            let newPprice = prompt( '수정할 가격 입력하세요.' )
            productList[index].pname = newPname // 2. 배열에서 특정한 요소값 수정
            productList[index].pprice = newPprice
            productPrint( ); return;
        }
    }
} // f end
// [4] 등록 함수 
let finalPcode = 2 // 현재 마지막으로 사용한 제품코드
function productAdd( ){ 
    // 1. 입력받은 값 가져오기
    let category = document.querySelector('.category').value // <select> 마크업의 value는 선택한 <option value> 반환
    let name = document.querySelector('.name').value 
    let price = document.querySelector('.price').value
    let image = document.querySelector('.image').files[0] // + 첨부파일은 .files[0] 속성에서 첨부파일의 첫번째 자료를 가져오기
        // 유효성판단/검사 , 꼼꼼히 !!
        if( category == 'disabled' ){ 
            alert( '카테고리 선택해주세요' ); return; } // * 코드의 흐름이 return 만나면 아래코드는 생략하고 함수종료
    // 2. 입력받은 값들을 객체화 , 중간검사 : console.log() 이용한 변수/자료 출력
        // pcode : 제품식별번호로 사용자가 지정하지 않고 *자동번호 부여*
        // pdate : 현재 시스템 날짜/시간 함수 , new Date()
            // 현재연도 : new Date().getFullYear()  ,   현재월 : new Date().getMonth()  , 현재일 : new Date().getDate , 시.분.초 도 가능
            // console.log( new Date().getFullYear() ) / console.log( new Date().getMonth() ) / console.log( new Date().getDate )
    let pdate = `${ new Date().getFullYear() }-${ new Date().getMonth()+1 }-${ new Date().getDate() }`
    let object = { ccode : category , pname : name , pprice : price , 
                    // 만약에 첨부파일선택이 없으면 (undefined) 기본이미지 있으면 선택한첨부파일가상URL 생성
                   pimg : image == undefined ? '기본이미지' : URL.createObjectURL( image ) , // URL.creatObjectURL( 객체 ) 객체 (가상)주소 생성 
                   pcode : finalPcode+1 , pdate : pdate }
    // 3. 배열 저장 , **마지막 제품코드 1 증가**
    productList.push( object ); finalPcode += 1
    // 4. 성공 , 화면 최신화
    alert('등록성공'); 
    productPrint();
} // f end