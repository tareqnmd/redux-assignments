import './App.css';
import BookingList from './components/BookingList';
import DestinationForm from './components/DestinationForm';
import Header from './components/Header';
const App = () => {
	return (
		<>
			<Header />
			<section>
				<DestinationForm />
				<BookingList />
			</section>
		</>
	);
};

export default App;
