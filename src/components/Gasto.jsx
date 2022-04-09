import React from 'react'

const Gasto = ({nombre, cantidad, categoria, fecha}) => {

    const formatearFecha = fecha => {

        const fechaNueva = new Date(fecha)
        const opciones = {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
        }

        return fechaNueva.toLocaleDateString('es-ES', opciones)

    }

  return (
    <div className=' md:w-1/3 bg-gray-300 shadow-lg rounded-lg py-10 px-5 mb-10 mt-5 text-center mx-auto border-2 border-black'>
        <h3 className='text-3xl text-black uppercase'>
            {nombre}
        </h3>
        <p className='text-2xl text-black uppercase'>
            ${cantidad}
        </p>
        <p className='text-2xl text-black uppercase'>
            {categoria}
        </p>
        <p className='text-xl text-black'>
            Agregado: {formatearFecha(fecha)}
        </p>
    </div>
  )
}

export default Gasto