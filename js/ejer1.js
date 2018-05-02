function numeros(){
var numeros="";
var i;
for(i=1;i<=11;i++) {
    numeros+=i+"<br>";
}
document.getElementById("numeros").innerHTML = numeros;
}