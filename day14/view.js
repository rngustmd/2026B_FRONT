개별조회함수()
function 개별조회함수(){
    // 1. 어디에 
    let title = document.querySelector('.title')
    let content = document.querySelector('.content')
    // 2. 무엇을 
    let html1 = ''
    let html2 = ''
    // * URL 주소상에 쿼리스트링 매개변수 가져오기,선택한 게시물번호 , http://127.0.0.1:5500/day14/view.html?no=5
    let no = new URLSearchParams( location.search ).get( 'no' )
    // * 웹스토리에 게시물목록 배열 가져오기 
    let boardList = JSON.parse( localStorage.getItem('boardList') )
    if( boardList == null ){ boardList = [] }
    // * 배열내 선택한 게시물번호 찾기
    for( let i = 0 ; i<boardList.length ; i++ ){
        if( boardList[i].no == no ){
            html1 += boardList[i].title
            html2 += boardList[i].content
            break;
        }
    }
    // 2. 출력 
    title.innerHTML = html1;
    content.innerHTML = html2;
}

function 삭제함수( ){
    // 1. 현재 선택한 게시물 번호 
    let no = new URLSearchParams( location.search).get('no')
    // 2. 배열에 찾아서 
    let boardList = JSON.parse( localStorage.getItem('boardList'))
    if( boardList == null ){ boardList = [ ]}

    for( let i = 0 ; i<boardList.length ; i++ ){
        if( boardList[i].no == no ){
            let confirmPwd = prompt('비밀번호 입력')
            if( boardList[i].password == confirmPwd){
                // 3. 삭제 * 비밀번호 일치.
                boardList.splice( i , 1 );
                alert('삭제성공')
                // 4. 웹스토리에 배열 상태 최신화
                localStorage.setItem( 'boardList' , JSON.stringify( boardList ) )
                // 5. 페이지 전환 
                location.href='list.html'
                return
            }
        }
    }
}//  f end 




// (3) 수정 이동 함수 
function 수정함수 (){
 // 1. URL(웹주소) 의 경로 가져오기 
 const url = new URLSearchParams( location.search );
 // 2. 경로 상의 선택된 게시물번호(쿼리스트링) 가져오기
 const selectNo = url.get('no');
 // 3. localStorage 에서 배열 가져오기
 let boardList = localStorage.getItem('boardList');
 if( boardList == null ) { boardList = [] }
 else{ boardList = JSON.parse( boardList);} 
 // 4. 배열내 선택된 게시물번호가 존재하면 
 for( let i = 0 ; i < boardList.length ; i++ ){
 const obj = boardList[i];
 if( obj.no == selectNo ){
 const confirm = prompt('비밀번호 입력')
 if( obj.pwd == confirm ){
 // 만약에 비밀번호가 일치 하면 수정페이지로 이동 
 location.href = `update.html?no=${selectNo}`
 }else{
 alert('수정 불가 : 비밀번호 불일치');
 }
 }
 } // for end 
 // 5. 확인용비밀번호를 입력받아 기존 비밀번호와 일치하면 수정페이지 이동
} // func end 