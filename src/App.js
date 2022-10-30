import React, { useState } from 'react';
import { AnimatePresence } from "framer-motion"

import Tag from './components/tag';
import Input from './components/input';
import uuid from 'react-uuid';

import 'normalize.css/normalize.css';
import './app.scss';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  const renderTasks = () => {
    if (!tasks.length)
      return <div className='tag-picker-no-tasks'>No tasks yet!</div>;

    return tasks.map((task) => (
      <Tag onClick={() => deleteTag(task.id)} key={task.id}>
        {task.label}
      </Tag>
    ));
  };

  const deleteTag = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const addTag = () => {
    setTasks([...tasks, { label: inputValue, id: uuid() }]);
    setInputValue('');
  };

  return (
    <div className='tag-picker'>
      <div className='tag-picker-container'>
        <AnimatePresence>{renderTasks()}</AnimatePresence>
      </div>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        addTag={(e) => e.key === 'Enter' && addTag()}
      />
    </div>
  );
};

export default App;
