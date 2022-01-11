import { takeLatest, put, select, delay } from 'redux-saga/effects'
import { Auth } from 'aws-amplify'
import AWS from 'aws-sdk'

import * as notifications from 'lib/notifications'
import * as Actions from './auth.actions'
import { getTempCredentials } from './auth.selectors'

AWS.config.update({ region: 'eu-west-2' })

export function* signInPersistSaga() {
  try {
    const res = yield Auth.currentUserPoolUser()
    if (res) {
      yield put(
        Actions.signInSuccess({
          result: res
        })
      )
      yield delay(1000)
    }
  } catch (e) {
    Actions.signInFail()
  }
}

export function* signInSaga({ payload }) {
  try {
    const res = yield Auth.signIn({
      username: payload.username.toLowerCase(),
      password: payload.password
    })
    console.log('res', res)
    yield put(Actions.signInSuccess({ result: res }))
    yield delay(1000)
  } catch (e) {
    console.log('signin err', e)
    let result = payload
    if (e.code !== 'UserNotConfirmedException') result = null
    yield put(
      Actions.signInFail({
        result
      })
    )
  }
}

export function* signOutSaga() {
  try {
    yield Auth.signOut()
    yield put(
      Actions.signOutSuccess({
        notification: notifications.get('signOutSuccess')
      })
    )
  } catch (e) {
    yield put(Actions.signOutFail({ notification: notifications.get(e.code) }))
  }
}

export function* signUpSaga({ payload }) {
  try {
    const input = {
      username: payload.email,
      password: payload.password,
      birth_date: payload.birthDate,
      attributes: {
        preferred_username: payload.username
      }
    }
    const res = yield Auth.signUp(input)
    console.log(res)
    yield put(
      Actions.signUpSuccess({
        result: {
          username: payload.username,
          cognitoId: res.userSub
        }
      })
    )
    const tempCredentials = yield select(getTempCredentials)
    console.log('tempCredntialjkhhkjs', tempCredentials)
  } catch (e) {
    console.log('signUpSaga', e)
    yield put(Actions.signUpFail({ notification: notifications.get(e.code) }))
  }
}

export function* confirmSignUpSaga({ payload }) {
  try {
    const tempCredentials = yield select(getTempCredentials)
    console.log('tempCreds', tempCredentials)
    // TODO get email to temp credentials and use it to signup
    // should then work
    const res = yield Auth.confirmSignUp(
      tempCredentials.username,
      payload.code
    )
    if (res === 'SUCCESS') {
      // TODO get the user as in tipmi app here
      const signInRes = yield Auth.signIn({
        username: user.username.toLowerCase(),
        password: user.password
      })
      yield put(
        Actions.confirmSignUpSuccess({
          notification: notifications.get('confirmSignUpSuccess')
        })
      )
      yield put(Actions.signInSuccess({ result: signInRes }))
    }
  } catch (e) {
    console.log('confirmSignUpSaga', e)
    yield put(
      Actions.confirmSignUpFail({ notification: notifications.get(e.code) })
    )
  }
}

export function* changePasswordSaga({ payload }) {
  try {
    const user = yield Auth.currentAuthenticatedUser()
    yield Auth.changePassword(user, payload.oldPassword, payload.newPassword)
    yield put(
      Actions.changePasswordSuccess({
        notification: notifications.get('changePasswordSuccess')
      })
    )
  } catch (e) {
    yield put(
      Actions.changePasswordFail({
        notification: notifications.get('changePasswordFail')
      })
    )
  }
}

export function* forgotPasswordSaga({ payload }) {
  try {
    const username = payload?.email?.toLowerCase()
    yield Auth.forgotPassword(username)
    yield put(
      Actions.forgotPasswordSuccess({
        result: username,
        notification: notifications.get('forgotPasswordSuccess')
      })
    )
  } catch (e) {
    console.log({ e })
    yield put(
      Actions.forgotPasswordFail({
        notification: notifications.get(e.code)
      })
    )
  }
}

export function* resetPasswordSaga({ payload }) {
  try {
    const user = yield select(getResetUsername)
    yield Auth.forgotPasswordSubmit(user, payload.code, payload.newPassword)
    yield put(
      Actions.resetPasswordSuccess({
        notification: notifications.get('resetPasswordSuccess')
      })
    )
  } catch (e) {
    console.log('resetPasswordFail', { e })
    yield put(
      Actions.resetPasswordFail({ notification: notifications.get(e.code) })
    )
  }
}

export function* resendSignUpCodeSaga({ payload }) {
  try {
    yield Auth.resendSignUp(payload)
    yield put(
      Actions.resendSignUpCodeSuccess({
        notification: notifications.get('resendSignUpCodeSuccess')
      })
    )
  } catch (e) {
    console.log('resendSignUpCodeSaga', { e })
    yield Actions.resendSignUpCodeFail({
      notification: notifications.get(e.code)
    })
  }
}

export function* saga() {
  yield takeLatest(Actions.types.SIGN_IN_PERSIST, signInPersistSaga)
  yield takeLatest(Actions.types.SIGN_IN, signInSaga)
  yield takeLatest(Actions.types.SIGN_OUT, signOutSaga)
  yield takeLatest(Actions.types.SIGN_UP, signUpSaga)
  yield takeLatest(Actions.types.CONFIRM_SIGN_UP, confirmSignUpSaga)
  yield takeLatest(Actions.types.CHANGE_PASSWORD, changePasswordSaga)
  yield takeLatest(Actions.types.FORGOT_PASSWORD, forgotPasswordSaga)
  yield takeLatest(Actions.types.RESET_PASSWORD, resetPasswordSaga)
  yield takeLatest(Actions.types.RESEND_SIGN_UP_CODE, resendSignUpCodeSaga)
}
