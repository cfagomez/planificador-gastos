import React from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({setPresupuesto, presupuesto, presupuestoValido, setPresupuestoValido, setMensaje, mensaje, listaGastos}) => {

  React.useEffect(() => {

    const presupuestoLocalStorage = localStorage.getItem('presupuesto')

    if (presupuestoLocalStorage) {

      setPresupuestoValido(true)

    }

  }, [])

  return (
    <header className='text-center md:w-2/3 mx-auto text-black pt-10'>
      <h1 className='text-5xl'>Planificador de Gastos</h1>
      {
        presupuestoValido ? (
          <ControlPresupuesto
            presupuesto={presupuesto}
            listaGastos={listaGastos}
          />
        ) : (
          <NuevoPresupuesto 
            setPresupuesto={setPresupuesto}
            presupuesto={presupuesto}
            setPresupuestoValido={setPresupuestoValido}
            setMensaje={setMensaje}
            mensaje={mensaje}
          />
        )
      }
      
    </header>
  )
}

export default Header
