var input = require("fs").readFileSync("stdin","utf8");
var [A,B,C]=input.split(" ");
var PI=3.14159;
    
var TRIANGULO = (A*C)/2.0;
var CIRCULO=PI*Math.pow(C,2);
var TRAPEZIO=((parseFloat(A)+parseFloat(B))*C)/2.0;
var QUADRADO=B*B;
var RETANGULO=A*B;


console.log('TRIANGULO = '+ TRIANGULO.toFixed(3) + ' CIRCULO = ' + CIRCULO.toFixed(3) + ' TRAPEZIO = ' + TRAPEZIO.toFixed(3) + ' QUADRADO = '+
QUADRADO.toFixed(3)+ ' RETANGULO = ' + RETANGULO.toFixed(3));
