import axios from '../../utils/axios';
export const fetchJobs = async () => {
	const response = await axios.get('/jobs');
	return response.data;
};
