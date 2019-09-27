// challenge 1
var arr = [1,2,3,4,5];
console.log(arr[0]);
console.log(arr[5]);
arr.push(6);
console.log(arr[5]);
arr[0] = 0;
console.log(arr);

// challenge 2
var x = 10;
function print(){
    for (var i = 0; i < x; i++){
        console.log(x);
        if (i == 2){
            console.log("booyah");
        }
    }
    console.log(i);
}
print();

// challenge 3
var words = ["pea", "pod", "ram", "rod"];
words[4] = "Farva";
console.log(words);
words[0] = words[1];
words[1] = words[2];
words[2] = words[3];
words[3] = words[4];
words[4] = words[5];
console.log(words);