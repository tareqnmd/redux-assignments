import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs } from '../../features/job/jobSlice';
import SingleJob from './SingleJob';

const filterJobs = (jobs, search, sort) => {
	const searchedData = jobs.filter((item) => item.title.includes(search));
	if (sort) {
		searchedData.sort((a, b) => {
			if (sort === 'high') {
				return b.salary - a.salary;
			} else {
				return a.salary - b.salary;
			}
		});
	}
	return searchedData ?? [];
};

const AllJobs = () => {
	const { jobs, sort, searchText } = useSelector((state) => state.job);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllJobs());
	}, [dispatch]);

	return (
		<div className="jobs-list">
			{filterJobs(jobs, searchText, sort).map((job) => (
				<SingleJob
					key={job?.id}
					job={job}
				/>
			))}
		</div>
	);
};

export default AllJobs;
