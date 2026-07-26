function boardWrite( ){
    // 1.
    const titleInput = document.querySelector('#titleInput')
    const contentInput = document.querySelector('#contentInput')
    const pwdInput = document.querySelector('#pwdInput')
    // 2.
    const title = titleInput.value
    const content = contentInput.value 
    const pwd = pwdInput.value
    // 3. 
    const obj = { title , content , pwd }
    // 4. 
    let boardList = localStorage.getItem('boardList')
    if( boardList == null ){ boardList = []
    }else{ boardList = JSON.parse(boardList) }
    // 5. 
    obj.no = boardList.length = 0 ? 1 : boardList[boardList.length -1].no+1
    boardList.push(obj)
    // 6.
    localStorage.setItem('boardList' , JSON.stringify(boardList))
    alert('게시물 작성 성공')
    location.href = 'html'
}
// ==========================================================================
boardPrint ( )
function boardPrint( ){
    // 1. 어디에
    const boardTbody = document.querySelector('boardTbody')
    // 2. 무엇을
        // 2-1. localStorage 에서 배열 가져오기
    let boardList = localStorage.getItem('boardList')
    if(boardList == null){ boardList = [] 
    }else{ boardList = JSON.parse(boardList) }
        // 2-2. 반복문 이용하여 배열내 하나씩 조회
    let html = ``
    for( let index = 0 ; index <= boardList.length -1 ; index ++ ){
        const obj = boardList[index]
        // 2-3. 하나씩 tr 구성
    html += `<tr>
            <td> ${obj.no} </td>
            <td> <a href="http://127.0.0.1:5500/day13/test/write.html"> </a> </td>
            </tr>`
    }
    boardTbody.innerHTML = html;
}
// (1) 쿼리스트링에서 특정한 게시물번호의 정보 조회
getBoard(); // JS가 실행될때 최초1번 자동으로 함수실행 
function getBoard(){
 // 1. URL(웹주소) 상의 웹주소 가져오기
 const url = new URLSearchParams( location.search );
 // 2. 웹주소에서 선택된 게시물번호(쿼리스트링값) 가져오기
 const selectNo = url.get('no');
 // 3. localStorage 에서 배열 가져오기
 let boardList = localStorage.getItem('boardList');
 if( boardList == null ){ boardList = [] }
 else{ boardList = JSON.parse(boardList); }
 // 4. 선택된 게시물번호와 일치한 게시물 찾기 <for>
 for( let index = 0 ; index <= boardList.length-1; index++ ){
 const obj = boardList[index];
 if( obj.no == selectNo ){ // 만약에 내가 선택한 게시물번호와 일치
 // 5. 찾았으면 내용 출력
 document.querySelector('#title').innerHTML = obj.title
 document.querySelector('#content').innerHTML = obj.content;
 return;
 }
 } // for end 
} // func end 
// (2) 삭제함수
function boardDelete(){
    // 1. URL(웹주소) 의 경로 가져오기 
    const url = new URLSearchParams( location.search); 
    // 2. 경로 상의 선택된 게시물번호(쿼리스트링) 가져오기
    const selectNo = url.get('no');
    // 3. localStorage 에서 배열 가져오기
    let boardList = localStorage.getItem('boardList');
    if( boardList == null ) { boardList = [] }
    else{ boardList = JSON.parse( boardList );}
    // 4. 배열내 선택된 게시물번호가 존재하면 
    for( let i = 0 ; i < boardList.length ; i++ ){
        const obj = boardList[i];
        if( obj.no == selectNo ){ // 만약에 선택된 게시물번호를 찾았으면
            // 5. 확인용비밀번호를 입력받아 기존 비밀번호와 일치하면 삭제 , 아니면 실패
            const confirm = prompt('비밀번호 입력');
            if( obj.pwd == confirm ){ //비밀번호 일치  
                boardList.splice( i , 1 ); // 객체 1개 삭제
                localStorage.setItem( 'boardList' , JSON.stringify(boardList) );
                alert('삭제 성공');
                location.href = 'list.html';  // 6. (성공) list.html 이동
            }else{
                alert('삭제 실패 : 비밀번호 불일치 ')
            }
        }
    } // for end 
} // func end 
