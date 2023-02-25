import { useDispatch, useSelector } from 'react-redux';
import { filterType } from '../../redux/filters/actions';
import Book from './Book';

const Books = () => {
	const dispatch = useDispatch();
	const { type } = useSelector((state) => state.filter);
	const filterChange = (type) => {
		dispatch(filterType(type));
	};
	return (
		<div className="order-2 xl:-order-1">
			<div className="flex items-center justify-between mb-12">
				<h4 className="mt-2 text-xl font-bold">Book List</h4>

				<div className="flex items-center space-x-4">
					<button
						className={`filter-btn ${type === 'All' && 'active-filter'}`}
						id="lws-filterAll"
						onClick={() => {
							filterChange('All');
						}}
					>
						All
					</button>
					<button
						className={`filter-btn ${type === 'Featured' && 'active-filter'}`}
						id="lws-filterFeatured"
						onClick={() => {
							filterChange('Featured');
						}}
					>
						Featured
					</button>
				</div>
			</div>
			<div className="lws-bookContainer">
				<Book />
			</div>
		</div>
	);
};

export default Books;
