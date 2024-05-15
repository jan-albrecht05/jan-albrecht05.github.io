function erstellen(){
  var container = document.getElementById("body");
  for (var i = 1; i <= 100; i++) {
    var newDiv = document.createElement("div");
    // Set class and id attributes
    newDiv.className = "ticket";
    newDiv.id = "nummer_" + i;
    // Set inner HTML
    if (i < 10){i = '000'+i}else
    if (i < 100){i = '00'+i}else
    if (i < 1000){i = '0'+i};
    newDiv.innerHTML = '<div class="t_content"><div class="flex"><div class="left"><div class="qr"><img class="qrcode" src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=?' + i + '" alt="this code could not get generated"><div class="token text">'+ i +'</div></div></div><div class="right"><div class="text"><h1>Willkommen in der wunderbaren <br> Zirkuswelt der</h1><h2>Prinz-von-Homburg-Schule Neustadt (Dosse)</h2></div></div></div><h3 class="danke">Wir bedanken uns bei unseren Sponsoren:</h3><div class="sponsors"><div class="row">Emsland Stärke GmbH<br>Kyritzer WBG mbH</div><div class="row">Fam. König<br>DEG Sonne+Wärme GmbH</div><div class="row">Sparkasse OPR<br>Vogelsang Apotheke</div><div class="row">Eluh Anlagen BmbH<br>Dahm+Bohnsack GmbH</div><div class="row">Wäscherei Ney<br>Förderverein</div></div></div>';
    // Append the new div to the container
    container.appendChild(newDiv);
  }
}