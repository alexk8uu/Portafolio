import React from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Contact = () => {
  function sendEmail(e) {
    emailjs
      .sendForm(
        "service_txj1wy9",
        "template_ywiglpt",
        e.target,
        "cbBPpejZRh4QhURxd"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    /*         <div className='container border'>
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
                </div> */
    <ContainerForm>
      <Form>
        <h3>Contact me</h3>
        <p>And let's get down to work</p>
        <form onSubmit={sendEmail}>
          <label>Nombre</label>
          <input type="name" name="name" className="form-control" />

          <label>Email</label>
          <input type="email" name="email" className="form-control" />

          <label>Mensaje</label>
          <textarea name="message" rows="4" className="form-control" />

          <input
            type="submit"
            value="Enviar"
            className="form-control btn btn-primary"
            style={{ marginTop: "20px" }}
          />
        </form>
      </Form>
    </ContainerForm>
  );
};

export default Contact;

const Form = styled.div`
  width: 700px;
  min-height: 100px;
  max-height: 470px;
  background: #000;
  position: relative;
  border-radius: 5px;
  padding: 20px;
  margin-top: 20px;
  color: #fff;
  border-style: solid;
  border-width: 1.2px;

  @media only screen and (max-width: 970px) {
    width: 300px;
    min-height: 100px;
    max-height: 200px;
    border-style: none;

    label {
      font-size: 12px;
    }

    h3 {
      font-size: 15px;
    }

    p {
      font-size: 8px;
    }
    input {
      height: 30px;
    }

    textarea {
      max-height: 30px;
    }
  }
`;

const ContainerForm = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
