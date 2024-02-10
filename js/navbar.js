function dreibalkensymbol() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
  x.className += " responsive";
  } else {
  x.className = "topnav";
  }
}
window.onload = () => {
    document.getElementsByClassName("dropdown-content")[0].innerHTML = '<a href="/content/schule/timetable/timetable.html" target="_blank">Stundenplan 2023/2024</a>'+'<a href="https://youtube-crew.netlify.app" target="_blank">YouTube- Team</a>'+'<a href="https://youtube.com/@Homburgschule" target="_blank">PvH YouTube- Kanal</a>';
}