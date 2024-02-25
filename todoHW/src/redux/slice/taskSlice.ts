import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TaskInterface {
  id: number;
  completed: boolean;
  text: string;
}

const initialState: TaskInterface[] = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addNewTask: (state, action: PayloadAction<string>) => {
      const uniqueId = state.length + 1;
      state.push({
        id: uniqueId,
        completed: false,
        text: action.payload,
      });
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      return state.filter((el) => el.id !== action.payload);
    },
    toggleTaskCompletion: (state, action: PayloadAction<number>) => {
      const taskToToggle = state.find((el) => el.id === action.payload);

      if (taskToToggle) {
        taskToToggle.completed = !taskToToggle.completed;
      }
    },
  },
});

export const { addNewTask, deleteTask, toggleTaskCompletion } =
  todoSlice.actions;

export default todoSlice.reducer;
