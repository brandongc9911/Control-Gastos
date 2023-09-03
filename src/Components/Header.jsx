import ControlPresupuesto from "./ControlPresupuesto"
import NuevoPresupuesto from "./NuevoPresupuesto"

const Header = ({
    presupuesto, 
    setPresupuesto,
    isValidPresupuesto,
    setIsvalidPresupuesto,
    gastos,
    setGastos
}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        {isValidPresupuesto ? (
            <ControlPresupuesto presupuesto={presupuesto} gastos={gastos} setGastos={setGastos} setPresupuesto={setPresupuesto} setIsvalidPresupuesto={setIsvalidPresupuesto}/>
        ) : (
            <NuevoPresupuesto presupuesto={presupuesto} setPresupuesto={setPresupuesto} setIsvalidPresupuesto={setIsvalidPresupuesto}/>

        )}
    </header>
  )
}

export default Header