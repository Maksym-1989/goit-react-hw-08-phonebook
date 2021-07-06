const getIsAuth = (state) => state.auth.token;
const getAuthUserName = (state) => state.auth.user.name;

export { getIsAuth, getAuthUserName };
