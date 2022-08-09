const  hour = document.querySelector('.hour');
const  minute = document.querySelector('.minute');
const  second = document.querySelector('.second');
let currentTimeArray, hourDay, minuteDay, secondDay, currentTime;
// sort currentTime to get hour, minute, second

setInterval(() => {
    currentTime = new Date().toLocaleTimeString();
    currentTimeArray = currentTime.split(':');
    hourDay = currentTimeArray[0]; 
    minuteDay = currentTimeArray[1]; secondDay = currentTimeArray[2];
    
    hour.innerHTML = hourDay;
    minute.innerHTML = minuteDay ;
    second.innerHTML = secondDay ;  
}, 1000);