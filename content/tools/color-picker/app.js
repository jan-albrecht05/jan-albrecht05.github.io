let colorbox = document.getElementById("color-box");
function init(){
    let value1 = document.getElementById("first-input").value;
    let value2 = document.getElementById("second-input").value;
    let value3 = document.getElementById("third-input").value;
    let value4 = document.getElementById("fourth-input").value;
    let value5 = document.getElementById("fifth-input").value;
    let value6 = document.getElementById("sixth-input").value;
    //1. Stelle
    if (value1 == 10){
        value1 = 'a';
    }else{
        if(value1 == 11){
            value1 = 'b';
        }else{
            if(value1 == 12){
                value1 = 'c';
            }else{
                if(value1 == 13){
                    value1 = 'd';
                }else{
                    if(value1 == 14){
                        value1 = 'e';
                    }else{
                        if(value1 == 15){
                            value1 = 'f';
                        }
                    }
                }
            }
        }
    }
    //2. Stelle
    if (value2 == 10){
        value2 = 'a';
    }else{
        if(value2 == 11){
            value2 = 'b';
        }else{
            if(value2 == 12){
                value2 = 'c';
            }else{
                if(value2 == 13){
                    value2 = 'd';
                }else{
                    if(value2 == 14){
                        value2 = 'e';
                    }else{
                        if(value2 == 15){
                            value2 = 'f';
                        }
                    }
                }
            }
        }
    }
    //3. Stelle
    if (value3 == 10){
        value3 = 'a';
    }else{
        if(value3 == 11){
            value3 = 'b';
        }else{
            if(value3 == 12){
                value3 = 'c';
            }else{
                if(value3 == 13){
                    value3 = 'd';
                }else{
                    if(value3 == 14){
                        value3 = 'e';
                    }else{
                        if(value3 == 15){
                            value3 = 'f';
                        };
                    }
                }
            }
        }
    }
    //4. Stelle
    if (value4 == 10){
        value4 = 'a';
    }else{
        if(value4 == 11){
            value4 = 'b';
        }else{
            if(value4 == 12){
                value4 = 'c';
            }else{
                if(value4 == 13){
                    value4 = 'd';
                }else{
                    if(value4 == 14){
                        value4 = 'e';
                    }else{
                        if(value4 == 15){
                            value4 = 'f';
                        };
                    }
                }
            }
        }
    }
    //5. Stelle
    if (value5 == 10){
        value5 = 'a';
    }else{
        if(value5 == 11){
            value5 = 'b';
        }else{
            if(value5 == 12){
                value5 = 'c';
            }else{
                if(value5 == 13){
                    value5 = 'd';
                }else{
                    if(value5 == 14){
                        value5 = 'e';
                    }else{
                        if(value5 == 15){
                            value5 = 'f';
                        };
                    }
                }
            }
        }
    }
    //6. Stelle
    if (value6 == 10){
        value6 = 'a';
    }else{
        if(value6 == 11){
            value6 = 'b';
        }else{
            if(value6 == 12){
                value6 = 'c';
            }else{
                if(value6 == 13){
                    value6 = 'd';
                }else{
                    if(value6 == 14){
                        value6 = 'e';
                    }else{
                        if(value6 == 15){
                            value6 = 'f';
                        };
                    }
                }
            }
        }
    }
    let color = "#"+value1+value2+value3+value4+value5+value6;
    console.log(color);
    document.getElementById("color-box").style.backgroundColor = color;
    for (let i=0; i < 6; i++){
        document.getElementsByClassName("span1")[i].innerHTML = value1;
        document.getElementsByClassName("span2")[i].innerHTML = value2;
        document.getElementsByClassName("span3")[i].innerHTML = value3;
        document.getElementsByClassName("span4")[i].innerHTML = value4;
        document.getElementsByClassName("span5")[i].innerHTML = value5;
        document.getElementsByClassName("span6")[i].innerHTML = value6;
    }
}
function change(){
    init();
}