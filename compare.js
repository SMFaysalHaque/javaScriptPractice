function compare(a, b){
    let ap = 0, bp = 0;
    for(let i = 0; i < b.length ; i++){
        if(i >= Math.min(a.length, b.length)){
            continue;
        }
        console.log(a[i], b[i]);
        
        if (a[i] > b[i]){
            ap = ap + 1;
        }
        else if(b[i] > a[i]){
            bp = bp + 1;
        }
    }
    let result = [ap , bp];
    return result;
}
a = [10, 8, 5, 14, 2];
b = [5, 8, 10, 2, 8, 14, 9];
let result  = compare(a, b);
console.log(result);

