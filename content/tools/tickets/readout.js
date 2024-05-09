var isCoolingDown = false;
function startScanning() {
    var video = document.getElementById('video');
    // Check if getUserMedia is available
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
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
    if (code && code.data.length <= 5) {
      var scannedCode = code.data;
      var scannedList = document.getElementById('scannedList');
      var listItem = document.createElement('li');
      listItem.textContent = scannedCode;
      scannedList.appendChild(listItem);
      
      // If not cooling down, set cooldown and continue scanning
      if (!isCoolingDown) {
        isCoolingDown = true;
        setTimeout(function() {
          isCoolingDown = false;
          scan();
        }, 1000); // 1 second cooldown
      }
    } else {
      // If no QR code detected or code length exceeds 5, continue scanning
      requestAnimationFrame(scan);
    }
  }

  // Start scanning when the page loads
  window.onload = startScanning;