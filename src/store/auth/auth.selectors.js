import { createSelector } from "reselect"

const authState = state => state.auth

export const getIsLoading = createSelector(
  authState,
  state => state?.isLoading
)

export const getAccountData = createSelector(
  authState,
  state => state?.data
)

export const getUsername = createSelector(
  getAccountData,
  data => data?.username
)
export const getHasUsername = createSelector(
  getAccountData,
  data => !!data?.username
)

export const getUserAttributes = createSelector(
  getAccountData,
  data => data?.attributes
)

export const getIsVerified = createSelector(
  getUserAttributes,
  attributes => attributes?.email_verified || attributes?.phone_number_verified
)

export const getIsAuthenticated = createSelector(
  [getHasUsername, getIsVerified],
  (hasUsername, isVerified) => hasUsername && isVerified
)

export const getTempCredentials = createSelector(
  authState,
  state => state?.tempCredentials
)

export const getResetUsername = createSelector(
  authState,
  state => state?.resetUsername
)

export const getRequireConfirmation = createSelector(
  getIsAuthenticated,
  getTempCredentials,
  (isAuthenticated, cred) => !isAuthenticated && cred
)
