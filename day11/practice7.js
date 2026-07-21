// 전역배열
let 전역배열 = [ ]

function 등록함수(){

    let 날짜마크업 = document.querySelector('#date')
    let 항목마크업 = document.querySelector('#item')
    let 금액마크업 = document.querySelector('#money')

    let 날짜 = 날짜마크업.value
    let 항목 = 항목마크업.value
    let 금액 = 금액마크업.value

    전역배열.push({
        date : 날짜,
        item : 항목,
        money : 금액
        }
    )
    console.log(전역배열)
    출력함수()

} // f end

function 출력함수(){

    // 1. 출력할 html 만들기
    let html = ""

    // 2. 전역배열 반복
    for(let index = 0 ; index <= 전역배열.length-1 ; index++){

        html += `<tr>
                    <td>${전역배열[index].date}</td>
                    <td>${전역배열[index].item}</td>
                    <td>${Number(전역배열[index].money).toLocaleString()}</td>
                 </tr>`
    }

    // 3. 출력
    document.querySelector('#tableBody').innerHTML = html

} // f end