import React from 'react'
import Header from "./components/Header"
import Modal from './components/Modal'
import { nanoid } from 'nanoid'
import ListadoGastos from './components/ListadoGastos'

function App() {

  const [presupuesto, setPresupuesto] = React.useState(Number((localStorage.getItem ? JSON.parse(localStorage.getItem('presupuesto')) : (0))))
  const [presupuestoValido, setPresupuestoValido] = React.useState(false)
  const [mensaje, setMensaje] = React.useState(null)
  const [modalOn, setModalOn] = React.useState(false)
  const [listaGastos, setListaGastos] = React.useState(localStorage.getItem('lista gastos') ? JSON.parse(localStorage.getItem('lista gastos')) : [])
  const [gastoAEditar, setGastoAEditar] = React.useState({})
  const [filtro, setFiltro] = React.useState('')
  const [gastosFiltrados, setGastosFiltrados] = React.useState([])

  React.useEffect(() => {

    localStorage.setItem('lista gastos', JSON.stringify(listaGastos) ?? 0)

  }, [listaGastos])

  const guardarGasto = (gasto) => {

    gasto.id = nanoid()
    gasto.fecha = Date.now()

    setListaGastos([...listaGastos, gasto])

  }

  React.useEffect(() => {

    if (filtro) {

      const listaGastosFiltrada = listaGastos.filter( gastoItem => gastoItem.categoria === filtro)
      setGastosFiltrados(listaGastosFiltrada)      

    }

  }, [filtro])

  return (
    <div className='container mx-auto mt-20 pb-5'>
      {

        modalOn ? (

          <Modal 
            setModalOn={setModalOn}
            mensaje={mensaje}
            setMensaje={setMensaje}
            guardarGasto={guardarGasto}
            gastoAEditar={gastoAEditar}
            setGastoAEditar={setGastoAEditar}
            listaGastos={listaGastos}
            setListaGastos={setListaGastos}
          />

        ) : (

          <Header 
            setPresupuesto={setPresupuesto}
            presupuesto={presupuesto}
            presupuestoValido={presupuestoValido}
            setPresupuestoValido={setPresupuestoValido}
            setMensaje={setMensaje}
            mensaje={mensaje}
            listaGastos={listaGastos}
            setListaGastos={setListaGastos}
          />
          
        )

      }

      {
        presupuestoValido && !modalOn ? (

          <div className='text-center mx-auto mt-5'>
            <button 
              className='bg-indigo-700 p-3 text-amber-200 uppercase font-bold cursor-pointer rounded-md transition-all mt-2 mb-5'
              onClick={() => setModalOn(true)}
            >
              Nuevo Gasto
            </button>
          </div>

        ) : (
          null
        )
      }

      {
        presupuestoValido ? (
          <ListadoGastos
            listaGastos={listaGastos}
            setGastoAEditar={setGastoAEditar}
            setModalOn={setModalOn}
            gastoAEditar={gastoAEditar}
            setListaGastos={setListaGastos}
            filtro={filtro}
            setFiltro={setFiltro}
            gastosFiltrados={gastosFiltrados}
          />
        ) : (
          null
        )
      }
      
    </div>
  )
}

export default App
