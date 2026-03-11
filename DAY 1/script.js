function formatTime(Date){
    let hours = Date.getHours();
    let minutes = Date.getMinutes();

    if(minutes<10){ 
         minutes= "0" + minutes;
    }


    return hours + ":" + minutes;

}
console.log(formatTime(new Date()));