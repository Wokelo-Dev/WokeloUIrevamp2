import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const Root = () => {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === '/') {
			navigate('/dashboard');
		}
	}, [location]);

	return (
		<Layout>
			<Outlet />
		</Layout>
	);
};

export default Root;
