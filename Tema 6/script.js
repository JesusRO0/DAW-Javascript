
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

function es(){
    let cadena = "Hola que tal";

    if(cadena%2==0){
        document.write(`La cadena "${cadena}" es par`);
    }else{
        document.write(`La cadena "${cadena}" es impar`);
    }
}

function muestraRandom(){
    let aleatorio = 0;

    for(i=0;i<10;i++){
        aleatorio = parseInt(Math.random()*10000 + 1);
        
        if(this.resuelve()){
            document.write(`${aleatorio} es par`);
        }
    }

}

let numero = {

    x:4,
    par: resuelve,
    Error: error,
    Es:es,
    aleatorio: muestraRandom

}

numero.par();
numero.Error();
numero.Es();
numero.aleatorio();

