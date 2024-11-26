import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { AnimationLeftToRight, AnimationRightToLeft, AnimationOpacity } from '../animation/AnimationMotion';
import Btn1 from '../ui/Btn1';

const Form = () => {
	const form = useRef();
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('service_wdmnhlc', 'template_g4rvmdi', form.current, {
				publicKey: 'qvI9lU-LK9NkpLeXG',
			})
			.then(
				() => {
					console.log('SUCCESS!');
				},
				(error) => {
					console.log('FAILED...', error.text);
				}
			);
	};

	return (
		<div className="relative">
			{/* Imagen de fondo */}
			<img
				src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
				className="absolute inset-0 object-cover w-full h-full"
				alt="Background"
			/>
			{/* Capa superpuesta para filtro morado */}
			<div className="absolute inset-0 bg-purple-700 opacity-50"></div>
			{/* Contenido del formulario */}
			<div className="relative bg-opacity-75 bg-deep-purple-accent-700">
				<svg className="absolute inset-x-0 bottom-0 text-white" viewBox="0 0 1160 163">
					<path
						fill="currentColor"
						d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
					></path>
				</svg>
				<div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
					<div className="flex flex-col items-center justify-between xl:flex-row">
						<div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
							<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-red-500 sm:text-4xl sm:leading-none">
								Send me a message
								<br className="hidden md:block" />
								and let's start the preparations for something big
							</h2>

							{/* btn */}
							<Btn1 title="Go to Home" red="/Zadiel-Salas/" color="text-black bg-green-500 hover:bg-green-800 hover:text-white" />
							{/* btn */}
						</div>
						<div className="w-full max-w-xl xl:px-8 xl:w-5/12">
							<div className="bg-white rounded shadow-2xl p-7 sm:p-10">
								<form ref={form} onSubmit={sendEmail} className="w-full max-w-lg mx-auto p-8 rounded-lg shadow-lg bg-slate-900">
									<AnimationOpacity>
										<div className="w-full text-start">
											<h2 className="text-purple-500 text-2xl font-bold mb-6">Send me a message</h2>
										</div>
									</AnimationOpacity>
									<AnimationLeftToRight>
										{/* Nombre */}
										<div className="mb-4">
											<label htmlFor="firstName" className="block text-red-500 text-sm font-semibold mb-2">
												First Name
											</label>
											<input
												id="firstName"
												type="text"
												name="firstName"
												value={formData.firstName}
												onChange={handleChange}
												placeholder="Jane"
												className="w-full px-4 py-2 rounded bg-slate-950 text-red-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
											/>
										</div>
									</AnimationLeftToRight>
									<AnimationRightToLeft>
										{/* Apellido */}
										<div className="mb-4">
											<label htmlFor="lastName" className="block text-yellow-500 text-sm font-semibold mb-2">
												Last Name
											</label>
											<input
												id="lastName"
												type="text"
												name="lastName"
												value={formData.lastName}
												onChange={handleChange}
												placeholder="Doe"
												className="w-full px-4 py-2 rounded bg-slate-950 text-yellow-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
											/>
										</div>
									</AnimationRightToLeft>
									<AnimationLeftToRight>
										{/* Email */}
										<div className="mb-4">
											<label htmlFor="email" className="block text-blue-500 text-sm font-semibold mb-2">
												Email
											</label>
											<input
												id="email"
												type="email"
												name="email"
												value={formData.email}
												onChange={handleChange}
												placeholder="jane.doe@example.com"
												className="w-full px-4 py-2 rounded bg-slate-950 text-blue-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
											/>
										</div>
									</AnimationLeftToRight>
									<AnimationRightToLeft>
										{/* Mensaje */}
										<div className="mb-4">
											<label htmlFor="message" className="block text-green-500 text-sm font-semibold mb-2">
												Message
											</label>
											<textarea
												id="message"
												name="message"
												value={formData.message}
												onChange={handleChange}
												placeholder="Your message..."
												className="w-full px-4 py-2 rounded bg-slate-950 text-green-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
												rows="4"
											/>
										</div>
									</AnimationRightToLeft>
									{/* Botón de envío */}
									<div className="flex p-5 gap-5 justify-center">
										<button
											type="submit"
											className="px-6 py-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
										>
											Submit
										</button>
										<button
											type="button"
											className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
											onClick={() => setFormData({ firstName: '', lastName: '', email: '', message: '' })}
										>
											Reset
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Form;
