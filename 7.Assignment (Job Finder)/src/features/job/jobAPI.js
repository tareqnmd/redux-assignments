import axios from '../../utils/axios';

export const fetchJobs = async (type) => {
	const query = type ? `?type=${type}` : '';
	const response = await axios.get(`/jobs${query}`);
	return response.data;
};

export const addJob = async (data) => {
	const response = await axios.post('jobs', data);
	return response.data;
};

export const editJob = async (id, data) => {
	const response = await axios.patch(`/jobs/${id}`, data);
	return response.data;
};

export const deleteJob = async (id) => {
	const response = await axios.delete(`/jobs/${id}`);
	return response.data;
};
