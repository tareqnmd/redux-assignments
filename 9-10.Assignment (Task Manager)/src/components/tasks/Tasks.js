import { useGetTasksQuery } from '../../features/tasks/tasksAPi';
import Task from './Task';

const Tasks = () => {
	const { data, isLoading, isError, error } = useGetTasksQuery();
	let content = null;
	if (isLoading) {
		content = 'Loading..';
	} else if (!isLoading && isError) {
		content = error?.data ?? 'Error Found';
	} else if (!isLoading && !isError && data?.length === 0) {
		content = 'No Data Found';
	} else if (!isLoading && !isError && data?.length > 0) {
		content = data?.map((task) => (
			<Task
				key={task?.id}
				task={task}
			/>
		));
	}
	return <div className="lws-task-list">{content}</div>;
};

export default Tasks;
