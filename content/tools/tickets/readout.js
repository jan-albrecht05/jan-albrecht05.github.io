var isCoolingDown = false;
function startScanning() {
    var video = document.getElementById('video');
    // Check if getUserMedia is available
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } }).then(function(stream) {
            video.srcObject = stream;
            // Start scanning when metadata is loaded
            video.onloadedmetadata = function(e) {
                scan();
            };
        }).catch(function(error) {
            console.error('getUserMedia error:', error);
        });
    } else {
        console.error('getUserMedia is not supported');
    }
}

function stopScanning() {
    var video = document.getElementById('video');
    video.srcObject.getTracks().forEach(track => track.stop());
    document.getElementById("scan").style.display = "block";
    document.getElementById("stop").style.display = "none";
    document.getElementById("animatedline").style.animation = "none";
}
function continueScanning(){
    document.getElementById("scan").style.display = "none";
    document.getElementById("stop").style.display = "block";
    document.getElementById("animatedline").style.animation = "scan 3s infinite";
    startScanning();
}
function scan() {
    // Get video element
    var video = document.getElementById('video');
    // Get canvas element
    var canvasElement = document.createElement('canvas');
    var canvas = canvasElement.getContext('2d');

    // Set canvas size to match video dimensions
    canvasElement.width = video.videoWidth;
    canvasElement.height = video.videoHeight;

    // Draw video frame on canvas
    canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
    var imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);

    // Decode QR code from image data
    var code = jsQR(imageData.data, imageData.width, imageData.height);

    // Display scanned result
    if (code && code.data.length <= 5 && code.data.match(/^\?\d{1,4}$/)) {
      var scannedNumber = parseInt(code.data.substring(1)); // Extract number from code
      updateTable(scannedNumber);
      if (scannedNumbers[scannedNumber]) {
        // If number is already scanned, show error message
        alert("Duplicate scan detected for number " + scannedNumber);
      } else {
        // Add number to scanned numbers
        scannedNumbers[scannedNumber] = true;
        // Update table and highlight scanned number
      }
    }
    if (!isCoolingDown) {
        isCoolingDown = true;
        setTimeout(function() {
          isCoolingDown = false;
          scan();
        }, 1000); // 1 second cooldown
      }
    // Continue scanning
    requestAnimationFrame(scan);
  }

  // Function to update the table and highlight scanned number
  function updateTable(scannedNumber) {
    var table = document.getElementById('numbersTable');
    var row = Math.floor((scannedNumber - 1) / 10);
    var col = (scannedNumber - 1) % 10;
    var cells = table.getElementsByTagName('td');
    if (row >= 0 && row < 90 && col >= 0 && col < 10) {
      cells[row * 10 + col].classList.add('highlight');
    }
  }

  // Function to initialize the table
  function initializeTable() {
    var table = document.getElementById('numbersTable');
    for (var i = 0; i < 10; i++) {
      var row = table.insertRow();
      for (var j = 0; j < 10; j++) {
        var cell = row.insertCell();
        var number = i * 10 + j + 1;
        cell.textContent = number;
      }
    }
  }

  // Start scanning when the page loads
window.onload = function(){
    initializeTable();
    startScanning()
}