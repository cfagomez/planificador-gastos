import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({listaGastos, setGastoAEditar, gastoAEditar, setModalOn, setListaGastos}) => {
  return (
    <div className='text-start md:w-2/3 mx-auto text-black pt-10'>
        <h2 className='text-3xl'>Lista de Gastos</h2>
        {
                listaGastos.map ( gasto => (
                    <Gasto
                        nombre={gasto.nombreGasto}
                        cantidad={gasto.cantidad}
                        categoria={gasto.categoria}
                        fecha={gasto.fecha}
                        id={gasto.id}
                        key={gasto.id}
                        setGastoAEditar={setGastoAEditar}
                        setModalOn={setModalOn}
                        gastoAEditar={gastoAEditar}
                        listaGastos={listaGastos}
                        setListaGastos={setListaGastos}
                       />
                    ))
        }
    </div>
  )
}

export default ListadoGastos