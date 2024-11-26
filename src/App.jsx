import { useState } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import RouterConfig from './router/AppRouter';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Navbar />
			{/* aqui en este archivo estara el contenido de laweb el navbar nunca cambiara */}
			<RouterConfig />
		</>
	);
}

export default App;
