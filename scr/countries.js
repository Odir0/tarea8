window.onload = CargaPaises;
function CargaPaises(){
    $.ajax({
        type: "get",
        url: "https://restcountries.com/v3.1/all",
        dataType: "json",
        success: OnSuccess,
    });
}
function OnSuccess(data){
let container = document.getElementById("nacionalidad");
container.innerHTML = "";

data.forEach(nacionalidad => {
    if(nacionalidad.name.nativeName.spa!==undefined){
        let optionSelect = `<option value = "${nacionalidad.cca3}">${nacionalidad.name.nativeName.spa.common}</option>`;
        container.innerHTML += optionSelect;
    }
});
}