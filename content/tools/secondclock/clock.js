setInterval(showTime, 1000);
        function showTime() 
        {
            let time = new Date();
            //Zeit
            let hour = time.getHours();
            let min = time.getMinutes();
            let sec = time.getSeconds();
            let milsec = time.getMilliseconds();
            hour = hour < 10 ? "0" + hour : hour;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;
            milsec = milsec < 10 ? "00" + milsec : milsec;
            milsec = milsec < 100 ? "0" + milsec : milsec;
            let currentTime = hour + ":" + min + ":" + sec; // + ":" + milsec;
            document.getElementById("title").innerHTML = currentTime;
            document.getElementById("clock").innerHTML = currentTime;
        }
        showTime();