import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
	// Estado para controlar la visibilidad del menú en dispositivos móviles
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Función para alternar la visibilidad del menú
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	// Variantes de animación para el menú
	const menuVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
		exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
	};

	return (
		<nav className="bg-black fixed z-50 text-white p-4 w-full">
			<div className="container mx-auto flex items-center justify-between lg:justify-start lg:gap-5">
				{/* Logo */}
				<a href="/" className="text-lg md:text-[25px] font-bold text-cyan-500 lg:text-[25px] flex-shrink-0">
					Zadiel Salas
				</a>

				{/* Botón para abrir/cerrar menú en dispositivos móviles */}
				<button className="lg:hidden text-white focus:outline-none flex-shrink-0" onClick={toggleMenu} aria-label="Toggle Menu">
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>

				{/* Links del navbar (versión de escritorio) */}
				<div className="hidden lg:flex space-x-8">
					<Link to="/" className="hover:text-green-800 text-green-500">
						Home
					</Link>
					<Link to="/ContactMe" className="text-red-500 hover:text-red-800">
						Contact Me
					</Link>
				</div>
			</div>

			{/* Menú desplegable (versión móvil) */}
			{isMenuOpen && (
				<motion.div
					className="lg:hidden bg-slate-950 text-white w-full mt-2 rounded-md shadow-md"
					initial="hidden"
					animate="visible"
					exit="exit"
					variants={menuVariants}
				>
					<div className="container mx-auto py-4 flex flex-col space-y-2">
						<Link to="/" className="block py-2 px-4 hover:bg-gray-700 rounded">
							Home
						</Link>
						<Link to="/ContactMe" className="block py-2 px-4 hover:bg-gray-700 rounded">
							Contact Me
						</Link>
					</div>
				</motion.div>
			)}
		</nav>
	);
};

export default Navbar;
