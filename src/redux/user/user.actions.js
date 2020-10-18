import UserActionTypes from './user.types';

export const googleSignInStart = () =>({
	type: UserActionTypes.GOOGLE_SING_IN_START
});

export const signInSuccess = (user) => ({
	type : UserActionTypes.SING_IN_SUCCESS,
	payload : user
})

export const signInFailure = (error) => ({
	type : UserActionTypes.SING_IN_FAILURE,
	payload : error
})

export const emailSignInStart = (emailAndPassword) =>({
	type: UserActionTypes.EMAIL_SING_IN_START,
	payload : emailAndPassword
});

export const checkUserSession = () => ({
	type: UserActionTypes.CHECK_USER_SESSION
})

export const signOutStart = () =>({
	type:UserActionTypes.SIGN_OUT_START
})
export const signOutSuccess = () =>({
	type:UserActionTypes.SIGN_OUT_SUCCESS
})
export const signOutFailure = (error) =>({
	type:UserActionTypes.SIGN_OUT_FAILURE,
	payload : error
})

export const signUpStart = (newUserData) => ({
	type:UserActionTypes.SIGN_UP_START,
	payload : newUserData
})

export const signUpSuccess = (userRefAndData) => ({
	type:UserActionTypes.SIGN_UP_SUCCESS,
	payload: userRefAndData
})

export const signUpFailure = (error) =>({
	type : UserActionTypes.SIGN_UP_FAILURE,
	payload : error
})