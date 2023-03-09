import { useDispatch, useSelector } from 'react-redux';
import { filterType } from '../../features/filter/filterSlice';
const Filter = () => {
	const dispatch = useDispatch();
	const filter = useSelector((state) => state.filter);
	const filterTypeHandler = (type) => {
		dispatch(filterType(type));
	};
	return (
		<div className="sidebar-content">
			<h4>Filter</h4>
			<div className="radio-group">
				<div>
					<input
						type="radio"
						name="filter"
						id="lws-all"
						checked={filter?.filterType === 'all'}
						onChange={() => filterTypeHandler('all')}
						className="radio"
					/>
					<label htmlFor="lws-all">All</label>
				</div>
				<div>
					<input
						type="radio"
						name="filter"
						id="lws-saved"
						checked={filter?.filterType === 'saved'}
						className="radio"
						onChange={() => filterTypeHandler('saved')}
					/>
					<label htmlFor="lws-saved">Saved</label>
				</div>
			</div>
		</div>
	);
};

export default Filter;
