funtion a(x,y){
    return 5;
}
console.log(a(5,5))
5


function a(x,y){
    z = []
    z.push(x);
    z.push(y);
    z.push(5);
    console.log(z);
    return z;
}
b = a(2,2)
console.log(b);
console.log(a(6,8));

[2,2,5] (this is put twice)
[6,2,5] (this is put twice)


function a(x){
    z = [];
    z.push(x);
    z.pop();
    z.push(x);
    z.push(x);
    return z;
 }
 y = a(2);
 y.push(5);
 console.log(y);

 2 is pushed twice and then 5 once 
 2,2,5


 function a(x){
    if(x[0] <x [1]) {
       return true;
    }
    else {
       return false;
    }
 }
 b = a([2,3,4,5])
 console.log(b);

 2<3 -> true


 function a(x){
    for(var i=0; i<x.length; i++){
      if(x[i] > 0){
           x[i] = "Coding"
      }
  }
}
console.log(a([1,2,3,4]))
n/a?


function a(x){
    for(var i=0; i<x.length; i++){
      if(x[i] > 5){
           x[i] = "Coding"
      }
      else if(x[i] < 0){
           x[i] = "Dojo"
      }
  }
}
console.log(a([5,7,-1,4]))
n/a?


function a(x){
    if(x[0] > x[1]) {
     return x[1];
    }
    return 10;
 }
 b = a([5,10])
 console.log(b);
5 is not greather than 10 so it returns as 10


function sum(x){
    sum = 0;
    for(var i=0; i<x.length; i++){
       sum = sum + x[i];
       console.log(sum);
    }
    return sum;
}
0


function printAverage(x){
    sum = 0;
    for (var i = 0; i < x.length; i++){
        sum += x[i];
    }
    return sum/x.length;
}
y = printAverage([1,2,3]);
console.log(y);
2

y = printAverage([2,5,8]);
console.log(y);
5


function returnOddArray(){
    newArr = [];
    for (var i = 1; i <= 255; i+=2){
        newArr.push(i);
    }
    return newArr;
}
y = returnOddArray();
console.log(y);
[1,3,5,...,253,255]


function squareValue(x){
    for (var i = 0; i < x.length; i++){
        x[i] = x[i] * x[i];
    }
    return x;
}
y = squareValue([1,2,3]);
console.log(y);
[1,4,9]

y = squareValue([2,5,8]);
console.log(y);
[4,25,64]