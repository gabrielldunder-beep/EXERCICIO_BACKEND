// 1 - String (Textos)

// Exercício 1 - Crie uma variável nome com seu nome e exiba no console.
let nome = "gabriell";
console.log(nome);

//Exercício 2 - Crie uma variável sobrenome e mostre nome + sobrenome.
let sobrenome = "bregião";
console.log(nome + " " + sobrenome);

//Exercício 3 - Crie uma frase usando Template String.
let frase = `Olá, meu nome é ${nome} ${sobrenome}!`;
console.log(frase);

//Exercício 4 - Guarde o nome de uma escola e exiba. 
let escola = "SESI";
console.log(escola);

//Exercício 5 - Crie duas strings e junte em uma frase.
let palavra1 = "Olá";
let palavra2 = "mundo";
let fraseFinal =(palavra1 + " " + palavra2);
console.log(fraseFinal);

//Exercício 6 - Exiba uma mensagem de boas-vindas.
let mensagemBoasVindas = `Bem-vindo, ${nome}!`;
console.log(mensagemBoasVindas);

//Exercício 7 - Mostre o tamanho de uma string.
console.log(nome.length);

//Exercício 8 - Transforme um texto em letras maiúsculas.
console.log(nome.toUpperCase());


//Exercício 9 - Transforme um texto em letras minúsculas.
console.log(nome.toLowerCase());

//Exercício 10 - Crie uma frase com nome e cidade.
let cidade = "São Paulo";
let fraseCidade = `Meu nome é ${nome} e eu moro em ${cidade}.`;
console.log(fraseCidade);
