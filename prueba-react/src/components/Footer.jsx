import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-orange-600 text-white font-inter py-4 fixed bottom-0 left-0 w-full'>
      <div className="container mx-auto flex justify-between items-center">
        <p className='text-sm'>&copy; 2024 Blog con React. Todos los derechos reservados.</p>
        <nav className='space-x-6'>
          <a href="#login" className='hover:text-orange-400 transition duration-300'>Inicio de sesion</a>
          
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
