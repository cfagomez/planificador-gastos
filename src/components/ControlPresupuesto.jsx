import React from 'react'

const ControlPresupuesto = () => {

  return (
    <div className='flex pt-10 shadow-lg rounded-lg bg-gray-200 mt-10 justify-around px-5 py-10'>
        <div>
            <p>Grafico de Progreso</p>
        </div>
        <div className='text-left text-xl'>
            <button className='bg-black w-full p-3 text-white uppercase font-bold cursor-pointer rounded-md transition-all mt-2 mb-5'>Resetear App</button>
            <p className='py-3'>
                <span>Presupuesto:</span>
            </p>
            <p className='py-3'>
                <span>Disponible:</span>
            </p>
            <p className='py-3'>
                <span>Gastado:</span>
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto