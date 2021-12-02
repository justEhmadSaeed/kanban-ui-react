import './App.css';
import React, { useState } from 'react';
import DoneColumn from './components/DoneColumn';
import InProgressColumn from './components/InProgressColumn';
import InReviewColumn from './components/InReviewColumn';
import TodoColumn from './components/TodoColumn';
import PopUp from './components/PopUp';

function App() {
	const [openPopUp, setOpenPopUp] = useState(false);
	const [taskList, setTaskList] = useState({
		todo: [],
		inProgress: [],
		inReview: [],
		done: [],
	});

	console.log(taskList);

	const addTodoTask = (todo) => {
		// Duplicate Task Validation
		const todoIndex = taskList.todo.findIndex(
			(item) => item.taskNumber === todo.taskNumber
		);
		const inProgressIndex = taskList.inProgress.findIndex(
			(item) => item.taskNumber === todo.taskNumber
		);
		const inReviewIndex = taskList.inReview.findIndex(
			(item) => item.taskNumber === todo.taskNumber
		);
		const doneIndex = taskList.done.findIndex(
			(item) => item.taskNumber === todo.taskNumber
		);
		if (todoIndex !== -1) {
			alert('Task Number already exists in Todo Tasks.');
		} else if (inProgressIndex !== -1) {
			alert('Task Number already exists in In-Progress Tasks.');
		} else if (inReviewIndex !== -1) {
			alert('Task Number already exists in In-Review Tasks.');
		} else if (doneIndex !== -1) {
			alert('Task Number already exists in Done Tasks.');
		} else {
			const tempTasks = { ...taskList };
			tempTasks.todo.push(todo);
			setTaskList(tempTasks);
			setOpenPopUp(false);
		}
	};

	return (
		<>
			{openPopUp ? (
				<PopUp
					setOpenPopUp={setOpenPopUp}
					addTodoTask={addTodoTask}
				/>
			) : null}

			<div className='App'>
				<TodoColumn
					setOpenPopUp={setOpenPopUp}
					addTodoTask={addTodoTask}
					tasks={taskList.todo}
				/>
				<InProgressColumn />
				<InReviewColumn />
				<DoneColumn />
			</div>
		</>
	);
}

export default App;
