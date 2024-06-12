function cookiefunction() {
    var x = document.getElementById("cookies");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
cookiesok = localStorage.getItem("cookies-accepted") ? localStorage.getItem('cookies-accepted') : false;
function changeback(){
    document.getElementById("buttons").style.flexDirection = "row-reverse";
}
function change(){
    if (document.getElementById("buttons").style.flexDirection === "row"){
        document.getElementById("buttons").style.flexDirection = "row-reverse"
    }
    else{
        document.getElementById("buttons").style.flexDirection = "row"
    };
}
function accept_cookies(){
    document.getElementById("cookie-banner").style.display = "none";
    localStorage.setItem('cookies-accepted', true);
}
function decline(){
    document.getElementById("body").style.background = "#000";
    document.getElementById("body").style.color = "#fff";
	document.getElementById("body").innerHTML = "nope";
}

window.addEventListener('load', function(){
    console.log("cookies.js is loaded)");
    if(cookiesok){
        document.getElementById("cookie-banner").style.display = "none";
    }
})