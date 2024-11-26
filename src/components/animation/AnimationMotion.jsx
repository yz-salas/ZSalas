import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion'; // Importar desde 'framer-motion'

//! de aarriba hacia abajo
export const AnimationTopToBottom = ({ children }) => {
	const ref = useRef(null);
	const isInView = useInView(ref);

	return (
		<motion.div
			style={{
				opacity: isInView ? 1 : 0,
				transform: isInView ? 'translateY(0)' : 'translateY(-100%)',
				transition: 'all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
			}}
			ref={ref}
		>
			{children}
		</motion.div>
	);
};

//* de derecha a izquierda
export const AnimationRightToLeft = ({ children }) => {
	const ref = useRef(null);
	const isInView = useInView(ref);

	return (
		<motion.div
			style={{
				opacity: isInView ? 1 : 0,
				transform: isInView ? 'translateX(0)' : `translateX(20%)`,
				transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
			}}
			ref={ref}
		>
			{children}
		</motion.div>
	);
};

// Exportación nombrada
export const AnimationOpacity = ({ children }) => {
	const ref = useRef(null);
	const isInView = useInView(ref);

	return (
		<motion.div
			style={{
				opacity: isInView ? 1 : 0,
				transition: 'all 3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
			}}
			ref={ref}
		>
			{children}
		</motion.div>
	);
};

//* de izquierda a derecha
export const AnimationLeftToRight = ({ children }) => {
	const ref = useRef(null);
	const isInView = useInView(ref);

	return (
		<motion.div
			style={{
				opacity: isInView ? 1 : 0,
				transform: isInView ? 'translateX(0)' : 'translateX(-20%)',
				transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
			}}
			ref={ref}
		>
			{children}
		</motion.div>
	);
};

export const AnimationBottomToTop = ({ children }) => {
	const ref = useRef(null);
	const isInView = useInView(ref);

	return (
		<motion.div
			style={{
				opacity: isInView ? 1 : 0,
				transform: isInView ? 'translateY(0)' : 'translateY(80%)',
				transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
			}}
			ref={ref}
		>
			{children}
		</motion.div>
	);
};

export const AnimationNavbar = ({ children }) => {
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
};
