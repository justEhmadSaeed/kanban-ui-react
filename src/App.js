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
		todo: [
			{
				taskNumber: '29004',
				taskDesc: 'Fix the issues reported in IE Browser.',
				type: 'Bug',
			},
		],
		inProgress: [
			{
				taskNumber: '29002',
				taskDesc: 'Add responsive support.',
				type: 'Story',
			},
		],
		inReview: [
			{
				taskNumber: '29016',
				taskDesc: 'Fix the issues reported in IE Browser.',
				type: 'Bug',
			},
		],
		done: [
			{
				taskNumber: '29018',
				taskDesc:
					'Arrange web meeting with customer to get login page requirement.',
				type: 'Feature',
			},
		],
	});

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

	const transferTask = (taskNo, source, destination) => {
		const tempTasks = { ...taskList };
		const index = tempTasks[source].findIndex(
			(todo) => todo.taskNumber === taskNo
		);
		if (index === -1) {
			return;
		}
		let todo = tempTasks[source].splice(index, 1);
		tempTasks[destination].push(...todo);
		setTaskList(tempTasks);
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
					transferTask={transferTask}
				/>
				<InProgressColumn
					tasks={taskList.inProgress}
					transferTask={transferTask}
				/>
				<InReviewColumn
					tasks={taskList.inReview}
					transferTask={transferTask}
				/>
				<DoneColumn
					tasks={taskList.done}
					transferTask={transferTask}
				/>
			</div>
		</>
	);
}

export default App;
