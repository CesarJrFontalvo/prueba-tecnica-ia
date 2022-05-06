
function primos() {
    var i = 0;
    var j = 0;
    var primo = 0;
    var numero = 0;
    var cadena = "";
    var count = 0;
    for (i = 1; i <= 540; i++) {
        primo = 0;
        for (j = 1; j <= i; j++) {
            if (i % j == 0) {
                primo++;
            }
        }
        if (primo == 2) {
            numero = i;
            cadena = cadena + numero + " ";                    
        }
    }
   
    var array = cadena.split(" ");
    document.write(array.length + " Numeros primos \n\n"+cadena);
    console.log(array.length + " Numeros primos <br/> "+cadena);
    

}
primos();






