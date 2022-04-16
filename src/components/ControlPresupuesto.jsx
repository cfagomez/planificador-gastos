import React from 'react'

const ControlPresupuesto = ({presupuesto, listaGastos, setPresupuesto, setListaGastos, setPresupuestoValido}) => {

    const [disponible, setDisponible] = React.useState(presupuesto)
    const [gastado, setGastado] = React.useState('')
    const [porcentajeGastado, setPorcentajeGastado] = React.useState(0)

    React.useEffect(() => {

        const totalGastado = listaGastos.reduce((total, gasto) => 

            gasto.cantidad + total, 0

        )

        const nuevoPorcentaje = ((totalGastado / presupuesto) * 100).toFixed(2)

        setGastado(totalGastado)
        setPorcentajeGastado(nuevoPorcentaje)

    }, [listaGastos])

    React.useEffect(() => {

        setDisponible(presupuesto - gastado)

    }, [gastado])

    const resetApp = () => {

        if (window.confirm("¿Quieres resetear la App?")) {

            setPresupuesto(0)
            setListaGastos([])
            setPresupuestoValido(false)

        }
        
    }

  return (
    <div className='flex pt-10 shadow-lg rounded-lg bg-gray-900 mt-10 justify-around px-5 py-10'>
        <div className='text-center my-auto border-4 border-indigo-700 rounded-lg p-20'>
            <p className='text-5xl text-amber-200 font-bold'>{porcentajeGastado}%</p>
        </div>
        <div className='text-left text-xl text-amber-200'>
            <button 
                className='bg-red-700 w-full p-3 text-white uppercase font-bold cursor-pointer rounded-md transition-all mt-2 mb-5'
                onClick={() => resetApp()}
            >Resetear App</button>
            <p className='py-3'>
                <span>Presupuesto: ${presupuesto}</span>
            </p>
            <p className='py-3'>
                <span>Disponible: ${disponible}</span>
            </p>
            <p className='py-3'>
                <span>Gastado: ${gastado}</span>
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto