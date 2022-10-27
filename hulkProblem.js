var a = 'hate';
var b = 'love';
var c = 'that';
var d = 'it';

for(var r = 1; r <= 4; r++){
    if(r % 2 != 0 ){
        if(r < 4)
        process.stdout.write(a + c);
        else{
            process.stdout.write(a + d);
        }
    }
    else if(r % 2 == 0){
        if(r < 4)
        process.stdout.write(b + ' ' + c + '\n');
        else{
            console.log(b + ' ' + d);
        }
    }
}