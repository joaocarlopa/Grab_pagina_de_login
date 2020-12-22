import './root.css';
import React from 'react';

export default _ => {
    function active() {
        return {
            inicia() {
                this.load();
            },

            load() {
                document.addEventListener('submit', x => {
                    x.preventDefault();



                    if (this.confereEmail()) {
                        

                    }

                    if(this.conferePass()) {
                        
                    }
                })
            },

            confereEmail() {

                const email = document.getElementById('mail');
                document.querySelector('.errorMail').innerHTML = `Insira um e-mail válido.`;
                document.querySelector('.email').classList.add('red');
                if (email.value.match(/@/) && email.value.match(/.com/)) {
                    document.querySelector('.email').classList.remove('red');
                    document.querySelector('.errorMail').innerHTML = '';
                    return false};

                return true;



            },

            conferePass() {
                const pass = document.getElementById('pass');
                document.querySelector('.errorPass').innerHTML = 'Insira uma senha Válida.';
                document.querySelector('.password').classList.add('red');

                if (pass.value.length >= 6 && pass.value.length <= 12) {
                    document.querySelector('.password').classList.remove("red");
                    document.querySelector('.errorPass').innerHTML = '';
                    return false
                }
                   
                return true;
            }
        }
    }

    const iniciaTudo = active();
    iniciaTudo.inicia();

    return (
        <div className='container'>
            <div className='content_left'>
                <div className='hr'></div>

                <div className='nav'>
                    <form>
                        <div className='email'>
                            <label for='mail'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 24 24" fill="white" width="20px" height="20px"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" /></svg></label>
                            <input type='text' id='mail' placeholder='E-mail' />

                        </div>

                        <div class='errorMail'></div>
                        <div className='password'>
                            <label for='pass'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 24 24" fill="white" width="20px" height="20px"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" /></svg></label>
                            <input type='password' id='pass' placeholder='Password' />
                            <div class='errorPass'></div>
                            <div className='button'>
                                <button className='btn' type='submit'>Entrar</button>
                            </div>
                            
                        </div>
                        


                    </form>
                    <div className='footer'>Problemas para entrar?<br />
                        <a href='./' className='link'>Clique aqui</a>
                    </div>
                </div>


            </div>



            <div className='content_right'></div>
        </div>
    )
}
