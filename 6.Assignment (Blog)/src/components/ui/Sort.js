import { useDispatch, useSelector } from 'react-redux';
import { sortType } from '../../features/filter/filterSlice';
const Sort = () => {
	const dispatch = useDispatch();
	const filter = useSelector((state) => state.filter);
	const sortTypeHandler = (e) => {
		const { value } = e.target;
		dispatch(sortType(value));
	};
	return (
		<div className="sidebar-content">
			<h4>Sort</h4>
			<select
				name="sort"
				id="lws-sort"
				className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
				onChange={sortTypeHandler}
				value={filter.sortType}
			>
				<option value="">Default</option>
				<option value="newest">Newest</option>
				<option value="most_liked">Most Liked</option>
			</select>
		</div>
	);
};

export default Sort;
