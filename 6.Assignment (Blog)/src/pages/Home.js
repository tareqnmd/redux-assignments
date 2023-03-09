import BlogList from '../components/blogs/BlogList';
import Sidebar from '../components/ui/Sidebar';

const Home = () => {
	return (
		<section className="wrapper">
			<Sidebar />
			<BlogList/>
		</section>
	);
};

export default Home;
