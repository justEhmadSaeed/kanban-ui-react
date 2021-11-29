import './App.css';
import DoneColumn from './components/DoneColumn';
import InProgressColumn from './components/InProgressColumn';
import InReviewColumn from './components/InReviewColumn';
import TodoColumn from './components/TodoColumn';

function App() {
	return (
		<div className='App'>
			<TodoColumn />
			<InProgressColumn />
			<InReviewColumn />
			<DoneColumn />
		</div>
	);
}

export default App;
