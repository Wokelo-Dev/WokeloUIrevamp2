import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/layout/AuthLayout';

// Placeholder for the dashboard pages.
const DashboardPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const currentPath = location.pathname.split('/').pop();

	useEffect(() => {
		if (currentPath === 'dashboard') {
			navigate('/dashboard/workflows');
		}
	}, [location, currentPath]);

	return (
		<AuthLayout>
			<Outlet />
		</AuthLayout>
	);
};

export default DashboardPage;
