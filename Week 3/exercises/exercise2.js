// challenge 1 - Fix this code so 
// it prints the numbers up to x (inclusive)
var x = 10;
function printUpToX(){
    for (var i = 0; i < x; i++){
        console.log(x);
    }
}
printUpToX();

// challenge 2 - Fix this code so 
// that it doesn't include undefined
var words = ["pea", "pod", "ram", "rod"];
words[0] = words[1];
words[1] = words[2];
words[2] = words[3];
words[3] = words[4];
console.log(words);
