import React from 'react'

const Gasto = ({nombre, cantidad, categoria, fecha, id, gastoAEditar, setGastoAEditar, setModalOn, listaGastos, setListaGastos}) => {

    const formatearFecha = fecha => {

        const fechaNueva = new Date(fecha)
        const opciones = {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
        }

        return fechaNueva.toLocaleDateString('es-ES', opciones)

    }

    const activarModoEdicionGasto = () => {

        const objetoGastoAEditar = {
            nombre,
            cantidad,
            categoria,
            fecha,
            id
        }

        setModalOn(true)
        setGastoAEditar(objetoGastoAEditar)

    }

    const eliminarGasto = () => {

        const listaGastosActualizada = listaGastos.filter( gasto => gasto.id !== id)

        setListaGastos(listaGastosActualizada)

    }

  return (
    <div className=' md:w-1/3 bg-gray-900 shadow-lg rounded-lg py-10 px-5 mb-10 mt-5 text-center mx-auto text-amber-200'>
        <h3 className='text-3xl uppercase'>
            {nombre}
        </h3>
        <p className='text-2xl uppercase'>
            ${cantidad}
        </p>
        <p className='text-2xl uppercase'>
            {categoria}
        </p>
        <p className='text-xl'>
            Agregado: {formatearFecha(fecha)}
        </p>
        <div className='mt-10'>
            <button
                className='bg-indigo-700 p-3 text-amber-200 uppercase font-bold cursor-pointer rounded-md transition-all mt-2 mb-5 block w-full'
                onClick={() => activarModoEdicionGasto()}
            >
                Editar
            </button>
            <button
                className='bg-indigo-700 p-3 text-amber-200 uppercase font-bold cursor-pointer rounded-md transition-all mt-2 mb-5 block w-full'
                onClick={() => eliminarGasto()}
            >
                Eliminar
            </button>
        </div>
        
    </div>
  )
}

export default Gasto