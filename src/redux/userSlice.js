import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addUser, deleteUser } from "./opertations";

const userSlice = createSlice({
  name: "user",
  initialState: {
      user: [],
      filter:'',
    isLoading: false,
    error: null,
    },
    reducers: {
      setFilter(state, action) {  // Added this reducer to update the filter
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state, action)=> {
                state.isLoading = true;
            })
            .addCase(fetchTasks.fulfilled, (state, action)=> {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action)=> {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addUser.pending, (state, action)=> {
                state.isLoading = true;
            })
            .addCase(addUser.fulfilled, (state, action)=> {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(addUser.rejected, (state, action)=> {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteUser.pending, (state, action)=> {
                state.isLoading = true;
            })
            .addCase(deleteUser.fulfilled, (state, action)=> {
                state.isLoading = false;
                state.error = null;
                const index = state.items.findIndex(
                    task => task.id === action.payload.id
                );
                state.items.splice(index, 1);
            })
            .addCase(deleteUser.rejected, (state, action)=> {
                state.isLoading = false;
                state.error = action.payload;
            })
      
  },
});

export const userReducer = userSlice.reducer;
export const { setFilter } = userSlice.actions;

