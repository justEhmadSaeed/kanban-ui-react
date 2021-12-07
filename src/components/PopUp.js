import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TaskType } from 'utils/constants';

const PopUp = ({ setOpenPopUp, addTodoTask }) => {
	const [taskValues, setTaskValues] = useState({
		taskNum: '',
		taskDesc: '',
		dueDate: '',
		taskTag: '',
	});

	const { taskNum, taskDesc, dueDate, taskTag } = taskValues;

	const addTask = (e) => {
		e.preventDefault();
		let errors = '';
		if (!taskNum) errors += 'Task Number cannot be empty.\n';
		if (!taskDesc) errors += 'Task Description cannot be empty.\n';
		if (!dueDate) errors += 'Task Due Date cannot be empty.\n';

		if (errors.length > 0) {
			alert(errors);
		} else {
			addTodoTask({
				taskNumber: taskNum,
				taskDesc: taskDesc,
				type: taskTag,
			});
		}
	};
	const onChangeHandler = (name) => (event) => {
		setTaskValues({
			...taskValues,
			[name]: event.target.value,
		});
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
				<form autoComplete='off' id='popUp-form'>
					<div className='input-block'>
						<label>Task Number: </label>
						<input
							type='number'
							name='task-number'
							value={taskNum}
							onChange={onChangeHandler('taskNum')}
							id='task-number'
							placeholder='Task Number'
							autoFocus
							required
						/>
					</div>
					<div className='input-block'>
						<label>Task Description: </label>
						<input
							type='text'
							name='task-desc'
							value={taskDesc}
							onChange={onChangeHandler('taskDesc')}
							placeholder='Task Description'
							required
						/>
					</div>
					<div className='input-block'>
						<label>Task Due Date: </label>
						<input
							type='date'
							name='task-desc'
							value={dueDate}
							onChange={onChangeHandler('dueDate')}
							required
						/>
					</div>
					<div className='input-block'>
						<label>Task Type: </label>
						<select
							value={taskTag}
							onChange={onChangeHandler('taskTag')}
						>
							{Object.values(TaskType).map((type, key) => (
								<option value={type} key={key}>
									{type}
								</option>
							))}
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

PopUp.propTypes = {
	setOpenPopUp: PropTypes.func.isRequired,
	addTodoTask: PropTypes.func.isRequired,
};
PopUp.defaultProps = {
	setOpenPopUp: undefined,
	addTodoTask: undefined,
};
export default PopUp;
