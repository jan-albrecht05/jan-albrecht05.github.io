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
//Überprüfen ob schon Einträge vorhanden sind
function check(){
    if (datasheet == null){
        document.getElementById("newpage").style.display = "block";
    }
    else{
        document.getElementById("newpage").style.display = "none";
        showTable();
    }
}
//Öffnen des Modals
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
    today = (date.getDay()-2)+"."+(date.getMonth()+1)+"."+(date.getYear()-100);
    console.log(today);
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
    if (hour < 10) {
        hour = '0' + hour;
    }
    if (minute < 10) {
        minute = '0' + minute;
    }
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
//Speichern des neuen Eintrags
function saveData(){
    var zeit = document.getElementById("time").value;
    var farbe = document.getElementById("farbe").value;
    var konsistenz = document.getElementById("konsistenz").value;
    var extra = document.getElementById("extra").value;
    var row = "<tr><td>"+zeit+"</td><td>"+farbe+","+konsistenz+","+extra+"</td></tr>";
    tabcontent = localStorage.getItem('datasheet')+row;
    closedialog();
    localStorage.setItem('datasheet', tabcontent);
    showTable();
    check();
}
//Anzeigen der Tabelle
function showTable(){
    tabcontent = localStorage.getItem('datasheet');
    table = "<table>"+tabcontent+"</table>";
    document.getElementById("table").innerHTML = table;
}
//Schießen des Dialogfensters
function closedialog(){
    document.getElementById("input-field").close();
}

//PDF erstellen
function downloadPDF() {
    var doc = new jsPDF();
    var element = document.getElementById("table");
    doc.fromHTML(element, 15, 15);
    doc.save("Stuhlprotokoll"+today+".pdf");
}