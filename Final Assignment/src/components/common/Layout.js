import Navbar from '../navbar/Navbar';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<section className="py-6 bg-primary">
				<div className="mx-auto max-w-7xl px-5 lg:px-0">{children}</div>
			</section>
		</>
	);
};

export default Layout;
