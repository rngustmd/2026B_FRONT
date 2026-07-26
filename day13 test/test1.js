// [2]

boardPrint( )
function boardPrint( ){
    const boardTbody = document.querySelector('#boardTbody')

    let boardList = localStorage.getItem('boardList')
    if( boardList == null ){ boardList = []  
    }else{ boardList = JSON.parse(boardList) }

    let html = ``
    for( index = 0 ; index <= boardList.length -1 ; index ++ ){
        const obj = boardList[index]

    html += `<tr>
            <td> ${obj.no} </td>
            <td> <a href="http://127.0.0.1:5500/day13%20test/test.html"> </a> </td>
            <td> ${obj.title} </td>
            </tr>`
    }
    boardTbody.innerHTML = html
}
