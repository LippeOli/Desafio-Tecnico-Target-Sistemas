// Verificar a existência da letra 'a' em uma string e contar quantas vezes ela ocorre

// Exemplo de string a ser verificada
const inputString = "Abracadabra"; // Escolha uma String para testar

// Converte a string em um array de caracteres
const characters = inputString.split('');

//Ccontador
let count = 0;

// Adiciona sobre cada caractere da string
for (let char of characters) {
  if (char.toLowerCase() === 'a') {
    count++;
  }
}

// Verifica se a letra 'a' existe na string e exibe o resultado
if (count > 0) {
  console.log(`A letra 'a' aparece ${count} vez(es) na string "${inputString}".`);
} else {
  console.log(`A letra 'a' não aparece na string "${inputString}".`);
}
