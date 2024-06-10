let scannedNumbers = [];
let isCoolingDown = false;
let canvasElement = document.createElement('canvas');
let canvas = canvasElement.getContext('2d');
let savedNumbers = JSON.parse(localStorage.getItem('savedNumbers'));
let countedTickets = 0;
let sessionTickets = localStorage.getItem('sessionTickets');
function checkforlocalstorage() {
    if (!savedNumbers || !savedNumbers.includes) {
        localStorage.setItem('savedNumbers', "[]")
        savedNumbers = [];
    }
}
function startScanning() {
    document.getElementById("stop").style.display = "block";
    document.getElementById("scan").style.display = "none";
    document.getElementById("animatedline").style.animation = "scan 3s infinite";
    var video = document.getElementById('video');
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } }).then(function (stream) {
            video.srcObject = stream;
            video.onloadedmetadata = function (e) {
                scan();
            };
        }).catch(function (error) {
            console.error('getUserMedia error:', error);
        });
    } else {
        console.error('getUserMedia is not supported');
    }
}
function stopScanning() {
    video.srcObject.getTracks().forEach(track => track.stop());
    document.getElementById("stop").style.display = "none";
    document.getElementById("scan").style.display = "block";
    document.getElementById("animatedline").style.animation = "none";
}
function scan() {
    var video = document.getElementById('video');
    canvasElement.width = video.videoWidth;
    canvasElement.height = video.videoHeight;
    canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
    var imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
    var code = jsQR(imageData.data, imageData.width, imageData.height);
    if (code && code.data.length <= 5 && code.data.match(/^\?\d{1,4}$/)) {
        let scannedNumber = parseInt(code.data.substring(1));
        if (scannedNumbers.includes(scannedNumber) || savedNumbers.includes(scannedNumber)) {
            alert("Nummer " + scannedNumber + " wurde bereits gescannt!");
        } else {
            scannedNumbers.push(scannedNumber);
            updateTable(scannedNumber);
            alert("Nummer " + scannedNumber + " gescannt.")
            savedNumbers.push(scannedNumber);
            localStorage.setItem('savedNumbers', JSON.stringify(savedNumbers));
            countedTickets = savedNumbers.length;
            document.getElementById('data').innerHTML = "Anzahl aller gescannten Tickets: "+ countedTickets;
            sessionTickets++;
            localStorage.setItem('sessionTickets', sessionTickets);
            document.getElementById('data2').innerHTML = "Anzahl der jetzt gescannten Tickets: "+ sessionTickets;
        }
    } if (!isCoolingDown) {
        isCoolingDown = true;
        setTimeout(function () {
            isCoolingDown = false;
            scan();
        }, 1000);
    } else {
        requestAnimationFrame(scan);
    }
}
function updateTable(scannedNumber) {
    var table = document.getElementById('numbersTable');
    var row = Math.floor((scannedNumber - 1) / 10);
    var col = (scannedNumber - 1) % 10;
    var cells = table.getElementsByTagName('td');
    if (row >= 0 && row < 90 && col >= 0 && col < 10) {
        cells[row * 10 + col].classList.add('highlight');
    };
}
function initializeTable() {
    var table = document.getElementById('numbersTable');
    for (var i = 0; i < 90; i++) {
        var row = table.insertRow();
        for (var j = 0; j < 10; j++) {
            var cell = row.insertCell();
            var number = i * 10 + j + 1;
            cell.textContent = number;
        }
    }
}
function addsavednumbers() {
    savedNumbers.forEach(updateTable);
    document.getElementById('data').innerHTML = "Anzahl der gescannten Tickets: "+ savedNumbers.length;
}
function newsession(){
    localStorage.setItem('sessionTickets', 0);
    document.getElementById('data2').innerHTML = "Anzahl der jetzt gescannten Tickets: 0";
    sessionTickets = 0;
}
window.onload = function () {
    checkforlocalstorage()
    initializeTable();
    addsavednumbers();
    startScanning();
    if (sessionTickets == null){
        sessionTickets = 0;
    }
    document.getElementById('data2').innerHTML = "Anzahl der jetzt gescannten Tickets: "+ sessionTickets;
};