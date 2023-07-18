import React from "react";
import formIma from "../../assets/formulario.webp";
import "./form2.css";
import { useForm } from "react-hook-form";
import axios from 'axios';

function Form2() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  /*conexión a base de datos*/
  const onSubmit = (data) => {
    // console.log(data);
    axios.post('https://cors-anywhere.herokuapp.com/https://back-app-production.up.railway.app/api/registrapersona', data)
      .then((response) => {
        console.log(response);
        alert('✅ ¡Envío Exitoso!');
        reset();
      })
      .catch((error) => {
        console.log(error);
        if (error.response.data.message === "El correo electrónico ya está en uso") {
          alert(' ⛔ El correo ya está en uso, intenta con otro correo');
        } else
          alert(' ⛔ Ocurrió un error al enviar el formulario ');
      });
  };


  return (
    <div name='contact' className="container-fluid contentForm pt-5 mt-5 pb-5 ">
      <div className="row py-5 my-5">
        <div className="col colForm p-5 mx-4">
          <h2 className="form-title">Contacta</h2>
          <h2 className="subtittle-title pb-3">con nosotros</h2>
          <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input type="text" className=" form-control shadow-none  " id="nombre" autoComplete="off" {...register("nombre", { required: true })} />
              {errors.nombre && <p className="error">❎ El nombre es obligatorio</p>}
              {errors.nombre?.type === "pattern" && <p className="error">❎ No se permite números en el nombre</p>}
            </div>
            <div className="mb-2">
              <label htmlFor="correo" className="form-label">Correo</label>
              <input type="email" className="form-control shadow-none" id="correo" autoComplete="off" {...register("correo", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
              {errors.correo && <p className="error">❎ El correo es obligatorio</p>}
              {errors.correo && errors.correo.type === "pattern" && <p className="error">❎ El correo electrónico no es válido</p>}
            </div>
            <div className="mb-2">
              <label htmlFor="telefono" className="form-label">Teléfono</label>
              <input type="tel" className="form-control shadow-none" id="telefono" autoComplete="off"  {...register("telefono", { required: true, pattern: /^[0-9]+$/ })} />
              {errors.telefono?.type === "required" && <p className="error">❎ El teléfono es obligatorio</p>}
              {errors.telefono?.type === "pattern" && <p className="error">❎ El teléfono debe contener números</p>}
            </div>
            <div className="mb-2">
              <label htmlFor="mensaje" className="form-label">Comentario</label>
              <textarea type="text" className="form-control shadow-none" id="mensaje" rows={2} autoComplete="off" {...register("mensaje", { required: true} )}/>
              {errors.mensaje && <p className="error">❎ El mensaje es obligatorio</p>}
            </div>
            <button type="submit" className="custom-button">Enviar</button>
          </form>
        </div>
        <div className="col-md-6  d-flex align-items-center justify-content-center p-5">
          <img className="imageForm img-fluid" src={formIma} alt="Imagen de formulario" />
        </div>
      </div>
    </div>
  );
};


export default Form2;
