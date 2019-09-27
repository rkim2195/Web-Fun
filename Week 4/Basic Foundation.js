function buildArr(){
    var arr = [];
    for (var i = 1; i <= 255; i++){
        arr.push(i);
    }
    return arr;
}
var result = buildarr()


function getSum(){
    var sum = 0;
    for (var i = 1; i <= 1000; i++){
        if (i % 2 == 0){
            sum = sum + i;
        } 
    }
    return sum;
}
console.log(getsum())


function getSumOdd(){
    var sum = 0;
    for (var i = 1; i <= 5000; i+=2){
        if (i % 2 == 1){
            sum = sum + i;
            console.log(i);
        }
    }
    return sum;
}
console.log(getSumOdd))


function iterate(numArr){
    var sum = 0;
    for (var i = 0; i < numArr.length; i++){
        sum = sum + numArr[i];
    }
    return sum;
}
console.log (iterate())


function findMax(numArr){
    var max = numArr[0];
    for (var i = 0; i < numArr.length; i++){ 
        if (numArr[i] > max){
            max = numArr[i];
        }
    }
    return max;
}
console.log(findMax())


function findAvg(numArr){
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < numArr.length; i++){
        sum = sum + numArr[i];
    }
    avg = sum / numArr.length;
    return avg;
}
console.log(findAvg())


function oddArray(){
    var arr = [];
    for (var x = 1; x < 50; x+=2){
        arr.push(x);
    }
    return arr;
}
oddArray()


function greaterThanY(arr, y){
    var counter = 0;
    for (var idx = 0; idx < arr.length; idx++){
        if (arr[idx] > y){
            counter++;
        }
    }
    return counter;
}
console.log(greaterThanY())


function squares(arr){
    for (var idx = 0; idx < arr.length; idx++){
        arr[idx] = arr[idx]*arr[idx];
    }
}
squares()


function noNegatives(arr){
    for (var idx = 0; idx < arr.length; idx++){
        if (arr[idx] < 0){
            arr[idx] = 0;
        }
    }
    console.log(arr);
}
noNegatives()


function maxMinAvg(arr){
    var sum = 0;
    var max = arr[0];
    var min = arr[0];
    for (var idx = 0; idx < arr.length; idx++){
        sum = sum + arr[idx];
        if (arr[idx] > max){
            max = arr[idx];
        }
        else if (arr[idx] < min){
            min = arr[idx];
        }
    }
    var newArr = [];
    newArr.push(max);
    newArr.push(min);
    var avg = sum/arr.length
    newArr.push(avg);
    return newArr;
}
console.log(maxMinAvg())


function swap(arr){
    var temp = arr[arr.length-1];
    arr[arr.length-1] = arr[0];
    arr[0] = temp;
}
var tester = [1,4,10,-2];
swap(tester);
console.log(tester);


function noNegativesDojo(arr){
    for (var idx = 0; idx < arr.length; idx++){
        if (arr[idx] < 0){
            arr[idx] = "Dojo";
        }
    }
    console.log(arr);
}
noNegativesDojo ()