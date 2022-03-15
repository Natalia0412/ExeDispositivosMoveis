var input = require("fs").readFileSync("stdin","utf8");
var valores=input.split("\n");

var x = parseInt(valores.shift());
var y = parseInt(valores.shift());
var sum=0;
var min;
var max;
var i;

if(x<y){
    min=x;
    max=y;
}else{
    max=x;
    min=y;
}

for(i=(min+1);i<max;++i){
    if(i%2!=0){
        sum+=i;
    }
}

console.log(sum);

