/*import React from 'react';
//const { GoogleAuth } = require('google-auth-library');

const responseGoogleSuccess = (response) => {
  console.log('Inicio de sesión exitoso:', response);
  // Aquí puedes manejar la respuesta exitosa, por ejemplo, enviar el token de acceso al servidor para verificarlo y autenticar al usuario.
};

const responseGoogleFailure = (response) => {
  console.log('Inicio de sesión fallido:', response);
  // Aquí puedes manejar la respuesta de error, por ejemplo, mostrar un mensaje de error al usuario.
};
/*
<GoogleLogin
  clientId='AIzaSyDWceW3hBBgRXsU10ARPwfwcIt6at4yK1U'
  buttonText='Iniciar sesión con Google'
  onSuccess={responseGoogleSuccess}
  onFailure={responseGoogleFailure}
  cookiePolicy={'single_host_origin'}
/>;
*/
/*
const LogIn = () => {
  return (
    <>
      <div
        id='g_id_onload'
        data-client_id='AIzaSyDWceW3hBBgRXsU10ARPwfwcIt6at4yK1U'
        data-context='signin'
        data-ux_mode='redirect'
        data-login_uri='http://localhost:3000/'
        data-auto_select='true'
        data-itp_support='true'
      ></div>

      <div
        class='g_id_signin'
        data-type='standard'
        data-shape='rectangular'
        data-theme='outline'
        data-text='signin_with'
        data-size='large'
        data-logo_alignment='left'
      ></div>
    </>
  );
};

export default LogIn;
*/
