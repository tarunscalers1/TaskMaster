import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTasks } from '../../services/api';
import { getCachedData } from '../../utils/cache';

export const fetchTasksThunk = createAsyncThunk('tasks/fetchTasks', async () => {
  return getCachedData('tasks', fetchTasks);
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState: { list: [], loading: false, error: null },
  reducers: {
    addTask: (state, action) => { state.list.push(action.payload); },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksThunk.pending, (state) => { state.loading = true; })
      .addCase(fetchTasksThunk.fulfilled, (state, action) => { state.list = action.payload; state.loading = false; })
      .addCase(fetchTasksThunk.rejected, (state) => { state.loading = false; state.error = 'Failed to fetch'; });
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;