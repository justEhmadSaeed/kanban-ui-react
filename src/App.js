import './App.css';
import React, { useState } from 'react';
import PopUp from './components/PopUp';
import { ColumnType, TaskType } from './utils/constants';
import Column from './components/Column';

function App() {
	const [openPopUp, setOpenPopUp] = useState(false);
	const [taskList, setTaskList] = useState([
		{
			taskNumber: '29004',
			taskDesc: 'Fix the issues reported in IE Browser.',
			type: TaskType.BUG,
			columnType: ColumnType.TODO,
		},
		{
			taskNumber: '29002',
			taskDesc: 'Add responsive support.',
			type: TaskType.STORY,
			columnType: ColumnType.IN_PROGRESS,
		},
		{
			taskNumber: '29016',
			taskDesc: 'Fix the issues reported in IE Browser.',
			type: TaskType.FEATURE,
			columnType: ColumnType.IN_REVIEW,
		},
		{
			taskNumber: '29018',
			taskDesc:
				'Arrange web meeting with customer to get login page requirement.',
			type: TaskType.BUG,
			columnType: ColumnType.DONE,
		},
	]);
	// Add Task Button only
	const addTaskButton = () => (
		<button
			className='add-new-btn'
			onClick={() => setOpenPopUp(true)}
		>
			+
		</button>
	);
	// Add task from pop-up to todo-column
	const addTodoTask = (todo) => {
		// Duplicate Task Validation
		const index = taskList.findIndex(
			(item) => item.taskNumber === todo.taskNumber
		);

		if (index !== -1) {
			alert(
				`Task Number already exists in ${taskList[index].columnType} Tasks.`
			);
		} else {
			todo.columnType = ColumnType.TODO;
			const tempTasks = [...taskList];
			tempTasks.push(todo);
			setTaskList(tempTasks);
			setOpenPopUp(false);
		}
	};
	// transfer task from one column to other
	const transferTask = (taskNo, destination) => {
		const tempTasks = [...taskList];
		const index = tempTasks.findIndex(
			(todo) => todo.taskNumber === taskNo
		);
		if (index === -1) {
			return;
		}
		taskList[index].columnType = destination;
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
				<Column
					setOpenPopUp={setOpenPopUp}
					addTodoTask={addTodoTask}
					tasks={taskList.filter(
						(task) => task.columnType === ColumnType.TODO
					)}
					transferTask={transferTask}
					addTaskButton={addTaskButton}
					columnType={ColumnType.TODO}
				/>
				<Column
					tasks={taskList.filter(
						(task) => task.columnType === ColumnType.IN_PROGRESS
					)}
					transferTask={transferTask}
					columnType={ColumnType.IN_PROGRESS}
				/>
				<Column
					tasks={taskList.filter(
						(task) => task.columnType === ColumnType.IN_REVIEW
					)}
					transferTask={transferTask}
					columnType={ColumnType.IN_REVIEW}
				/>
				<Column
					tasks={taskList.filter(
						(task) => task.columnType === ColumnType.DONE
					)}
					transferTask={transferTask}
					columnType={ColumnType.DONE}
				/>
			</div>
		</>
	);
}

export default App;
