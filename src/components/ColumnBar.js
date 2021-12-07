import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import PropTypes from 'prop-types';

const ColumnBar = ({ title, icon, color }) => {
	return (
		<nav className="column-bar">
			<FontAwesomeIcon icon={icon} color={color} />
			<h4 className="column-heading">{title}</h4>
		</nav>
	);
};

ColumnBar.propTypes = {
	title: PropTypes.string,
	icon: PropTypes.object,
	color: PropTypes.string
};

ColumnBar.defaultProps = {
	title: '',
	icon: { faListAlt },
	color: ''
};
export default ColumnBar;
