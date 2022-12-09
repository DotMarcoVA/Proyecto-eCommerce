// Reglas para crear un hook de react
// Custom Hook es una funcion que utiliza otros hooks de React
// 1. Siempre deben utilizar la palabra 'use' al nombrar el archivo
// 2. Siempre deben de ser funciones a partir de react v16
// 3. Siempre deben de usar al menos un hook de React (useState, useEffect, useRef, etc)
// 4. Deben ser reutilizables, no para casos muy especificos

import { useState, useEffect } from 'react'

// eslint-disable-next-line space-before-blocks
function useForm (callback, defaults){
  // Estado unico para guardar los datos del formulario en un objeto
  const [input, setInput] = useState(defaults)

  // Cargar los valores por defecto
  useEffect(() => {
    setInput({ ...defaults })
  }, [])

  // Funcion que se ejecuta cuando se escucha un cambio en el input
  const handleInputChange = (event) => {
    const { name, value } = event.target
    console.log(name, value)
    setInput({ ...input, [name]: value })
  }

  // Funcion que se ejecuta al enviar el form
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
