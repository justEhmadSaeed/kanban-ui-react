import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ColumnBar from './ColumnBar';

const InProgressColumn = () => {
	return (
		<div>
			<ColumnBar icon={faSpinner} title='In Progress' color='orange' />
		</div>
	);
};

export default InProgressColumn;
