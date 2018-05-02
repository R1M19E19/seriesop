function serie(){
    var serie="";
    var i=2;
        while (i <=20 ) {
            serie += "serie: "+ i + "<br>";
            i+=2;
    }
    document.getElementById("serie").innerHTML = serie;
    }