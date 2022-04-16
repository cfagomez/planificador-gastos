import React from 'react'
import Filtro from './Filtro'
import Gasto from './Gasto'

const ListadoGastos = ({listaGastos, setGastoAEditar, gastoAEditar, setModalOn, setListaGastos, filtro, setFiltro, gastosFiltrados}) => {
  return (
    <div className='text-start md:w-2/3 mx-auto text-amber-200'>
        <h2 className='text-3xl'>
          {
            listaGastos.length > 0 ? (
              'Lista de Gastos'
            ) : (
              'No hay Gastos'
            )
          }
        </h2>
        {
          listaGastos.length > 0 ? (
            <Filtro 
              filtro={filtro}
              setFiltro={setFiltro}
            />
          ) : (
            null
          )
        }
        
        {

          filtro ? (

            <>

            <h2 className='text-3xl text-amber-200'>
              {
                gastosFiltrados.length > 0 ? (
                  null
                ) : (
                  'No hay gastos'
                )
              }
            </h2>

            {

              gastosFiltrados.map ( gasto => (
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

            </>
            
          ) : (

            <>
            
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

            </>

          )

        }

    </div>
  )
}

export default ListadoGastos