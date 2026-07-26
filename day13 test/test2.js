// [3]


getBoard()
function getBoard(){
    const url = new URLSearchParams(location.search)
    const selectNo = url.get('no')

    let boardList = localStorage.getItem('boardList')
    if( boardList == null ){ boardList = []  
    }else{ boardList = JSON.parse(boardList) }

    for( index = 0 ; index <= boardList.length -1 ; index ++ ){
        const obj = boardList[index] 
        if(obj.no == selectNo){
            document.querySelector('#title').innerHTML = obj.title
            document.querySelector('#content').innerHTML = obj.content;
            return;
        }
    }
}
function boardDelete(){

    const url = new URLSearchParams( location.search); 

    const selectNo = url.get('no');

    let boardList = localStorage.getItem('boardList');
    if( boardList == null ) { boardList = [] }
    else{ boardList = JSON.parse( boardList );}

    for( let i = 0 ; i < boardList.length ; i++ ){
        const obj = boardList[i];
        if( obj.no == selectNo ){ 
          
            const confirm = prompt('비밀번호 입력');
            if( obj.pwd == confirm ){ 
                boardList.splice( i , 1 ); 
                localStorage.setItem( 'boardList' , JSON.stringify(boardList) );
                alert('삭제 성공');
                location.href = 'list.html';  
            }else{
                alert('삭제 실패 : 비밀번호 불일치 ')
            }
        }
    } 
} 
