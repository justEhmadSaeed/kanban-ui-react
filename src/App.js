import './App.css';
import React, { useState } from 'react';
import DoneColumn from './components/DoneColumn';
import InProgressColumn from './components/InProgressColumn';
import InReviewColumn from './components/InReviewColumn';
import TodoColumn from './components/TodoColumn';
import PopUp from './components/PopUp';

function App() {
	const [openPopUp, setOpenPopUp] = useState(true);

	return (
		<>
			{openPopUp ? <PopUp setOpenPopUp={setOpenPopUp} /> : <></>}

			<div className='App'>
				<TodoColumn setOpenPopUp={setOpenPopUp} />
				<InProgressColumn />
				<InReviewColumn />
				<DoneColumn />
			</div>
		</>
	);
}

export default App;
