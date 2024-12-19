// Importa el hook useState de Preact
import { useState } from "preact/hooks";

// Define el componente funcional HamburgerMenu
const HamburgerMenu = () => {
  // Declara una variable de estado isOpen y una función setIsOpen para actualizarla
  const [isOpen, setIsOpen] = useState(false);

  // Define una función para alternar el estado del menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Contenedor principal del menú hamburguesa, oculto en pantallas medianas y más grandes
    <div className="relative md:hidden">
      {/* Botón del menú hamburguesa */}
      <button
        onClick={toggleMenu} // Llama a toggleMenu al hacer clic
        type="button" // Tipo explícito añadido aquí
        className="flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-md focus:outline-none"
        aria-label="Toggle menu" // Etiqueta accesible para el botón
      >
        {/* Línea superior del icono del menú */}
        <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
        />
        {/* Línea del medio del icono del menú */}
        <span
          className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
        />
        {/* Línea inferior del icono del menú */}
        <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
        />
      </button>
      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <ul className="flex flex-col p-2">
            <li className="p-2 hover:bg-gray-200">
              <a href="/">Inicio</a>
            </li>
            <li className="p-2 hover:bg-gray-200">
              <a href="/id">ID/About</a>
            </li>
            <li className="p-2 hover:bg-gray-200">
              <a href="#services">Servicios</a>
            </li>
            <li className="p-2 hover:bg-gray-200">
              <a href="/promotions">Promotios</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

// Exporta el componente HamburgerMenu como el valor predeterminado del módulo
export default HamburgerMenu;
