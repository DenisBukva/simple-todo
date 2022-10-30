import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// custom scss
import './tag.styles.scss';

const Tag = ({
  children = 'test label',
  onClick = () => console.log('Cao'),
}) => {
  return (
    <motion.div
      className='tag'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='tag-label'>{children}</div>
      <button className='tag-btn' onClick={onClick}>
        <FontAwesomeIcon className='tag-btn-icon' icon={faTimes} />
      </button>
    </motion.div>
  );
};

export default Tag;
