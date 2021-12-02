import {
	faPlusCircle,
	faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';

const PopUp = ({ setOpenPopUp, addTodoTask }) => {
	const taskNumRef = useRef(null);
	const taskDescRef = useRef(null);
	const dueDateRef = useRef(null);
	const taskTagRef = useRef(null);

	const [taskTags, setTaskTags] = useState([]);

	const addTask = (e) => {
		console.log('add');
		e.preventDefault();
		let errors = '';
		if (!taskNumRef.current.value)
			errors += 'Task Number cannot be empty.\n';
		if (!taskDescRef.current.value)
			errors += 'Task Description cannot be empty.\n';
		if (!dueDateRef.current.value)
			errors += 'Task Due Date cannot be empty.\n';

		if (errors.length > 0) {
			alert(errors);
		} else {
			addTodoTask({
				taskNumber: taskNumRef.current.value,
				taskDesc: taskDescRef.current.value,
				type: taskTagRef.current.value,
			});
		}
	};

	return (
		<div className='popUp'>
			<div className='popUp-body'>
				<div className='flex-end'>
					<FontAwesomeIcon
						icon={faTimesCircle}
						className='btn close-icon'
						onClick={() => setOpenPopUp(false)}
					/>
				</div>
				<form id='popUp-form'>
					<div className='input-block'>
						<label>Task Number: </label>
						<input
							type='number'
							name='task-number'
							id='task-number'
							placeholder='Task Number'
							autoFocus
							ref={taskNumRef}
							required
						/>
					</div>
					<div className='input-block'>
						<label>Task Description: </label>
						<input
							type='text'
							name='task-desc'
							placeholder='Task Description'
							ref={taskDescRef}
							required
						/>
					</div>
					<div className='input-block'>
						<label>Task Due Date: </label>
						<input
							ref={dueDateRef}
							type='date'
							name='task-desc'
							required
						/>
					</div>
					<div className='input-block'>
						<label>Task Type: </label>
						<select ref={taskTagRef}>
							<option value='Bug'>Bug</option>
							<option value='Feature'>Feature</option>
							<option value='Story'>Story</option>
						</select>
					</div>
					<input
						type='button'
						value='Add Task'
						className='add-task-btn'
						onClick={addTask}
					/>
				</form>
			</div>
		</div>
	);
};

export default PopUp;
