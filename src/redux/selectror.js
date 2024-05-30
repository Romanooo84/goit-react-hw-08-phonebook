
export const getItems = state => state.user;

export const getFilter = state => state.user.filters;

export const getIsLoading = state => state.user.isLoading;

export const getError = state => state.user.error;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;
