import { types } from './auth.actions'

const initialState = {
  isLoading: false,
  resetUsername: null,
  data: null
}

export const reducer = (state = initialState, action) => {
  console.log('result:', action?.payload?.result)
  switch (action.type) {
    case types.SIGN_IN:
      return {
        ...state,
        isLoading: true
      }
    case types.SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: {
          username: action.payload.result.username,
          pool: action.payload.result.pool,
          attributes: action.payload.result.attributes
        }
      }
    case types.SIGN_IN_FAIL:
      return {
        ...state,
        isLoading: false,
        data: null
      }
    case types.SIGN_OUT:
      return {
        ...state,
        isLoading: true
      }
    case types.SIGN_OUT_SUCCESS:
      return {
        ...state,
        isLoading: false,

        data: null
      }
    case types.SIGN_OUT_FAIL:
      return {
        ...state,
        isLoading: false
      }

    case types.SIGN_UP:
      return {
        ...state,
        isLoading: true
      }

    case types.SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false
      }

    case types.SIGN_UP_FAIL:
      return {
        ...state,
        isLoading: false,
        data: null
      }

    case types.CONFIRM_SIGN_UP:
      return {
        ...state,
        isLoading: true
      }

    case types.CONFIRM_SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false
      }

    case types.CONFIRM_SIGN_UP_FAIL:
      return {
        ...state,
        isLoading: false
      }

    case types.CHANGE_PASSWORD:
      return {
        ...state,
        isLoading: true
      }

    case types.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false
      }

    case types.CHANGE_PASSWORD_FAIL:
      return {
        ...state,
        isLoading: false
      }

    case types.FORGOT_PASSWORD:
      return {
        ...state,
        isLoading: true,
        resetUsername: null
      }

    case types.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        resetUsername: action.payload.result,
        isLoading: false
      }

    case types.FORGOT_PASSWORD_FAIL:
      return {
        ...state,
        isLoading: false
      }
    case types.RESET_PASSWORD:
      return {
        ...state,
        isLoading: true
      }

    case types.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetUsername: null,
        isLoading: false
      }

    case types.RESET_PASSWORD_FAIL:
      return {
        ...state,
        isLoading: false
      }
    case types.UPDATE_USER_ATTRIBUTES:
      return {
        ...state
      }
    case types.UPDATE_USER_ATTRIBUTES_SUCCESS:
      return {
        ...state,
        data: {
          username: action.payload.result.username,
          pool: action.payload.result.pool,
          attributes: action.payload.result.attributes
        }
      }
    case types.UPDATE_USER_ATTRIBUTES_FAIL:
      return {
        ...state
      }

    default:
      return state
  }
}
