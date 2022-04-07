import React from 'react'
import Header from "./components/Header"

function App() {

  const [presupuesto, setPresupuesto] = React.useState(Number(0))
  const [presupuestoValido, setPresupuestoValido] = React.useState(false)

  return (
    <div className='container mx-auto mt-20'>
      <Header 
        setPresupuesto={setPresupuesto}
        presupuesto={presupuesto}
        presupuestoValido={presupuestoValido}
        setPresupuestoValido={setPresupuestoValido}
      />
    </div>
  )
}

export default App
