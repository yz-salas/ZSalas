import Home from '../components/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import ContactMe from '../components/layout/ContactMe';

{
	/* aqui estan las rutas que se han definido dentro de la web rutas que los usuarios siempre tomaran */
}
const AppRouter = () => {
	return (
		//* aqui estn las rutas predeterminadas para los usuaios(aqui se esta usand react router dom)
		<Routes basename="/Zadiel-Salas">
			<Route path="/" element={<Home />} />
			<Route path="/Zadiel-Salas/ContactMe" element={<ContactMe />} />
			<Route path="/*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default AppRouter;
