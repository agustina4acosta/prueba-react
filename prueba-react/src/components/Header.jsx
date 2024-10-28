import React from 'react'

 const Header = () => {
  return (
    <header className='bg-primary text-white font-inter p-4'>
      <div className="container mx-auto flex justify-between items-center"></div>
      <h1 className='text-2xl font-semibold'>
        Blog con react
      </h1>
      <nav className='space-x-6'>
        <a href="#home" className='hover:text-primary-light'>Inicio</a>
        <a href="#users" className='hover:text-primary-light'>Usuarios</a>
        <a href="#login" className='hover:text-primary-light'>Inicio de sesion</a>
      
      </nav>

    </header>
  )
}
export default Header