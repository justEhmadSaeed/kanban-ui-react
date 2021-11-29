import { faEye } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ColumnBar from './ColumnBar';

const InReviewColumn = () => {
	return <div>
			<ColumnBar icon={faEye} title='In Review' color='purple' />

	</div>;
};

export default InReviewColumn;
