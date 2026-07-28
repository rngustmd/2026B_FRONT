console.log('write.js')

function 등록함수( ){
    //
    let title = document.querySelector('.title').value
    let content = document.querySelector('.content').value
    let password = document.querySelector('.password').value
    console.log( title , content , password )
    //
    let obj = { title , content , password }
    console.log( obj )
    //
    let boardList = JSON.parse(localStorage.getItem('boardList') )
        console.log(boardList)
    if( boardList == null ){ boardList = [] }
    console.log(boardList)
    //
    let no = boardList.length == 0 ? 1 : boardList[boardList -1].no+1
        console.log(no)
    obj.no = no
    //
    boardList.push(obj)
        console.log( boardList )
    //
    localStorage.setItem( 'boardList' , JSON.stringify(boardList) )
    location.href = 'list.html'
}

