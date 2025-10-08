import React, { useState, useRef, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

const TaskCard = ({ title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef(null);
  const memoizedDescription = useMemo(() => `Memoized: ${description}`, [description]);
  const handleFocus = useCallback(() => inputRef.current?.focus(), []);

  const handleToggle = () => setIsExpanded(!isExpanded);

  return (
    <div className="border p-4 mb-2 bg-white rounded">
      <h3 onClick={handleToggle} className="cursor-pointer text-lg font-semibold">{title}</h3>
      {isExpanded && <p>{memoizedDescription}</p>}
      <button onClick={handleFocus} className="bg-green-500 text-white px-2 py-1 mt-2">Focus Input</button>
      <input ref={inputRef} className="border p-1 mt-2 w-full" />
    </div>
  );
};

TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default TaskCard;