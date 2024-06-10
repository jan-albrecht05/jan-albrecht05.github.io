function cookiefunction() {
    var x = document.getElementById("cookies");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
cookiesok = localStorage.getItem("cookies-accepted") ? localStorage.getItem('theme') : false;
function changeback(){
    document.getElementById("buttons").style.flexDirection = "row-reverse";
}
function change(){
    if (document.getElementById("buttons").style.flexDirection == "row"){
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
window.onload = function(){
    if(cookiesok){
        document.getElementById("cookie-banner").style.display = "none";
    }
}
function decline(){
    R=0; x1=.1; y1=.05; x2=.25; y2=.24; x3=1.6; y3=.24; x4=300; y4=200; x5=300; y5=200; 
    DI=document.getElementsByTagName("img");
    DIL=DI.length; 
    function A(){
        for(i=0; i-DIL; i++){
            DIS=DI[ i ].style; 
            DIS.position='absolute'; 
            DIS.left=(Math.sin(R*x1+i*x2+x3)*x4+x5)+"px"; 
            DIS.top=(Math.cos(R*y1+i*y2+y3)*y4+y5)+"px"}R++
        }setInterval(A(),5); 
    void(0);
}