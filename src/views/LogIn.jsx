import React from 'react';

const LogIn = () => {
  return (
    <>
      <div
        id='g_id_onload'
        data-client_id='AIzaSyDWceW3hBBgRXsU10ARPwfwcIt6at4yK1U'
        data-context='signin'
        data-ux_mode='popup'
        data-login_uri='https://dogs-front-end-ashy.vercel.app/logIn'
        data-itp_support='true'
      ></div>

      <div
        className='g_id_signin'
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
