import TaskForm from '../components/tasks/TaskForm';

const Edit = () => {
	return (
		<main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
			<h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">Edit Task</h1>
			<TaskForm />
		</main>
	);
};

export default Edit;
