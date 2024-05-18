export const selectLoginStatus = (state) => state.auth.isLoggedIn;
export const selectUserName = (state) => state.auth.user.name;
export const selectRefreshStatus = (state) => state.auth.isRefreshing;
