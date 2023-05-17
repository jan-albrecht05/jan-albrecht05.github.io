var menuopen = false;
        function openmenu(){
            document.getElementById("menu").style.display = "block";
            document.getElementById("openmenu").style.display = "none";
            document.getElementById("closemenu").style.display = "block";
            var menuopen = true;
        }
        function closemenu(){
            document.getElementById("menu").style.display = "none";
            document.getElementById("openmenu").style.display = "block";
            document.getElementById("closemenu").style.display = "none";
            var menuopen = false;
        }
        function bodyclick(){
            if (menuopen = true){
                closemenu();
            }
        }
        function closeviakey(){
            if (event.keyCode == 27){
                bodyclick();
            }
        }
        function changefont(){
            document.getElementById("body").style.fontFamily = document.getElementById("style").value;
        }
        function changesize(){
            document.getElementById("clock").style.fontSize = document.getElementById("size").value+"px";
        }
        function show_hide(){
            if (document.getElementById("clock").style.display == "none"){
                document.getElementById("clock").style.display = "flex";
                document.getElementById("style").style.display = "inline-block";
                document.getElementById("size").style.display = "inline-block";
                document.getElementById("forfont").style.display = "inline-block";
                document.getElementById("forsize").style.display = "inline-block";
            }
            else{
                document.getElementById("clock").style.display = "none";
                document.getElementById("style").style.display = "none";
                document.getElementById("size").style.display = "none";
                document.getElementById("forfont").style.display = "none";
                document.getElementById("forsize").style.display = "none";
            }
        }