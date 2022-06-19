import React from 'react'
import { useContext } from 'react'
import { CardContext } from '../../App'

function Footer() {
  const {nombre, apellido} = useContext(CardContext)
  return (
    <div>{nombre} {apellido}</div>
  )
}

export default Footer