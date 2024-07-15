const windowHoras = document.querySelector('.horas');
const windowMinutos = document.querySelector('.minutos');
const windowSegundos = document.querySelector('.segundos');

let hora=0;
let minuto=0;
let segundo=0;


const interval = setInterval(function time(){
    let date = new Date();
    hora = date.getHours();
    minuto = date.getMinutes();
    segundo = date.getSeconds();


    windowHoras.textContent = formartTime(hora);
    windowMinutos.textContent = formartTime(minuto);
    windowSegundos.textContent = formartTime(segundo);
})
function formartTime(timer){
    return timer<10 ? `0${timer}` : timer;
}
