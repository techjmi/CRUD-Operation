import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <div className='container-fluid text-center'>
        <div className='image-error text-center mt-5'>
            <img src='error.png'alt='This is an Error Page' />
        </div>
        <div className='Heading-Error text-center mt-4'>
            <h1>404</h1>
        </div>
        <p>Sorry the page you visited does not exist.</p>
        <div className='button-Home text-center'>
        <button type="button" className="btn btn-primary">
        <NavLink className="nav-link active" aria-current="page" to="/">Back Home</NavLink>
        </button>
        </div>
       
    </div>
    </>
  )
}

export default Error
