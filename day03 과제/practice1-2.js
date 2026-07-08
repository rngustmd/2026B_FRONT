let 이름 = prompt( '이름 :' )
let 운동종류 = prompt( '운동종류 :' )
let 운동시간 = Number( prompt( '운동시간(분) :' ) )

let 칼로리 = 운동시간 * 7 

console.log( '[운동기록]' )
console.log( `이름 : ${ 이름 }` )
console.log( `운동종류 : ${ 운동종류 }` )
console.log( `운동시간 : ${ 운동시간 }` )
console.log( `칼로리 : ${ 칼로리 }` )
