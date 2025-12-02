
const start = document.querySelector('#start');
const input = document.querySelector('#inputMinutes');
const reload = document.querySelector('#clear');

let myMinutes = 0;
let amountTime = 0;
let timerID = null;

start.addEventListener('click', startTimer);

function startTimer() {  
    if (timerID === null){
        
        myMinutes = input.value;    
        amountTime = myMinutes*60;
        
        if (myMinutes > 0) {
            timerID = setInterval(calculateTime, 1000); 
        }
    
        else {
            Swal.fire({
            icon: 'error',
            title: 'Ой...',
            text: 'Введите правильное количество минут!'                
            })        
        }             
    }       
}

function calculateTime() {        
    
    document.querySelector('#inputMinutes').style.display = 'none';

    const seconds = document.querySelector('#seconds');
    const minutes = document.querySelector('#min');
            
    let min = Math.floor(amountTime/60);
    let sec = amountTime%60;    
           
    minutes.style.display = 'block';
    minutes.textContent = `${min}`;
    seconds.textContent = `${sec}`;
    
    amountTime--;    
    
    if (sec < 10) {
        seconds.textContent = "0" + sec;
    }

    if (amountTime < 0) {
        amountTime = 0;
        myMinutes = 0;        
        stopTimer();
        
        document.querySelector('#player').play();
    }
}

function stopTimer() {
    clearInterval(timerID);
        
}

reload.addEventListener('click', function() {
    document.querySelector('#player').pause();    
    location.reload();
})


    


