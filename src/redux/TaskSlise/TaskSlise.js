

import { createSlice } from "@reduxjs/toolkit";


// export const initialState = {
//   tasks: [
//     { id: 0, text: "Learn HTML and CSS", completed: true },
//     { id: 1, text: "Get good at JavaScript", completed: true },
//     { id: 2, text: "Master React", completed: false },
//     { id: 3, text: "Discover Redux", completed: false },
//     { id: 4, text: "Build amazing apps", completed: false },
//   ],
// };

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      state.push(action.payload);
    },
    deleteTask(state, action) {
      return state.filter((task) => task.id !== action.payload);
      //   state.splice(
      //     state.findIndex((task) => task.id === action.payload),
      //     1
      //   );
    },
    checkTasks(state, action) {
      return state.map((task) =>
        task.id === action.payload ? (task.completed = !task.completed) : task
      );
    },
  },
});


export const store = configureStore({
    task: taskReducer,
})