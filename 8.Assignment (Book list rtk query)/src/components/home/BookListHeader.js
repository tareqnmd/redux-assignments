import { useDispatch, useSelector } from 'react-redux';
import { featuredType } from '../../features/filter/filterSlice';

const BookListHeader = () => {
	const { featured } = useSelector((state) => state.filter);
	const dispatch = useDispatch();
	return (
		<div className="flex items-center justify-between mb-12">
			<h4 className="mt-2 text-xl font-bold">Book List</h4>

			<div className="flex items-center space-x-4">
				<button
					className={`lws-filter-btn ${
						featured === 'all' ? 'active-filter' : ''
					}`}
					onClick={() => dispatch(featuredType('all'))}
				>
					All
				</button>
				<button
					className={`lws-filter-btn ${
						featured === 'featured' ? 'active-filter' : ''
					}`}
					onClick={() => dispatch(featuredType('featured'))}
				>
					Featured
				</button>
			</div>
		</div>
	);
};

export default BookListHeader;
