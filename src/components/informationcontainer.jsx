import React from "react";
import "../assets/css/components/informationcontainer.sass";
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

function InformationContainer() {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(+244) 972 264 209</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>inocenciojose93497@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Angola, Uíge, Uíge, Papelão, Rua Divino Pastor</p>
        </div>
      </div>
    </section>
  );
}

export default InformationContainer;