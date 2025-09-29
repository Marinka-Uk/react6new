
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  tasks: [],
  isLoading : false,
  isError: false,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTasks(state, action) {
      state.push(action.payload);
    },

extraReducers: (builder) => {
    builder.addCase(getAllTasks.pending, (state, action) => {
      state.isLoading = true
    }),
    builder.addCase(getAllTasks.fulfilled, (state, action) => {
      state.isLoading = false
      state.tasks = action.payload
     
    }),
        builder.addCase(getAllTasks.rejected, (state, action) => {
      state.isError = true
    }),
  };
    deleteTasks(state, action) {
      return state.filter((task) => task.id !== action.payload);
      //   state.splice(
      //     state.findIndex((task) => task.id === action.payload),
      //     1
      //   );



    },
    checkTasks(state, action) {
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    },
  },
});





export const taskReducer = taskSlice.reducer;
export const { addTasks, deleteTasks, checkTasks } = taskSlice.actions;