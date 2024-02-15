let time = 2 * 1000;
//Seite 1
function answer1(){
    let field1 = document.getElementById("field1");
    let div1 = document.getElementById("div1");
    let a1 = document.getElementById("answer1");
    let a2 = document.getElementById("answer2");
    let a3 = document.getElementById("answer3");
    field1.style.display = "flex";
    field1.style.justifyContent = "center";
    field1.style.alignItems = "center";
    div1.classList.add("correct");
    div1.style.borderColor = "var(--green)"
    a1.classList.add("correct");
    //reset everything else
    a2.classList.remove("false");
    a3.classList.remove("false");
    setTimeout(function() {
        location = "index.html#screen2";
    }, time);
}
function answer2(){
    let a2 = document.getElementById("answer2");
    a2.classList.add("false");
}
function answer3(){
    let a3 = document.getElementById("answer3");
    a3.classList.add("false")
}
    //Seite 2
function answer4(){
    let a4 = document.getElementById("answer4");
    a4.classList.add("false")
}
function answer5(){
    let a4 = document.getElementById("answer4");
    let a5 = document.getElementById("answer5");
    let a6 = document.getElementById("answer6");
    let div2 = document.getElementById("div2");
    div2.style.backgroundImage = "linear-gradient(45deg, rgb(255, 0, 234) 0%, rgb(0, 255, 255) 100%)";
    a5.classList.add("correct");
    a4.classList.remove("false");
    a6.classList.remove("false");
    setTimeout(function() {
        location = "index.html#screen3";
    }, time);
}
function answer6(){
    let a6 = document.getElementById("answer6");
    a6.classList.add("false")
}
    //Seite 3
function answer7(){
    let a7 = document.getElementById("answer7");
    a7.classList.add("false")
}
function answer8(){
    let a7 = document.getElementById("answer7");
    let a8 = document.getElementById("answer8");
    let a9 = document.getElementById("answer9");
    let div3 = document.getElementById("div3");
    div3.style.borderRadius = "10% 20px 60px 8%";
    div3.style.borderColor = "var(--green)";
    div3.classList.add("correct");
    a8.classList.add("correct");
    a7.classList.remove("false");
    setTimeout(function() {
        location = "index.html#screen4";
    }, time);
}
function answer9(){
    let a7 = document.getElementById("answer7");
    let a8 = document.getElementById("answer8");
    let a9 = document.getElementById("answer9");
    let div3 = document.getElementById("div3");
    div3.style.borderRadius = "10% 20px 60px 8%";
    div3.style.borderColor = "var(--green)";
    div3.classList.add("correct");
    a9.classList.add("correct");
    a7.classList.remove("false");
    setTimeout(function() {
        location = "index.html#screen4";
    }, time);
}
    //Seite 4
function answer10(){
    let a10 = document.getElementById("answer10");
    let a11 = document.getElementById("answer11");
    let a12 = document.getElementById("answer12");
    let div4 = document.getElementById("div4");
    div4.style.fontFamily = "Arial";
    div4.style.borderColor = "var(--green)";
    div4.classList.add("correct");
    a10.classList.add("correct");
    a11.classList.remove("false");
    a12.classList.remove("false");
    setTimeout(function() {
        location = "index.html#field5";
    }, time);
}
function answer11(){
    let a11 = document.getElementById("answer11");
    a11.classList.add("false")
}
function answer12(){
    let a12 = document.getElementById("answer12");
    a12.classList.add("false")
}
//Seite 5
function answer13(){
    let a13 = document.getElementById("answer13");
    a13.classList.add("false");
}
function answer14(){
    let a13 = document.getElementById("answer13");
    let a14 = document.getElementById("answer14");
    let a15 = document.getElementById("answer15");
    let div5 = document.getElementById("div5");
    div5.style.borderColor = "var(--green)";
    div5.classList.add("correct");
    a14.classList.add("correct");
    a13.classList.remove("false");
    a15.classList.remove("false");
    document.getElementById("hidden-css").innerHTML = '<link rel="stylesheet" href="/content/schule/info/seminararbeit/test-style.css">';
}
function answer15(){
    let a15 = document.getElementById("answer15");
    a15.classList.add("false");
}