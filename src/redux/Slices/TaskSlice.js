
import { createSlice } from "@reduxjs/toolkit";
import { getAllTasks, switchtask, addTask,deleteTask} from "../Operation/Operation";

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
    },deleteTasks(state, action) {
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

    switchTasks(state,action){
      return state.map((task)=>
      task.id === action.payload ? {...task, completed: !task.completed}: task
      )
    }
  },
    

extraReducers: (builder) => {
    builder
    .addCase(getAllTasks.pending, (state) => {
      state.isLoading = true
    })
    .addCase(getAllTasks.fulfilled, (state, action) => {
      state.isLoading = false
      state.tasks = action.payload
     
    })
      .addCase(getAllTasks.rejected, (state) => {
      state.isError = true
    })
     .addCase(addTask.pending, (state) => {
      state.isLoading = true
    })
    .addCase(addTask.fulfilled, (state, action) => {
      state.isLoading = false
     state.tasks.push(action.payload)
     
    })
      .addCase(addTask.rejected, (state) => {
      state.isError = true
    })

      .addCase(deleteTask.pending, (state) => {
      state.isLoading = true
    })
    .addCase(deleteTask.fulfilled, (state, action) => {
      state.isLoading = false
   state.tasks = state.tasks.filter((task) => task.id !== action.payload);
     
    })
      .addCase(deleteTask.rejected, (state) => {
      state.isError = true
    })
      .addCase(checkTasks.pending, (state) => {
      state.isLoading = true
    })
    .addCase(checkTasks.fulfilled, (state, action) => {
      state.isLoading = false
 state.tasks = state.tasks.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
     
    )})
      .addCase(checkTasks.rejected, (state) => {
      state.isError = true
    })
  }


});
    





export const taskReducer = taskSlice.reducer;
export const { addTasks, deleteTasks, checkTasks } = taskSlice.actions;