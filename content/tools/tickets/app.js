function erstellen(){
  var container = document.getElementById("body");
  for (var i = 1; i <= 100; i++) {
    var newDiv = document.createElement("div");
    // Set class and id attributes
    newDiv.className = "ticket";
    newDiv.id = "nummer_" + i;
    // Set inner HTML
    if (i < 10){i = '000'+i}else
    if (i < 99){i = '00'+i}else
    if (i < 1000){i = '0'+i};
    newDiv.innerHTML = '<div class="t_content"><div class="left"><div class="qr"><img class="qrcode" src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=?' + i + '" alt="this code could not get generated"><div class="token text">' + i + '</div></div></div><div class="right"><div class="text"><h1>Zirkus!</h1><h2>Grundschule Neustadt (Dosse)</h2></div></div></div>';
    // Append the new div to the container
    container.appendChild(newDiv);
  }
}