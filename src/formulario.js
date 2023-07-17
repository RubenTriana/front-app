import React, { useState} from "react";
import axios from "axios";

const Formulario = () => {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nombre, correo, telefono, mensaje } = form;
    const data = { nombre, correo, telefono, mensaje };
    try {
      const response = await axios.post("https://back-app-production.up.railway.app", data);
      console.log(response.data); // Puedes procesar la respuesta como lo necesites.
    } catch (error) {
      console.error(error); // Aquí puedes manejar el error como lo necesites.
    }
  };
  

  const handleChange = (name) => (e) => {
    setForm({ ...form, [name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          width: "60%",
          margin: "20px",
          marginLeft: "0",
        }}
      >
        <label htmlFor="nombre">Nombre:</label>
        <br />
        <input
          type="text"
          id="nombre"
          value={form.nombre}
          onChange={handleChange("nombre")}
        />
        <br />

        <label htmlFor="correo">Correo:</label>
        <br />
        <input
          type="email"
          id="correo"
          value={form.correo}
          onChange={handleChange("correo")}
        />
        <br />

        <label htmlFor="telefono">Teléfono:</label>
        <br />
        <input
          type="tel"
          id="telefono"
          value={form.telefono}
          onChange={handleChange("telefono")}
        />
        <br />

        <label htmlFor="mensaje">Mensaje:</label>
        <br />
        <textarea
          id="mensaje"
          value={form.mensaje}
          onChange={handleChange("mensaje")}
        ></textarea>
        <br />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
