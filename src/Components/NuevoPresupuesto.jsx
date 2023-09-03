import {useState} from 'react'
import Mensaje from './Mensaje'
const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsvalidPresupuesto}) => {
    const [mensaje, setMensaje] = useState('')
    const handlePresupuesto = (e) => {
        e.preventDefault()
        if(!presupuesto || presupuesto < 0){
            setMensaje('No es un presupuesto valido')
            return
        }

        setMensaje('')
        setIsvalidPresupuesto(true)

    }
  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form className="formulario" onSubmit={handlePresupuesto}>
            <div className="campo">
                <label htmlFor="">Definir Presupuesto</label>
                <input type="number" placeholder="Añade tu presupuesto" className="nuevo-presupuesto" 
                value={presupuesto} onChange={e => setPresupuesto(Number(e.target.value))}/>
            </div>
            <input type="submit" value="Añadir" />
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
    </div>
  )
}

export default NuevoPresupuesto