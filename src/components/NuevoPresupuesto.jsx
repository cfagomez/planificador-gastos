import React from 'react'
import Error from './Error'

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setPresupuestoValido, setMensaje, mensaje}) => {

  const validarFormulario = (e) => {

    e.preventDefault()

    if (!presupuesto || presupuesto < 0) {

      setMensaje('Presupuesto Invalido')

      return

    }

    localStorage.setItem('presupuesto', (presupuesto) ?? 0)

    setMensaje(null)
    setPresupuestoValido(true)

  }

  return (
    <div className='mx-5 mt-5'>
      <form 
        onSubmit={validarFormulario}
        className='bg-white shadow-lg rounded-lg py-10 px-5 mb-10'
      >
        {
          mensaje ? (
            <Error 
              mensaje={mensaje}
            />
          ) : (
            null
          )
        }
        <div>
          <label 
            className='block text-black font-bold text-2xl my-3'
            htmlFor="presupuesto"
          >
            Definir Presupuesto
          </label>
          <input 
            type="number"
            className='border-2 w-full p-2 mt-2 rounded-lg border-black text-center'
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input 
          type="submit"
          className='bg-black w-full p-3 text-white uppercase font-bold cursor-pointer rounded-md transition-all mt-2'
        />
      </form>
    </div>
  )
}

export default NuevoPresupuesto