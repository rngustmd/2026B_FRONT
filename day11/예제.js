/*예제 1: 요소 내용 변경하기
id가 'title'인 <h1> 요소의 내용을 'DOM 조작 성공!'으로 변경하시오.*/
const title = document.querySelector('#title')
title.innerHTML = "DOM 조작 성공!"
// let a = 3+3 , a + 2 vs 3+3+2
document.querySelector('#title').innerHTML = "DOM 조작 성공!"

/*예제 2: 사용자 입력값 가져와서 표시하기
id가 'usernameInput'인 <input>에 이름을 입력하고 '확인' 버튼(id: 'submitBtn')을 클릭하면, 
id가 'greeting'인 <p> 태그에 "안녕하세요, [입력된이름]님!"이라고 표시하시오.*/
function 작성함수( ){
    // 1. 특정한 DOM 마크업 가져오기
    const 입력마크업 = document.querySelector('#usernameInput')
    // 2. 가져온 DOM마크업에서 value 속성 가져오기
    const 입력값 = 입력마크업.value
    // 3. 출력할 특정한 dom에 출력하기
    document.querySelector('#greeting').innerHTML = 입력값
} // f end

/*예제 3: 요소 스타일 동적으로 변경하기
'스타일 변경' 버튼(id: 'styleBtn')을 클릭하면, id가 'colorBox'인 
<div>의 배경색을 'skyblue'로, 글자색을 'white'로 변경하시오.*/
function 색상변경함수(){
    // 1. 특정한 DOM 마크업 가져오기
    let 마크업 = document.querySelector('#colorBox')
    // 2. 가져온 DOM마크업에서 style 속성 대입하기
    마크업.style = "background-color:skyblue; color:white;"
    // vs CSS속성명(카멜표기법)
    마크업.style.backgroundcolor = 'skyblue'
    마크업.style.color = 'white'    
} // f end

/*예제 4: CSS 클래스 토글하기 (다크 모드 예시)
'테마 변경' 버튼(id: 'themeBtn')을 클릭할 때마다 <body> 태그에 
'dark-mode' 클래스를 추가하거나 제거(토글)하시오. */
function 토글함수( ){ // 토글? on/off
    // 1. 특정함 마크업DOM 가져오기
    let 마크업 = document.querySelector('body')
    // 2. 가져온 마크업DOM에서 토글
        // .classList : 클래스 요소 목록 반환
        // .classList.toggle( '클래스명' ) : 클래스 목록에 특정 클래스명 대입/삭제
    마크업.classList.toggle( 'dark-mode' )
}

/*예제 5: 특정 HTML 요소 제거하기
'박스 삭제' 버튼(id: 'removeBtn')을 클릭하면, id가 'targetBox'인 <div> 요소를 문서에서 제거하시오. */
function 삭제함수( ){
    // 1. 특정한 마크업DOM 가져오기
    let 마크업 = document.querySelector('#targetBox')
    // 2. 가져온 마크업DOM 삭제하기
    마크업.remove()
}

/*예제 6: 여러 요소에 동일한 작업 반복하기
클래스가 'item'인 모든 <p> 요소의 글자색을 'green'으로, 글자 두께를 'bold'로 변경하시오. */
// 1. 특정한 (여러개) 마크업 DOM 가져오기
let 마크업배열 = document.querySelectorAll('.item')
// 2. 가져온 여러개 마크업들 반복하기
for( let index = 0 ; index <= 마크업배열.length - 1 ; index ++ ){
    let 아이템 = 마크업배열[index]
    아이템.style.color = 'green'
    아이템.style.fontWeight = 'bold'
    // 카멜표기법 vs CSS표기법
    //아이템.style = 'font=weight:bold;'
}

/*예제 7: 이미지 소스(src) 변경하기 , https://placehold.co/ 
'이미지 변경' 버튼(id: 'changeImgBtn')을 클릭하면, id가 'mainImage'인 
<img> 요소의 src 속성을 'https://placehold.co/600x400/red/white'로 변경하시오. */
function 이미지변경함수( ){
    // 1. 특정한 마크업 DOM 가져오기
    let 마크업 = document.querySelector('#mainImage')
    // 2. 가져온 마크업에 src 속성 대입하기
    마크업.src = 'https://placehold.co/600x400/red/white'
}


/* 예제 8 : select 에서 선택한 option값 console 출력하기. */
// <select onchange="목록선택함수()">
function 목록선택함수( ){ 
    // 1. 특정한 마크업 DOM 가져오기
    let 마크업 = document.querySelector('select')
    // 2. 가져온 마크업에 선택한 value 가져오기
    let 선택값 = 마크업.value;
    console.log( 선택값 )
}

/* 예제 9 : input 에서 입력받은 값을 전역 배열에 저장하고 배열 상태를 출력하기. */
function 작성함수( ){
    // 1. 특정한 DOM 마크업 가져오기
    const 입력마크업 = document.querySelector('#usernameInput')
    // 2. 가져온 DOM마크업에서 value 속성 가져오기
    const 입력값 = 입력마크업.value
    // 3. 출력할 특정한 dom에 출력하기