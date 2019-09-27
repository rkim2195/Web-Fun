function greaterThanY(arr, y){
    var counter = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > y){
            counter++;
        }
    }
    console.log("Values greater than", y, ":", counter);
}
greaterThanY([4,2,3,50,-30,122], 0);

function maxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++){
        sum += arr[i];
        if (arr[i] > max){
            max = arr[i];
        }else if (arr[i] < min){
            min = arr[i];
        }
    }
    console.log("Max:", max,"Min:", min,"Average:", sum/arr.length);
}
maxMinAvg([4,2,3,50,-30,122])

function replaceNegatives(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}

var result = replaceNegatives([1,2,-3,-5,5]);
console.log(result); 


function removeVals(arr, start, end){
    var offset = end-start+1;
    for (var i = start; i <= offset; i++){
        arr[i] = arr[i+offset];
    }
    console.log(arr); 
    arr.length = arr.length - offset;
    return arr;
}
var result = removeVals([20,30,40,50,60,70],2,4);
console.log(result); 