import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs } from '../../features/job/jobSlice';
import SingleJob from './SingleJob';
const AllJobs = () => {
	const { jobs } = useSelector((state) => state.job);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllJobs());
	}, [dispatch]);
	return (
		<div className="jobs-list">
			{jobs.map((job) => (
				<SingleJob
					key={job?.id}
					job={job}
				/>
			))}
		</div>
	);
};

export default AllJobs;
