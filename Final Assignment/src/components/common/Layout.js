import { useLocation } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const Layout = ({ children }) => {
	const { pathname } = useLocation();
	const pathCheck = ['/login'].includes(pathname);
	return (
		<>
			{!pathCheck ? (
				<>
					<Navbar />
					<section className="py-6 bg-primary">
						<div className="mx-auto max-w-7xl px-5 lg:px-0">
							{children}
						</div>
					</section>
				</>
			) : (
				children
			)}
		</>
	);
};

export default Layout;
