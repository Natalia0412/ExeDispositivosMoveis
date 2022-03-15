var input = require("fs").readFileSync("stdin","utf8");
var valores=input.split("\n");
var numerofuncionario = parseInt(valores.shift());
var numeroHorasTrabalhadas = parseInt(valores.shift());
var valorHora=parseFloat(valores.shift());

    
var salario = numeroHorasTrabalhadas *valorHora;



console.log('Número do funcionário = '+ numerofuncionario + ' U$ = ' + salario.toFixed(2));
