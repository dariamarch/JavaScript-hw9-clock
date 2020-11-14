
//Часы
// Создайте h2 c текущим временем, к примеру " Время: 13:34:45";
// Примените setInterval для отображения времени каждую секунду, чтобы были идущие чаcы
// Создайте кнопки Start и Stop
// Навесьте обработчики события на клик.
// При клике на Stop время должно остановиться
// При клике на Start время должно продолжить свой ход (скачек времени, это нормально)

"use strict" 

let h2 = document.createElement('h2');
h2.setAttribute('id', 't');
document.body.append(h2);

let button = document.createElement('button');
button.setAttribute('id', 'start');
button.innerText = "START";

let button2 = document.createElement('button');
button2.setAttribute('id', 'stop');
button2.innerText = "STOP";

document.body.append(button, button2);

button.style.color = 'green';
button.style.margin = '0 10px';
button.style.padding = '10px';

button2.style.color = 'red';
button2.style.margin = '0 10px';
button2.style.padding = '10px';

function format(i) {

    if (i < 10) {
        i='0'+i;
    }
        return i;
}    

function time() {

	let currentTime = new Date();
	
	let hours = format(currentTime.getHours());
	let minutes = format(currentTime.getMinutes());
	let seconds = format(currentTime.getSeconds());

	return  hours + ":" + minutes + ":" + seconds;
}

function clock() {

let el = document.getElementById('t');
el.innerHTML = "Время: " + time();
}

let timeInterval = setInterval(clock, 1000);

const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');

btnStart.addEventListener("click", () => {
    timeInterval = setInterval(clock, 1000);
});
		
btnStop.addEventListener("click", () => {
    clearInterval(timeInterval);
});