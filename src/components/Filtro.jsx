import React from 'react'

const Filtro = ({filtro, setFiltro}) => {

  return (
    <div className='mt-5 mb-5 text-black'>
      <select
        id='categoria'
        className='border-2 w-full p-2 mt-2 rounded-lg text-center'
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      >
        <option value="">-- Todos los Gastos --</option>
        <option value="ahorro">Ahorro</option>
        <option value="comida">Comida</option>
        <option value="casa">Casa</option>
        <option value="gastos varios">Gastos varios</option>
        <option value="salud">Salud</option>
        <option value="suscripciones">Suscripciones</option>
      </select>
    </div>
  )
}

export default Filtro
