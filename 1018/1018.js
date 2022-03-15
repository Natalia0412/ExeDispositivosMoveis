var input = require("fs").readFileSync("stdin","utf8");
let valor= parseInt(input);

const notas=[100,50,20,10,5,2,1];
console.log(valor);

for (let nota of notas){
    let qtNotas =parseInt(valor/nota);
console.log(`${qtNotas} nota(s) de R$ ${nota},00)`);
valor=valor%nota;
}



