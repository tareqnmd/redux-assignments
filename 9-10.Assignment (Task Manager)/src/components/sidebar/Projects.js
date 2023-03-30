import { useGetProjectsQuery } from '../../features/projects/projectsAPi';
import Project from './Project';

const Projects = () => {
	const { data, isLoading, isError, error } = useGetProjectsQuery();
	let content = null;
	if (isLoading) {
		content = 'Loading..';
	} else if (!isLoading && isError) {
		content = error?.data ?? 'Error Found';
	} else if (!isLoading && !isError && data?.length === 0) {
		content = 'No Data Found';
	} else if (!isLoading && !isError && data?.length > 0) {
		content = data?.map((project) => (
			<Project
				key={project?.id}
				project={project}
			/>
		));
	}
	return (
		<div>
			<h3 className="text-xl font-bold">Projects</h3>
			<div className="mt-3 space-y-4">{content}</div>
		</div>
	);
};

export default Projects;
