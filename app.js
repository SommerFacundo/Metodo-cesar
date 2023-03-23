let abecedario = ['a','b','c','d','e','f','g','h','i','j','k','l', 'ñ','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let btnEncriptar = document.getElementById("btnEncriptar");
let btnDeshacer = document.getElementById("btnDesencriptar");
let nuevaFrase ="";
btnEncriptar.addEventListener("click",()=>{
    nuevaFrase = ""
    let frase = document.getElementById("mensaje").value;
    frase = frase.split(" ");
    for (palabra of frase) {
        nuevaFrase += ""+ metodoCesar(palabra) + " ";
    } 
    nuevaFrase = nuevaFrase.trimEnd();
    document.getElementById("palabra").innerHTML = "Frase encriptada: "+nuevaFrase;
});
btnDeshacer.addEventListener("click",()=>{
    let palabraDes = ""
    nuevaFrase = nuevaFrase.split(" ");
    for (palabra of nuevaFrase) {
        palabraDes += ""+ deshacerCesar(palabra) + " ";

    } 
    palabraDes = palabraDes.trimEnd();
    document.getElementById("palabraDesencriptar").innerHTML =  "Frase desencriptada: "+palabraDes;

});

function deshacerLetra(n){
    let nAux = n.toLowerCase(); 
    let indexLetra =abecedario.indexOf(nAux);
    console.log(indexLetra)
    if((indexLetra-2) < 0){
        indexLetra = (indexLetra-2)+abecedario.length;
        
        if(nAux == n){
            return abecedario[indexLetra];

        }else{
            return abecedario[indexLetra].toUpperCase();
        }
    }
    if(nAux == n){
        return abecedario[indexLetra-2];

    }else{
        return  abecedario[indexLetra-2].toUpperCase();
    }
}

function cambiarLetra(n){
    let nAux = n.toLowerCase(); 
    let indexLetra =abecedario.indexOf(nAux);
    if((indexLetra+2) >= abecedario.length){
        indexLetra = (indexLetra+2)-abecedario.length;
        
        if(nAux == n){
            return abecedario[indexLetra];

        }else{
            return abecedario[indexLetra].toUpperCase();
        }
    }
    if(nAux == n){
        return abecedario[indexLetra+2];

    }else{
        return  abecedario[indexLetra+2].toUpperCase();
    }
}

function metodoCesar(plbr){
    let nuevaFrase = "";
    for (let i = 0; i < plbr.length; i++){
       nuevaFrase += cambiarLetra(plbr[i]);
    }
    return nuevaFrase;
}
function deshacerCesar(plbr){
    let nuevaFrase = "";
    for (let i = 0; i < plbr.length; i++){
       nuevaFrase += deshacerLetra(plbr[i]);
    }
    return nuevaFrase;
}



