import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({listaGastos}) => {
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
                       />
                    ))
        }
    </div>
  )
}

export default ListadoGastos