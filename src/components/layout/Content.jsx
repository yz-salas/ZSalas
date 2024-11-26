import React from 'react';
import Btn1 from '../ui/Btn1';
import Card1 from '../ui/Card1';
import myfoto from '../../assets/foto.png';
import img from '../../assets/eng5g16g.bmp';
import Icons from '../ui/Icons';
import { AnimationOpacity, AnimationLeftToRight, AnimationRightToLeft, AnimationTopToBottom } from '../animation/AnimationMotion';

const Content = () => {
	return (
		<main>
			<section id="about" className="bg-black min-h-screen flex justify-center items-center text-black py-16 px-6 md:px-12">
				<div className="max-w-5xl mx-auto p-6 md:p-16 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					<AnimationLeftToRight time="1s">
						<div className="flex justify-center">
							<img src={myfoto} alt="About illustration" className="w-full max-w-sm rounded-lg" />
						</div>
					</AnimationLeftToRight>

					<div>
						<AnimationRightToLeft time="3s">
							<h2 className="text-4xl font-semibold mb-4 text-cyan-500">About Us</h2>
							<p className="text-xl font-light mb-4 text-yellow-500">
								Crafting exceptional web experiences with a focus on minimalism and functionality.
							</p>
							<p className="leading-relaxed mb-6 text-red-500">
								My vision is to provide companies with modern web solutions that visually please users. We believe in combining clean design and solid
								functionality to create seamless experiences. I am passionate about turning ideas into reality, one line of code at a time.
							</p>

							{/*boton primario a blanco y negro*/}
							<Btn1 red={'#whatdoing'} color="bg-green-500 text-black" title={'what are you doing?'} />
						</AnimationRightToLeft>
					</div>
				</div>
			</section>

			<section id="whatdoing" className="bg-black min-h-screen flex justify-center items-center text-white px-5 py-28 md:px-12">
				<div className="max-w-5xl mx-auto">
					<AnimationTopToBottom duration="1s">
						<h2 className="text-4xl font-semibold pl-5 text-cyan-500">Service</h2>
						<span className="text-cyan-500 text-[50px] pl-5 flex items-center mb-5"> ____ </span>
					</AnimationTopToBottom>

					<div className="flex flex-wrap lg:flex-nowrap gap-12">
						{/* Card 1: Diseño Web */}

						<AnimationOpacity>
							<Card1
								title={'Design'}
								titleStyle={'text-2xl font-semibold mb-4 text-red-500'}
								text1={'I create visually striking, easy-to-use designs to attract and retain potential customers.'}
								text2={'I combine creativity and functionality to create beautiful websites that offer seamless user experiences.'}
							/>
						</AnimationOpacity>

						<AnimationOpacity>
							{/* Card 2: Desarrollo Web */}
							<Card1
								title={'Frontend developer'}
								titleStyle={'text-2xl font-semibold mb-4 text-yellow-500 '}
								text1={'Creation of customized and scalable user interfaces for companies and businesses with modern and sophisticated styles.'}
								text2={
									'From the frontend, we make sure that your ideas are visible to other people or collaborators and are quick to capture, safe and efficient.'
								}
							/>
						</AnimationOpacity>

						<AnimationOpacity>
							{/* Card 3: Asesoramiento */}
							<Card1
								title={'Consulting'}
								titleStyle={'text-2xl font-semibold mb-4 text-blue-500'}
								text1={'I provide expert advice to help you optimize your user interfaces.'}
								text2={
									'Personalized consulting services to guide you in making the best decisions for the presentation of your company or business on the web.'
								}
							/>
						</AnimationOpacity>
					</div>
				</div>
			</section>

			<section
				id="technologies"
				className="bg-black text-center min-h-screen flex flex-col md:flex-col lg:flex-row justify-center items-center px-5 py-28 text-white w-[100%]"
			>
				<AnimationLeftToRight>
					<div className='text-center md:text-center lg:text-start'>
						<h2 className="text-2xl md:text-4xl font-semibold mb-4 text-cyan-500">Technologies that I use</h2>
						<p className="text-gray-400 max-w-2xl mb-8">
							I have solid knowledge in various web development technologies, which allow us to create efficient and modern solutions. From using
							design languages ​​like HTML and CSS to implementing advanced frameworks like React.js and Tailwind CSS, I'm ready to take on any
							development challenge.
						</p>
					</div>
				</AnimationLeftToRight>

				<AnimationOpacity>
					<Icons />
				</AnimationOpacity>
			</section>
			<section className="relative flex flex-col-reverse py-16 lg:flex-col">
				<AnimationLeftToRight>
					<div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
						<div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
							<h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-start">
								<span className="text-cyan-500">Contact me</span>
								<br className="hidden md:block" />
								<span className="text-cyan-500">to make your idea come true</span>
							</h2>
							<p className="mb-5 text-base text-gray-700 md:text-lg">You will see how I can make your idea come true, let's create something great</p>
							<div className="mb-10 md:mb-16 lg:mb-20">
								<Btn1 red="/ContactMe" color="bg-blue-500 text-black hover:text-black hover:bg-blue-800" title="Contact Me" />
							</div>
						</div>
					</div>
				</AnimationLeftToRight>

				<div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
					<AnimationRightToLeft>
						<img className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h{-96 lg:h-full" src={img} alt="" />
					</AnimationRightToLeft>
				</div>
			</section>
		</main>
	);
};

export default Content;
