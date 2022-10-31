// dice check using Math.round() and Math.random()

for(let i = 0; i <= 6; i++){
    const dice = Math.random() * 6;
    const diceResult = Math.round(dice);
    console.log(diceResult);
}
