import { useSelector } from 'react-redux';
import SingleBookedInfo from './SingleBookedInfo';

const BookingList = () => {
	const bookedData = useSelector((state) => state);
	return (
		<div class="table-container">
			<table class="booking-table">
				<thead class="bg-gray-100/50">
					<tr class="text-black text-left">
						<th>Destination From</th>
						<th>Destination To</th>
						<th class="text-center">Journey Date</th>
						<th class="text-center">Guests</th>
						<th class="text-center">Class</th>
						<th class="text-center">Delete</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-300/20" id="lws-previewBooked">
					{bookedData.map((item) => (
						<SingleBookedInfo bookedInfo={item} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default BookingList;
