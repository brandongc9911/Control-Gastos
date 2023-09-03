import { useState, useEffect } from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({
    setModal, animarModal, 
    setAnimarModal, guardarGasto,
    setEditarGasto,editarGasto
}) => {
    const [mensaje, setMensaje] = useState('')
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [categoria, setCategoria] = useState('')
    const [fecha, setFecha] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
        if(Object.keys(editarGasto).length > 0){
            setNombre(editarGasto.nombre)
            setCantidad(editarGasto.cantidad)
            setCategoria(editarGasto.categoria)
            setId(editarGasto.id)
            setFecha(editarGasto.fecha)
          }
    },[])


    const ocultarModal = () => {
        setAnimarModal(false)
        setEditarGasto({})
        setTimeout( ()=> {
            setModal(false)

        }, 500)
    }

    const handleSubmit = e => {
        e.preventDefault()

        if([nombre,cantidad,categoria].includes('')){
            setMensaje('Todos los campos son obligatorios')
            setTimeout(()=>{
                setMensaje('')
            },1000)
            return;
        }

        guardarGasto({nombre, cantidad, categoria, id,fecha})
    }
  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img src={CerrarBtn} alt="cerrar" onClick={ocultarModal}/>
        </div>

        <form onSubmit={handleSubmit} 
        className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
            <legend>{editarGasto.nombre ? "Editar Gasto" : "Nuevo Gasto"}</legend>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            <div className="campo">
                <label htmlFor="nombre">Nombre Gasto</label>
                <input id='nombre' type="text" placeholder='Añade el nombre del Gasto' 
                value={nombre} onChange={e => setNombre(e.target.value)}/>
            </div>

            <div className="campo">
                <label htmlFor="cantidad">Cantidad</label>
                <input id='cantidad' type="number" placeholder='Añade la cantidad del Gasto: eje. 300' 
                value={cantidad} onChange={e => setCantidad(Number(e.target.value))}/>
            </div>

            <div className="campo">
                <label htmlFor="categoria">Categoria</label>

                <select  id="categoria"  value={categoria} onChange={e => setCategoria(e.target.value)}>
                    <option value="">-- Seleccione --</option>
                    <option value="ahorro"> Ahorro </option>
                    <option value="comida"> Comida </option>
                    <option value="ocio"> Ocio </option>
                    <option value="casa"> Casa </option>
                    <option value="gastos"> Gastos Varios </option>
                    <option value="salud"> Salud </option>
                    <option value="suscripciones"> Suscripciones </option>
                </select>
            </div>

            <input type="submit" value={editarGasto.nombre ? "Guardar Cambios" : "Añadir Gasto"}/>
        </form>
    </div>
  )
}

export default Modal