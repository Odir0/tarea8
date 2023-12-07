function MensajeTipoSeguro() {
    let combo = document.getElementById("seguro");
    let seleccionado = combo.options[combo.selectedIndex];
    switch (seleccionado.id) {
        case "PBO":
            alert(`Cubre daños al vehículo rentado y daños a vehículos terceros involucrados en un accidente de tránsito. 
        Costo de alquiler diario: $ 5.45 por día.`);
            break;
        case "PED":
            alert(`Cubre la Protección Básica Obligatoria (PBO) más daños a propiedades de terceros, incendio e inundaciones. 
    Costo de alquiler diario: $ 9.50 por día.`);
            break;
        case "PGM":
            alert(`Cubre la Protección Extendida de Daños(PED) más gastos médicos para los ocupantes del vehículo. 
    Costo de alquiler diario: $ 11.25 por día.`);
    }
}
function GuardarEnLocalStorage(){
    if(localStorage){
    let cotizacion = {
        fecharetiro: document.getElementById("fechaRetiro").value,
        fechadevolucion: document.getElementById("fechadevolucion").value,
        nacionalidad: document.getElementById("nacionalidad").value,
        tipovehiculo: document.getElementById("tipoVehiculo").value,
        seguro: document.getElementById("seguro").value,
        dias: document.getElementById("resultadoDias").value,
        tarifadiaria: document.getElementById("tarifaDiaria").value,
        totalpagar: document.getElementById("totalPagar").value
    };
    localStorage.setItem("cotizacion",JSON.stringify(cotizacion));
    }
}
