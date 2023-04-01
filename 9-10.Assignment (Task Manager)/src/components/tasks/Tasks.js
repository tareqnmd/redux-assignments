import { useSelector } from 'react-redux';
import { useGetTasksQuery } from '../../features/tasks/tasksAPi';
import Task from './Task';

const filterData = (data, checked, searchData) => {
	const searchFilter = data?.filter((item) =>
		item?.taskName?.toLowerCase().includes(searchData?.toLowerCase())
	);
	const checkedFilter = searchFilter.filter((item) => checked?.includes(item?.project?.id));
	return checkedFilter ?? [];
};

const Tasks = () => {
	const { checked } = useSelector((state) => state.projects);
	const { searchData } = useSelector((state) => state.tasks);
	const { data, isLoading, isError, error } = useGetTasksQuery();
	let content = null;
	if (isLoading) {
		content = 'Loading..';
	} else if (!isLoading && isError) {
		content = error?.data ?? 'Error Found';
	} else if (!isLoading && !isError && data?.length === 0) {
		content = 'No Data Found';
	} else if (!isLoading && !isError && data?.length > 0) {
		content = filterData(data, checked, searchData)?.map((task, i) => (
			<Task
				key={task?.id ?? i}
				task={task}
			/>
		));
	}
	return <div className="lws-task-list">{content}</div>;
};

export default Tasks;
