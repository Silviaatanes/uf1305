// Funcion para leer numeros Reales
function leerNumero() {
    num = parseInt(
        prompt("Porfi, escribe un número")
    );
    return num;
}

function mostrarResultados() {
    document.getElementById('td1').innerHTML = n;
    document.getElementById('td2').innerHTML = factorial();
}

function factorial() {
    var factorial = 1;
    for ( i=1; i <= n; i++ ) {
        factorial = factorial * i;
    }

    return factorial;
}

// Definir variables
var n = 0;

// Funcion para leer numeros Reales
function leerNumero() {
    num = parseInt(
        prompt("Porfi, escribe un número")
    );
    return num;
}

function mostrarResultados(nf) {
    document.getElementById('td21').innerHTML = n;
    document.getElementById('td22').innerHTML = factorial(nf);
}
function mostrarfactorial (nf ) {
    document.getElementById('td21').innerHTML = nf;
    document.getElementById('td22').innerHTML = factorial ( nf) ;
}
function mostrarMultiplos(n, m) {
    document.getElementById('td11').innerHTML = n;
    document.getElementById('td12').innerHTML = m;
    document.getElementById('td13').innerHTML = multiplosDeHasta(n,m);
}
function multiplosDeHasta() {
    mensaje = "Los múltiplo de "
        + n +
        " hasta " + m +
        " son: ";

    multiplo = 0;
    for (i=1; multiplo < m; i++) {
        console.log(i, '',  multiplo);
        multiplo = n*i;
        mensaje = mensaje + multiplo + " ";
    }

    return mensaje;
}

function factorial( nf ) {
    var factorial = 1;
    for ( i=1; i <= nf; i++ ) {
        factorial = factorial * i;
    }

    return factorial;
}

