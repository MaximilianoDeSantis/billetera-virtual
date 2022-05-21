

export const Validation = {

    empty: (object) => {
        for (const obj in object) {
            if (object[obj] === "") {
                console.log("VACIO!") // A BORRAR
                return false;
            }
            if (object[obj] === undefined) {
                console.log("UNDEFINED") // A BORRAR
                return false;
            }
        }
        return true;
    },

    email: (email) => {
        const mailFormat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if ((email.match(mailFormat))) {
            console.log(email.match(mailFormat))
            console.log("mail INCORRECTO") // A BORRAR
            return false;
        }
    },

    phone: (phone) =>{
        const phoneFormat = /^\d{10}$/;

        if (phone.match(phoneFormat)) {
            console.log("Telefono correcto")
        }

    }
}

