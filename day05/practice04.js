// 문제 1: 배열에서 최댓값 찾기
// 주어진 숫자 배열에서 가장 큰 값을 찾아 콘솔에 출력하는 프로그램을 작성하시오. (단, Math.max() 함수 사용 금지)
// let numbers = [23, 5, 67, 12, 88, 34];
/*
let numbers = [23, 5, 67, 12, 88, 34];
for( let 인덱스 = 0 ; 인덱스 <= numbers.length -1 ; 인덱스++ ){
    if( numbers[ 인덱스 ] == 88){ console.log('88); break; }
}
*/
/*
let max = numbers[0] ; // 배열명[인덱스] : 특정ㅎ란 인덱스 번째 요소 값 호출 // 첫번째 값을 최댓값 지정
if( max < numbers[1] ){ max = numbers[1] } // 만약에 [1] 인덱스 요소 값이 더 크면 최댓값으로 지정
if( max < numbers[2] ){ max = numbers[2] } //        [2] 
if( max < numbers[3] ){ max = numbers[3] } //        [3]
if( max < numbers[4] ){ max = numbers[4] } //        [4]
if( max < numbers[5] ){ max = numbers[5] } //        [5]
console.log( max )
*/ 
// vs 반복문 풀이 : 반복되는 코드 : if( max < numbers[?] ){ max = numbers[?] }
// 반복없는 코드( 패턴: 1 부터 5까지 1씩 증가 )
/*
let numbers = [23, 5, 67, 12, 88, 34];
let max = numbers[0]
for( let index = 1 ; index <= 5 ; index ++ ){ 
    if( max < numbers[index] ){ max = numbers[index] }
}
console.log( max )
*/


// 문제 2: 별 찍기 (기본 역삼각형)
// for 중첩 반복문을 사용하여 아래와 같은 모양의 별을 출력하시오.
/*
for ( let line = 5; line >= 1; line -- ){
    let star = ''
        for ( let 개수 = 1; 개수 <= line; 개수 ++ ){
            star += '*'
    }
    console.log( star )
}
*/
//          행                  열                  = 바둑판 = 구구단( 단 = 행 , 곱 = 열 )
//          line(줄 \n )        별( * )
// *****    line = 1            star = 1 2 3 4 5   
// ****     line = 2            star = 1 2 3 4
// ***      line = 3            star = 1 2 3 
// **       line = 4            star = 1 2
// *        line = 5            star = 1
// line은 1부터 5까지 1씩 증가하면서 '\n' 출력
// star는 1부터 (마지막줄수 - 현재줄수 +1) 1씩 증가하면서 '*' 출력      // 줄 마다 별 출력 ? 별 마다 줄 출력 ?
/*
let output = '' // 출력할 내용물을 저장할 변수
for( let line = 1 ; line <= 5 ; line ++ ){
    for( let star = 1 ; star <= 5 - line + 1 ; star ++){
        output += '*'
    }
    // 줄바꿈
    output = output + '\n' // vs output += '\n'
} // for end
console.log( output )
*/


// 문제 3: 배열에서 특정 문자 찾기 (break 활용)
// 다음 사용자 이름 배열에서 이름에 '솔' 이라는 글자가 들어간 첫 번째 사용자를 찾으면, 해당 사용자의 이름을 출력하고 반복문을 종료하시오.
// let userNames = ['김하준', '이서아', '박솔민', '최도윤'];
// 힌트: 문자열의 .indexOf() 메소드를 사용하세요.
/*
let userNames = ['김하준', '이서아', '박솔민', '최도윤'];
for( let index = 0 ; index <= userNames.length -1 ; index ++ ){
    if( userNames[ index ].indexOf( '솔' ) != -1 ){
        console.log(userNames[ index ] )
        break;
    } 
}
*/
// 배열의 마지막 인덱스 : 배열명.lenght - 1
/*
let userNames = ['김하준', '이서아', '박솔민', '최도윤']
for( let index = 0 ; index <= userNames.length - 1 ; index ++ ){
    console.log( userNames[ index ] )
    if( userNames[ index ].indexOf( '솔' ) != -1){ // 문자열은 배열이다.
        break // indexOf ( 찾을값 ) : 찾을값이 존재하면 인덱스 반환하고 없으면 -1 반환
    }
} // for end
*/

// 문제 4: 2차원 배열의 모든 요소 출력하기
// 다음과 같은 2차원 배열(좌석표)이 있습니다. 중첩 for 반복문을 사용하여 모든 좌석의 값을 순서대로 출력하시오.
// let seatLayout = [['A1', 'A2', 'A3'], ['B1', 'B2', 'B3'], ['C1', 'C2', 'C3']];
// 2차원 배열( 배열의 중첩 ) , for 중첩 == 행과 열(엑셀)
/*
let seatLayout = [ ['A1', 'A2', 'A3'], ['B1', 'B2', 'B3'], ['C1', 'C2', 'C3']  ];
// 1. 행 먼저 반복문 이용하여 조회한다.
for( let row = 0 ; row <= seatLayout.length - 1 ; row++ ){ //  0행 부터 2행 까지 1씩 증가하면 행 출력 
    // 2. 반복문 이용하여 열 조회한다.
    for( let col = 0 ; col <= seatLayout[row].length - 1 ; col++ ){ // 0열 부터 2열 까지 1씩 증가하면서 열 출력 
        console.log(  seatLayout[row][col] )
    } // for2 end 
} // for1 end 
*/

// 문제 5: 배열의 중복 요소 제거하기
// 주어진 배열에서 중복된 요소를 제거하고, 중복 없는 새로운 배열을 만들어 출력하시오.
// let numbers = [1, 5, 2, 3, 5, 1, 4, 2];
// 힌트: 새로운 배열을 만들고, for 반복문으로 기존 배열을 순회하며 
// 새로운 배열에 해당 요소가 없을( .indexOf() == -1 ) 때만 추가(push())합니다.
/*
let numbers = [1, 5, 2, 3, 5, 1, 4, 2];
let numbers1 = [ ]
for ( let i = 0 ; i <= numbers.length - 1 ; i ++ ){
    if (numbers1.indexOf(numbers[i] ) == - 1 ){
        numbers1.push(numbers[i] )
    }
}
console.log(numbers1)
*/

/*
let numbers = [1, 5, 2, 3, 5, 1, 4, 2];
let newNumbers = [ ]
    for ( let i = 0 ; i <= numbers.length - 1 ; i ++ ){
        let num = numbers[i] // index번째 값이
        if( newNumbers.indexOf( num ) == - 1 ){ // 새로운 배열에 존재하지 않으면
            newNumbers.push( num ) 
        }
    }
console.log ( newNumbers )
*/

// 문제 6: 버블 정렬 (Bubble Sort) 구현하기
// 주어진 숫자 배열을 '버블 정렬' 알고리즘을 이용하여 오름차순으로 정렬하고, 최종 정렬된 배열을 출력하시오.
// let numbers = [5, 3, 4, 1, 2];
// 힌트: 중첩 for 반복문을 사용하며, 이웃한 두 요소를 비교하 위치를 바꿉니다.
// let numbers = [5, 3, 4, 1, 2]; // 5>3 5>4 5>1 5>2 [4] 3>4 3>1 3>2 [3] 4>1 4>2 [2] 1>2 [1]
// 비교 기준(인덱스) : 0        1        2        3
// 비교 대상 :      1 2 3 4   2 3 4     3 4       4 , 비교기준 +1 부터 마지막 인덱스까지
/*
for( let i = 0 ; i <= numbers.length - 2 ; i ++ ){ // i는 0부터 마지막 인덱스 전까지
    for( let j = i+1 ; j <= numbers.length - 1 ; j ++ ){ // j는 i+1 부터 마지막 인덱스까지
        if( numbers[i] > numbers[j] ){ // 비교기준이 비교대상보다 더 크면
            let temp = numbers[i] // 스왑(두 변수간 값 교체) , i = 5 , j = 3 , temp = 5*
            numbers[i] = numbers[j] // i = 3* , j = 3 , temp = 5
            numbers[j] = temp;      // i = 3 , j = 5* , temp = 5
        }
    }    
}
console.log( numbers )
*/
/*
for( let i = 0 ; i <= numbers.length - 2 ; i ++ ){ // i는 0부터 마지막 인덱스 전까지
    for( let j = 0 ; j <= numbers.length - 2 - i ; j ++ ){ // j는 i+1 부터 마지막 인덱스까지
        if( numbers[j] > numbers[j+1] ){ // 비교기준이 비교대상보다 더 크면
            let temp = numbers[j] // 스왑(두 변수간 값 교체) , i = 5 , j = 3 , temp = 5*
            numbers[j] = numbers[j+1] // i = 3* , j = 3 , temp = 5
            numbers[j+1] = temp;      // i = 3 , j = 5* , temp = 5
        }
    }    
}
console.log( numbers )
*/

// 문제 7: 재고 관리 시스템
// 두 개의 배열 products(상품 목록)와 stock(재고 수량)이 있습니다. 사용자로부터 구매할 상품명과 수량을 입력받아, 
// 재고가 충분하면 "구매 완료!"를 출력하고 재고를 차감하세요. 재고가 부족하면 "재고가 부족합니다."를 출력합니다.
// let products = ['볼펜', '노트', '지우개'];
// let stock = [10, 5, 20];
/* 
let products = ['볼펜', '노트', '지우개'];
let stock = [10, 5, 20];
let 상품명 = prompt( '상품명 입력' )
let 수량 = Number( prompt( ' 수량 ' ) ) 
let 찾은인덱스 = products.indexOf( 상품명 )
if( 찾은인덱스 == - 1 ){
    console.log( '상품이 존재하지 않습니다.' )
}else if( stock[ 찾은인덱스 ] >= 수량 ){ 
    stock[ 찾은인덱스 ] = stock[ 찾은인덱스 ] - 수량
    console.log( '구매 완료!' );
    console.log(stock)
}else{ console.log( '재고가 부족합니다.' ) }
*/
/*
let products = ['볼펜', '노트', '지우개'];
let stock = [10, 5, 20];
let 상품명 = prompt( '상품명 입력:' )
let 수량 = Number( prompt( '수량 입력:' ) )
// 1. 입력받은 상품명이 존재하는지 확인 ( 배열의 모든 자료들을 비교 )
for( let index = 0 ; index <= products.length -1 ; index ++ ){
    if( products[index] == 상품명 ){ // 만약에 index 번째 값과 입력받은 값과 같으면
        // 2. 재고 비교
        if( stock[index] > 수량 ){ // 만약에 index 번째 재고값이 입력받은 수량 이상이면
            console.log( '구매완료' ); 
            stock[index] = stock[index] - 수량 // 재고 차감 // vs stock[index] -= 수량
        }else(
            console.log( '재고가 부족합니다.' )
        )
    }
} // for end
*/

// 문제 8: 영화 평점 시각화하기
// 주어진 영화 이름과 평점 배열을 이용하여, 각 영화의 평점을 별(★)로 시각화하여 HTML에 출력하는 프로그램을 작성하시오.
// (1). 초기 데이터
// 영화 이름과 평점은 두 배열의 동일한 인덱스를 사용합니다.
// let movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설'];
// let movieRatings = [8, 4, 7, 6];
// (2). 구현 조건
// for 반복문을 사용하여 모든 영화를 순회합니다.
// 각 영화의 평점(10점 만점)만큼 꽉 찬 별(★)을, 나머지 점수만큼 빈 별(☆)을 출력합니다.
// 예시: 평점이 8점이면 ★★★★★★★★☆☆ (총 10개의 별)
// 영화 이름과 별점은 HTML에 한 줄씩 표시합니다.
// (3). HTML 출력 예시
// 히든페이스      ★★★★★★★★☆☆
// 위키드          ★★★★☆☆☆☆☆☆
// 글래디에이터2   ★★★★★★★☆☆☆
// 청설            ★★★★★★☆☆☆☆
/*
let movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설'];
let movieRatings = [8, 4, 7, 6];

let html = '' // html에 출력할 문자열 변수 
for( let index = 0 ; index <= movieNames.length - 1 ; index++ ){
    html += movieNames[index]; // index 번째 영화 이름을 대입 
    // 평점(별) 출력하기 
    for( let star = 1 ;  star <= 10 ; star++ ){
        // 만약에 현재 별이 평점보다 이하 이면 검은별 
        if( star <= movieRatings[index] ){
            html += '★' // ㅁ+한자키 
        }else{ // 크면 흰별 
            html += '☆'
        }
    }
    // 줄바꿈 처리 <br />
    html += '<br />'
} // for end 
document.querySelector('p').innerHTML = html // html 출력 
*/

/*
문제 9: 좌석 예약 상태 표시하기
총 6개의 좌석 상태 정보가 담긴 배열을 이용하여, 좌석 배치도와 상태를 HTML에 출력하는 프로그램을 작성하시오.
(1). 초기 데이터
좌석의 상태는 '빈좌석' 또는 '예약석'으로 구성됩니다.
let seatStatus = ['빈좌석', '예약석', '예약석', '빈좌석', '예약석', '빈좌석'];
(2). 구현 조건
for 반복문을 사용하여 6개의 좌석을 모두 출력합니다.
각 좌석은 하나의  태그로 표시합니다.
좌석 상태에 따라  태그에 CSS 색상을 다르게 적용합니다. CSS예] <span style="color: blue;"> 좌석 </span>
'빈좌석': color: blue;
'예약석': color: red;
좌석은 2칸씩 3줄 형태로 배치합니다.
(3). 출력 예시 (HTML)
빈좌석 예약석 
예약석 빈좌석
예약석 빈좌석
*/
let seatStatus = ['빈좌석', '예약석', '예약석', '빈좌석', '예약석', '빈좌석'];
let html2 = ''
for( let index = 0 ; index <= seatStatus.length - 1 ; index ++ ){
    // 만약에 빈좌석이면 blue , 예약석이면 red
    if( seatStatus[index] == '빈좌석' ){ 
        html2 += ` <span style="color: blue; "> ${ seatStatus[index] } </span> `
    }else{
        html2 += ` <span style="color: red; "> ${ seatStatus[index] } </span> `
    }
    // 2배수 마다 줄바꿈을 한다.
    if( (index+1) % 2 == 0 ){ html2 += '<br />' }
}

document.querySelector('div').innerHTML = html2 // html 출력 


// 문제 10: 주차 요금 정산하기
// 차량별 주차 시간 데이터가 주어졌을 때, 아래의 요금 규정에 따라 각 차량이 지불해야 할 최종 주차 요금을 계산하여 HTML에 출력하는 프로그램을 작성하시오.
// (1). 초기 데이터
// 차량 번호와 주차 시간(분)은 두 배열의 동일한 인덱스를 사용합니다.
// let carNumbers = ['210어7125', '142가7415', '888호8888', '931나8234'];
// let usageMinutes = [65, 30, 140, 420];
// (2). 요금 규정
// 기본 요금: 최초 30분까지 1,000원
// 추가 요금: 30분 초과 시, 매 10분마다 500원씩 추가
// 일일 최대 요금: 20,000원 (아무리 오래 주차해도 20,000원을 초과할 수 없음)
// (3). 구현 조건
// for 반복문을 사용하여 모든 차량의 데이터를 순회합니다.
// 각 차량의 주차 시간에 맞춰 최종 요금을 계산합니다.
// 계산된 요금이 일일 최대 요금을 초과하면, 최대 요금(20,000원)으로 처리합니다.
// HTML에 차량 번호, 주차 시간, 최종 요금을 한 줄씩 출력합니다.
// (4). 출력 예시 (HTML)
// 250어7142: 65분 주차, 최종 요금: 2500원
// 142가7415: 30분 주차, 최종 요금: 1000원
// 888호8888: 140분 주차, 최종 요금: 6500원
// 931나8234: 420분 주차, 최종 요금: 20000원
// (힌트)
// 기본 시간(30분)을 초과한 시간을 계산하고, parseInt() 함수를 사용하여 10분 단위로 버림 처리하면 추가 요금 단위를 쉽게 계산할 수 있습니다.
// 추가 요금 단위 계산식:parseInt( (총 주차시간 - 30) / 10 )
// 계산 예시:65분 주차 시 parseInt( (65 - 30) / 10 )는 parseInt(3.5)가 되어 결과는 3이 됩니다. 따라서 추가 요금은 3 * 500원으로 계산됩니다.
let carNumbers = ['210어7125', '142가7415', '888호8888', '931나8234'];
let usageMinutes = [65, 30, 140, 420];
let html3 = ''
for (let index = 0; index <= carNumbers.length - 1; index++){
    let 시간 = usageMinutes[index]
    let 요금 = 1000 // 기본 요금 설정
    if (시간 > 30){ // 30분 초과시
        let et = 시간 - 30;
        let ep = parseInt(et / 10)
        요금 = 요금 + (ep * 500)
    }
    if (요금 > 20000){ // 최대요금
        요금 = 20000
    }
    html3 += `${carNumbers[index]} : ${시간}분 주차 , 최종 요금 : ${요금}원 <br />`
}

document.querySelector('p').innerHTML = html3 // html 출력 