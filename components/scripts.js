const fecha_Nacimiento = document.getElementById("fecha_Nacimiento");
const edad = document.getElementById("edad");

const calcular_Edad = (fecha_Nacimiento)=>{
    const fecha_Actual= new Date();
    const añoActual= parseInt(fecha_Actual.getFullYear());
    const mesActual= parseInt(fecha_Actual.getMonth()) + 1;
    const diaActual= parseInt(fecha_Actual.getDate());

    const añoNacimiento = parseInt(String(fecha_Nacimiento).substring(0, 4));
    const mesNacimiento = parseInt(String(fecha_Nacimiento).substring(5, 7));
    const diaNacimiento = parseInt(String(fecha_Nacimiento).substring(8, 10));

    let edad= añoActual - añoNacimiento;
    if(mesActual < mesNacimiento){
        edad--;
    }else if(mesActual===mesNacimiento){
        if(diaActual < diaNacimiento){
            edad--;
        }
    }
    return edad;
}

window.addEventListener('load', function(){

    fecha_Nacimiento.addEventListener('change', function(){
        if (this.value) {
            edad.innerText=`Tu tienes: ${calcular_Edad(this.value)} años, ! felicidades ¡`;
        }
    });
});
