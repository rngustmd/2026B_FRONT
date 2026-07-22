
let 전역배열 = [
    { 날짜 : '2025-06-19' , 항목 : "점심 식사" , 금액 : 9000 } , 
    { 날짜 : '2025-06-19' , 항목 : "교통비" , 금액 : 1500 } ]

function 등록함수(){

    let date = document.querySelector('#date').value; 
    let item = document.querySelector('#item').value;
    let money = document.querySelector('#money').value;

    let 객체 = { date , item , money }
    전역배열.push(객체)
    alert('등록성공')

} // f end

function 출력함수(){

    let html = ""
        for(let index = 0 ; index <= 전역배열.length-1 ; index++){

            html += `<tr>
                        <td>${전역배열[index].date}</td>
                        <td>${전역배열[index].item}</td>
                        <td>${Number(전역배열[index].money).toLocaleString()}</td>
                    </tr>`
        }
        
    document.querySelector('#tableBody').innerHTML = html

} // f end