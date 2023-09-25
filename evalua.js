var nombre = prompt("Escribe tu nombre: ");
var correctas = 0;
var incorrectas = 0;
alert(Bienvenido + nombre);

var respuesta1 = prompt("1. ¿En qué departamento se encuentra el lago Titicaca?\nA. Tacna\nB. Puno\nC. Cusco");

if( respuesta1 = B){
    correctas = +1
}else{
    incorrectas = +1
}

var respuesta2 = prompt("2-¿Desde qué parte del Perú se pueden avistar ballenas jorobadas?\nA. Lima e Ica\nB. Arequiupa y Tacna\nC. Piura y Tumbes");

if( respuesta2 = C){
    correctas = +1
}else{
    incorrectas = +1
}

var respuesta3 = prompt ("3. Plato típico de la Selva peruana\nA. Tacacho con cecina\nB. Arroz con pollo\nC. Lomo saltado");

if( respuesta3 = A){
    correctas = +1
}else{
    incorrectas = +1
}

if( correctas>incorrectas){
    document.write("Lo has hecho bien" + nombre)
}else{
    document.write("Vuelve a intentarlo" + nombre)
}if(correctas = incorrectas){
    document.write("Puedes hacerlo mejor" + nombre)
}