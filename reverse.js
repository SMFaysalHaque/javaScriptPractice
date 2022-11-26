const greetings = 'hello, how are you?'

function reverseString(text){
    let reverse = '';
    for(const letter of text){
        // console.log(letter);
        reverse = letter + reverse;
    }
    return reverse;
}
let reversed = reverseString(greetings);
console.log(reversed);