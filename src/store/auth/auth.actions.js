export const types = {
  SIGN_IN_PERSIST: "[Account] SignIn persist",
  SIGN_IN: "[Account] SignIn",
  SIGN_IN_SUCCESS: "[Account] SignIn success",
  SIGN_IN_FAIL: "[Account] SignIn fail",
  SIGN_OUT: "[Account] SignOut",
  SIGN_OUT_SUCCESS: "[Account] SignOut success",
  SIGN_OUT_FAIL: "[Account] SignOut fail",
  SIGN_UP: "[Account] SignUp",
  SIGN_UP_SUCCESS: "[Account] SignUp success",
  SIGN_UP_FAIL: "[Account] SignUp fail",
  CONFIRM_SIGN_UP: "[Account] Confirm SignUp",
  CONFIRM_SIGN_UP_SUCCESS: "[Account] Confirm SignUp success",
  CONFIRM_SIGN_UP_FAIL: "[Account] Confirm SignUp fail",
  CHANGE_PASSWORD: "[Account] Change Password",
  CHANGE_PASSWORD_SUCCESS: "[Account] Change Password success",
  CHANGE_PASSWORD_FAIL: "[Account] Change Password fail",
  FORGOT_PASSWORD: "[Account] Forgot Password",
  FORGOT_PASSWORD_SUCCESS: "[Account] Forgot Password success",
  FORGOT_PASSWORD_FAIL: "[Account] Forgot Password fail",
  RESET_PASSWORD: "[Account] Reset Password",
  RESET_PASSWORD_SUCCESS: "[Account] Reset Password success",
  RESET_PASSWORD_FAIL: "[Account] Reset Password fail",
  RESEND_SIGN_UP_CODE: "[Account] Resend Sign Up Code",
  RESEND_SIGN_UP_CODE_SUCCESS: "[Account] Resend Sign Up Code success",
  RESEND_SIGN_UP_CODE_FAIL: "[Account] Resend Sign Up Code fail",
  UPDATE_USER_ATTRIBUTES: "[Account] Update User Attributes",
  UPDATE_USER_ATTRIBUTES_SUCCESS: "[Account] Update User Attributes success",
  UPDATE_USER_ATTRIBUTES_FAIL: "[Account] Update User Attributes fail",
}

export const signInPersist = payload => ({
  type: types.SIGN_IN_PERSIST,
  payload
})

export const signIn = payload => ({
  type: types.SIGN_IN,
  payload
})

export const signInSuccess = payload => ({
  type: types.SIGN_IN_SUCCESS,
  payload
})

export const signInFail = payload => ({
  type: types.SIGN_IN_FAIL,
  payload
})

export const signOut = () => ({
  type: types.SIGN_OUT
})

export const signOutSuccess = payload => ({
  type: types.SIGN_OUT_SUCCESS,
  payload
})

export const signOutFail = payload => ({
  type: types.SIGN_OUT_FAIL,
  payload
})

export const signUp = payload => ({
  type: types.SIGN_UP,
  payload
})

export const signUpSuccess = payload => ({
  type: types.SIGN_UP_SUCCESS,
  payload
})

export const signUpFail = payload => ({
  type: types.SIGN_UP_FAIL,
  payload
})

export const confirmSignUp = payload => ({
  type: types.CONFIRM_SIGN_UP,
  payload
})

export const confirmSignUpSuccess = payload => ({
  type: types.CONFIRM_SIGN_UP_SUCCESS,
  payload
})

export const confirmSignUpFail = payload => ({
  type: types.CONFIRM_SIGN_UP_FAIL,
  payload
})

export const changePassword = payload => ({
  type: types.CHANGE_PASSWORD,
  payload
})

export const changePasswordSuccess = payload => ({
  type: types.CHANGE_PASSWORD_SUCCESS,
  payload
})

export const changePasswordFail = payload => ({
  type: types.CHANGE_PASSWORD_FAIL,
  payload
})

export const forgotPassword = payload => ({
  type: types.FORGOT_PASSWORD,
  payload
})

export const forgotPasswordSuccess = payload => ({
  type: types.FORGOT_PASSWORD_SUCCESS,
  payload
})

export const forgotPasswordFail = payload => ({
  type: types.FORGOT_PASSWORD_FAIL,
  payload
})
export const resetPassword = payload => ({
  type: types.RESET_PASSWORD,
  payload
})

export const resetPasswordSuccess = payload => ({
  type: types.RESET_PASSWORD_SUCCESS,
  payload
})

export const resetPasswordFail = payload => ({
  type: types.RESET_PASSWORD_FAIL,
  payload
})

export const resendSignUpCode = payload => ({
  type: types.RESEND_SIGN_UP_CODE,
  payload
})

export const resendSignUpCodeSuccess = payload => ({
  type: types.RESEND_SIGN_UP_CODE_SUCCESS,
  payload
})

export const resendSignUpCodeFail = payload => ({
  type: types.RESEND_SIGN_UP_CODE_FAIL,
  payload
})

export const updateUserAttributes = payload => ({
  type: types.UPDATE_USER_ATTRIBUTES,
  payload
})

export const updateUserAttributesSuccess = payload => ({
  type: types.UPDATE_USER_ATTRIBUTES_SUCCESS,
  payload
})

export const updateUserAttributesFail = payload => ({
  type: types.UPDATE_USER_ATTRIBUTES_FAIL,
  payload
})
