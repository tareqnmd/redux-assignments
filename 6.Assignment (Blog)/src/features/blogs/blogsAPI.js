import axiosInstance from '../../utils/axios';

const getBlogs = async (sortType, filterType) => {
	const queryFilter = `${filterType === 'saved' ? 'isSaved=true' : ''}`;
	const querySort = `${
		sortType === 'most_liked'
			? '_sort=likes&_order=desc'
			: sortType === 'newest'
			? '_sort=id&_order=desc'
			: ''
	}`;
	const query = `?${
		queryFilter.length
			? `${queryFilter}${querySort.length ? `&${querySort}` : ''}`
			: querySort.length
			? `${querySort}`
			: ''
	}`;
	const response = await axiosInstance.get(`/blogs${query}`);
	return response.data;
};
export default getBlogs;
