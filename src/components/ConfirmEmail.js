import { Heading, Caption, Subtext, Entry, SmallInput } from 'components/Forms'
import styled from 'styled-components'
import { Dots } from 'react-activity'
import { useFormik } from 'formik'
import { connect } from 'react-redux'
import { getIsLoading } from 'store/auth/auth.selectors'
import { confirmSignUp } from 'store/auth/auth.actions'
import { SignupButtonLarge } from 'components/Buttons'
import 'react-datepicker/dist/react-datepicker.css'

const mapStateToProps = state => ({
  isLoading: getIsLoading(state)
})

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(confirmSignUp(values))
})

const FormContainer = styled.div`
  margin: auto;
`

const SubmitEntry = styled(Entry)`
  margin-top: 40px;
  height: 85px;
`

const Form = styled.form``

function ConfirmEmail({ isLoading, onSubmit }) {
  const formik = useFormik({
    initialValues: {
      code: ''
    },

    onSubmit: values => onSubmit(values)
  })

  return (
    <FormContainer>
      {!isLoading ? (
        <Form onSubmit={formik.handleSubmit}>
          <Heading>confirm</Heading>
          <Subtext>Premiere is only available to users that are 18+</Subtext>
          <Entry>
            <Caption>Code</Caption>
            <SmallInput
              id="code"
              type="text"
              name="code"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.code}
            />
          </Entry>
          <SubmitEntry>
            <SignupButtonLarge type="submit" />
          </SubmitEntry>
        </Form>
      ) : (
        <Dots />
      )}
    </FormContainer>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmEmail)
