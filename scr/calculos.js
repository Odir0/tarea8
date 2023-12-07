function Calcular() {
    DateDiff();
   document.getElementById("tarifaDiaria").value = TarifaDiaria();
   document.getElementById("totalPagar").value = TotalPagar();
}
function TarifaDiaria(){
    let tdv = parseFloat(document.getElementById("tipoVehiculo").value);
    let tds = parseFloat(document.getElementById("seguro").value);
    return tdv +tds;
}
function TotalPagar(){
    let td = TarifaDiaria();
    let cd = parseInt(document.getElementById("resultadoDias").value);
    return td*cd - ((td*cd)*AplicarDescuento());
}
function DateDiff() {
    let fechaRetiro = new Date(document.getElementById("fechaRetiro").value);
    let fechaDevolucion = new Date(document.getElementById("fechadevolucion").value);
    let diffTime = Math.abs(fechaDevolucion - fechaRetiro);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    document.getElementById("resultadoDias").value = diffDays;
}
function AplicarDescuento() {
    let dias = parseInt(document.getElementById("resultadoDias").value);
    let descuento  = 0;
    if (dias > 30 && dias < 120) {
        descuento += 0.15;
    } else {
        if (dias >= 120 && dias <= 365) {
            descuento += 0.25;
        }else{
            if(dias<3 && dias>365){
            alert("Los dias no son correctos");
            }
        }
    }
    return descuento;
}
