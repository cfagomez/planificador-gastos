import React from 'react'
import Header from "./components/Header"
import Modal from './components/Modal'
import { nanoid } from 'nanoid'
import ListadoGastos from './components/ListadoGastos'

function App() {

  const [presupuesto, setPresupuesto] = React.useState(Number(0))
  const [presupuestoValido, setPresupuestoValido] = React.useState(false)
  const [mensaje, setMensaje] = React.useState(null)
  const [modalOn, setModalOn] = React.useState(false)
  const [listaGastos, setListaGastos] = React.useState([])

  const guardarGasto = (gasto) => {

    gasto.id = nanoid()
    gasto.fecha = Date.now()

    setListaGastos([...listaGastos, gasto])

  }

  return (
    <div className='container mx-auto mt-20'>
      {

        modalOn ? (

          <Modal 
            setModalOn={setModalOn}
            mensaje={mensaje}
            setMensaje={setMensaje}
            guardarGasto={guardarGasto}
          />

        ) : (

          <Header 
            setPresupuesto={setPresupuesto}
            presupuesto={presupuesto}
            presupuestoValido={presupuestoValido}
            setPresupuestoValido={setPresupuestoValido}
            setMensaje={setMensaje}
            mensaje={mensaje}
          />
          
        )

      }

      {
        presupuestoValido ? (
          <ListadoGastos
            listaGastos={listaGastos}
          />
        ) : (
          null
        )
      }
      
      {
        presupuestoValido && !modalOn ? (

          <div className='text-center mx-auto mt-5'>
            <button 
              className='bg-black p-3 text-white uppercase font-bold cursor-pointer rounded-md transition-all mt-2 mb-5'
              onClick={() => setModalOn(true)}
            >
              Nuevo Gasto
            </button>
          </div>

        ) : (
          null
        )
      }
    </div>
  )
}

export default App
