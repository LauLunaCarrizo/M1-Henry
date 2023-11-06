'use strict';

function BinarioADecimal(num) {
   let binario = num.split("").reverse();
   let decimal = 0;
   for(let i=0;i<binario.length;i++){
      decimal += (2**i)*binario[i];
   }
  return(decimal)
}

function DecimalABinario(num) {
   let binario = "";
  while (num > 0) {
    binario = (num % 2) + binario;
    num = Math.floor(num / 2);
  }
  return(binario)
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
