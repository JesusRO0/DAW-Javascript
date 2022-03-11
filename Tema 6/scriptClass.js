

function resuelve(){
    
    (this.x%2==0 ? document.write("es par <br>") : document.write("es impar <br>"));
}

function error(){

    if(isNaN(this.x)){
        console.error("No has introducido un número");
    }else{
        document.write("CORRECTO <br>");
    }
}

class muestraRandom {
    constructor() {

        for (i = 0; i < 10; i++) {
            this.x = parseInt(Math.random() * 10000 + 1);

            if (this.resuelve()) {
                document.write(`${x} es par`);
            }
        }

    }
}

let numero = {

    x:4,
    par: resuelve,
    Error: error,
    aleatorio: muestraRandom

}


numero.par();
numero.Error();
numero.aleatorio();
