




/*debugger
const usuario1 = "juanjose";
const contra1 = "jj";
const saldoA = 500.000;

let ingresoU = prompt("Ingrese su usuario");
let ingresoC = prompt("Ingrese su contraseña");


let saludo = ("Bienvenido a su cuenta de banco " + usuario1);




function retirarS(saldoA, valorRetirar){
    return saldoA - valorRetirar    
}


if(ingresoU === usuario1 && ingresoC === contra1){
    alert(saludo);
    alert("Su saldo actualmente es de:  " + saldoA)
    let valorRetirar = parseInt(prompt("Escriba el valor a retirar"))
    alert("se ha retirado " + valorRetirar)
    alert("Su saldo actual es de: " + retirarS())

    
}
else{
    for(let i = 0;  i < 3 && contra1 != ingresoC; i++){
        alert("contraseña incorrecta, intente de nuevo")
        ingresoC= parseInt(prompt("Ingresa tu contraseña"))
    }alert("Tuviste muchos intentos. Contraseña bloqueada")
}*/












const usuarios = [{"nombre": "juanjose", "usuario" : "juanjose", "contraseña": "jj", "saldo": 500.000 },
                  {"nombre": "camilo", "usuario" : "camilo0430", "contraseña": "cam", "saldo": 800.000 },
                 {"nombre": "carlos", "usuario" : "carlos0430", "contraseña": "car",  "saldo": 900.000 }]


let u = "juanjose";
let c = "jj";
let s= 500.000



let u2 = "camilo0430";
let c2= "cam";
let s2= 800


let u3 = "carlos0430"
let c3 = "car"
let s3 =900.000







let pedidaUsuarios = prompt("Escriba su usuario");
let pedidaContraseña = prompt("Escriba su contraseña");




//VALIDACION DE USUARIOS//
usuarios.forEach(callback =>{     //esta es una variable llamada callback, podria tener cualquier nombre//
    if(callback.usuario == u && callback.contraseña == c ){    // este if lo que me hace es comparar si dentro de mi array usuarios hay alguna contraseña que sea igual a mi variable loqueingreseelusuario//
       alert("Saldo: " + saldo)
    }
});


let retiro = parseInt(prompt("Valor a retirar: "));



let restar = (retiro, s, s2)


function Restar(a, b,) {
    return s - retiro;

}

alert("Su saldo actualmente es " + Restar());










































