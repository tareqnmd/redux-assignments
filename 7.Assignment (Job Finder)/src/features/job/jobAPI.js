import axios from '../../utils/axios';

export const fetchJobs = async () => {
	const response = await axios.get('/jobs');
	return response.data;
};

export const addJob = async (data) => {
	const response = await axios.post('jobs', data);
	return response.data;
};

export const editJob = async (data) => {
	const { id, ...rest } = data;
	const response = await axios.patch(`/jobs/${id}`, rest);
	return response.data;
};

export const deleteJob = async (id) => {
	const response = await axios.delete(`/jobs/${id}`);
	return response.data;
};
