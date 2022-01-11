import { Row, GradientText, Column } from 'components/common'
import {
  Heading,
  Caption,
  Subtext,
  Entry,
  Input,
  SmallInput
} from 'components/Forms'
import styled from 'styled-components'
import Link from 'next/link'
import { Dots } from 'react-activity'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { connect } from 'react-redux'
import { getIsLoading, getTempCredentials } from 'store/auth/auth.selectors'
import { signUp } from 'store/auth/auth.actions'
import { SignupButtonLarge } from 'components/Buttons'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { formContainer } from 'aws-amplify'

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
  tempCredentials: getTempCredentials(state)
})

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(signUp(values))
})

const StyledDatePicker = styled(DatePicker)`
  height: 60px;
  width: 260px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140.62%;
  color: ${props => props.theme.colors.black};
  padding-left: 25px;
  cursor: pointer;
`

const RowEntry = styled(Row)`
  height: 130px;
  width: 589px;
  margin: auto;
`

const FormContainer = styled.div`
  margin: auto;
`

const ColumnEntry = styled(Column)``

const Alert = styled.div`
  line-height: 17px;
  font-size: 12px;
  font-weight: 400;
  color: #ec9ba6;
  margin-top: 10px;
`

const SubmitEntry = styled(Entry)`
  margin-top: 40px;
  height: 85px;
`

const LoginIfGotAnAccount = styled.div`
  display: flex;
  justify-content: center;
`

const Form = styled.form``

function Signup({ isLoading, onSubmit }) {
  const passwordValidation =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  const passwordMessage =
    'Password should contain at least one ' +
    'capital letter, one special character and one number'

  const ageValidation = dateOfBirth => {
    const date18YrsAgo = new Date()
    date18YrsAgo.setFullYear(date18YrsAgo.getFullYear() - 18)
    return dateOfBirth <= date18YrsAgo
  }

  const over18 = 'You have to be over 18 years old'

  const noMatch = 'Passwords do not match'

  const formik = useFormik({
    initialValues: {
      username: 'sampleUsername',
      birthDate: new Date(),
      email: 'piotrek8598@gmail.com',
      password: 'Password!2',
      confirmPassword: 'Password!2'
    },

    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      birthDate: Yup.date()
        .required('Birthdate is required')
        .test('isAdult', over18, value => ageValidation(value)),
      email: Yup.string()
        .email('Email is not valid')
        .required('Email is required'),
      password: Yup.string()
        .required('No password provided')
        .min(8, 'Password is too short - should be minimum of 8 characters')
        .matches(passwordValidation, passwordMessage),
      confirmPassword: Yup.string()
        .required()
        .test(
          'confirmPassword',
          noMatch,
          password => password === formik.values.password
        )
    }),

    onSubmit: values => onSubmit(values)
  })

  return (
    <FormContainer>
      {!isLoading ? (
        <Form onSubmit={formik.handleSubmit}>
          <Heading>sign up</Heading>
          <Subtext>Premiere is only available to users that are 18+</Subtext>
          <RowEntry>
            <Entry>
              <Caption>username</Caption>
              <SmallInput
                id="username"
                type="text"
                name="username"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username ? (
                <Alert>{formik.errors.username}</Alert>
              ) : null}
            </Entry>
            <Entry style={{ marginLeft: 65 }}>
              <Caption>date of birth</Caption>
              <StyledDatePicker
                showYearSelect
                selected={formik.values.birthDate}
                onChange={value => formik.setFieldValue('birthDate', value)}
              />
              {formik.touched.birthDate && formik.errors.birthDate ? (
                <Alert>{formik.errors.birthDate}</Alert>
              ) : null}
            </Entry>
          </RowEntry>
          <ColumnEntry>
            <Entry>
              <Caption>email address</Caption>
              <Input
                id="emai"
                type="email"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <Alert>{formik.errors.email}</Alert>
              ) : null}
            </Entry>
            <Entry>
              <Caption>password</Caption>
              <Input
                id="password"
                type="password"
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <Alert>{formik.errors.password}</Alert>
              ) : null}
            </Entry>
            <Entry>
              <Caption>confirm password</Caption>
              <Input
                id="confirmPassowrd"
                type="password"
                name="confirmPassword"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <Alert>{formik.errors.confirmPassword}</Alert>
              ) : null}
            </Entry>
            <SubmitEntry>
              <SignupButtonLarge href="/ConfirmEmail" type="submit" />
            </SubmitEntry>
            <LoginIfGotAnAccount>
              Already have an account?
              <GradientText style={{ display: 'inline', marginLeft: 5 }}>
                <Link href="/login">Log In</Link>
              </GradientText>
            </LoginIfGotAnAccount>
          </ColumnEntry>
        </Form>
      ) : (
        <Dots />
      )}
    </FormContainer>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
