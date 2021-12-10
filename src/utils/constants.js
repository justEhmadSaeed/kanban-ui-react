import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

export const TaskType = {
	BUG: 'BUG',
	FEATURE: 'FEATURE',
	STORY: 'STORY'
};

export const ColumnType = {
	TODO: 'TODO',
	IN_PROGRESS: 'IN_PROGRESS',
	IN_REVIEW: 'IN_REVIEW',
	DONE: 'DONE'
};

export const ColumnTypeProperties = {
	[ColumnType.TODO]: {
		color: 'blue',
		icon: faListAlt
	},
	[ColumnType.IN_PROGRESS]: {
		color: 'orange',
		icon: faSpinner
	},
	[ColumnType.IN_REVIEW]: {
		color: 'purple',
		icon: faEye
	},
	[ColumnType.DONE]: {
		color: 'green',
		icon: faCheckSquare
	}
};
