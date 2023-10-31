// SE REALIZARA UNA CALCULADORA SIMPLE BASADA EN LO QUE ELIJA EL USUARIO AL INICIAR

inicio();

function inicio (){

    let seguirEjecutando = true; // se inicializa en true para ejecutar la calculadora al inicio

    while (seguirEjecutando == true) { // si al final del while, se responde NO, se cambia a false y no se vuelve a ejecutar
       
        ejecutarCalculadora(); // se ejecuta la calculadora

        let consulta = confirm("¿Deseas realizar otra operacion?");

        if (consulta == true) {
            seguirEjecutando = true;
        } else {
            seguirEjecutando = false;
            alert("¡Gracias por usar la calculadora!");
        }
    }
}

function ejecutarCalculadora() {
    let operacion = prompt("Escribe la operacion que deseas realizar:\n\n- suma  \n- resta  \n- multiplicacion  \n- division \n\n (Escribe la palabra completa y sin acentos)").toLowerCase();
    let operacionRealizada = false;

    switch (operacion) {
        case "suma":

            do {
                let A = parseFloat(prompt("Escribe el primer numero a sumar"));
                let B = parseFloat(prompt("Escribe el segundo numero a sumar"));
    
                if (isNaN(A) || isNaN(B)) { //Se compara si A o B son numeros validos
                    alert("Por favor, ingresa un numero correcto.");
                }
                else {
                    let resultadoSuma = A + B;
                    alert("El resultado de la suma es: " + resultadoSuma);
                    operacionRealizada = true; // Se cambia a true para salir del do while
                }
            } while (operacionRealizada == false); // hasta que no se realice la suma, se seguira solicitando los numeros correctos

        break;
        
        case "resta":
            
            do {
                let C = parseFloat(prompt("Escribe el minuendo"));
                let D = parseFloat(prompt("Escribe el sustraendo"));

                if (isNaN(C) || isNaN(D)) { //Se compara si C o B son numeros validos
                    alert("Por favor, ingresa un numero correcto.");
                }
                else {
                    let resultadoResta = C - D;
                    alert("El resultado de la resta es: " + resultadoResta);
                    operacionRealizada = true; // Se cambia a true para salir del do while
                }
            } while (operacionRealizada == false); // hasta que no se realice la operacion, se seguira solicitando los numeros correctos

        break;

        case "multiplicacion":

            do {
                let E = parseFloat(prompt("Escribe el primer numero a multiplicar"));
                let F = parseFloat(prompt("Escribe el segundo numero a multiplicar"));

                if (isNaN(E) || isNaN(F)) { //Se compara si E o F son numeros validos
                    alert("Por favor, ingresa un numero correcto.");
                }
                else {
                    let resultadoResta = E * F;
                    alert("El resultado de la multiplicacion es: " + resultadoResta);
                    operacionRealizada = true; // Se cambia a true para salir del do while
                }
            } while (operacionRealizada == false); // hasta que no se realice la operacion, se seguira solicitando los numeros correctos
        
        break;

        case "division":
            let resultadoResta = 0;

            do {
                let G = parseFloat(prompt("Escribe el dividendo"));
                let H = parseFloat(prompt("Escribe el divisor"));

                if (isNaN(G) || isNaN(H)) { //Se compara si E o F son numeros validos
                    alert("Por favor, ingresa un numero correcto.");
                }
                else if (H == 0 || H == null || H == " ") {
                    H = parseFloat(prompt("No puedes dividir entre 0, ingresa otro divisor"));
                    resultadoResta = G / H;
                    alert("El resultado de la division es: " + resultadoResta);
                    operacionRealizada = true; // Se cambia a true para salir del do while
                }
                else {
                    resultadoResta = G / H;
                    alert("El resultado de la division es: " + resultadoResta);
                    operacionRealizada = true; // Se cambia a true para salir del do while
                }
            } while (operacionRealizada == false); // hasta que no se realice la operacion, se seguira solicitando los numeros correctos
            
        break;

        default:
            alert("Por favor, introduce una operacion valida.\n \nEscribe: \n- suma  \n- resta  \n- multiplicacion  \n- division");
        break;
    }
}