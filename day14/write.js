// js 열렸는지 확인 
console.log( 'write.js' )

function 등록함수(){
        console.log( '등록함수 실행' )
    // 1. 입력받은 값 가져오기 
    let title = document.querySelector('.title').value;
    let content = document.querySelector('.content').value;
    let password = document.querySelector('.password').value;
        console.log( title , content , password )
    // 2. 객체 : 묶어주기
    let obj = { title , content , password }
        console.log( obj )
    // 3. 웹스토리에 배열 가져오기 *
    let boardList = JSON.parse( localStorage.getItem( 'boardList') )
        console.log( boardList )
    if( boardList == null ){ boardList = [] }
        console.log( boardList )
    // 4. 저장 
    let no = boardList.length == 0 ? 1 : boardList[ boardList.length - 1 ].no + 1 
        console.log( no )
    obj.no = no 
    // 5. 배열 저장
    boardList.push( obj )
        console.log( boardList )
    // 6. 웹스토리에 배열 저장 * 
    localStorage.setItem( 'boardList' , JSON.stringify( boardList ) ) // 개발자도구에서 확인 
    // 7. 성공시 페이지 전환 
    location.href= 'list.html'
} // f end 