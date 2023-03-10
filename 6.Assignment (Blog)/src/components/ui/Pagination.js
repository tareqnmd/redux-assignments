import { useSelector } from 'react-redux';

const Pagination = () => {
	const { page } = useSelector((state) => state.blogs);
	return (
		<section className="flex gap-2 items-center justify-end">
			<div className="bg-blue-600 text-white px-4 py-1 rounded-full">Prev</div>
			<div className="bg-blue-600 text-white px-4 py-1 rounded-full">next</div>
		</section>
	);
};

export default Pagination;
