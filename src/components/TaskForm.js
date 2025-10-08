import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/slices/taskSlice';

const TaskForm = () => {
  const [searchParams] = useSearchParams();
  const boardId = searchParams.get('boardId');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTask({ title, description: `Board ID: ${boardId || 'None'}` }));
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded flex gap-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 flex-1"
        placeholder="Task title"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Task</button>
    </form>
  );
};

export default TaskForm;