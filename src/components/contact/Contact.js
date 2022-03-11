import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';


const Contact = () => {

    function sendEmail (e) {    
        e.preventDefault();
        emailjs.sendForm("service_txj1wy9", "template_ywiglpt", e.target, 'cbBPpejZRh4QhURxd').then( res => {
            console.log(res)
        }).catch( err => console.log(err))
    }   


    return (
        <div className='container border'>
            <h3>Contact me</h3>
            <p>And let's get down to work</p>
            <form  onSubmit={sendEmail}>
                <label>Nombre</label>
                <input type='name' name='name' className='form-control' />

                <label>Email</label>
                <input type='email' name='email' className='form-control' />

                <label>Mensaje</label>
                <textarea name='message' rows='4' className='form-control' />

                <input type='submit' value='send' className='form-control btn btn-primary' style={{ marginTop: "20px" }} />
            </form>
        </div>
    )
}

export default Contact