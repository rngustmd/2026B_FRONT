
let teamList = [
    { 'tcode':'1', 'tname':'개발팀' },
    { 'tcode':'2', 'tname':'디자인팀' },
    { 'tcode':'3', 'tname':'기획팀' }
];

let workerList = [
    { 'wcode':'1', 'tcode':'1', 'name':'김민준', 'job':'선임개발자', 'img':'https://placehold.co/100x100' },
    { 'wcode':'2', 'tcode':'2', 'name':'이서연', 'job':'수석디자이너', 'img':'https://placehold.co/100x100'
    }
];

let vacationList = [ { 
    'Wcode': '1' ,  'vcode': '1' ,  'vstart': '2025-08-04', 
    'vend': '2025-08-04', 'vreason': '병원 진료', 'vstate': true },  
    { 'Wcode': '2',  'vcode': 2,  'vstart': '2025-07-21', 
      'vend': '2025-07-25', 'vreason': '여름 휴가' , 'vstate': true } ]

vaPrint();

function vaPrint( ){
    let box = document.querySelector(".vacationBox");
    let html = "";
    for(let index = 0; index <= vacationList.length -1; index++){
        let vacation = vacationList[ index ];
        if( vacation.vstate == false ){
            continue;
        }
        let workerName = "";
        for(let j = 0; j <= workerList.length -1; j++){
            if( workerList[ j ].wcode == vacation.wcode){
                workerName = workerList[ j ].name;
                break;
            }
        }
        html += `
        <div class="vacation-card">
            <div class="user-name"> ${workerName} </div>
            <div class="date"> ${vacation.vstart}-${vacation.vend} </div>
            <div class="reason"> 사유 : ${vacation.vreason} </div>
            <button class="btn-cancel" onclick="vaDelete(${vacation.vcode})"> 신청취소 </button>
        </div>
        `;
    }
    box.innerHTML = html;
}
let finalVcode = 2;
function vaAdd( ){
    let worker = document.querySelector( ".category" ).value;
    let start = document.querySelector( ".vstart" ).value;
    let end = document.querySelector( ".vend" ).value;
    let reason = document.querySelector(".vreason").value;
    if(worker == "disabled"){
        alert("사원을 선택해주세요.");
        return;
    }
    let object = { wcode : worker , vcode : ++finalVcode , vstart : start, vend : end , vreason : reason , vstate : true };
    vacationList.push( object );
    alert( "휴가 신청 완료" );
    vaPrint( );
}
function vaDelete(vcode){
    for(let index = 0; index <= vacationList.length -1; index++){
        if(vacationList[index].vcode == vcode){
            vacationList[index].vstate = false;
            alert("휴가 신청이 취소되었습니다.");
            vaPrint( );
            return;
        }
    }
}



