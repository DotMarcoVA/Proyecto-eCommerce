<<<<<<< HEAD
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
=======
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
>>>>>>> e0839473f865f21da01a7e72907377b21dfb8b5a
  useEffect(() => {
    setInput({ ...defaults })
  }, [])

  // Funcion que se ejecuta cuando se escucha un cambio en el input
  const handleInputChange = (event) => {
    const { name, value } = event.target
    console.log(name, value)
    setInput({ ...input, [name]: value })
  }

<<<<<<< HEAD
  // Funcion que se ejecuta al enviar el form
=======
  // Funcion ejecutada al enviar el form
>>>>>>> e0839473f865f21da01a7e72907377b21dfb8b5a
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
