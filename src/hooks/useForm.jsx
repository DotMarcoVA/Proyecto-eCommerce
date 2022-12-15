// Reglas para crear un Hook de React
// Custom Hook es una funcion que utiliza otros Hooks de React
// 1. Siempre se debe usar la palabra "use" al nombrar el archivo
// 2. Siempre deben de ser funciones (a partir de React v16 usamos hooks)
// 3. Siempre debe de usar al menos un Hook de react (useState, useEffect, useRef, etc)
// 4. Deben ser reutilizables, no para casos especificos

import { useState, useEffect } from 'react'

function useForm (callback, defaults) {
  // Estado unico para guardar los datos del formulario en un objeto
  const [input, setInput] = useState(defaults)

  // Cargar valores por defecto
  useEffect(() => {
    setInput({ ...defaults })
  }, [])

  // Funcion que se ejecuta cuando se escucha un cambio en el input
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setInput({ ...input, [name]: value })
  }

  // Funcion ejecutada al enviar el form
  const handleSubmit = (event) => {
    event.preventDefault()
    callback(input)
  }

  return {
    input,
    handleInputChange,
    handleSubmit
  }
}

export default useForm
