import Filter from './Filter';
import Sort from './Sort';

const Sidebar = () => {
	return (
		<aside>
			<div className="sidebar-items">
				<Sort />
				<Filter />
			</div>
		</aside>
	);
};

export default Sidebar;
