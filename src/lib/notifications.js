const NOTIFICATIONS = {
  generalError: {
    type: 'error',
    message: 'Something went wrong!'
  },
  UserNotFoundException: {
    type: 'error',
    message: 'User does not exist.'
  },
  NotAuthorizedException: {
    type: 'error',
    message: 'Incorrect username or password.'
  },
  UserNotConfirmedException: {
    type: 'error',
    message: 'User is not confirmed.'
  },
  UsernameExistsException: {
    type: 'error',
    message: 'An account with the given email already exists.'
  },
  InvalidParameterException: {
    type: 'error',
    message: 'Validation errors detected'
  },
  CodeMismatchException: {
    type: 'error',
    message: 'Invalid verification code provided, please try again.'
  },
  signUpSuccess: {
    type: 'success',
    message: 'congratulations! please verify your account'
  },
  confirmSignUpSuccess: {
    type: 'success',
    message: 'Your account has been validated!'
  },
  changePasswordSuccess: {
    type: 'success',
    message: 'Your password has successfully been updated'
  },
  changePasswordError: {
    type: 'error',
    message: 'Your old password is incorrect. Please, try again'
  },
  resetPasswordSuccess: {
    type: 'success',
    message: 'Your password has successfully been updated!'
  },
  forgotPasswordSuccess: {
    type: 'success',
    message: 'You have been sent a code'
  },
  resendSignUpCodeSuccess: {
    type: 'success',
    message: 'You have been sent another code'
  },
  updateUserAttributesSuccess: {
    type: 'success',
    message: 'Attributes successfully updated!'
  },
  copiedToClipboard: {
    type: 'success',
    message: 'Copied to clipboard'
  },
  validatePhoneNumberSuccess: {
    type: 'success',
    message: 'You have been sent a code'
  },
  phoneNumberVerifiedSuccess: {
    type: 'success',
    message: 'Your phone number has been verified'
  },
  phoneNumberVerifiedFail: {
    type: 'error',
    message: 'Your phone number has not been verified'
  },
  leaveOutletSuccess: {
    type: 'success',
    message: 'You have successfully left'
  },
  deactivateAccountSuccess: {
    type: 'success',
    message: 'You have successfully deactivated your account'
  }
}

export const get = code => NOTIFICATIONS[code] || NOTIFICATIONS.generalError
