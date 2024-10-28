import React from 'react';

const Header = () => {
  return (
    <header className='bg-orange-600 text-white font-inter p-4'>
      <div className="container mx-auto flex flex-col items-center">
        <h1 className='text-4xl font-semibold mb-2'>Blog con React</h1>
        <nav className='space-x-6'>
          <a href="#home" className='hover:text-orange-400 transition duration-300'>Inicio</a>
          <a href="#users" className='hover:text-orange-400 transition duration-300'>Usuarios</a>
          <a href="#login" className='hover:text-orange-400 transition duration-300'>Inicio de sesión</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
