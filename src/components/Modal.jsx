import React from 'react'
import Error from './Error'

const Modal = ({setModalOn, mensaje, setMensaje, guardarGasto}) => {

    const [nombreGasto, setNombreGasto] = React.useState('')
    const [cantidad, setCantidad] = React.useState('')
    const [categoria, setCategoria] = React.useState('')

    const cancelarNuevoGasto = () => {

        setNombreGasto('')
        setCantidad('')
        setCategoria('')
        setModalOn(false)

    }

    const validarFormulario = (e) => {

        e.preventDefault()

        if ([nombreGasto, cantidad, categoria].includes('')) {

            setMensaje('Hay por lo menos un campo vacio')

            return

        }

        setMensaje(null)
        setModalOn(false)

        const gasto = {
            nombreGasto,
            cantidad,
            categoria
        }

        guardarGasto(gasto)

    }

  return (
    <div className='text-center md:w-2/3 mx-auto text-black pt-10'>
        <h1 className='text-5xl mb-10'>Nuevo Gasto</h1>
        <form
            className='bg-white shadow-lg rounded-lg py-10 px-5 mb-10'
            onSubmit={validarFormulario}
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
                    htmlFor="nombre"
                    className='block text-black font-bold text-2xl my-3 text-left'
                >   
                    Nombre Gasto
                </label>
                <input
                    id='nombre'
                    type="text"
                    className='border-2 w-full p-2 mt-2 rounded-lg border-black text-center'
                    value={nombreGasto}
                    onChange={(e) => setNombreGasto(e.target.value)}
                />
            </div>
            <div>
                <label 
                    htmlFor="cantidad"
                    className='block text-black font-bold text-2xl my-3 text-left'
                >
                    Cantidad
                </label>
                <input
                    id='cantidad'
                    type="text"
                    className='border-2 w-full p-2 mt-2 rounded-lg border-black text-center'
                    value={cantidad}
                    onChange={(e) => setCantidad(Number(e.target.value))}
                />
            </div>
            <div>
                <label 
                    htmlFor="categoria"
                    className='block text-black font-bold text-2xl my-3 text-left'
                >
                    Categoria
                </label>
                <select
                    id='categoria'
                    className='border-2 w-full p-2 mt-2 rounded-lg border-black text-center'
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos varios">Gastos varios</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>
            <input 
                type="submit"
                value="Añadir Gasto"
                className='bg-black w-full p-3 text-white uppercase font-bold cursor-pointer rounded-md transition-all mt-5'
            />
            <button
                className='bg-black w-full p-3 text-white uppercase font-bold cursor-pointer rounded-md transition-all mt-2'
                onClick={() => cancelarNuevoGasto()}
            >
                Cancelar
            </button>
        </form>
    </div>
  )
}

export default Modal