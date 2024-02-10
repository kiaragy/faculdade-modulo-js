/**
 * Escreva um código em que, após o cliente solicitar a escolha da bebida, 
 * a opção ‘switch’ deve avaliar a opção selecionada e atribuir o valor correspondente 
 * à variável ‘valor’. Caso o cliente escolha uma opção inválida, uma mensagem informativa é exibida, 
 * indicando que a escolha deve ser feita entre café, leite ou chá. Por fim, se uma opção válida for
 *  selecionada, exibimos uma mensagem personalizada informando o nome da bebida escolhida e o valor 
 * a ser pago, formatado com duas casas decimais.
 */


let bebida = "café";
let valor = 0;

switch (bebida) {
    case "chá":
        valor = 1.50;
        break;
    case "leite":
        valor = 2.50;
        break;
    case "café":
        valor = 3.50;
        break;
    default:
        break;
}

if (valor == 0) {
    console.log(`A bebida ${bebida} é invalida. Por favor, selecione uma das seguintes opções: chá, café ou leite.`)
} else {
    console.log(`A bebida selecionada foi: ${bebida} e valor a ser pago é: R$${valor.toFixed(2)} `)
}
