import React from 'react'

const Error = ({mensaje}) => {
  return (
    <div className='bg-red-700 uppercase text-amber-200 rounded-lg text-center py-3 px-1 mb-3'>
        {mensaje}
    </div>
  )
}

export default Error