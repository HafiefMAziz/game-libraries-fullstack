import React from "react";
import "./contact.css";
const ContactPage = () => {
  return (
    <div className="container">
      <div className="card-container">

        <div className="right">
          <div className="right-container">
            <form action="" />
            <br></br>
            <h2 className="lg-view">Hubungi Kami</h2>
            <h2 className="sm-view">Hubungi Kami</h2>
            <input type="text" placeholder="Nama" />
            <input type="email" placeholder="Alamat Email" />
            <input type="text" placeholder="Perusahaan" autocomplete="off" />
            <input type="phone" placeholder="Telepone" autocomplete="off" />
            <textarea rows="10" placeholder="Pesan"></textarea>
            <button>Kirim</button>
            <form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
