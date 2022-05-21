'use strict'

import { Validation } from "./validation.js";


// const users = {
//     user01:{
//         Usuario: "Admin",
//         Mail: "admin@admin.com",
//         Phone: "1234567890",
//         Password: "qwerty"
//     },
        
// }

const usuarios = []

// console.log(Object.keys(users).length)

const actualizarListaUsuarios = () => {
    let usuariosGuardados = localStorage.getItem("UsuariosCreados");
    usuariosGuardados = JSON.parse(usuariosGuardados)

    for (const obj in usuariosGuardados) {
        usuarios[obj] = {
            Usuario: usuariosGuardados[obj].Usuario,
            Mail: usuariosGuardados[obj].Mail,
            Phone: usuariosGuardados[obj].Phone,
            Password: usuariosGuardados[obj].Password,
        }
    }


}




class usersRegister {
    constructor(user,email,phone,password){
        this.usuario = user,
        this.email = email,
        this.phone = phone,
        this.password = password;
        //FALTA AGREGAR DNI
    }
}



export const controlUserValidation = (usuarioIngresado= undefined, contraseñaIngresada= undefined)=> {
    actualizarListaUsuarios()
    if (!Validation.empty({usuarioIngresado,contraseñaIngresada})) {
        return false
    }

    for (const user in usuarios){


        if ((usuarios[user].Usuario.toLowerCase() === usuarioIngresado.toLowerCase()) || (usuarios[user].Mail.toLowerCase() === usuarioIngresado.toLowerCase())) {

            if (usuarios[user].Password === contraseñaIngresada) {
               return true;
            }
            else {
                return false;
            }

        }
        else return false;
    }

}

export const createNewUser = (user = undefined,email = undefined,phone = undefined,password = undefined) => {
    if (!Validation.empty({user,email,phone,password})) {
        console.log("empty");
        return false;
    }
        // ERROR VALIDACION MAIL A CHEQUEAR

    // if (!Validation.email(email)) {
    //     console.log("email" , email);
    //     return false;
    // }




    // Actualizar lista de usuarios ya creados para agregar uno nuevo
    actualizarListaUsuarios()



    // CONTROLAR QUE EL USUARIO NO ESTE YA CREADO FALTA MEJORAR CODIGO
    for (const obj in usuarios) {
        console.log('OBJ USUARIO ' + obj.Usuario)
        console.log('OBJ MAIL ' + obj.Mail)
        if (usuarios[obj].Usuario === user.toLowerCase() || usuarios[obj].Mail === email.toLowerCase()) {
            console.log("Usuario ya creado");
            return false
        }
    }


    // GENERAR UN USARIO NUEVO EN EL OBJETO
    usuarios.push(
        {
            Usuario: user.toLowerCase(),
            Mail: email.toLowerCase(),
            Phone: phone,
            Password: password
        }
    )
    

    // GUARDAR USUARIO NUEVO EN LOCAL STORAGE
    let usersJson = JSON.stringify(usuarios);
    localStorage.setItem("UsuariosCreados", usersJson)


    actualizarListaUsuarios()

}



