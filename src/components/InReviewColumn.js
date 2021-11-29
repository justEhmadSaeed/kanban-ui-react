import { faEye } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ColumnBar from './ColumnBar';
import ColumnBody from './ColumnBody';

const InReviewColumn = () => {
	return (
		<div>
			<ColumnBar icon={faEye} title='In Review' color='purple' />
			<ColumnBody />
		</div>
	);
};

export default InReviewColumn;
