const datasheet = localStorage.getItem('datasheet') ? localStorage.getItem('datasheet') : null;
let date = "";
let hour = "";
let minute = "";
let gang = "";
let table = "";
let tabcontent = "";
window.addEventListener('load', () => {
    check();
})

function check(){
    if (datasheet == null){
        document.getElementById("newpage").style.display = "block";
    }
    else{
        document.getElementById("newpage").style.display = "none";
        showTable();
    }
}
function addData(){
    document.getElementById("input-field").showModal();
    getActualTime();
}
//getting the actual time
function getActualTime(){
    date = new Date;
    hour = date.getHours();
    minute = date.getMinutes();
    showTime();
}
//calculating starting time
function minustwo(){
    date = new Date;
    date.setTime(date.getTime() - 2 * 60 * 1000);
    hour = date.getHours();
    minute = date.getMinutes();
    showTime();
}
function minusthree(){
    date = new Date;
    date.setTime(date.getTime() - 3 * 60 * 1000);
    hour = date.getHours();
    minute = date.getMinutes();
    showTime();
}
function minusfive(){
    date = new Date;
    date.setTime(date.getTime() - 5 * 60 * 1000);
    hour = date.getHours();
    minute = date.getMinutes();
    showTime();
}
//show the time
function showTime(){
    document.getElementById("time").value = hour+":"+minute;
}
//farben
function braun(){
    document.getElementById("farbe").value = "braun";
}
function gelb(){
    document.getElementById("farbe").value = "gelb";
}
function grun(){
    document.getElementById("farbe").value = "grün";
}
//konsistenz
function flussig(){
    document.getElementById("konsistenz").value = "flüssig";
}
function cremig(){
    document.getElementById("konsistenz").value = "cremig";
}
function fest(){
    document.getElementById("konsistenz").value = "fest";
}
//Extra
function blut(){
    document.getElementById("extra").value = "Blut";
}
function brocken(){
    document.getElementById("extra").value = "Bröckchen";
}

function saveData(){
    var zeit = document.getElementById("time").value;
    var farbe = document.getElementById("farbe").value;
    var konsistenz = document.getElementById("konsistenz").value;
    var extra = document.getElementById("extra").value;
    var row = "<tr><td>"+zeit+"</td><td>"+farbe+","+konsistenz+","+extra+"</td><tr>";
    tabcontent = tabcontent+row;
    table = "<table>"+tabcontent+"</table>";
    closedialog();
    localStorage.setItem('datasheet', table);
    showTable();
    check();
}
function showTable(){
    document.getElementById("table").innerHTML = localStorage.getItem('datasheet');
}

function closedialog(){
    document.getElementById("input-field").close();
}