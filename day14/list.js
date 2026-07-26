// 함수=도구=기능 사용/호출
전체출력함수()
// 함수=도구=기능 정의/만들기 
function 전체출력함수(){
    // 1. 어디에 :  html tbody 에 
    let tbody = document.querySelector('tbody' )
    // 2. 무엇을 : localStroge에 저장된 배열들을 
    let html = ''
    let boardList = JSON.parse( localStorage.getItem('boardList') )
    if( boardList == null ){ boardList=[] }
    for( let i = 0 ; i<boardList.length ; i++ ){
        html += `<tr>
                    <td> ${ boardList[i].no } </td>
                    <td> <a href="view.html?no=${ boardList[i].no } "> ${ boardList[i].title } </a> </td>
                </tr>`
    }
    // 3. 출력 : 출력하기
    tbody.innerHTML = html 
}