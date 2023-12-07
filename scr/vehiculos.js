function mostrarTodo(){
    let combo = document.getElementById("tipoVehiculo");
    let seleccionado = combo.options[combo.selectedIndex].id;

    if(seleccionado==="COM"){
    document.getElementById("imgVista").src = "images/Compacto1.png";
    document.getElementById("img1").src = "images/Compacto1.png";
    document.getElementById("img2").src = "images/Compacto2.png";
    document.getElementById("img3").src = "images/Compacto3.png";
}else{
    if(seleccionado==="MED"){
        document.getElementById("imgVista").src = "images/Mediano1.png";
        document.getElementById("img1").src = "images/Mediano1.png";
        document.getElementById("img2").src = "images/Mediano2.png";
        document.getElementById("img3").src = "images/Mediano3.png";
    }else{
        if(seleccionado==="4WD"){
            document.getElementById("imgVista").src = "images/TodoTerreno1.png";
            document.getElementById("img1").src = "images/TodoTerreno1.png";
            document.getElementById("img2").src = "images/TodoTerreno2.png";
            document.getElementById("img3").src = "images/TodoTerreno3.png";
        }else{
            if(seleccionado==="FAM"){
                document.getElementById("imgVista").src = "images/Familiar1.png";
                document.getElementById("img1").src = "images/Familiar1.png";
                document.getElementById("img2").src = "images/Familiar2.png";
                document.getElementById("img3").src = "images/Familiar3.png";
            } 
        }
    }
}
}
function mostrarImagen(numero){
document.getElementById("imgVista").src = document.getElementById("img" + numero).src;
}

