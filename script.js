let sec = 0;
let milissegundos = 0;
let intervalo = null;

const display = document.getElementById('display');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');

start.addEventListener('click', iniciarCronometro);
pause.addEventListener('click', pausarCronometro);
reset.addEventListener('click', resetarCronometro);

function iniciarCronometro() {
    if (intervalo) return; // Evita iniciar múltiplos cronômetros

    intervalo = setInterval(() => {
        milissegundos += 10;
        if (milissegundos >= 1000) {
            milissegundos = 0;
            sec++;
        }
        atualizaDisplay();
    }, 10);
}

function pausarCronometro() {
    clearInterval(intervalo);
    intervalo = null; // Reseta o intervalo
    atualizaDisplay(); // Atualiza o display para refletir a pausa
}

function resetarCronometro() {
    pausarCronometro(); // Pausa o cronômetro se estiver rodando
    sec = 0; // Reseta os segundos
    milissegundos = 0; // Reseta os milissegundos
    atualizaDisplay(); // Atualiza o display para mostrar 00:00.000
}

function formatarTempo(segundosTotais, milissegundos) {
    const min = Math.floor(segundosTotais / 60);
    const sec = segundosTotais % 60;
    const ms = Math.floor(milissegundos / 10); // Exibe apenas dois dígitos de milissegundos
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}:${String(ms).padStart(2, '0')}`;
}

function atualizaDisplay() {
    display.textContent = formatarTempo(sec, milissegundos);
}


//botao mudando de cor

const cores = ['#2c3e50','#fff','#000000','#808080'];
let indice = 0;

document.getElementById('bnt-color').onclick = function() {
  document.body.style.backgroundColor = cores[indice];
  indice = (indice + 1) % cores.length;
};


//mudar imagem com transição suave
let imagemAtual = 1;

function trocarImagem() {
    const imagem = document.getElementById('imagem');
    imagem.style.opacity = 0; // Faz a imagem desaparecer suavemente

    setTimeout(() => {
        if (imagemAtual === 1) {
            imagem.src = './img/gordaons.webp';
            imagemAtual = 2;
        } else {
            imagem.src = './img/wallpaper2.jpg';
            imagemAtual = 1;
        }
        imagem.style.opacity = 1; // Faz a nova imagem aparecer suavemente
    },10); // Tempo para a imagem desaparecer antes de trocar
}
  