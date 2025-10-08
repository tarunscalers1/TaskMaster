import { render, fireEvent, screen } from '@testing-library/react';
import TaskCard from './TaskCard';

test('renders title and toggles description', () => {
  const { getByText } = render(<TaskCard title="Test Title" description="Test Desc" />);
  expect(getByText('Test Title')).toBeInTheDocument();
  fireEvent.click(getByText('Test Title'));
  expect(getByText('Memoized: Test Desc')).toBeInTheDocument();
});