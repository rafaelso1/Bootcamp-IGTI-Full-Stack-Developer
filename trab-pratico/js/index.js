let valorAtual = '';

function updateValues() {
  valorAtual = document.getElementById("range").value
  console.log(valorAtual);
  
  document.getElementById("numero-atual").value = valorAtual;
  document.getElementById("numero-extenso").value = pegaNumeroEscrito();
}

function pegaNumeroEscrito() {
  const valorAtual = document.getElementById("numero-atual").value;
  let valorEscrito;
  let numberArray =  Array.from(String(valorAtual), Number);
 
  if (valorAtual < 21) {
    valorEscrito =  numbers[valorAtual];
  } else if (valorAtual < 100) {
    numberArray =  Array.from(String(valorAtual), Number);
    valorEscrito = numbers[numberArray[0].toString() + '0'];
    valorEscrito += numberArray[1] === 0 ? '' :  ' e ' +  numbers[numberArray[1].toString()];
  } else if (numberArray[1].toString() + numberArray[2].toString() < 20 ) {
    valorEscrito =  numberArray[0] === 1 && valorAtual > 100 ? 'cento' : numbers[numberArray[0].toString() + '00'];
    valorEscrito += ' e ' + numbers[numberArray[2]];
  } else {
    
      if (numberArray[1].toString() + numberArray[2].toString() < 20) {
         valorEscrito = numbers[numberArray[0].toString() + '00'];
         valorEscrito += ' e ' + numbers[numberArray[1].toString() + numberArray[2].toString()];
      } else {
          valorEscrito =  numberArray[0] === 1 && valorAtual > 100 ? 'cento' : numbers[numberArray[0].toString() + '00'];
          valorEscrito += numberArray[1] === 0 ? '' :  ' e ' +  numbers[numberArray[1].toString() + '0'];
          valorEscrito += numberArray[2] === 0 ? '' :  ' e ' +  numbers[numberArray[2].toString()];
      }
    

  }
  
  return valorEscrito;
}

const numbers = {
  "0": "zero",
  "1": "um",
  "2": "dois",
  "3": "três",
  "4": "quatro",
  "5": "cinco",
  "6": "seis",
  "7": "sete",
  "8": "oito",
  "9": "nove",
  "10": "dez",
  "11": "onze",
  "12": "doze",
  "13": "treze",
  "14": "quatorze",
  "15": "quinze",
  "16": "dezesseis",
  "17": "dezessete",
  "18": "dezoito",
  "19": "dezenove",
  "20": "vinte",
  "30": "trinta",
  "40": "quarenta",
  "50": "cinquenta",
  "60": "sessenta",
  "70": "setenta",
  "80": "oitenta",
  "90": "noventa",
  "100": "cem",
  "200": "duzentos",
  "300": "trezentos",
  "400": "quatrocentos",
  "500": "quinhentos",
  "600": "seiscentos",
  "700": "setecentos",
  "800": "oitocentos",
  "900": "novecentos"
};
