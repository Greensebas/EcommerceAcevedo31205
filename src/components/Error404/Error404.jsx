import React from 'react'
import './error404.css'

function Error404() {
  return (
    <>
    <div className='nav-top'></div>
    <div className='container text-center'>
        <span className='emoji-size'><i class="bi bi-emoji-frown"></i></span>
        <p className='error'>Error 404</p>
        <p className='not-found'>Fiodora not found</p>
    </div>
    </>
  )
}

export default Error404