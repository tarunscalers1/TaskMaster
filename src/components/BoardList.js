import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasksThunk, addTask } from '../redux/slices/taskSlice';
import TaskCard from './TaskCard';

const BoardList = () => {
  const { list: tasks, loading, error } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasksThunk());
  }, [dispatch]);

  if (loading) return <p className="text-gray-500">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="mt-4">
      {/* Virtual DOM diffs changes efficiently here, updating only modified list items */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <TaskCard title={task.title} description={task.description} />
          </li>
        ))}
      </ul>
      <button
        onClick={() => dispatch(addTask({ title: 'Custom Task', description: 'Added Manually' }))}
        className="bg-blue-500 text-white px-4 py-2 mt-4"
      >
        Add Custom Task
      </button>
    </div>
  );
};

export default BoardList;