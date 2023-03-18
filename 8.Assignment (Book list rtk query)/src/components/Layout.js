import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<main className="py-12 px-6 2xl:px-6 container">{children}</main>
		</>
	);
};

export default Layout;
