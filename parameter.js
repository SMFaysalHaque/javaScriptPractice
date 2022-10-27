function bringSingara(taka){
    console.log('singara ar jonno taka diche:', taka);
    console.log('mama singara den.');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity; //retur ar maddhome ekta function ar execution sesh kora hoy.
}

// bringSingara(250); [directly value deya jay.]
var money = 250;
var singara = bringSingara(money);
console.log('Totla Singara is Here: ',singara);