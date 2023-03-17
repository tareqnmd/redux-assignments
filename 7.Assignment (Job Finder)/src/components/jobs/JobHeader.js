import { useDispatch } from 'react-redux';
import { searchBySort, searchByText } from '../../features/job/jobSlice';

const JobHeader = () => {
	const dispatch = useDispatch();
	return (
		<div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
			<h1 className="lws-section-title">All Available Jobs</h1>
			<div className="flex gap-4">
				<div className="search-field group flex-1">
					<i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
					<input
						type="text"
						placeholder="Search Job"
						className="search-input"
						id="lws-searchJob"
						onChange={(e) => {
							dispatch(searchByText(e.target.value));
						}}
					/>
				</div>
				<select
					id="lws-sort"
					name="sort"
					autoComplete="sort"
					className="flex-1"
					onChange={(e) => {
						dispatch(searchBySort(e.target.value));
					}}
				>
					<option value="">Default</option>
					<option value="low">Salary (Low to High)</option>
					<option value="high">Salary (High to Low)</option>
				</select>
			</div>
		</div>
	);
};

export default JobHeader;
