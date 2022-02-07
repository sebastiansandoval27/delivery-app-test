export const socialLogin = async (app, dispatch, method, provider) => {
  await app
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      dispatch(method(result));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const logout = async (app, dispatch, method) => {
  await app
    .auth()
    .signOut()
    .then(() => {
      dispatch(method());
    })
    .catch((error) => {
      console.log(error);
    });
};
