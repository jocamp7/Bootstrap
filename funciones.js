
/* 
Por cada validación que no se cumpla muestra un mensaje durante 3 segundos y que después desaparezca.

Al terminar de rellenar los datos del formulario correctamente muestra un mensaje durante 3 segundos que muestre 
“Usuario creado correctamente” y redirige a la vista Usuarios.

Muestra los mensajes utilizando los alerts de Bootstrap!!!

Crea la vista Usuarios la cual debe mostrar en cards de Bootstrap los usuarios guardados en localStorage con los siguientes campos:
Nombre
Correo
*/

const userName=document.getElementById('inputName');
const userEmail= document.getElementById('inputEmail');
const userPassword= document.getElementById('inputPassword');
const userPassword2= document.getElementById('inputPassword2');
const sendButton= document.getElementById('submitButton');

sendButton.addEventListener('click',sendInfo);


let i=0;
            
let array=[];

let patronCorreo= /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/

//Checks that a password has a minimum of 6 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number with no spaces.

let patronContraseña= /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/


function sendInfo (event) {

    event.preventDefault();

    let resultadoCorreo = patronCorreo.test(userEmail.value);

    let resultadoContraseña = patronContraseña.test(userPassword.value);

    //console.log(resultadoCorreo);

    if (userName.value === '' || userEmail.value === '' || userPassword.value=== ''|| userPassword2.value==='') {

        console.log('Por favor, rellena todos los campos, luego aqui ira el mensaje fancy');

    } else if(resultadoCorreo===false){

        console.log('Por favor, introduzca un email válido, luego aqui ira el mensaje fancy');

    }else if(userPassword.value !== userPassword2.value){

        console.log('Por favor, compruebe que introduce la contraseña bien las 2 veces, luego aqui ira el mensaje fancy');

    } else if(resultadoContraseña===false){

        console.log('Su contraseña no puede tener espacios, tiene que tener mínimo 6 caracteres, al menos una mayúscula, al menos una minúscula, y al menos un número');
    }
    else{
        console.log('todo bien');
    }
      
     
    //     localStorage.setItem('usuario'+i,JSON.stringify({
    //         name: userName.value,
    //         email: userEmail.value,
    //         password: userPassword.value,
    //         password2:userPassword2.value
    //     }));

    //     array.push(JSON.parse( localStorage.getItem('usuario'+i) ) )

    // i++;

    clearTextFields();
}

function clearTextFields() {
    userName.value = '';
    userEmail.value = '';
    userPassword.value = '';
    userPassword2.value = '';
}

   /*
        Esto modificar luego al final pa que salga en las cards esas:
        const elemento = document.createElement('p')
        document.body.appendChild(elemento)
    
        const data = JSON.parse(localStorage.getItem('usuario'+i))

        document.body.lastElementChild.innerText = `${data.name} ${data.email} ${data.message}`;
    */
