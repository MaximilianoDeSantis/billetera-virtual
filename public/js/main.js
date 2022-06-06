
'use strict'

// IMPORTS
import { createUser, userLogIn } from "./user.js";
//import { validateData } from "./validation.js";

const $userSignIn = document.getElementById("sign-in-user"),
$passwordSignIn = document.getElementById("sign-in-password"),
$btnSignIn = document.getElementById("sign-in-btn");


document.addEventListener("click" , e => {
    // BOTON INICIAR SESION

    if (e.target.matches('#login-btn')) {
        e.preventDefault();

        // FALTA AGREGAR CONTROL DE DATOS INGRESADOS

       if (userLogIn(
            document.getElementById("login-user").value,
            document.getElementById("login-password").value,
        )) {
            swal ({
                title: "Log In",
                text: "Bienvenido",
                icon: "success",
                button: "Cerrar"
            })
            window.location.href = "../pages/portfolio.html"
        } else {
                const $notificationForm = document.getElementById("signUp-notification");
                swal ({
                    title: "Log In",
                    text: "Error en los datos de logeo",
                    icon: "warning",
                    button: "Cerrar"
                })
            //    $notificationForm.classList.add("bg-red","show-block");
            //    $notificationForm.innerText = 'Datos incorrectos';
        }



    }

    if (e.target.matches('#create-newUser')) {
        // BOTON CREAR USUARIO

        e.preventDefault();

        // FALTA AGREGAR CONTROL DE DATOS INGRESADOS

        if (createUser(
            document.getElementById("create-user").value,
            document.getElementById("create-password").value,
            document.getElementById("create-email").value,
        )) {
            const $notificationForm = document.getElementById("signUp-notification");
            document.getElementById("create-user").value =""
            document.getElementById("create-password").value =""
            document.getElementById("create-email").value =""
            swal ({
                title: "Registro",
                text: "Usuario creado exitosamente",
                icon: "success",
                button: "Cerrar"
            })
        //    $notificationForm.classList.add("bg-green","show-block");
        //    $notificationForm.innerText = 'Usuario creado con exito';
        } else {
            const $notificationForm = document.getElementById("signUp-notification");
            swal ({
                title: "Registro",
                text: "Error al registrarse verifique sus datos",
                icon: "warning",
                button: "Cerrar"
            })
        //    $notificationForm.classList.add("bg-red","show-block");
        //    $notificationForm.innerText = 'Error';
        }



    }



})








// import {controlUserValidation,createNewUser} from "./user.js"
// import {Validation} from "./validation.js"


// document.addEventListener('click', e => {
//     //e.preventDefault();
    
//     if (e.target.id === "login-btn") {
//         e.preventDefault()
//         const $inputUserName = document.getElementById('login-user').value;
//         const $inputUserPassword = document.getElementById('login-password').value;

//         if (controlUserValidation($inputUserName,$inputUserPassword)) {
//             window.location.href = "../pages/portfolio.html"
//         } else {
//             const $notificationForm = document.getElementById("signUp-notification");
//             $notificationForm.classList.add("bg-red","show-block");
//             $notificationForm.innerText = 'Datos incorrectos';
//         }
//     }

//     if (e.target.id === "create-newUser") {
//         e.preventDefault()

//         const $createUserName = document.getElementById("create-user").value
//         const $createUserEmail = document.getElementById("create-email").value
//         const $createUserPhone = document.getElementById("create-phone").value
//         const $createUserPassword = document.getElementById("create-password").value

//         let control = createNewUser($createUserName,$createUserEmail,$createUserPhone,$createUserPassword);
        
//         console.log(control)
//         if (control) {
//             const $notificationForm = document.getElementById("signUp-notification");
//             $notificationForm.classList.add("bg-green","show-block");
//             $notificationForm.innerText = 'Usuario creado con exito';
//         }
//         if (!control) {
//             const $notificationForm = document.getElementById("signUp-notification");
//             $notificationForm.classList.add("bg-red","show-block");
//             $notificationForm.innerText = 'Error';
//             // Corregir para detallar mejor lista de errores
//         }
//     }




// })

