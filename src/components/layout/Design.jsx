import React from 'react';

const Design = () => {
	return (
		<>
			<section className="hero bg-blue-900 text-white text-center py-20">
				<div className="container mx-auto px-5">
					<h2 className="text-4xl md:text-5xl font-extrabold">Hola, soy [Tu Nombre]</h2>
					<p className="mt-4 text-lg md:text-xl">Soy un desarrollador frontend especializado en React y Tailwind CSS</p>
					<a
						href="#contact"
						className="mt-6 inline-block px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition duration-200"
					>
						Contáctame
					</a>
				</div>
			</section>

			<section id="service" className="py-20 bg-gray-100">
				<div className="container mx-auto px-5">
					<h3 className="text-3xl font-bold text-center text-gray-800">Mis Habilidades</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
						<div className="text-center bg-white shadow-lg rounded-lg p-6">
							<h4 className="text-xl font-semibold text-gray-800">React</h4>
							<p className="mt-4 text-gray-600">Desarrollo de interfaces interactivas con React. Manejo de estados, componentes y hooks.</p>
						</div>

						<div className="text-center bg-white shadow-lg rounded-lg p-6">
							<h4 className="text-xl font-semibold text-gray-800">Tailwind CSS</h4>
							<p className="mt-4 text-gray-600">Uso de Tailwind CSS para crear interfaces limpias, adaptables y modernas rápidamente.</p>
						</div>

						<div className="text-center bg-white shadow-lg rounded-lg p-6">
							<h4 className="text-xl font-semibold text-gray-800">HTML & CSS</h4>
							<p className="mt-4 text-gray-600">Maquetación web semántica y accesible con HTML5 y diseño responsivo con CSS3.</p>
						</div>
					</div>
				</div>
			</section>

			<section id="projects" className="py-20 bg-white">
				<div className="container mx-auto px-5">
					<h3 className="text-3xl font-bold text-center text-gray-800">Proyectos Destacados</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
						<div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
							<img src="https://via.placeholder.com/400x250" alt="About illustration" classNameName="w-full max-w-sm rounded-lg" />
							<div className="p-6">
								<h4 className="text-xl font-semibold text-gray-800">Proyecto React 1</h4>
								<p className="mt-4 text-gray-600">Aplicación interactiva creada con React que gestiona un conjunto de datos en tiempo real.</p>
							</div>
						</div>

						<div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
							<img src="https://via.placeholder.com/400x250" alt="About illustration" classNameName="w-full max-w-sm rounded-lg" />
							<div className="p-6">
								<h4 className="text-xl font-semibold text-gray-800">Proyecto React 2</h4>
								<p className="mt-4 text-gray-600">Página web que utiliza React junto con una API externa para mostrar datos dinámicos.</p>
							</div>
						</div>

						<div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
							<img src="https://via.placeholder.com/400x250" alt="About illustration" classNameName="w-full max-w-sm rounded-lg" />
							<div className="p-6">
								<h4 className="text-xl font-semibold text-gray-800">Landing Page con Tailwind</h4>
								<p className="mt-4 text-gray-600">Landing page moderna y optimizada para dispositivos móviles, diseñada con Tailwind CSS.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="contact" className="py-20 bg-blue-900 text-white">
				<div className="container mx-auto px-5">
					<h3 className="text-3xl font-bold text-center">Contáctame</h3>
					<p className="mt-4 text-lg text-center">
						Si estás interesado en trabajar conmigo o tienes alguna pregunta, no dudes en enviarme un mensaje.
					</p>
					<div className="flex justify-center mt-10">
						<a
							href="mailto:contacto@tudominio.com"
							className="inline-block px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition duration-200"
						>
							Enviar Correo
						</a>
					</div>
				</div>
			</section>

			<footer className="bg-gray-900 text-white py-6 text-center">
				<p>&copy; 2024 [Tu Nombre]. Todos los derechos reservados.</p>
			</footer>
		</>
	);
};

export default Design;
