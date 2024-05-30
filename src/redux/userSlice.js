import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addUser, deleteUser, loginUser, logOut, refreshUser } from "./opertations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

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
                console.log(state.items)
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

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      /*.addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })*/
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;

export const userReducer = userSlice.reducer;
export const { setFilter } = userSlice.actions;

