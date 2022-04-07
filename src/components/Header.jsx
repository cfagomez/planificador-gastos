import React from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({setPresupuesto, presupuesto, presupuestoValido, setPresupuestoValido}) => {
  return (
    <header className='text-center md:w-2/3 mx-auto text-black pt-10'>
      <h1 className='text-5xl'>Planificador de Gastos</h1>
      {
        presupuestoValido ? (
          <ControlPresupuesto />
        ) : (
          <NuevoPresupuesto 
            setPresupuesto={setPresupuesto}
            presupuesto={presupuesto}
            setPresupuestoValido={setPresupuestoValido}
          />
        )
      }
      
    </header>
  )
}

export default Header
