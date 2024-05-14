
const userName=document.getElementById('inputName');
const userEmail= document.getElementById('inputEmail');
const userPassword= document.getElementById('inputPassword');
const userPassword2= document.getElementById('inputPassword2');
const sendButton= document.getElementById('submitButton');

sendButton.addEventListener('click',sendInfo);


let i=0;
            
let array=[];

let patronCorreo= /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/

let patronContraseña= /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/

//quitar texto del form una vez este rellenado bien

function clearTextFields() {

    document.getElementById("myForm").reset();
}


//para que desaparezca la alerta

function desaparecer() {
    document.getElementById("alerta").innerHTML = ' ';
}


function sendInfo (event) {

        event.preventDefault();

        let resultadoCorreo = patronCorreo.test(userEmail.value);

        let resultadoContraseña = patronContraseña.test(userPassword.value);

        if (userName.value === '' || userEmail.value === '' || userPassword.value=== ''|| userPassword2.value==='') {

            document.getElementById("alerta").innerHTML = '<div class="alert alert-info largo margenes" role="alert">Por favor, rellena todos los campos</div>';
             
            //hacer que solo este 3 segudos y desaparezca la alerta
            let mensajeAlerta = setTimeout(desaparecer, 3000);

        } else if(resultadoCorreo===false){

            document.getElementById("alerta").innerHTML = '<div class="alert alert-info largo margenes" role="alert">Por favor, introduce un email válido</div>';
             
            let mensajeAlerta = setTimeout(desaparecer, 3000);

        }else if(userPassword.value !== userPassword2.value){

            document.getElementById("alerta").innerHTML = '<div class="alert alert-info largo margenes" role="alert">Introduce la misma contraseña en Contraseña y en Repetir contraseña</div>';
             
            let mensajeAlerta = setTimeout(desaparecer, 3000);

        } else if(resultadoContraseña===false){

            document.getElementById("alerta").innerHTML = '<div class="alert alert-info largo margenes" role="alert">La contraseña tiene que tener mínimo 6 carácteres, una mayúscula, una minúscula, un número, y ningún espacio</div>';
             
            let mensajeAlerta = setTimeout(desaparecer, 3000);
        }
        else{
            console.log('todo bien, metemos user al localstorage y aqui tambien ira un alert, con un enlace a usuarios');

        
            localStorage.setItem('usuario'+i,JSON.stringify({
                name: userName.value,
                email: userEmail.value,
                password: userPassword.value,
                password2:userPassword2.value
            }));

            array.push(JSON.parse( localStorage.getItem('usuario'+i) ) )

            i++;

            clearTextFields();
        }
}

/* 
Al terminar de rellenar los datos del formulario correctamente muestra un mensaje dentro de un alert de bootstrap durante 3 segundos
que muestre “Usuario creado correctamente” y redirige a la vista Usuarios. Imagino con un enlace!

Crea la vista Usuarios la cual debe mostrar en cards de Bootstrap los usuarios guardados en localStorage con los siguientes campos:
Nombre y Correo
*/

        // const elemento = document.createElement('p')
        // document.body.appendChild(elemento)
    
        // const data = JSON.parse(localStorage.getItem('usuario'+i))

        // document.body.lastElementChild.innerText = `${data.name} ${data.email} ${data.message}`;
    
