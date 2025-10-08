import React from 'react';
import BoardList from './components/BoardList';
import TaskForm from './components/TaskForm';
import ErrorBoundary from './components/ErrorBoundary';
import withAuth from './hocs/withAuth';

const AuthBoardList = withAuth(BoardList);

function App() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">TaskMaster</h1>
      <TaskForm />
      <ErrorBoundary>
        <AuthBoardList />
      </ErrorBoundary>
    </div>
  );
}

export default App;