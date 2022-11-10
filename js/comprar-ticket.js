//defino valor de ticket
const valorTicket = 200;

//defino porcentaje de descuento segun categoria
let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

//elementos en variables
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria = document.getElementById("categoriaSelect");

let btnResumen = document.getElementById("btn1")
let btnBorrar = document.getElementById("btn2")

function total_a_pagar(){
    quitarClaseError();

    //verifico nombre
    if(nombre.value===""){
        alert("Verifique nombre");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }
    //verifico apellido
    if(apellido.value===""){
        alert("Verifique apellido");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }
    //verifico Mail
    /*if(mail.value===""){
        alert("Verifique mail");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }*/
    //para determinar si el correo electronico es valido o no
    const emailValido = mail =>{
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }
    if(!emailValido(mail.value)){
        alert("Verifique mail");
        mail.classList.add("is-invalid");
        mail.focus();
        return ; 
    }
    //verifico cantidadTickets
    if( (cantidadTickets.value<=0) || (isNaN(cantidadTickets.value)) ){
        alert("Verifique cantidadTickets");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        return ;
    }
    //verifico categoria
    if(categoria.value==""){
        alert("Verifique categoria");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return ;
    }

    let totalValorTickets=(cantidadTickets.value * valorTicket);
    //let totalPago = document.getElementById("totalPago");

    if(categoria.value==0){
        totalValorTickets=totalValorTickets;
    }
    if(categoria.value==1){
        totalValorTickets=totalValorTickets-(descuentoEstudiante/100 * totalValorTickets);
    }
    if(categoria.value==2){
        totalValorTickets=totalValorTickets-(descuentoTrainee/100 * totalValorTickets);
    }
    if(categoria.value==3){
        totalValorTickets=totalValorTickets-(descuentoJunior/100 * totalValorTickets);
    }
    //inner html
    //totalPago.innerHTML=totalValorTickets;
    totalPago.innerHTML="Total a Pagar: $"+totalValorTickets;
}

function quitarClaseError(){
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for(i = 0; i < x.length; i++){
        x[i].classList.remove("is-invalid");
    }
}

function reset_total_a_Pagar(){
    quitarClaseError();
    totalPago.innerHTML="";
}



//boton resumen
btnResumen.addEventListener("click",total_a_pagar);

//boton borrar
btnBorrar.addEventListener("click",reset_total_a_Pagar);