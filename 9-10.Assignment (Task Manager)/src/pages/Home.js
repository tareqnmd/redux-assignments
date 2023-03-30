import Sidebar from '../components/sidebar/Sidebar';
import AddTaskButton from '../components/tasks/AddTaskButton';
import Tasks from '../components/tasks/Tasks';

const Home = () => {
	return (
		<>
			<Sidebar />
			<div className="lg:pl-[16rem] 2xl:pl-[23rem]">
				<main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
					<AddTaskButton />
					<Tasks />
				</main>
			</div>
		</>
	);
};

export default Home;
