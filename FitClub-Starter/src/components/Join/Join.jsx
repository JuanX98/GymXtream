import React, { useRef } from "react";
import "./Join.css";
import emailjs from '@emailjs/browser'


const Join = () => {
    const form = useRef()


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_oi7acib', 'template_ysa54jy', form.current, '8RKnMV-KX4e1KABu8')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };


  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">AHORA</span>
          <span> ESTARA EN</span>
        </div>
        <div>
          <span className="stroke-text">TU CAMBIO</span>
          <span> PROCESO</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input type="email" name="user_email" placeholder="Ingresa tu nombre y numero"/>
            <button className="btn btn-j">ENVIAR</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
