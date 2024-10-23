// Verificar se um número pertence à sequência de Fibonacci

// Captura o número informado a partir dos argumentos da linha de comando
const inputNumber = parseInt(process.argv[2]);

// Verifica se o input é um número válido
if (isNaN(inputNumber)) {
  console.log("Por favor, informe um número válido.");
  process.exit(1);
}

// Inicializa a sequência de Fibonacci
let fibSequence = [0, 1];
let nextFib = 0;

// Calcula a sequência até que o próximo número seja maior ou igual ao número informado
while (nextFib < inputNumber) {
  nextFib = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
  fibSequence.push(nextFib);
}

// Verifica se o número informado pertence à sequência
if (fibSequence.includes(inputNumber)) {
  console.log(`O número ${inputNumber} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${inputNumber} não pertence à sequência de Fibonacci.`);
}


//Exemplo de Entrada:  node fibonacci.js 21

//Exemplo de Saída: O número 21 pertence à sequência de Fibonacci.
