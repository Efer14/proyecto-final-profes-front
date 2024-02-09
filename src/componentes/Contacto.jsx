import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import './Contacto.css';

export const Contacto = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm()
    const [enviado, setEnviado] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);

        try {
            const response = await axios.post('http://localhost/Proyecto-final/Back/pin-final/public/index.php/api/registro-persona', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },

            });
            console.log(data);
            console.log('Datos enviados correctamente');
            setEnviado(true); 
        } catch (error) {
            console.error('Error al enviar los datos:', error);
            setEnviado(true); 
        }
        setLoading(false);
        reset();
    };
    return (
        <div className="login-box">
            <h2>Formulario de contacto</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="user-box">
                    <input
                        type="text"
                        name="nombre"
                        {...register("nombre", {
                            required: true,
                            maxLength: 20,
                        })}
                    />
                    <label>Nombre</label>
                </div>
                {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 20 caracteres</p>}

                <div className="user-box">
                    <input
                        type="text"
                        name="apellido"
                        {...register("apellido", {
                            required: true,
                            maxLength: 10,
                        })}
                    />
                    <label>Apellido</label>
                </div>
                {errors.apellido?.type === 'required' && <p>El campo Apellido es requerido</p>}
                {errors.apellido?.type === 'maxLength' && <p>El campo Apellido debe tener menos de 20 caracteres</p>}

                <div className="user-box">
                    <input
                        type="email"
                        name="email"
                        {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        })}
                    />
                    <label>Email</label>
                </div>
                {errors.email?.type === 'required' && <p>El campo Email es requerido</p>}
                {errors.email?.type === 'pattern' && <p>El campo Email debe ser un correo electronico</p>}

                <div className="user-box" >
                    <input
                        type="text"
                        name="mensaje"
                        {...register("mensaje", {
                            required: true,
                            maxLength: 100,
                        })}
                    />
                    <label>Mensaje</label>
                </div>
                {errors.mensaje?.type === 'required' && <p>El campo Mensaje es requerido</p>}
                {errors.mensaje?.type === 'maxLength' && <p>El campo Mensaje debe tener menos de 100 caracteres</p>}

                <button type='submit' className='boton'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </button>

                {loading && ( 
                    <div className="spinner-carga">
                    <div className="spinner-border text-info " role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    </div>
                )}

            </form>

            {enviado && <p className="mensaje-envio">Datos enviados correctamente</p>}
            {!enviado && Object.keys(errors).length > 0 && <p className="mensaje-envio">Error al enviar los datos</p>}

        </div>
    )
}
