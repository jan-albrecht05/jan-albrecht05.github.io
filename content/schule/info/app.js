function start(){
    document.getElementById("timetogo").style.display = "block";
    document.getElementById("inputs").style.display = "none";
    let timerStarted = false;
    let togo = document.getElementById("timein").value;
    if (!timerStarted) {
        let startTime = new Date().getTime();
        let remainingtime = 1000 * 60 * togo;
        let endTime = startTime + remainingtime;
        time.innerHTML = togo+" : 00";
        setInterval(function() {
            let timer = document.getElementById("time");
            let timeLeft = endTime - new Date().getTime();

            if(timeLeft > 0){
                let minutes = timeLeft / (1000 * 60);
                minutes = Math.floor(minutes);
                let seconds = (timeLeft / 1000) % 60;
                seconds = Math.round(seconds);
                seconds = ('0' + seconds).slice(-2);
                minutes = minutes < 10 ? "0" + minutes : minutes;
                minutes = minutes < 100 ? " " + minutes : minutes;
                if (seconds == 60){
                    seconds = "00";
                }
                let text = minutes + ' : ' + seconds;
                timer.innerHTML = text;
            } 
            else {
                timer.innerHTML = 'Die Zeit ist abgelaufen!';
                timer.style.marginTop = "30vh";
                document.getElementById("h1").style.display = "none";
                document.getElementById("stop").innerHTML = "zurück"
            }
        }, 1000);
        timerStarted = true;
    }
}
function stop(){
    location = "/content/schule/info/timer.html";
}
function change(){
    let size = document.getElementById("change").value;
    document.getElementById("time").style.fontSize = size+"%";
}