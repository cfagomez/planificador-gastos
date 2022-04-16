import React from 'react'
import Error from './Error'

const Modal = ({setModalOn, mensaje, setMensaje, guardarGasto, gastoAEditar, setGastoAEditar, listaGastos, setListaGastos}) => {

    const [nombreGasto, setNombreGasto] = React.useState('')
    const [cantidad, setCantidad] = React.useState('')
    const [categoria, setCategoria] = React.useState('')

    React.useEffect(() => {

        if (Object.keys(gastoAEditar).length > 0) {

            setNombreGasto(gastoAEditar.nombre)
            setCantidad(gastoAEditar.cantidad)
            setCategoria(gastoAEditar.categoria)

        }

    }, [gastoAEditar])

    const cancelarNuevoGasto = () => {

        setNombreGasto('')
        setCantidad('')
        setCategoria('')
        setModalOn(false)
        setGastoAEditar({})
        setMensaje(null)

    }

    const validarFormulario = (e) => {

        e.preventDefault()

        if ([nombreGasto, cantidad, categoria].includes('')) {

            setMensaje('Hay por lo menos un campo vacio')

            return

        }

        const editarGasto = () => {

            const listaGastosEditada = listaGastos.map( gastoItem => gastoItem.id === gastoAEditar.id ? gasto : gastoItem )

            gasto.id = gastoAEditar.id
            gasto.fecha = gastoAEditar.fecha
    
            setListaGastos(listaGastosEditada)
    
        }

        const gasto = {
            nombreGasto,
            cantidad,
            categoria
        }


        if (Object.keys(gastoAEditar).length > 0) {

            editarGasto()

        } else {

            guardarGasto(gasto)

        }

        setMensaje(null)
        setModalOn(false)
        setGastoAEditar('')

    }

  return (
    <div className='text-center md:w-2/3 mx-auto pt-10'>
        <h1 className='text-5xl mb-10 text-amber-200'>Nuevo Gasto</h1>
        <form
            className='bg-gray-900 shadow-lg rounded-lg py-10 px-5 mb-10'
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
                    className='block text-amber-200 font-bold text-2xl my-3 text-left'
                >   
                    Nombre Gasto
                </label>
                <input
                    id='nombre'
                    type="text"
                    className='border-2 w-full p-2 mt-2 rounded-lg border-indigo-700 text-center'
                    value={nombreGasto}
                    onChange={(e) => setNombreGasto(e.target.value)}
                />
            </div>
            <div>
                <label 
                    htmlFor="cantidad"
                    className='block text-amber-200 font-bold text-2xl my-3 text-left'
                >
                    Cantidad
                </label>
                <input
                    id='cantidad'
                    type="text"
                    className='border-2 w-full p-2 mt-2 rounded-lg border-indigo-700 text-center'
                    value={cantidad}
                    onChange={(e) => setCantidad(Number(e.target.value))}
                />
            </div>
            <div>
                <label 
                    htmlFor="categoria"
                    className='block text-amber-200 font-bold text-2xl my-3 text-left'
                >
                    Categoria
                </label>
                <select
                    id='categoria'
                    className='border-2 w-full p-2 mt-2 rounded-lg border-indigo-700 text-center'
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
                value={
                    (Object.keys(gastoAEditar).length > 0) ? (
                        'Editar Gasto'
                    ) : (
                        'Añadir Gasto'
                    )
                }
                className='bg-indigo-700 w-full p-3 text-amber-200 uppercase font-bold cursor-pointer rounded-md transition-all mt-5'
            />
            <button
                className='bg-indigo-700 w-full p-3 text-amber-200 uppercase font-bold cursor-pointer rounded-md transition-all mt-2'
                onClick={() => cancelarNuevoGasto()}
                type='button'
            >
                Cancelar
            </button>
        </form>
    </div>
  )
}

export default Modal