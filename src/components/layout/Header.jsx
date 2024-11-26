import React from 'react';
import bgimg from '../../assets/fondoheader.jpg'; // Imagen de fondo
import Btn1, { BtnA } from '../ui/Btn1';
import { AnimationLeftToRight, AnimationRightToLeft, AnimationBottomToTop } from '../animation/AnimationMotion';
import myimg from '../../assets/fondoheader.jpg';

const Header = () => {
	const backgroundImage = bgimg; // URL de la imagen de fondo

	return (
		<header className="relative min-h-screen flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 overflow-hidden">
			<div className="relative inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
				<AnimationRightToLeft>
					<img className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full" src={myimg} alt="" />
				</AnimationRightToLeft>
			</div>

			<div className="flex flex-col items-start h-screen md:h-[100%] w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
				<AnimationLeftToRight>
					<div className="mb-16 lg:my-40 h-full flex justify-center flex-col lg:max-w-lg lg:pr-5">
						<h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-snug md:leading-relaxed lg:leading-tight">
							<span className="text-green-500 block">Zadiel Salas</span>
							<span className="text-red-500 block">everything you</span>
							<span className="text-red-500 block">imagine can be reality</span>
						</h2>
						<p className="pr-5 mb-5 text-base text-white md:text-lg sm:leading-relaxed md:leading-loose">
							Web developer frontend, design, I am willing to make your dream come true
						</p>
						<div className="h-20 w-full flex-wrap flex gap-6 mt-5">
							<BtnA color="bg-yellow-500 text-black" red="#whatdoing" title="What are your services?" />
							<BtnA color="bg-green-500 text-black" red="#about" title="Who are you?" />
							<BtnA color="bg-purple-500 text-black" red="/Zadiel-Salas/ContactMe" title="Contact Me" />
							<BtnA color="bg-red-500 text-black" red="#technologies" title="What technologies do you use?" />
						</div>
					</div>
				</AnimationLeftToRight>
			</div>
		</header>
	);
};

export default Header;
