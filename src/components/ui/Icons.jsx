import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaRoute } from 'react-icons/fa';
import { SiTailwindcss, SiFramer } from 'react-icons/si';

const technologies = [
	{
		name: 'HTML',
		icon: <FaHtml5 />,
		className: 'text-[40px] md:text-[60px] text-red-500 mb-4',
		url: 'https://developer.mozilla.org/es/docs/Web/HTML',
	},
	{
		name: 'CSS',
		icon: <FaCss3Alt />,
		className: 'text-[40px] md:text-[60px] text-blue-500 mb-4',
		url: 'https://developer.mozilla.org/es/docs/Web/CSS',
	},
	{
		name: 'JavaScript',
		icon: <FaJs />,
		className: 'text-[40px] md:text-[60px] text-yellow-500 mb-4',
		url: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
	},
	{ name: 'Tailwind CSS', icon: <SiTailwindcss />, className: 'text-[40px] md:text-[60px] text-blue-400 mb-4', url: 'https://tailwindcss.com/' },
	{
		name: 'PHP',
		icon: <FaPhp />,
		className: 'text-[40px] md:text-[60px] text-purple-500 mb-4',
		url: 'https://www.php.net/manual/es/intro-whatis.php',
	},
	{ name: 'React.js', icon: <FaReact />, className: 'text-[40px] md:text-[60px] text-blue-700 mb-4', url: 'https://es.react.dev/' },
	{ name: 'Router', icon: <FaRoute />, className: 'text-[40px] md:text-[60px] text-blue-700 mb-4', url: 'https://reactrouter.com/' },
];

const Icons = () => {
	return (
		<>
			<div className="max-w-[90%] md:max-w-[70%] mx-auto">
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
					{technologies.map((tech) => (
						<a key={tech.name} href={tech.url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-500">
							<div className="flex flex-col items-center p-4">
								<span className={tech.className}>{tech.icon}</span>
								<h3 className="text-sm md:text-base font-semibold mt-2">{tech.name}</h3>
								{/* Descripción opcional */}
								{tech.description && <p className="text-center text-gray-300 text-xs md:text-sm mt-1">{tech.description}</p>}
							</div>
						</a>
					))}
				</div>
			</div>
		</>
	);
};

export default Icons;
