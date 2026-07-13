let output = '';
for( let line = 1 ; line <= 10 ; line++ ){

    for( let blank = 1 ; blank <= 10 - line ; blank++ ){
        output += ' '
    }
    for( let star = 1 ; star <= line ; star++ ){
        output += '* '
    }

    output += '<br>'
}
for( let line = 9 ; line >= 1 ; line-- ){

    for( let blank = 1 ; blank <= 10 - line ; blank++ ){
        output += ' '
    }
    for( let star = 1 ; star <= line ; star++ ){
        output += '* '
    }
    output += '<br>'
}
document.querySelector('#result').innerHTML = output;