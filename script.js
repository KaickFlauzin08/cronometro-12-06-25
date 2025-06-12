//Declarando variáveis
let sec =0;
let intervalo = null;

//Elementos do DOM para manipulação

const display = document.getElementById("display");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

//Botão para iniciar o cronômetro
start.addEventListener("click", iniciarCronometro);

function iniciarCronometro() {
    if (intervalo) return; 
    // guarda em intervalo o passar
        intervalo = setInterval (() => {
        sec++;
        atualizarDisplay();

    },1000);
}

// Botão para parar o cronômetro
pause.addEventListener("click", pauseCronometro);
function pauseCronometro() {
    clearInterval(intervalo);
    intervalo = null;
}


// Botão para reiniciar o cronômetro
reset.addEventListener("click", resetarCronometro);
function resetarCronometro(){
    pauseCronometro(intervalo);
    sec = 0;
    atualizarDisplay();
}


//Função para FORMATAR O TEMPO
function formartarTempo(segundosTotais) {
    const  min = Math.floor(segundosTotais / 60);
    const  sec = segundosTotais % 60;
    return `${String(min).padStart(2, '0')}: ${String(sec).padStart(2, '0')}`;
}

//Função para atualizar o display do cronômetro
function atualizarDisplay() {
    display.textContent = formartarTempo(sec);
}