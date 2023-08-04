function MudarLampada(tipo){
  let valor = document.getElementById("luz").src;
    if(tipo == 1){
       document.getElementById("luz").src = "assets/lampada-acesa.jpg";
    }
    else if(tipo == 2){
        document.getElementById("luz").src = "assets/lampada-quebrada.jpg";
    }
    else if(tipo == 3){
        document.getElementById("luz").src = "assets/lampada.jpg";
    }
    else {
        alert("Opção inválida");
    }

}
    

  