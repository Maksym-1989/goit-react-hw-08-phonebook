const getIsAuth = (state) => state.auth.isAuthenticated;
const getAuthUserName = (state) => state.auth.user.name;

export { getIsAuth, getAuthUserName };
