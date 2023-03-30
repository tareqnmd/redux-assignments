import { useGetTeamsQuery } from '../../features/team/teamAPi';
import Team from './Team';

const Teams = () => {
	const { data, isLoading, isError, error } = useGetTeamsQuery();
	let content = null;
	if (isLoading) {
		content = 'Loading..';
	} else if (!isLoading && isError) {
		content = error?.data ?? 'Error Found';
	} else if (!isLoading && !isError && data?.length === 0) {
		content = 'No Data Found';
	} else if (!isLoading && !isError && data?.length > 0) {
		content = data?.map((team) => (
			<Team
				key={team?.id}
				team={team}
			/>
		));
	}
	return (
		<div className="mt-8">
			<h3 className="text-xl font-bold">Team Members</h3>
			<div className="mt-3 space-y-4">{content}</div>
		</div>
	);
};

export default Teams;
