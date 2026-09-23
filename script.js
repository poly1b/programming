// Variáveis do estado do jogo
let pontuacao = 0;
let numeroSorteado = sortearNumero();

// Elementos da interface
const form = document.getElementById('game-form');
const inputPalpite = document.getElementById('palpite');
const elementoMensagem = document.getElementById('mensagem');
const elementoScore = document.getElementById('score');

// Função para sortear número de 1 a 10
function sortearNumero() {
    return Math.floor(Math.random() * 10) + 1;
}

// Evento de envio de formulário
form.addEventListener('submit', function (event){
    event.preventDefault(); // Impede o recarregamento da página

    const palpiteUsuario = parseInt(inputPalpite.value, 10);

    // Validação extra de intervalo
    if (palpiteUsuario < 1 || palpiteUsuario > 10 || isNaN(palpiteUsuario)) {
        elementoMensagem.textContent = "Digite um número válido entre 1 e 10!";
        elementoMensagem.className = "mensagem erro";
        return;
    }

    // Verificação de acerto ou erro
    if (palpiteUsuario === numeroSorteado) {
        pontuacao++;
        elementoScore.textContent = pontuacao;

        elementoMensagem.textContent = "VOCÊ ACERTOU";
        elementoMensagem.className = "mensagem acerto";

        // Sorteia um novo número após o acerto
        numeroSorteado = sortearNumero();
    } else {
        elementoMensagem.textContent = `ERRRROOOOOUU (O número era ${numeroSorteado})`;
        elementoMensagem.className = "mensagem erro";

        //Opcional: Sorteia outro número para a próxima rodada após errar
        numeroSorteado = sortearNumero();
    }

        // Limpa o campo e foca novamente
        inputPalpite.value = '';
        inputPalpite.focus();
});