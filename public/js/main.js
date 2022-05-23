
import {controlUserValidation,createNewUser} from "./user.js"
import {Validation} from "./validation.js"


document.addEventListener('click', e => {
    //e.preventDefault();
    
    if (e.target.id === "login-btn") {
        e.preventDefault()
        const $inputUserName = document.getElementById('login-user').value;
        const $inputUserPassword = document.getElementById('login-password').value;

        if (controlUserValidation($inputUserName,$inputUserPassword)) {
            window.location.href = "../pages/portfolio.html"
        } else {
            const $notificationForm = document.getElementById("signUp-notification");
            $notificationForm.classList.add("bg-red","show-block");
            $notificationForm.innerText = 'Datos incorrectos';
        }
    }

    if (e.target.id === "create-newUser") {
        e.preventDefault()

        const $createUserName = document.getElementById("create-user").value
        const $createUserEmail = document.getElementById("create-email").value
        const $createUserPhone = document.getElementById("create-phone").value
        const $createUserPassword = document.getElementById("create-password").value

        let control = createNewUser($createUserName,$createUserEmail,$createUserPhone,$createUserPassword);
        
        console.log(control)
        if (control) {
            const $notificationForm = document.getElementById("signUp-notification");
            $notificationForm.classList.add("bg-green","show-block");
            $notificationForm.innerText = 'Usuario creado con exito';
        }
        if (!control) {
            const $notificationForm = document.getElementById("signUp-notification");
            $notificationForm.classList.add("bg-red","show-block");
            $notificationForm.innerText = 'Error';
            // Corregir para detallar mejor lista de errores
        }
    }




})

