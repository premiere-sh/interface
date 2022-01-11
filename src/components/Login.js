import styled from "styled-components"
import { LoginButton } from "components/Buttons"
import { Heading, Caption, Subtext, Entry, Input } from "components/Forms"
import { GradientText } from "components/common"
import Link from "next/link"
import { useFormik } from "formik"
import { Dots } from "react-activity"
import { connect } from "react-redux"
import { signIn } from "store/auth/auth.actions"
import { getIsLoading } from "store/auth/auth.selectors"

const mapStateToProps = state => ({
  isLoading: getIsLoading(state)
})

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(signIn(values))
})

const FormContainer = styled.div`
  margin: auto;
`

const Form = styled.form``

const SubmitEntry = styled(Entry)`
  margin-top: 40px;
  height: 85px;
`

const SignupIfNotGotAnAccount = styled.div`
  display: flex;
  justify-content: center;
`

function Login({ isLoading, onSubmit }) {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },

    onSubmit: values => {
      console.log(values)
      console.log(formik.errors)
    }
  })

  return (
    <FormContainer>
      {!isLoading ? (
        <Form onSubmit={formik.handleSubmit}>
          <Heading>log in</Heading>
          <Subtext>Login to your Premiere account below!</Subtext>
          <Entry htmlFor="email">
            <Caption>username</Caption>
            <Input
              type="text"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              placeholder="Enter your username"
            />
          </Entry>
          <Entry>
            <Caption>password</Caption>
            <Input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Enter your password"
            />
          </Entry>
          <SubmitEntry>
            <LoginButton type="submit" text="log in" />
          </SubmitEntry>
          <SignupIfNotGotAnAccount>
            Don&apos;t have an account?
            <GradientText style={{ display: "inline", marginLeft: 5 }}>
              <Link href="/signup">Sign up</Link>
            </GradientText>
          </SignupIfNotGotAnAccount>
        </Form>
      ) : (
        <Dots />
      )}
    </FormContainer>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
